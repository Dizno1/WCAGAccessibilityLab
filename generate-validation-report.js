#!/usr/bin/env node
/*
 * WCAG Accessibility Lab - Validation Dashboard
 *
 * A standalone, read-only reporting script. It does not touch the running application's
 * architecture (index.html, app.js) at all - it loads the same data files the app loads,
 * in the same order, and reports on what's actually there.
 *
 * Usage:
 *   node generate-validation-report.js
 *
 * Auto-discovers every wcag-lab-expansion*.js file present in this directory (sorted
 * numerically) so it does not need to be edited when a future session adds
 * wcag-lab-expansion-6.js, -7.js, and so on. If a new expansion file does not follow
 * this naming pattern, add it to EXTRA_DATA_FILES below.
 *
 * Writes a human-readable report to VALIDATION-REPORT.md and also prints it to stdout.
 */

const fs = require("fs");
const path = require("path");

const DIR = __dirname;
const EXTRA_DATA_FILES = []; // add filenames here if a future file breaks the naming pattern below

// ---------------------------------------------------------------------------
// 1. Discover and load data files, in the same order index.html loads them.
// ---------------------------------------------------------------------------

function discoverExpansionFiles() {
  const files = fs.readdirSync(DIR).filter(f => /^wcag-lab-expansion(-\d+)?\.js$/.test(f));
  // Sort so that wcag-lab-expansion.js (implicit "1") comes before -2, -3, ...
  files.sort((a, b) => {
    const numOf = f => {
      const m = f.match(/-(\d+)\.js$/);
      return m ? parseInt(m[1], 10) : 1;
    };
    return numOf(a) - numOf(b);
  });
  return files;
}

const dataFiles = ["wcag-data.js", ...discoverExpansionFiles(), ...EXTRA_DATA_FILES];

const sandbox = { window: {}, document: { write: function () {} } };
for (const file of dataFiles) {
  const fullPath = path.join(DIR, file);
  if (!fs.existsSync(fullPath)) {
    console.error("MISSING EXPECTED DATA FILE:", file);
    process.exit(1);
  }
  const code = fs.readFileSync(fullPath, "utf8");
  // Evaluate each file against the same shared `window` object, mirroring how the
  // browser executes these as sequential <script> tags sharing one global scope.
  const vm = require("vm");
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: file });
}

const WCAG_DATA = sandbox.window.WCAG_DATA;
const WCAG_LAB_DATA = sandbox.window.WCAG_LAB_DATA;

if (!WCAG_DATA || !WCAG_LAB_DATA) {
  console.error("Failed to load WCAG_DATA / WCAG_LAB_DATA from the data files.");
  process.exit(1);
}

const questions = WCAG_LAB_DATA.questions;
const domains = WCAG_LAB_DATA.domains;

// ---------------------------------------------------------------------------
// 2. Industry family manifest.
//    A family is "present" if at least one question's `lesson` field contains
//    its detection string. This list is maintained by hand because "which
//    industries we intend to eventually cover" is a planning decision, not
//    something derivable from the data itself - new target families should be
//    added here as they're decided, independent of whether content exists yet.
// ---------------------------------------------------------------------------

const FAMILY_MANIFEST = [
  { name: "Banking", detect: "Banking Portal" },
  { name: "Healthcare (Hospital)", detect: "Hospital Portal" },
  { name: "Government Services (A/B/C progressive)", detect: "Government Services Portal" },
  { name: "University Registration", detect: "University Portal" },
  { name: "Shopping / Retail", detect: "Shopping Platform" },
  { name: "Airline Booking", detect: "Airline Booking" },
  { name: "Social Media", detect: "Social Media Platform" },
  { name: "Hotel Reservation", detect: "Hotel Reservation" },
  { name: "Learning Management System", detect: "Learning Management System" },
  { name: "Insurance", detect: "Insurance Platform" },
  { name: "Public Transit", detect: "Public Transit" },
  { name: "Streaming Service", detect: "Streaming Service" },
  { name: "Enterprise Dashboard", detect: "Enterprise Dashboard" },
  { name: "Mobile Application", detect: "Mobile Application" },
  { name: "Authentication & Account Management", detect: "Authentication -" },
  { name: "News Website", detect: "News Website" },
  { name: "Restaurant Ordering (dedicated family)", detect: "Restaurant Ordering Platform" },
  { name: "Document Management (dedicated family)", detect: "Document Management" },
  { name: "Collaboration Platform", detect: "Collaboration Platform" },
  { name: "Maps & Geospatial", detect: "Maps" },
  { name: "Complex Forms (dedicated family)", detect: "Complex Forms" },
  { name: "Financial Reporting", detect: "Financial Reporting" },
  { name: "Human Resources Portal", detect: "HR Portal" }
];

