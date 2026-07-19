/* WCAG Accessibility Lab expansion data, part 7.
   The first session to add PROFESSIONAL WORKFLOWS rather than another industry vertical: Accessibility
   Audit Engagement, Design Review, Procurement, and QA Testing. These cut across industries and test
   the actual day-to-day work of accessibility professionals (scoping, testing methodology, severity
   assignment, writing findings, VPAT remarks, verifying fixes, regression prevention) rather than
   finding violations on one specific product's pages.
   Loaded after wcag-lab-expansion-6.js and appends to the same window.WCAG_LAB_DATA.questions array
   without modifying, removing, or replacing any existing question from any prior file. */
/* Professional Workflow: Accessibility Audit Engagement - a cross-industry workflow family modeling
   the full consulting lifecycle (scoping, testing methodology, severity, findings, VPAT remarks,
   prioritization, verification) rather than a single product's pages. Unlike the industry families,
   each question here tests a stage of the AUDIT PROCESS itself, illustrated with a representative
   finding, so the skill being tested transfers across whatever product is actually being audited. */
var WCAG_LAB_WORKFLOW_AUDIT = [

{ "domain":"domain1","lesson":"Workflow: Accessibility Audit - Scoping","learningObjective":"Determine appropriate audit scope for a large site with limited engagement time","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"WF-AUDIT-SCOPE-Q1","difficulty":"hard","mode":"challenge",
  "question":"A client's e-commerce site has 4,000 product pages, but they are all generated from three shared templates (a category listing, a product detail page, and a checkout flow), with a two-week audit engagement. What is the most defensible scoping approach?",
  "choices":[
    "Test a representative sample covering each of the three templates thoroughly, plus any pages or flows known to be unusually complex or high-risk (such as a custom configurator), rather than attempting to individually test all 4,000 pages",
    "Test all 4,000 pages individually regardless of the time constraint, extending the engagement indefinitely until complete",
    "Test only the homepage, since it is the most-visited page",
    "Refuse the engagement entirely since 4,000 pages cannot be fully tested in two weeks"
  ],"answer":0,
  "explanation":"Since findings on a shared template apply to every page using it, thoroughly testing each distinct template (plus genuinely unique high-risk flows) is both realistic within the time available and produces findings that generalize correctly across the full site, exactly the scoping approach covered in this Lab's Introduction-level audit-process content.","questionType":"Best Next Action" },
{ "domain":"domain2","lesson":"Workflow: Accessibility Audit - Testing Methodology","learningObjective":"Choose an appropriate combination of testing methods for a given finding category","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.1","scName":"Keyboard","id":"WF-AUDIT-TEST-Q1","difficulty":"medium","mode":"practice",
  "question":"An automated scanning tool reports zero keyboard-accessibility issues on a page containing several custom-built interactive widgets. Should this be trusted as sufficient evidence that the page satisfies 2.1.1?",
  "choices":[
    "No - automated tools cannot reliably verify actual keyboard operability of custom widgets (whether Tab reaches every control and whether each control responds correctly to the expected keys); manual keyboard-only testing is required to genuinely verify this criterion",
    "Yes - automated tools fully and reliably verify keyboard accessibility with no manual testing needed",
    "No - automated tools should be ignored entirely and never used for any accessibility testing",
    "Yes, but only if the automated tool is run twice for confirmation"
  ],"answer":0,
  "explanation":"Automated tools can catch some mechanical keyboard-related issues (like missing tabindex on custom elements in some cases) but cannot verify actual operability - whether every custom widget's specific interaction pattern genuinely works via keyboard. This is a foundational testing-methodology judgment this Lab's Introduction content on automated versus manual testing addresses directly.","questionType":"Application" },
{ "domain":"domain1","lesson":"Workflow: Accessibility Audit - Severity Assignment","learningObjective":"Apply consistent severity criteria across two different findings","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"WF-AUDIT-SEVERITY-Q1","difficulty":"hard","mode":"challenge",
  "question":"An auditor is comparing two findings for severity: (A) a decorative background pattern image has unnecessary alt text describing its appearance, and (B) the only 'Submit Application' button on a benefits form has no accessible name at all. Using a standard Critical/High/Medium/Low framework, how should these be rated relative to each other?",
  "choices":[
    "Finding B (Critical or High) - it can fully block form submission for screen reader users with no workaround; Finding A (Low) - it is a genuine but minor annotation issue with no functional impact",
    "Both findings should receive identical severity, since both involve 1.1.1",
    "Finding A should be rated higher, since decorative image misuse is always considered more severe than button labeling",
    "Neither finding can be rated without first consulting the client's internal style guide"
  ],"answer":0,
  "explanation":"Severity should reflect actual functional impact, not just which criterion is technically cited - a completely blocking failure on a core task (submitting a form) is categorically more severe than a decorative image's unnecessarily verbose but functionally harmless alt text, even though both technically relate to 1.1.1.","questionType":"Severity Assessment" },
{ "domain":"domain3","lesson":"Workflow: Accessibility Audit - Writing Findings","learningObjective":"Identify the components of a professionally complete audit finding","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.1","scName":"Error Identification","id":"WF-AUDIT-FINDING-Q1","difficulty":"medium","mode":"practice",
  "question":"Which of the following is the most professionally complete way to document a finding about a form with no error messages?",
  "choices":[
    "State the specific location, the violated criterion and level, the concrete user impact, and a specific, actionable remediation recommendation - all four elements together",
    "State only that 'the form has errors' with no further detail",
    "State only the violated criterion number with no description of the actual problem or its impact",
    "State only a general recommendation to 'improve accessibility' with no reference to the specific issue"
  ],"answer":0,
  "explanation":"A complete, actionable finding needs all four elements: where the problem is, what specifically is wrong (with the citation), who it affects and how, and what to do about it - missing any one of these makes the finding harder for a development team to act on efficiently.","questionType":"Audit Documentation" },
{ "domain":"domain3","lesson":"Workflow: Accessibility Audit - Writing Findings","learningObjective":"Write a professional finding for a realistic defect","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.7","scName":"Redundant Entry","id":"WF-AUDIT-FINDING-Q2","difficulty":"hard","mode":"challenge",
  "question":"A multi-step checkout flow requires re-entering a shipping address already provided one step earlier. Which finding write-up best reflects professional audit standards?",
  "choices":[
    "Finding: Checkout step 3 (Payment) requires re-entry of the shipping address already provided on step 1, with no auto-populate or reuse option, violating WCAG 3.3.7 Redundant Entry (Level A). Impact: increases effort and error risk for all users, particularly those with motor or cognitive disabilities for whom re-typing is more burdensome. Recommendation: carry forward the step 1 address value and pre-populate step 3, allowing the user to confirm or edit rather than re-enter from scratch.",
    "Finding: Users have to type their address twice, which is annoying.",
    "Finding: Checkout process needs improvement.",
    "Finding: WCAG 3.3.7 violation detected by automated scan."
  ],"answer":0,
  "explanation":"This finding specifies the exact location and steps involved, cites the correct criterion and level, explains differentiated impact across user groups, and gives a specific, technically actionable recommendation - the standard this Lab's other findings-writing questions have modeled throughout.","questionType":"Audit Documentation" },
{ "domain":"domain1","lesson":"Workflow: Accessibility Audit - VPAT Remarks","learningObjective":"Write an accurate VPAT remark reflecting partial conformance","level":"AA","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.3","scName":"Contrast (Minimum)","id":"WF-AUDIT-VPAT-Q1","difficulty":"hard","mode":"challenge",
  "question":"During a VPAT-supporting audit, a product mostly meets 1.4.3's contrast requirement, but three specific components (a disabled-state button, a placeholder-only helper text, and a chart legend) fall short. Which VPAT remark is most accurate and professionally appropriate?",
  "choices":[
    "\"Partially Supports. The majority of text content meets the 4.5:1 contrast minimum. Three specific exceptions were identified: disabled-state buttons, placeholder-only helper text, and chart legend labels, each currently below the required ratio. Remediation is planned/in progress for these specific components.\"",
    "\"Supports.\" with no further detail, since most of the product does meet the requirement",
    "\"Does Not Support.\" with no further detail, since any exception at all means full non-conformance",
    "\"Not Applicable.\" since contrast is a design choice, not a technical requirement"
  ],"answer":0,
  "explanation":"A VPAT remark should accurately reflect partial conformance with enough specificity that a reader (often a procurement evaluator) can understand exactly what does and does not meet the standard - 'Supports' would overstate the truth, 'Does Not Support' would understate genuine majority conformance, and 'Not Applicable' is simply incorrect for a criterion that clearly does apply.","questionType":"Audit Documentation" },
{ "domain":"domain2","lesson":"Workflow: Accessibility Audit - Prioritization and Client Communication","learningObjective":"Communicate prioritization reasoning to a client with competing findings","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.2","scName":"No Keyboard Trap","id":"WF-AUDIT-PRIORITY-Q1","difficulty":"hard","mode":"challenge",
  "question":"A client's engineering team asks why a keyboard trap in a rarely-used settings modal is rated higher priority than a color-contrast issue on their highest-traffic landing page. What is the most professionally sound response?",
  "choices":[
    "Explain that severity and priority both weigh actual impact, not just traffic: a keyboard trap can completely prevent an affected user from continuing to use the entire application at all (a full block with no workaround), while the landing page contrast issue, though real and worth fixing, is likely to degrade rather than fully block the experience for most affected users - so blocking severity outweighs page traffic alone in this case",
    "Agree the contrast issue should always be higher priority since the page has more traffic, and rescore the finding accordingly",
    "Refuse to explain the reasoning and simply insist the client trust the rating without justification",
    "Recommend delaying both findings until the client's next major redesign regardless of severity"
  ],"answer":0,
  "explanation":"A good consultant can articulate the actual reasoning behind a prioritization decision - here, that complete blocking impact (even on a lower-traffic page) generally outweighs a degrading-but-not-blocking impact on a higher-traffic page - rather than either capitulating to traffic-based reasoning that doesn't reflect real severity, or refusing to explain the judgment at all.","questionType":"Prioritization" },
{ "domain":"domain4","lesson":"Workflow: Accessibility Audit - Verification","learningObjective":"Determine whether a reported fix is genuinely complete","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"WF-AUDIT-VERIFY-Q1","difficulty":"hard","mode":"challenge",
  "question":"A development team reports a finding as fixed: a custom dropdown now has a correct accessible name. Re-testing confirms the name is now announced correctly, but also reveals the dropdown's expanded/collapsed state is still never announced, a detail the original finding did not explicitly separate out. What is the auditor's best next action?",
  "choices":[
    "Do not close the finding as fully resolved; document that the accessible-name portion is verified fixed, but the state-announcement gap (also part of 4.1.2's full requirement) remains open, and continue tracking it specifically rather than let it slip through unification with the already-closed portion",
    "Close the finding entirely, since the specific text originally reported (accessible name) has been addressed",
    "Open a completely new, unrelated finding with no reference to the original one or its partial resolution",
    "Assume the state-announcement issue will be caught in a future audit and take no action now"
  ],"answer":0,
  "explanation":"4.1.2 requires both an accessible name AND correctly exposed state; verifying only the name portion and closing the whole finding would be premature. A careful auditor checks the complete original requirement, not just the specific symptom a team happened to fix, and keeps unresolved portions visibly tracked rather than letting them disappear into a closed ticket.","questionType":"Best Next Action" },
{ "domain":"domain4","lesson":"Workflow: Accessibility Audit - Root Cause Synthesis","learningObjective":"Synthesize a pattern across multiple findings into an actionable systemic recommendation","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"WF-AUDIT-SYNTH-Q1","difficulty":"hard","mode":"challenge",
  "question":"Across a full audit engagement, 14 separate findings all involve custom-built interactive components missing accessible names or state. What should the final audit report emphasize alongside the individual findings list?",
  "choices":[
    "A systemic root-cause observation: the organization's custom components are consistently built without deliberate accessibility implementation, and a recommendation to establish a shared, accessible component library and a documented ARIA pattern reference, which would prevent the next 14 similar findings rather than only fixing the current 14 individually",
    "Nothing beyond the individual findings list; synthesis and systemic recommendations are outside an auditor's role",
    "A recommendation to stop building any custom components ever again, using only unstyled native HTML sitewide",
    "A recommendation to hire more QA testers with no technical remediation guidance"
  ],"answer":0,
  "explanation":"Recognizing and naming a systemic pattern, then recommending a structural fix (a shared, tested component library) that prevents recurrence, is exactly the higher-level value a senior consultant provides beyond a flat findings list - this is the professional judgment work this Lab's other Root Cause Analysis and synthesis questions have modeled throughout.","questionType":"Root Cause Analysis" }
];
window.WCAG_LAB_WORKFLOW_AUDIT = WCAG_LAB_WORKFLOW_AUDIT;