const lessonText = questions.map(q => q.lesson || "").join(" ||| ");
const familyStatus = FAMILY_MANIFEST.map(f => ({
  name: f.name,
  present: lessonText.includes(f.detect),
  count: questions.filter(q => (q.lesson || "").includes(f.detect)).length
}));

// ---------------------------------------------------------------------------
// 3b. Professional workflow manifest - conceptually distinct from an industry
//     family. A workflow cuts across industries and tests a stage of
//     professional practice itself (auditing, design review, procurement, QA)
//     rather than finding violations on one specific product.
// ---------------------------------------------------------------------------

const WORKFLOW_MANIFEST = [
  { name: "Accessibility Audit Engagement", detect: "Workflow: Accessibility Audit" },
  { name: "Design Review", detect: "Workflow: Design Review" },
  { name: "Procurement", detect: "Workflow: Procurement" },
  { name: "Development / Code Review", detect: "Workflow: Development" },
  { name: "QA Testing", detect: "Workflow: QA Testing" }
];
const workflowStatus = WORKFLOW_MANIFEST.map(f => ({
  name: f.name,
  present: lessonText.includes(f.detect),
  count: questions.filter(q => (q.lesson || "").includes(f.detect)).length
}));

// ---------------------------------------------------------------------------
// 3. Validation checks. Each check runs against the FULL accumulated bank,
//    not just the newest file - per the standing note that a check introduced
//    for new content should always also be run retroactively against
//    everything already there.
// ---------------------------------------------------------------------------

const DOMAIN_TO_PRINCIPLE = { domain1: "Perceivable", domain2: "Operable", domain3: "Understandable", domain4: "Robust" };
const VALID_DOMAINS = new Set(Object.keys(domains));
const VALID_MODES = new Set(["reinforce", "practice", "challenge"]);
const VALID_DIFFICULTIES = new Set(["easy", "medium", "hard"]);
const VALID_SC_NUMBERS = new Set(WCAG_DATA.map(sc => sc.scNumber));

const checks = {};
const idSeen = new Set();
const textSeen = new Set();
const duplicateIds = [];
const duplicateText = [];
const badSchema = [];
const badDifficulty = [];
const badDomainPrinciple = [];
const badScNumber = [];

for (const q of questions) {
  if (idSeen.has(q.id)) duplicateIds.push(q.id);
  idSeen.add(q.id);

  if (textSeen.has(q.question)) duplicateText.push(q.id);
  textSeen.add(q.question);

  const schemaOk =
    VALID_DOMAINS.has(q.domain) &&
    VALID_MODES.has(q.mode) &&
    Array.isArray(q.choices) &&
    q.choices.length === 4 &&
    typeof q.answer === "number" &&
    q.answer >= 0 &&
    q.answer < q.choices.length &&
    typeof q.question === "string" &&
    q.question.length > 0 &&
    typeof q.explanation === "string" &&
    q.explanation.length > 0;
  if (!schemaOk) badSchema.push(q.id);

  if (!VALID_DIFFICULTIES.has(q.difficulty)) badDifficulty.push({ id: q.id, value: q.difficulty });

  if (DOMAIN_TO_PRINCIPLE[q.domain] !== q.principle) badDomainPrinciple.push(q.id);

  if (!VALID_SC_NUMBERS.has(q.scNumber)) badScNumber.push({ id: q.id, value: q.scNumber });
}

checks["Duplicate IDs"] = { pass: duplicateIds.length === 0, detail: duplicateIds };
checks["Duplicate Question Text"] = { pass: duplicateText.length === 0, detail: duplicateText };
checks["Schema Completeness"] = { pass: badSchema.length === 0, detail: badSchema };
checks["Difficulty Values (easy/medium/hard only)"] = { pass: badDifficulty.length === 0, detail: badDifficulty };
checks["Domain / Principle Consistency"] = { pass: badDomainPrinciple.length === 0, detail: badDomainPrinciple };
checks["Success Criterion Numbers Resolve"] = { pass: badScNumber.length === 0, detail: badScNumber };

// Success Criterion coverage: every SC in WCAG_DATA should have at least 1 question.
const scCounts = {};
for (const q of questions) scCounts[q.scNumber] = (scCounts[q.scNumber] || 0) + 1;
const uncoveredSC = WCAG_DATA.filter(sc => !scCounts[sc.scNumber]).map(sc => sc.scNumber);
checks["Success Criterion Coverage (every SC has >=1 question)"] = { pass: uncoveredSC.length === 0, detail: uncoveredSC };

// Filtering simulation: every domain/mode combination the UI offers should return >0 questions.
function getAvailable(selectedDomains, mode, difficulty) {
  return questions.filter(q => {
    if (selectedDomains.indexOf(q.domain) === -1) return false;
    if (mode !== "sprint" && q.mode !== mode) return false;
    if (difficulty === "all" || difficulty === "mixed") return true;
    return q.difficulty === difficulty;
  });
}
const emptyFilterCombos = [];
for (const d of Object.keys(domains)) {
  for (const m of ["reinforce", "practice", "challenge"]) {
    if (getAvailable([d], m, "mixed").length === 0) emptyFilterCombos.push(d + " / " + m);
  }
}
checks["Filtering (every domain/mode combination returns questions)"] = { pass: emptyFilterCombos.length === 0, detail: emptyFilterCombos };

const allChecksPass = Object.values(checks).every(c => c.pass);

// ---------------------------------------------------------------------------
// 4. Build the report.
// ---------------------------------------------------------------------------

function pad(str, len) { str = String(str); return str + " ".repeat(Math.max(0, len - str.length)); }

let report = [];
report.push("# WCAG Accessibility Lab - Validation Dashboard");
report.push("");
report.push("Generated by `generate-validation-report.js`. Run `node generate-validation-report.js` to regenerate after any content change - do not hand-edit the numbers below.");
report.push("");
report.push("Data files loaded, in order: " + dataFiles.join(" -> "));
report.push("");
report.push("## Total Questions: " + questions.length);
report.push("");

report.push("## By Principle");
report.push("");
const principleCounts = {};
for (const q of questions) principleCounts[q.principle] = (principleCounts[q.principle] || 0) + 1;
for (const p of ["Perceivable", "Operable", "Understandable", "Robust"]) {
  report.push("- " + pad(p, 16) + (principleCounts[p] || 0));
}
report.push("");

report.push("## By Success Criterion");
report.push("");
for (const sc of WCAG_DATA) {
  report.push("- " + pad(sc.scNumber, 10) + (scCounts[sc.scNumber] || 0));
}
report.push("");

report.push("## Coverage Tiers");
report.push("");
report.push("Every Success Criterion, grouped by how many questions currently cover it. This is the planning view: Baseline and Developing tiers are where the next expansion sessions should concentrate, rather than adding further depth to criteria already Strong or Deep.");
report.push("");
report.push("**Data accuracy note:** this Lab's `WCAG_DATA` still lists 4.1.1 Parsing as an active Level A criterion. 4.1.1 was formally removed from WCAG as obsolete in WCAG 2.2 (superseded by improvements elsewhere in the specification and modern browser/assistive-technology parsing behavior). Its existing questions are left in place per this project's standing rule against modifying or removing previously added content, but 4.1.1 should be treated as a historical entry, not a genuine coverage gap - no future session should add more questions targeting it as if it were still current guidance. The counts below still include it for completeness, marked accordingly.");
report.push("");
const OBSOLETE_SC = new Set(["4.1.1"]);
const TIERS = [
  { name: "Baseline (1-4 questions)", min: 1, max: 4 },
  { name: "Developing (5-9 questions)", min: 5, max: 9 },
  { name: "Strong (10-19 questions)", min: 10, max: 19 },
  { name: "Deep (20+ questions)", min: 20, max: Infinity }
];
const tierCounts = TIERS.map(tier => WCAG_DATA.filter(sc => {
  const c = scCounts[sc.scNumber] || 0;
  return c >= tier.min && c <= tier.max;
}).length);