/* Professional Workflow: Design Review - evaluating mockups and design systems before development,
   catching accessibility issues at the design stage rather than after code is written. */
var WCAG_LAB_WORKFLOW_DESIGN = [

{ "domain":"domain1","lesson":"Workflow: Design Review - Mockup Evaluation","learningObjective":"Identify a contrast issue in a static design mockup before development begins","level":"AA","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.3","scName":"Contrast (Minimum)","id":"WF-DESIGN-MOCKUP-Q1","difficulty":"medium","mode":"practice",
  "question":"Reviewing a Figma mockup, a designer has used a light blue (#8FBCE6) for all body text on a white background. Using a contrast-checking tool on the mockup's own color values, the ratio measures 2.6:1. What is the correct design-review action?",
  "choices":[
    "Flag this before development begins, since 2.6:1 falls well below the 4.5:1 minimum for normal text at Level AA - catching this at the design stage avoids the more expensive rework of fixing it after the color has been implemented across the built product",
    "Approve the mockup as-is, since contrast can always be adjusted easily after development regardless of the mockup's values",
    "Approve the mockup, since contrast checking only applies to the built product, never to design files",
    "Flag it as a Level A issue, since all contrast problems are automatically Level A regardless of the specific criterion"
  ],"answer":0,
  "explanation":"Catching a contrast failure at the mockup stage, before any code is written, is significantly cheaper to fix than after the color has been implemented across many components - this is precisely the value a design-stage review adds. 1.4.3 is a Level AA criterion, not Level A.","questionType":"Best Next Action" },
{ "domain":"domain1","lesson":"Workflow: Design Review - Mockup Evaluation","learningObjective":"Identify a missing design-stage consideration for meaningful images","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"WF-DESIGN-MOCKUP-Q2","difficulty":"medium","mode":"practice",
  "question":"A product page mockup includes an infographic explaining a multi-step setup process, but the design file and its accompanying specification have no notes indicating what a screen reader user should encounter instead of this graphic. What should a design reviewer flag?",
  "choices":[
    "The mockup and its handoff documentation should specify what text alternative or equivalent content will represent the infographic for screen reader users - this is a design decision, not solely an implementation detail, since a designer typically knows the infographic's actual informational content better than a developer discovering it later",
    "Nothing - alt text is exclusively a developer's responsibility to figure out unilaterally during implementation with no design input",
    "The infographic should be removed entirely rather than have any alternative content planned",
    "This can only be addressed after the product has shipped, through a later accessibility audit"
  ],"answer":0,
  "explanation":"Planning meaningful content's text alternative during design, when the designer still has full context on what the graphic is meant to convey, produces a better and faster result than leaving a developer to reverse-engineer the intended meaning later - a good example of how design review can catch 1.1.1-relevant gaps well before any code exists.","questionType":"Best Next Action" },
{ "domain":"domain2","lesson":"Workflow: Design Review - Interaction Design","learningObjective":"Identify a touch-target sizing issue in a mobile mockup","level":"AA","principle":"Operable","guideline":"Input Modalities","scNumber":"2.5.8","scName":"Target Size (Minimum)","id":"WF-DESIGN-INTERACTION-Q1","difficulty":"medium","mode":"practice",
  "question":"A mobile app mockup shows a row of five icon-only action buttons, each specified at 18 by 18 design pixels with 2 pixels of spacing between them. What should a design reviewer flag before this goes into development?",
  "choices":[
    "The specified size falls below the 24 by 24 CSS pixel minimum (with limited spacing-based exceptions) that 2.5.8 requires at Level AA; flag this now so the development team implements the correct size from the start rather than needing a follow-up fix after launch",
    "Nothing - target size is purely a development concern with no design-stage relevance",
    "Only flag this if the mockup is specifically for an iOS app, since target size requirements only apply to iOS",
    "Approve the mockup, since icon buttons are always exempt from target size requirements"
  ],"answer":0,
  "explanation":"Target sizing is a design decision (component dimensions and spacing) as much as an implementation one; catching an undersized touch target at the mockup stage, before development begins, is more efficient than discovering it during a post-launch audit.","questionType":"Best Next Action" },
{ "domain":"domain2","lesson":"Workflow: Design Review - Interaction Design","learningObjective":"Identify a missing focus-state specification in interaction design documentation","level":"AA","principle":"Operable","guideline":"Navigable","scNumber":"2.4.7","scName":"Focus Visible","id":"WF-DESIGN-INTERACTION-Q2","difficulty":"hard","mode":"challenge",
  "question":"A design system's button component documentation specifies default, hover, and pressed visual states in detail, but has no specification at all for a keyboard-focus state. What should a design reviewer flag?",
  "choices":[
    "The missing focus-state specification, since without explicit design guidance, developers are likely to either omit a focus indicator entirely or implement inconsistent ad hoc styling across different parts of the product - specifying a clear, sufficiently contrasted focus state during design prevents this gap from propagating everywhere the button component is used",
    "Nothing - focus states are automatically handled correctly by every browser with no design specification needed",
    "This is not a legitimate design review concern since it does not affect visual appearance for mouse users",
    "The component should be redesigned to remove all interactive states except default, to simplify the specification"
  ],"answer":0,
  "explanation":"A design system component's specification gaps propagate to every instance of that component across the entire product; catching a missing focus-state definition at the design-system level prevents inconsistent or entirely absent focus indicators from being independently reinvented (or omitted) by every team that uses the component.","questionType":"Best Next Action" },
{ "domain":"domain1","lesson":"Workflow: Design Review - Design System Audit","learningObjective":"Evaluate a design system's color palette for systemic accessibility risk","level":"AA","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.1","scName":"Use of Color","id":"WF-DESIGN-SYSTEM-Q1","difficulty":"hard","mode":"challenge",
  "question":"A design system's documented color palette includes exactly two semantic colors for status indicators: green for 'success' and red for 'error', with the design system's own documentation showing these as the only planned way to distinguish the two states across every product built from this system. What should a design system reviewer flag?",
  "choices":[
    "The palette itself does not violate 1.4.1 (color choice alone is fine), but the documented usage pattern, relying on color as the only planned distinguishing signal, will predictably produce this failure across every product team that follows the design system as documented; the system should specify a required accompanying icon or text label alongside the color for every semantic status use",
    "The two colors chosen are inherently inaccessible and must be replaced with different colors",
    "This is not a design system concern since 1.4.1 only applies to fully built products, never to documented usage patterns",
    "No action is needed since only two colors are involved, and 1.4.1 only applies to palettes with three or more colors"
  ],"answer":0,
  "explanation":"This tests recognizing that a design system's documented *usage guidance*, not just its color values, is what determines whether every team building from it will pass or fail 1.4.1 - fixing the guidance once, at the system level, prevents the same color-only mistake from being independently repeated by every downstream team.","questionType":"Root Cause Analysis" },
{ "domain":"domain3","lesson":"Workflow: Design Review - Content and Copy Review","learningObjective":"Identify a design-stage content issue relevant to reading level","level":"AAA","principle":"Understandable","guideline":"Readable","scNumber":"3.1.5","scName":"Reading Level","id":"WF-DESIGN-CONTENT-Q1","difficulty":"medium","mode":"practice",
  "question":"A design mockup for a government benefits eligibility summary uses placeholder copy written at a dense, legal-reading level, and the design brief notes this is expected to be the actual final copy, not placeholder text. What should a design reviewer specifically flag, given the AAA-level reading-level criterion this Lab has covered for exactly this kind of high-stakes content?",
  "choices":[
    "Flag the reading level as a concern worth raising with content strategy or UX writing early, before development, since adding a plain-language summary later as a bolt-on retrofit is more disruptive than planning for it during initial content design",
    "This is not a legitimate design review concern since reading level is purely a legal/content team responsibility with no design-stage relevance at all",
    "The mockup should be rejected outright with no further guidance provided",
    "Reading level can only be assessed after the product has fully launched"
  ],"answer":0,
  "explanation":"Raising a reading-level concern during design and content planning, rather than after launch, gives the content team the opportunity to build a plain-language version into the actual content strategy from the start, consistent with this Lab's broader theme that earlier-stage intervention is more efficient than later remediation.","questionType":"Best Next Action" },
{ "domain":"domain2","lesson":"Workflow: Design Review - Animation and Motion","learningObjective":"Identify a motion-design concern relevant to vestibular sensitivity","level":"AAA","principle":"Operable","guideline":"Seizures and Physical Reactions","scNumber":"2.3.3","scName":"Animation from Interactions","id":"WF-DESIGN-MOTION-Q1","difficulty":"hard","mode":"challenge",
  "question":"A motion-design specification calls for a large, full-screen parallax zoom-and-pan animation triggered every time a user scrolls past a section boundary, with no setting proposed to reduce or disable it. What should a design reviewer flag, particularly for an organization targeting AAA conformance?",
  "choices":[
    "The animation should respect a user's operating-system-level 'reduce motion' preference (or provide an equivalent in-app setting), since large-scale motion triggered by ordinary interaction like scrolling can cause genuine discomfort or disorientation for users with vestibular disorders, which 2.3.3 specifically addresses at the AAA level",
    "No design-stage action is needed since motion preferences are purely a browser-level concern outside any product's control",
    "The animation should be approved as specified, since visual polish always takes priority over motion-sensitivity concerns",
    "This can only be addressed after a user specifically complains post-launch"
  ],"answer":0,
  "explanation":"Planning for reduced-motion support during the motion-design stage, before animation code is built, is far more efficient than retrofitting a reduce-motion pathway after a complex animation system already exists - another example of design-stage review catching a genuine 2.3.3-relevant concern early.","questionType":"Best Next Action" }
];
window.WCAG_LAB_WORKFLOW_DESIGN = WCAG_LAB_WORKFLOW_DESIGN;