report.push("### Coverage Progress (at a glance)");
report.push("");
report.push("```");
report.push("Baseline   (1-4)  ....... " + tierCounts[0]);
report.push("Developing (5-9)  ....... " + tierCounts[1]);
report.push("Strong     (10-19) ...... " + tierCounts[2]);
report.push("Deep       (20+)  ....... " + tierCounts[3]);
report.push("```");
report.push("");
report.push("Compare this block against the same section in a previous session's `VALIDATION-REPORT.md` (or the README's session-by-session notes) to see criteria migrating upward through the tiers over time. The goal of future sessions should generally be shrinking Baseline and Developing while growing Strong and Deep, not simply growing the total question count.");
report.push("");

for (const tier of TIERS) {
  const inTier = WCAG_DATA.filter(sc => {
    const c = scCounts[sc.scNumber] || 0;
    return c >= tier.min && c <= tier.max;
  }).map(sc => sc.scNumber + " (" + (scCounts[sc.scNumber] || 0) + ")" + (OBSOLETE_SC.has(sc.scNumber) ? " [OBSOLETE - do not target]" : ""));
  report.push("### " + tier.name + " - " + inTier.length + " criteria");
  report.push("");
  report.push(inTier.length ? inTier.join(", ") : "(none)");
  report.push("");
}

report.push("## Industry Families");
report.push("");
for (const f of familyStatus) {
  report.push((f.present ? "- [x] " : "- [ ] ") + f.name + (f.present ? " (" + f.count + " questions)" : " - not yet built"));
}
report.push("");
report.push("Family detection works by matching each question's `lesson` field against a known string (see FAMILY_MANIFEST in this script). A family showing as missing may still have a short, non-dedicated scenario elsewhere in the bank that this check does not count as a full family - see the README's prose notes for that distinction.");
report.push("");

report.push("## Professional Workflows");
report.push("");
report.push("Distinct from an industry family: a workflow cuts across industries and tests a stage of professional accessibility practice itself (scoping, testing methodology, severity assignment, writing findings, evaluating vendor claims, code review, verifying fixes) rather than finding violations on one specific product's pages. See WORKFLOW_MANIFEST in this script.");
report.push("");
for (const w of workflowStatus) {
  report.push((w.present ? "- [x] " : "- [ ] ") + w.name + (w.present ? " (" + w.count + " questions)" : " - not yet built"));
}
report.push("");

report.push("## By Difficulty");
report.push("");
const diffCounts = {};
for (const q of questions) diffCounts[q.difficulty] = (diffCounts[q.difficulty] || 0) + 1;
for (const d of ["easy", "medium", "hard"]) report.push("- " + pad(d, 10) + (diffCounts[d] || 0));
report.push("");

report.push("## By Mode");
report.push("");
const modeCounts = {};
for (const q of questions) modeCounts[q.mode] = (modeCounts[q.mode] || 0) + 1;
for (const m of ["reinforce", "practice", "challenge"]) report.push("- " + pad(m, 12) + (modeCounts[m] || 0));
report.push("");

report.push("## By Question Type");
report.push("");
const typeCounts = {};
for (const q of questions) typeCounts[q.questionType] = (typeCounts[q.questionType] || 0) + 1;
Object.keys(typeCounts).sort((a, b) => typeCounts[b] - typeCounts[a]).forEach(t => {
  report.push("- " + pad(t, 34) + typeCounts[t]);
});
report.push("");

report.push("## Validation");
report.push("");
for (const [name, result] of Object.entries(checks)) {
  report.push((result.pass ? "- [x] " : "- [ ] FAIL: ") + name + (result.pass ? "" : " (" + result.detail.length + " issue(s))"));
  if (!result.pass) {
    const shown = result.detail.slice(0, 15);
    shown.forEach(d => report.push("      - " + JSON.stringify(d)));
    if (result.detail.length > 15) report.push("      - ...and " + (result.detail.length - 15) + " more");
  }
}
report.push("");
report.push("**Overall: " + (allChecksPass ? "ALL CHECKS PASS" : "FAILURES PRESENT - see above") + "**");
report.push("");
report.push("---");
report.push("_Report generated " + new Date().toISOString().slice(0, 10) + "._");

const reportText = report.join("\n");
fs.writeFileSync(path.join(DIR, "VALIDATION-REPORT.md"), reportText + "\n", "utf8");

console.log(reportText);

if (!allChecksPass) {
  process.exitCode = 1;
}