/* Professional Workflow: Procurement - evaluating vendor accessibility claims, comparing VPATs, and
   selecting accessible products, a workflow distinct from auditing an organization's own product. */
var WCAG_LAB_WORKFLOW_PROCUREMENT = [

{ "domain":"domain1","lesson":"Workflow: Procurement - Evaluating Vendor Claims","learningObjective":"Determine how much weight to place on an unverified vendor VPAT claim","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"WF-PROC-CLAIM-Q1","difficulty":"medium","mode":"practice",
  "question":"A software vendor's VPAT lists 'Supports' for every single Success Criterion with no explanatory remarks anywhere in the document. What should a procurement evaluator's response be?",
  "choices":[
    "Treat this with appropriate skepticism rather than accepting it at face value - a VPAT with universal, unqualified 'Supports' claims and no supporting detail is a less credible document than one showing realistic partial conformance with specific remarks, and independent verification (a spot-check demo or a requested trial) is warranted before relying on it",
    "Accept the VPAT immediately with full confidence, since vendors are legally required to be completely accurate in every VPAT",
    "Reject the vendor automatically, since any VPAT claiming full conformance must be fraudulent",
    "VPATs cannot be evaluated by procurement staff and must always be sent to an external law firm first"
  ],"answer":0,
  "explanation":"Since VPATs are vendor-authored, not independently audited, a document with no acknowledged limitations anywhere is a signal worth scrutinizing rather than a guarantee of quality - genuine, honest VPATs from vendors who have actually tested their products typically include specific remarks and some 'Partially Supports' entries, since near-perfect first-party accessibility claims across an entire product are uncommon.","questionType":"Best Next Action" },
{ "domain":"domain1","lesson":"Workflow: Procurement - Comparing VPATs","learningObjective":"Compare two vendor VPATs and identify which is more trustworthy","level":"AA","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.3","scName":"Contrast (Minimum)","id":"WF-PROC-COMPARE-Q1","difficulty":"hard","mode":"challenge",
  "question":"Comparing two competing vendors' VPATs for the 1.4.3 Contrast (Minimum) row: Vendor A writes 'Supports' with no remarks. Vendor B writes 'Partially Supports - disabled-state buttons and placeholder text fall below the 4.5:1 minimum; remediation scheduled for Q3.' Which VPAT entry is more useful to a procurement decision, and why?",
  "choices":[
    "Vendor B's entry, despite reporting a less perfect status - it gives specific, actionable information (exactly what falls short and when it will be fixed) that lets the evaluator make an informed decision, while Vendor A's unqualified claim provides no way to verify or plan around any actual limitations that may still exist",
    "Vendor A's entry is automatically better since it reports full support with no exceptions",
    "Both entries are equally useless since VPATs cannot be compared across vendors",
    "Vendor B's entry should be treated as disqualifying regardless of the rest of their VPAT's content"
  ],"answer":0,
  "explanation":"A specific, honest 'Partially Supports' with concrete detail is more useful to a real procurement decision than a vague 'Supports' claim, since it lets the evaluator weigh the actual, specific limitation against their organization's needs rather than discovering unstated gaps later - directly reinforcing this Lab's Introduction-level content on what makes an accessibility statement or VPAT credible.","questionType":"Application" },
{ "domain":"domain2","lesson":"Workflow: Procurement - Trial and Verification","learningObjective":"Choose an effective verification approach given limited procurement evaluation time","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.1","scName":"Keyboard","id":"WF-PROC-TRIAL-Q1","difficulty":"hard","mode":"challenge",
  "question":"A procurement team has one week to independently verify a shortlisted vendor's accessibility claims before a purchase decision. What is the most effective use of that limited time?",
  "choices":[
    "Request a trial account and perform focused, targeted testing on the product's core, most-used workflows (not an exhaustive full audit), specifically keyboard-only navigation and screen reader spot-checks on the highest-traffic features, rather than attempting comprehensive coverage in the time available",
    "Attempt a full, exhaustive WCAG audit of the entire product within the week regardless of its actual scope",
    "Skip verification entirely and rely solely on the vendor's VPAT",
    "Only test the product's marketing website, not the actual software being purchased"
  ],"answer":0,
  "explanation":"Given limited time, focused testing on the highest-impact, most-used workflows provides meaningfully more useful verification than either an impossible full audit or no verification at all - a practical, time-boxed application of the same scoping judgment used in full audit engagements.","questionType":"Best Next Action" },
{ "domain":"domain3","lesson":"Workflow: Procurement - Contract and Remediation Commitments","learningObjective":"Evaluate whether a vendor's remediation commitment is meaningful","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.4","scName":"Error Prevention (Legal, Financial, Data)","id":"WF-PROC-CONTRACT-Q1","difficulty":"hard","mode":"challenge",
  "question":"During contract negotiation, a vendor whose product has a Critical-severity finding (a payment flow with no confirmation step before an irreversible charge) verbally commits to 'look into it at some point.' What should procurement's response be?",
  "choices":[
    "Request the remediation commitment be documented in writing with a specific timeline and, ideally, tied to a contractual remedy (such as a defined resolution date or an exit clause) rather than accepting a vague verbal assurance for a Critical-severity finding affecting a core, financially significant workflow",
    "Accept the verbal commitment as sufficient and proceed with the purchase with no further documentation",
    "Reject the vendor immediately with no attempt to negotiate a documented remediation commitment",
    "Ignore the finding entirely since it was raised during procurement rather than during a formal audit"
  ],"answer":0,
  "explanation":"A vague, undocumented verbal commitment carries little practical weight, especially for a Critical-severity finding on a financially significant workflow; converting it into a specific, documented, ideally contractually-tied commitment gives the purchasing organization real recourse if the vendor does not follow through, without necessarily requiring the vendor relationship to be abandoned outright.","questionType":"Best Next Action" },
{ "domain":"domain1","lesson":"Workflow: Procurement - Selecting Among Alternatives","learningObjective":"Weigh accessibility findings against other procurement factors","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.2.2","scName":"Captions (Prerecorded)","id":"WF-PROC-SELECT-Q1","difficulty":"hard","mode":"challenge",
  "question":"Two vendors offer comparable products at comparable prices. Vendor A's training-video library has no captions and a vague VPAT; Vendor B's has fully captioned videos and a specific, honest VPAT, but costs 15% more. How should procurement weigh this in the final recommendation?",
  "choices":[
    "Recommend Vendor B, or at minimum flag the cost difference explicitly against the accessibility gap as a specific tradeoff for decision-makers to weigh consciously, rather than defaulting to the lower price without surfacing the accessibility difference at all",
    "Automatically recommend Vendor A since price is always the deciding factor regardless of any other consideration",
    "Refuse to make any recommendation since accessibility and cost can never be compared",
    "Recommend Vendor A but state nothing about the accessibility difference in the final report"
  ],"answer":0,
  "explanation":"Procurement's job is surfacing tradeoffs clearly for decision-makers, not silently making the decision unilaterally; explicitly naming the accessibility difference against the cost difference lets the organization make an informed choice consistent with its own legal risk tolerance and values, rather than the accessibility gap disappearing from the final recommendation.","questionType":"Prioritization" }
];
window.WCAG_LAB_WORKFLOW_PROCUREMENT = WCAG_LAB_WORKFLOW_PROCUREMENT;

/* Professional Workflow: QA Testing - reproducing issues, documenting defects, verifying fixes, and
   preventing regressions, the day-to-day testing workflow distinct from a full external audit. */
var WCAG_LAB_WORKFLOW_QA = [

{ "domain":"domain2","lesson":"Workflow: QA Testing - Reproducing Issues","learningObjective":"Reliably reproduce a reported keyboard-accessibility defect","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.1","scName":"Keyboard","id":"WF-QA-REPRO-Q1","difficulty":"medium","mode":"practice",
  "question":"A support ticket says 'the dropdown menu doesn't work with keyboard.' What is the most effective first step to reliably reproduce and scope this defect before filing a bug report?",
  "choices":[
    "Physically avoid the mouse entirely and attempt to open, navigate within, and select an option from the dropdown using only Tab, arrow keys, and Enter, noting the exact point where the interaction breaks down",
    "Immediately file a bug report using only the user's original one-sentence description with no further investigation",
    "Test the dropdown only with a mouse to confirm it works correctly for most users, then close the ticket",
    "Assume the issue is identical to a previous, unrelated keyboard bug and apply that same fix without testing"
  ],"answer":0,
  "explanation":"Directly reproducing the reported behavior using only the keyboard, and noting precisely where it breaks down (cannot open, opens but can't navigate, opens and navigates but can't select), produces a specific, verifiable bug report rather than relying on a vague user description alone.","questionType":"Best Next Action" },
{ "domain":"domain3","lesson":"Workflow: QA Testing - Documenting Defects","learningObjective":"Write a bug report with the detail a developer needs to act on it","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.1","scName":"Error Identification","id":"WF-QA-DOC-Q1","difficulty":"medium","mode":"practice",
  "question":"Which bug report is most useful for a developer to act on?",
  "choices":[
    "\"Checkout page, Payment step: submitting an invalid card number shows no error message anywhere on screen or in the accessibility tree (confirmed via screen reader test). Expected: a specific, programmatically announced error identifying the invalid field. Steps to reproduce: [listed]. WCAG 3.3.1 (Level A).\"",
    "\"Checkout is broken.\"",
    "\"Something seems off with the payment form, not sure what exactly.\"",
    "\"Error handling needs work.\""
  ],"answer":0,
  "explanation":"A useful bug report includes the specific location, the exact observed behavior versus expected behavior, reproduction steps, and the relevant citation - giving a developer everything needed to locate, understand, and fix the issue without needing to first re-investigate what the reporter already found.","questionType":"Audit Documentation" },
{ "domain":"domain4","lesson":"Workflow: QA Testing - Verifying Fixes","learningObjective":"Verify a fix addresses the complete original defect, not just its most visible symptom","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"WF-QA-VERIFY-Q1","difficulty":"hard","mode":"challenge",
  "question":"A ticket reported that a custom toggle switch has no accessible name and no exposed on/off state. A developer marks it fixed. What should QA verification specifically check before closing the ticket?",
  "choices":[
    "Both parts of the original defect independently: that the toggle now announces a clear accessible name, AND that its on/off state is announced and updates correctly when toggled - not just whichever part is easiest to notice first",
    "Only that the toggle now has some accessible name, regardless of whether state is also fixed",
    "Only that the toggle visually looks different than before",
    "Nothing further - developer self-reports of 'fixed' should always be trusted without independent verification"
  ],"answer":0,
  "explanation":"A defect with two distinct technical requirements (name AND state) needs both independently verified before closing; a fix addressing only the more visible or easier half can pass a superficial check while leaving the ticket's full scope still broken.","questionType":"Best Next Action" },
{ "domain":"domain2","lesson":"Workflow: QA Testing - Regression Prevention","learningObjective":"Determine an appropriate regression-testing strategy for a shared component","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.2","scName":"No Keyboard Trap","id":"WF-QA-REGRESS-Q1","difficulty":"hard","mode":"challenge",
  "question":"A keyboard trap was found and fixed in a modal dialog component used in 12 different places across the product. What is the most effective way to prevent this specific defect from silently reappearing in a future code change?",
  "choices":[
    "Add an automated test at the shared component level (not just a manual one-time check) that specifically verifies focus can move both into and out of the modal via keyboard alone, so any future change that reintroduces the trap is caught automatically before release, across all 12 usages at once",
    "Manually re-test all 12 usages by hand before every single future release indefinitely",
    "Add a comment in the code reminding developers not to reintroduce the bug, with no automated test",
    "Take no preventive action, since the bug has already been fixed once"
  ],"answer":0,
  "explanation":"An automated test at the shared component level catches a regression the moment it's reintroduced, across every usage of that component, without relying on someone remembering to manually re-check 12 different places before every future release - a far more durable prevention strategy than a comment or manual process alone.","questionType":"Remediation Planning" },
{ "domain":"domain1","lesson":"Workflow: QA Testing - Test Coverage Planning","learningObjective":"Determine appropriate assistive technology combinations for a QA test plan","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"WF-QA-COVERAGE-Q1","difficulty":"medium","mode":"practice",
  "question":"A QA team is building a standard accessibility test plan for new features and can only realistically test with one desktop and one mobile screen reader combination regularly. Which combination is most consistent with common professional testing practice?",
  "choices":[
    "NVDA with a Windows browser for desktop, and VoiceOver on iOS for mobile - both free or built-in, and among the most commonly used combinations in professional testing",
    "Only test with a single obscure, rarely-used screen reader on desktop, with no mobile testing at all",
    "Test only with automated tools and skip real screen reader testing entirely to save time",
    "Test only in one browser with no screen reader active at all, relying solely on visual inspection"
  ],"answer":0,
  "explanation":"NVDA and VoiceOver are free or built-in, widely used, and represent two of the most common real-world combinations referenced throughout this Lab's testing-methodology content, making them a practical, defensible baseline for a resource-constrained regular test plan.","questionType":"Best Next Action" }
];
window.WCAG_LAB_WORKFLOW_QA = WCAG_LAB_WORKFLOW_QA;

(function () {
  var additions = [].concat(
    window.WCAG_LAB_WORKFLOW_AUDIT || [],
    window.WCAG_LAB_WORKFLOW_DESIGN || [],
    window.WCAG_LAB_WORKFLOW_PROCUREMENT || [],
    window.WCAG_LAB_WORKFLOW_QA || []
  );
  if (window.WCAG_LAB_DATA && Array.isArray(window.WCAG_LAB_DATA.questions)) {
    window.WCAG_LAB_DATA.questions = window.WCAG_LAB_DATA.questions.concat(additions);
  }
}());
