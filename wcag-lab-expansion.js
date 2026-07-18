/* WCAG Accessibility Lab expansion data.
   Added: professional-scenario questions (Scenario, Multi-Success-Criterion Analysis, User Impact,
   Remediation Planning, Severity Assessment, Prioritization, Audit Documentation, Best Next Action,
   Root Cause Analysis categories) plus baseline Recall/Recognition/Application coverage for the 9
   WCAG 2.2 Success Criteria that were previously entirely absent from this Lab's data
   (2.4.11, 2.4.12, 2.4.13, 2.5.7, 2.5.8, 3.2.6, 3.3.7, 3.3.8, 3.3.9).
   This file is loaded after wcag-data.js and appends to the existing window.WCAG_LAB_DATA.questions
   array without modifying, removing, or replacing any pre-existing question. */
/* WCAG Accessibility Lab expansion - Scenario batch 1: Banking, Healthcare, Government, Education, E-commerce */
var WCAG_LAB_EXPANSION_SCENARIOS_1 = [

/* ===== SCENARIO: Banking - mobile check deposit ===== */
{
  "domain": "domain2", "lesson": "Operable: Banking Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic banking scenario",
  "level": "A", "principle": "Operable", "guideline": "Input Modalities", "scNumber": "2.5.7", "scName": "Dragging Movements",
  "id": "SCEN-BANK01-Q1", "difficulty": "medium", "mode": "practice",
  "question": "A mobile banking app's check deposit feature requires users to drag a photo-alignment frame to match the edges of a check before submitting. There is no way to adjust the frame with a single tap. A user with a motor disability who uses a stylus with limited fine-motor control cannot complete the drag reliably. Which Success Criterion does this most directly violate?",
  "choices": ["2.5.7 Dragging Movements", "2.5.1 Pointer Gestures", "1.4.10 Reflow", "2.1.1 Keyboard"],
  "answer": 0,
  "explanation": "2.5.7 requires that dragging-based functionality also be operable through a single-pointer action without dragging (such as tapping to nudge the frame in a direction), unless dragging is essential. Aligning a rectangular frame to a check's edges is not essential to require dragging specifically; a tap-based or arrow-control alternative can achieve the same result.",
  "questionType": "Application"
},
{
  "domain": "domain2", "lesson": "Operable: Banking Scenario", "learningObjective": "Determine affected users for a real-world accessibility finding",
  "level": "A", "principle": "Operable", "guideline": "Input Modalities", "scNumber": "2.5.7", "scName": "Dragging Movements",
  "id": "SCEN-BANK01-Q2", "difficulty": "medium", "mode": "practice",
  "question": "In the mobile check deposit drag-frame scenario, which group of users is most directly and severely affected by the missing single-pointer alternative?",
  "choices": [
    "Users with motor disabilities or limited fine-motor control who cannot perform a precise, sustained drag gesture",
    "Users with color vision deficiency who cannot distinguish the frame's border color",
    "Users who have disabled JavaScript in their mobile browser",
    "Users on a slow network connection uploading the check image"
  ],
  "answer": 0,
  "explanation": "Dragging requires sustained, precise pointer control from start to end position. Users with tremor, limited grip strength, or motor conditions affecting fine control are most severely blocked, since without a tap-based alternative they may be unable to complete the deposit at all.",
  "questionType": "User Impact"
},
{
  "domain": "domain2", "lesson": "Operable: Banking Scenario", "learningObjective": "Assign an appropriate severity rating to a real-world accessibility finding",
  "level": "A", "principle": "Operable", "guideline": "Input Modalities", "scNumber": "2.5.7", "scName": "Dragging Movements",
  "id": "SCEN-BANK01-Q3", "difficulty": "hard", "mode": "challenge",
  "question": "An auditor is rating the severity of the check-deposit drag-only interaction for a banking app's accessibility report. The app's only other deposit method is an in-branch teller, and branches are being reduced nationally. Which severity rating is most defensible, and why?",
  "choices": [
    "Critical/Blocking - the finding prevents a subset of users from completing a core financial task with no equivalent digital alternative",
    "Low/Minor - dragging is a common mobile pattern and most users manage it without difficulty",
    "Medium/Moderate - the issue is cosmetic and does not affect task completion",
    "Not applicable - mobile apps are not required to meet WCAG since they are not web content"
  ],
  "answer": 0,
  "explanation": "WCAG does apply to mobile app interfaces under most legal and organizational policies that reference it, and this finding fully blocks a core financial task (depositing funds) for affected users, with no accessible in-app alternative and a shrinking real-world fallback (branch access). Complete blocking of a core task with no workaround is a hallmark of Critical/Blocking severity, as covered in the Introduction's severity and prioritization guidance.",
  "questionType": "Severity Assessment"
},
{
  "domain": "domain2", "lesson": "Operable: Banking Scenario", "learningObjective": "Recommend an appropriate remediation strategy for a real-world accessibility finding",
  "level": "A", "principle": "Operable", "guideline": "Input Modalities", "scNumber": "2.5.7", "scName": "Dragging Movements",
  "id": "SCEN-BANK01-Q4", "difficulty": "medium", "mode": "practice",
  "question": "What is the most appropriate remediation recommendation for the check deposit drag-frame issue?",
  "choices": [
    "Add directional nudge buttons (or arrow-key/tap increments) that move the alignment frame in small steps, alongside the existing drag gesture",
    "Remove the alignment frame entirely and auto-crop every submitted photo without user adjustment",
    "Add a text label instructing users to ask a family member for help with the drag gesture",
    "Increase the size of the draggable frame's border so it is easier to see"
  ],
  "answer": 0,
  "explanation": "The correct remediation preserves the existing drag interaction for users who prefer it while adding a genuinely equivalent single-pointer (or keyboard) alternative, such as tap-to-nudge controls, satisfying 2.5.7 without removing functionality other users rely on.",
  "questionType": "Remediation Planning"
},
{
  "domain": "domain2", "lesson": "Operable: Banking Scenario", "learningObjective": "Determine implementation priority for a real-world accessibility finding",
  "level": "A", "principle": "Operable", "guideline": "Input Modalities", "scNumber": "2.5.7", "scName": "Dragging Movements",
  "id": "SCEN-BANK01-Q5", "difficulty": "hard", "mode": "challenge",
  "question": "A backlog contains this finding alongside: (1) a missing alt attribute on a decorative footer icon, and (2) insufficient color contrast on a rarely-visited FAQ page. Given standard prioritization practice, how should the check-deposit finding be sequenced relative to the other two?",
  "choices": [
    "First - it blocks completion of a core, frequently used financial task, while the other two are lower-traffic or non-blocking issues",
    "Last - visual issues should always be fixed before functional issues",
    "It should not be prioritized differently; all three should be fixed in the order they were filed",
    "Second, after the FAQ contrast issue, since contrast issues are always rated Critical"
  ],
  "answer": 0,
  "explanation": "Prioritization weighs user impact and task criticality, not filing order or issue category alone. A fully blocking failure on a core, high-frequency task (depositing money) is a far higher real-world priority than a decorative image's missing alt text or a low-traffic page's contrast issue.",
  "questionType": "Prioritization"
},
{
  "domain": "domain2", "lesson": "Operable: Banking Scenario", "learningObjective": "Write a professional audit finding for a real-world accessibility issue",
  "level": "A", "principle": "Operable", "guideline": "Input Modalities", "scNumber": "2.5.7", "scName": "Dragging Movements",
  "id": "SCEN-BANK01-Q6", "difficulty": "hard", "mode": "challenge",
  "question": "Which of the following is the most professionally written audit finding for the check-deposit drag-frame issue?",
  "choices": [
    "Finding: Check deposit alignment frame (mobile app, Deposit screen) requires a sustained drag gesture with no single-pointer alternative, violating WCAG 2.5.7 (Level AA... actually AA per current data). Impact: users with motor disabilities cannot align or submit a check deposit. Recommendation: add tap/arrow-based nudge controls alongside the existing drag gesture.",
    "Finding: The deposit screen looks outdated and should be redesigned to match current banking app trends.",
    "Finding: Some users complained about the deposit screen; consider looking into it eventually.",
    "Finding: Dragging is used on the deposit screen. This is a violation of WCAG. Fix ASAP."
  ],
  "answer": 0,
  "explanation": "A professional audit finding names the specific location, the specific criterion violated (with its number), the concrete user impact, and an actionable remediation recommendation - exactly the four elements the first option includes. The others are vague, subjective, or missing the criterion and actionable guidance entirely.",
  "questionType": "Audit Documentation"
},

/* ===== SCENARIO: Healthcare - patient portal appointment scheduling ===== */
{
  "domain": "domain3", "lesson": "Understandable: Healthcare Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic healthcare scenario",
  "level": "A", "principle": "Understandable", "guideline": "Input Assistance", "scNumber": "3.3.7", "scName": "Redundant Entry",
  "id": "SCEN-HEALTH01-Q1", "difficulty": "medium", "mode": "practice",
  "question": "A patient portal's appointment-request flow asks for the patient's name, date of birth, and insurance ID on step 1. On step 3, after selecting a provider, the same three fields are presented again as blank inputs the patient must retype before the request can be submitted. Which Success Criterion does this violate?",
  "choices": ["3.3.7 Redundant Entry", "3.3.2 Labels or Instructions", "2.4.3 Focus Order", "1.3.5 Identify Input Purpose"],
  "answer": 0,
  "explanation": "3.3.7 requires that information already entered earlier in the same process be auto-populated or available for the user to reuse, rather than requiring the user to retype it, except in narrow cases like security re-verification. Repeating name, date of birth, and insurance ID with no carry-forward is exactly the pattern this criterion prohibits.",
  "questionType": "Application"
},
{
  "domain": "domain3", "lesson": "Understandable: Healthcare Scenario", "learningObjective": "Determine affected users for a real-world accessibility finding",
  "level": "A", "principle": "Understandable", "guideline": "Input Assistance", "scNumber": "3.3.7", "scName": "Redundant Entry",
  "id": "SCEN-HEALTH01-Q2", "difficulty": "medium", "mode": "practice",
  "question": "Which users are most significantly burdened by the redundant re-entry of patient information in this scheduling flow?",
  "choices": [
    "Users with motor disabilities who find typing effortful, and users with cognitive or memory-related disabilities who may struggle to recall and re-enter the same information accurately a second time",
    "Users with a strong internet connection",
    "Users who prefer using a mouse rather than a keyboard",
    "Users who have already scheduled an appointment before"
  ],
  "answer": 0,
  "explanation": "Redundant entry disproportionately burdens users for whom typing itself is physically effortful (motor disabilities) and users who may find accurately recalling and re-entering previously provided information difficult (some cognitive disabilities), beyond the general inconvenience it creates for everyone.",
  "questionType": "User Impact"
},
{
  "domain": "domain3", "lesson": "Understandable: Healthcare Scenario", "learningObjective": "Determine whether multiple Success Criteria are involved in a realistic finding",
  "level": "A", "principle": "Understandable", "guideline": "Input Assistance", "scNumber": "3.3.7", "scName": "Redundant Entry",
  "id": "SCEN-HEALTH01-Q3", "difficulty": "hard", "mode": "challenge",
  "question": "Testing further reveals that step 3's re-entry fields also have no visible or programmatic labels at all - only placeholder text that disappears on focus. Which additional Success Criterion is now also implicated, alongside 3.3.7?",
  "choices": [
    "3.3.2 Labels or Instructions, since placeholder text alone does not satisfy the requirement for a persistent, programmatically associated label",
    "1.4.3 Contrast (Minimum), since placeholder text is always low contrast",
    "2.4.1 Bypass Blocks, since the form has no skip link",
    "No additional criterion applies; this is still purely a 3.3.7 issue"
  ],
  "answer": 0,
  "explanation": "A field relying only on placeholder text with no persistent, programmatically associated label fails 3.3.2, an entirely separate requirement from 3.3.7's redundant-entry concern. Real findings frequently implicate more than one Success Criterion on the same element, and a thorough audit documents each one.",
  "questionType": "Multi-Success-Criterion Analysis"
},
{
  "domain": "domain3", "lesson": "Understandable: Healthcare Scenario", "learningObjective": "Determine the root cause of a class of accessibility findings",
  "level": "A", "principle": "Understandable", "guideline": "Input Assistance", "scNumber": "3.3.7", "scName": "Redundant Entry",
  "id": "SCEN-HEALTH01-Q4", "difficulty": "hard", "mode": "challenge",
  "question": "Investigating further, the auditor finds the same redundant re-entry pattern on the prescription refill flow, the billing dispute flow, and the telehealth consent flow - all built by different teams. What is the most likely systemic root cause, and what does it imply about the correct fix?",
  "choices": [
    "The organization's shared multi-step form component does not persist or forward previously entered data between steps by design, so every team building on top of it inherits the same defect; fixing the shared component fixes all four flows at once",
    "Each team independently made the same unrelated coding mistake by coincidence, so each flow needs a separate, unrelated fix",
    "The issue is caused by the patients' browsers, not the application, and cannot be fixed by the organization",
    "The issue only affects Internet Explorer and can be deprioritized since that browser is no longer supported"
  ],
  "answer": 0,
  "explanation": "When the identical defect pattern appears across multiple, independently built flows, the most likely explanation is a shared underlying cause - in this case, a shared multi-step form component with no data-forwarding behavior. Root cause analysis at the component level, rather than treating each flow as an isolated bug, is both more accurate and dramatically more efficient to remediate.",
  "questionType": "Root Cause Analysis"
},
{
  "domain": "domain3", "lesson": "Understandable: Healthcare Scenario", "learningObjective": "Choose the best next action given limited information",
  "level": "A", "principle": "Understandable", "guideline": "Input Assistance", "scNumber": "3.3.7", "scName": "Redundant Entry",
  "id": "SCEN-HEALTH01-Q5", "difficulty": "hard", "mode": "challenge",
  "question": "Given the root cause identified (a shared multi-step form component with no data persistence), what is the accessibility consultant's best next action?",
  "choices": [
    "Recommend the engineering team fix the shared form component's data-forwarding behavior once, and then verify all four affected flows (scheduling, refill, billing, telehealth) after that single fix is deployed",
    "File four separate, unrelated tickets with four different priority levels and no mention of the shared cause",
    "Recommend rebuilding all four flows from scratch using a different framework",
    "Take no action until a fifth flow is found to confirm the pattern"
  ],
  "answer": 0,
  "explanation": "The professional, efficient path is recommending the fix at its actual source (the shared component) and then verifying the fix propagated correctly to every flow that depends on it, rather than treating each symptom independently or waiting for more evidence when the pattern is already clear.",
  "questionType": "Best Next Action"
},
{
  "domain": "domain3", "lesson": "Understandable: Healthcare Scenario", "learningObjective": "Write a professional audit finding for a real-world accessibility issue",
  "level": "A", "principle": "Understandable", "guideline": "Input Assistance", "scNumber": "3.3.7", "scName": "Redundant Entry",
  "id": "SCEN-HEALTH01-Q6", "difficulty": "hard", "mode": "challenge",
  "question": "Which audit finding best documents the systemic nature of this issue for engineering leadership?",
  "choices": [
    "Finding: The shared multi-step form component does not persist entered data between steps (WCAG 3.3.7), and affected fields also lack persistent labels (WCAG 3.3.2). This pattern was confirmed across four flows (scheduling, refill, billing, telehealth) that all use this shared component. Recommendation: fix the shared component's data persistence and labeling once; re-verify all four flows after deployment.",
    "Finding: Forms are broken across the site.",
    "Finding: Users are annoyed by having to type their information more than once, which is not ideal from a UX perspective.",
    "Finding: WCAG 3.3.7 violation found. See attached screenshot."
  ],
  "answer": 0,
  "explanation": "This finding names both violated criteria specifically, documents the systemic scope (four flows sharing one root cause) rather than treating it as an isolated incident, and gives a recommendation scoped to the actual fix location - information engineering leadership needs to prioritize and resource the work correctly.",
  "questionType": "Audit Documentation"
},

/* ===== SCENARIO: Government - benefits application PDF ===== */
{
  "domain": "domain1", "lesson": "Perceivable: Government Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic government services scenario",
  "level": "A", "principle": "Perceivable", "guideline": "Text Alternatives", "scNumber": "1.1.1", "scName": "Non-Text Content",
  "id": "SCEN-GOV01-Q1", "difficulty": "medium", "mode": "practice",
  "question": "A state unemployment benefits office publishes its eligibility requirements as a scanned PDF (a photograph of a printed page saved as a PDF, with no underlying text layer). A screen reader user opening the file hears nothing at all. Which Success Criterion is most directly and severely violated?",
  "choices": ["1.1.1 Non-Text Content", "2.4.2 Page Titled", "1.4.4 Resize Text", "3.1.5 Reading Level"],
  "answer": 0,
  "explanation": "A scanned image with no real text layer is, from an assistive technology perspective, a single large image with no text alternative at all. 1.1.1 requires non-text content to have a text alternative serving an equivalent purpose; here there is none, making the entire document's content completely inaccessible to a screen reader.",
  "questionType": "Application"
},
{
  "domain": "domain1", "lesson": "Perceivable: Government Scenario", "learningObjective": "Assign an appropriate severity rating to a real-world accessibility finding",
  "level": "A", "principle": "Perceivable", "guideline": "Text Alternatives", "scNumber": "1.1.1", "scName": "Non-Text Content",
  "id": "SCEN-GOV01-Q2", "difficulty": "hard", "mode": "challenge",
  "question": "This scanned-PDF eligibility document is the only place the unemployment office publishes its requirements; no HTML version exists. How should an auditor rate this finding's severity?",
  "choices": [
    "Critical/Blocking - it completely denies access to essential government eligibility information, with no accessible alternative available anywhere",
    "Low/Minor - PDFs are inherently inaccessible and this is an accepted limitation of the format",
    "Medium/Moderate - most users would use a phone call instead, so the digital barrier does not matter much",
    "Not applicable - government agencies are generally exempt from accessibility requirements"
  ],
  "answer": 0,
  "explanation": "This is about as severe as a finding gets: complete, total inaccessibility (not partial) of legally significant, essential information, with no alternative format offered anywhere, for a government service many people depend on. Government digital services are also frequently subject to specific legal accessibility obligations, heightening the real-world risk alongside the user-impact severity.",
  "questionType": "Severity Assessment"
},
{
  "domain": "domain1", "lesson": "Perceivable: Government Scenario", "learningObjective": "Recommend an appropriate remediation strategy for a real-world accessibility finding",
  "level": "A", "principle": "Perceivable", "guideline": "Text Alternatives", "scNumber": "1.1.1", "scName": "Non-Text Content",
  "id": "SCEN-GOV01-Q3", "difficulty": "medium", "mode": "practice",
  "question": "What is the most appropriate remediation for the scanned, textless eligibility PDF?",
  "choices": [
    "Republish the document as a properly tagged, text-based PDF or accessible HTML page, using OCR only as an intermediate step toward real, verified text, not as the final deliverable",
    "Add a single alt attribute to the PDF file describing it as 'eligibility document'",
    "Increase the scan resolution so the text is sharper when viewed visually",
    "Add a phone number to the page so users can call instead, with no other changes to the document itself"
  ],
  "answer": 0,
  "explanation": "The durable fix is a genuinely accessible source document: real, verified text (OCR can assist but must be checked, since OCR errors on legal/eligibility text carry real consequences), proper heading and reading-order structure, and ideally an HTML alternative. A phone number is a reasonable supplementary channel but does not remediate the digital document itself, and a single alt attribute cannot substitute for actual document content.",
  "questionType": "Remediation Planning"
},
{
  "domain": "domain1", "lesson": "Perceivable: Government Scenario", "learningObjective": "Choose the best next action given limited information",
  "level": "A", "principle": "Perceivable", "guideline": "Text Alternatives", "scNumber": "1.1.1", "scName": "Non-Text Content",
  "id": "SCEN-GOV01-Q4", "difficulty": "hard", "mode": "challenge",
  "question": "The agency says a full HTML rebuild of the eligibility page will take six months, but a properly tagged, text-layer PDF replacement could ship in two weeks. What is the accessibility consultant's best next action?",
  "choices": [
    "Recommend shipping the properly tagged, text-based PDF within two weeks as an immediate interim remediation, while still tracking the six-month HTML rebuild as the more durable long-term goal",
    "Insist on waiting the full six months so only one fix is ever made",
    "Recommend no interim action since a PDF fix is not a 'complete' solution",
    "Recommend the agency remove the eligibility page entirely until the HTML version is ready"
  ],
  "answer": 0,
  "explanation": "Given a severe, currently-blocking finding, an accessibility consultant recommends the fastest genuine improvement available (the tagged PDF) rather than waiting for the ideal long-term solution, while still tracking the more durable fix separately. Removing essential public information entirely, or refusing incremental progress, would both leave users worse off than a solid interim fix.",
  "questionType": "Best Next Action"
},

/* ===== SCENARIO: Education - LMS quiz timer ===== */
{
  "domain": "domain2", "lesson": "Operable: Education Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic education scenario",
  "level": "A", "principle": "Operable", "guideline": "Enough Time", "scNumber": "2.2.1", "scName": "Timing Adjustable",
  "id": "SCEN-EDU01-Q1", "difficulty": "medium", "mode": "practice",
  "question": "A university's learning management system gives students exactly 20 minutes to complete a timed quiz, with no option to request extra time, and the quiz auto-submits with no warning when the timer reaches zero, discarding any unsaved answers on the current question. Which Success Criterion is most directly violated?",
  "choices": ["2.2.1 Timing Adjustable", "2.2.3 No Timing", "3.2.2 On Input", "1.4.13 Content on Hover or Focus"],
  "answer": 0,
  "explanation": "2.2.1 requires that time limits be adjustable: extendable, or accompanied by a warning with an opportunity to extend, among other accepted approaches, unless the timing is essential (a rare exception) or the limit is at least 20 hours. A hard 20-minute cutoff with no warning and no extension option fails this baseline Level A requirement.",
  "questionType": "Application"
},
{
  "domain": "domain2", "lesson": "Operable: Education Scenario", "learningObjective": "Determine affected users for a real-world accessibility finding",
  "level": "A", "principle": "Operable", "guideline": "Enough Time", "scNumber": "2.2.1", "scName": "Timing Adjustable",
  "id": "SCEN-EDU01-Q2", "difficulty": "medium", "mode": "practice",
  "question": "Beyond students who use screen readers, which additional groups are meaningfully disadvantaged by this rigid quiz timer, independent of their actual subject-matter knowledge?",
  "choices": [
    "Students with documented extended-time accommodations, students with motor disabilities who need more time to physically operate input devices, and students with anxiety or attention-related conditions affected by hard countdowns",
    "Only students who did not study for the quiz",
    "Only students taking the course for the first time",
    "No group is meaningfully disadvantaged beyond general test anxiety, which affects everyone equally"
  ],
  "answer": 0,
  "explanation": "Rigid timing disadvantages several distinct groups for reasons unrelated to subject knowledge: students with legally documented accommodations who are supposed to receive extended time, students whose motor disabilities slow down input regardless of how well they know the material, and students whose anxiety or attention-related conditions are specifically aggravated by an unyielding, unwarned countdown.",
  "questionType": "User Impact"
},
{
  "domain": "domain2", "lesson": "Operable: Education Scenario", "learningObjective": "Determine implementation priority for a real-world accessibility finding",
  "level": "A", "principle": "Operable", "guideline": "Enough Time", "scNumber": "2.2.1", "scName": "Timing Adjustable",
  "id": "SCEN-EDU01-Q3", "difficulty": "hard", "mode": "challenge",
  "question": "The university's semester begins in three weeks, and this quiz timer defect affects every timed assessment platform-wide. A separate finding shows one professor's course page uses a non-descriptive 'Click Here' link. How should these be prioritized?",
  "choices": [
    "The quiz timer defect first - it is platform-wide, affects a legally significant accommodation obligation, and can cause direct academic harm (lost credit) every time it occurs",
    "The 'Click Here' link first, since link text issues are always the highest priority under WCAG",
    "Both are equally urgent and should be fixed in whichever order is easiest for engineering",
    "Neither is urgent since the semester has not started yet"
  ],
  "answer": 0,
  "explanation": "The quiz timer issue is platform-wide (affecting every timed assessment, not one page), carries legal accommodation implications, and can cause direct, irreversible academic harm (lost quiz credit) every time a student is affected - a combination of scope, legal risk, and severity that clearly outweighs an isolated non-descriptive link on one course page.",
  "questionType": "Prioritization"
},
{
  "domain": "domain2", "lesson": "Operable: Education Scenario", "learningObjective": "Recommend an appropriate remediation strategy for a real-world accessibility finding",
  "level": "A", "principle": "Operable", "guideline": "Enough Time", "scNumber": "2.2.1", "scName": "Timing Adjustable",
  "id": "SCEN-EDU01-Q4", "difficulty": "medium", "mode": "practice",
  "question": "What is the most appropriate remediation for the LMS quiz timer, consistent with 2.2.1's requirements?",
  "choices": [
    "Add a warning before time expires with an option to request more time, and ensure any students with documented accommodations automatically receive their approved extended-time setting",
    "Remove all time limits from every quiz platform-wide with no configuration options for instructors",
    "Keep the timer exactly as is, since students should learn to work under time pressure",
    "Add a countdown sound effect in the final 10 seconds with no other change"
  ],
  "answer": 0,
  "explanation": "2.2.1 does not require eliminating timing altogether; it requires the timing be adjustable, most commonly through a warning-plus-extension mechanism, and that documented accommodations are actually honored automatically rather than requiring a student to fight for them during a live quiz.",
  "questionType": "Remediation Planning"
},

/* ===== SCENARIO: E-commerce - color-only sale badges ===== */
{
  "domain": "domain1", "lesson": "Perceivable: E-commerce Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic e-commerce scenario",
  "level": "A", "principle": "Perceivable", "guideline": "Distinguishable", "scNumber": "1.4.1", "scName": "Use of Color",
  "id": "SCEN-ECOM01-Q1", "difficulty": "easy", "mode": "reinforce",
  "question": "An online store marks discounted products with a red price and marks out-of-stock products with a gray price, using color alone with no icon, label, or text difference between the two states. Which Success Criterion does this violate?",
  "choices": ["1.4.1 Use of Color", "1.4.3 Contrast (Minimum)", "2.4.4 Link Purpose (In Context)", "3.3.1 Error Identification"],
  "answer": 0,
  "explanation": "1.4.1 requires that color not be the only visual means of conveying information. A price shown only in red (discounted) or gray (out of stock) with no other distinguishing cue fails for users with color vision deficiency who cannot reliably distinguish the two states.",
  "questionType": "Recognition"
},
{
  "domain": "domain1", "lesson": "Perceivable: E-commerce Scenario", "learningObjective": "Determine whether multiple Success Criteria are involved in a realistic finding",
  "level": "A", "principle": "Perceivable", "guideline": "Distinguishable", "scNumber": "1.4.1", "scName": "Use of Color",
  "id": "SCEN-ECOM01-Q2", "difficulty": "hard", "mode": "challenge",
  "question": "Further testing shows the red discount color has a contrast ratio of only 2.8:1 against the white background, and screen reader testing confirms the price text itself is announced identically regardless of discount or stock status. Which additional Success Criteria are implicated beyond 1.4.1?",
  "choices": [
    "1.4.3 Contrast (Minimum), since the red text falls below the required 4.5:1 ratio, and 1.3.1 Info and Relationships, since discount/stock status is not programmatically determinable from the markup at all",
    "Only 1.4.3; the screen reader issue is not a real WCAG concern",
    "2.1.1 Keyboard, since discount prices cannot be reached by keyboard",
    "No additional criteria apply beyond 1.4.1"
  ],
  "answer": 0,
  "explanation": "This single visual pattern actually implicates three distinct requirements at once: 1.4.1 (color-only distinction), 1.4.3 (the red text's contrast ratio itself falls below the 4.5:1 minimum for normal text), and 1.3.1 (the status isn't programmatically exposed at all, so even a screen reader user who could perceive color would get no announcement of discount/stock status). This is a realistic example of one finding spanning multiple Guidelines.",
  "questionType": "Multi-Success-Criterion Analysis"
},
{
  "domain": "domain1", "lesson": "Perceivable: E-commerce Scenario", "learningObjective": "Recommend an appropriate remediation strategy addressing multiple related findings",
  "level": "A", "principle": "Perceivable", "guideline": "Distinguishable", "scNumber": "1.4.1", "scName": "Use of Color",
  "id": "SCEN-ECOM01-Q3", "difficulty": "hard", "mode": "challenge",
  "question": "Given that this finding spans 1.4.1, 1.4.3, and 1.3.1 together, what single remediation approach most efficiently addresses all three at once?",
  "choices": [
    "Add a visible text label ('Sale' or 'Out of Stock') with sufficient contrast next to the price, and ensure that label is a real, programmatically associated text node rather than a background image or color-only styling",
    "Only darken the red color slightly to pass contrast, leaving the color-only distinction and missing programmatic status unresolved",
    "Only add an aria-label with no visible change, leaving the contrast and color-only issues unresolved for sighted users",
    "Rewrite the entire product listing page from scratch using a different framework"
  ],
  "answer": 0,
  "explanation": "A single well-designed fix, a real, adequately contrasted, programmatically present text label, resolves all three findings together: it eliminates the color-only distinction (1.4.1), can be styled to meet contrast on its own merits (1.4.3), and is announced to screen readers since it's real text (1.3.1) - far more efficient than three separate patches.",
  "questionType": "Remediation Planning"
},

/* ===== SCENARIO: E-commerce - shopping cart quantity stepper ===== */
{
  "domain": "domain4", "lesson": "Robust: E-commerce Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic shopping cart scenario",
  "level": "A", "principle": "Robust", "guideline": "Compatible", "scNumber": "4.1.2", "scName": "Name, Role, Value",
  "id": "SCEN-CART01-Q1", "difficulty": "medium", "mode": "practice",
  "question": "A shopping cart's quantity stepper is built from two custom plus/minus icon buttons and a number display between them, all built from generic elements with click handlers. A screen reader announces both buttons only as 'button' with no indication of which increases or decreases quantity, and the current quantity value is never announced when it changes. Which Success Criterion is most directly violated?",
  "choices": ["4.1.2 Name, Role, Value", "1.4.5 Images of Text", "2.4.6 Headings and Labels", "3.2.4 Consistent Identification"],
  "answer": 0,
  "explanation": "4.1.2 requires that every interface component expose a programmatically determinable name, role, and value/state, with changes to that state communicated to assistive technology. Two unlabeled 'button' announcements with no indication of purpose, and a quantity value that never announces its updates, is a textbook 4.1.2 failure.",
  "questionType": "Application"
},
{
  "domain": "domain4", "lesson": "Robust: E-commerce Scenario", "learningObjective": "Determine the root cause of a realistic accessibility finding",
  "level": "A", "principle": "Robust", "guideline": "Compatible", "scNumber": "4.1.2", "scName": "Name, Role, Value",
  "id": "SCEN-CART01-Q2", "difficulty": "hard", "mode": "challenge",
  "question": "What is the underlying root cause of the quantity stepper's accessibility failure?",
  "choices": [
    "The component was built entirely from generic, non-semantic elements with visual styling and click handlers, with no accessible name, role, or live-updating state ever added at any point in development",
    "The company's brand color palette does not include enough contrast options",
    "The website is not compatible with mobile devices",
    "The quantity stepper was tested only in a single browser"
  ],
  "answer": 0,
  "explanation": "The root cause is architectural: building a genuinely interactive, stateful component entirely from generic elements with no deliberate accessibility implementation at any layer (naming, roles, or live state announcement) is what produces this exact failure pattern, regardless of which specific browser or device is used to view it.",
  "questionType": "Root Cause Analysis"
},
{
  "domain": "domain4", "lesson": "Robust: E-commerce Scenario", "learningObjective": "Recommend an appropriate remediation strategy for a real-world accessibility finding",
  "level": "A", "principle": "Robust", "guideline": "Compatible", "scNumber": "4.1.2", "scName": "Name, Role, Value",
  "id": "SCEN-CART01-Q3", "difficulty": "medium", "mode": "practice",
  "question": "What is the most appropriate remediation for the quantity stepper component?",
  "choices": [
    "Give each button a clear accessible name ('Decrease quantity' / 'Increase quantity'), and wrap the quantity value in a live region so its updates are announced automatically",
    "Add a tooltip that appears on mouse hover explaining what each button does",
    "Replace the buttons with a free-text input with no buttons at all",
    "Increase the icon size so the plus and minus symbols are easier to see"
  ],
  "answer": 0,
  "explanation": "The fix needs to address both halves of the failure: clear, specific accessible names so each button's purpose is announced (satisfying the name/role portion of 4.1.2), and a live region so the resulting quantity change is actually communicated to assistive technology (satisfying the value/state-change portion).",
  "questionType": "Remediation Planning"
},
{
  "domain": "domain4", "lesson": "Robust: E-commerce Scenario", "learningObjective": "Choose the best next action given a partially-completed remediation",
  "level": "A", "principle": "Robust", "guideline": "Compatible", "scNumber": "4.1.2", "scName": "Name, Role, Value",
  "id": "SCEN-CART01-Q4", "difficulty": "hard", "mode": "challenge",
  "question": "A developer reports the fix is complete: accessible names were added to both buttons. Testing confirms the names are now announced correctly, but the quantity value still does not announce when it changes. What is the consultant's best next action?",
  "choices": [
    "Confirm the finding is only partially resolved, and reopen or continue tracking it specifically for the still-missing live-region announcement, rather than closing it as fully fixed",
    "Close the finding as resolved, since the more visible part (button names) was fixed",
    "File an entirely new, unrelated finding with no reference to the original one",
    "Assume the live region will be added automatically once the button names are deployed"
  ],
  "answer": 0,
  "explanation": "4.1.2 requires both correct naming AND correct state-change communication; fixing only one half leaves the criterion still failing. A careful consultant verifies the complete fix against the original finding's full scope before closing it, rather than accepting partial progress as complete.",
  "questionType": "Best Next Action"
}
];
window.WCAG_LAB_EXPANSION_SCENARIOS_1 = WCAG_LAB_EXPANSION_SCENARIOS_1;

/* WCAG Accessibility Lab expansion - Scenario batch 2: Social Media, Travel, Streaming Media, Enterprise/Dashboards */
var WCAG_LAB_EXPANSION_SCENARIOS_2 = [

/* ===== SCENARIO: Social Media - infinite scroll feed ===== */
{
  "domain": "domain2", "lesson": "Operable: Social Media Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic social media scenario",
  "level": "A", "principle": "Operable", "guideline": "Navigable", "scNumber": "2.4.1", "scName": "Bypass Blocks",
  "id": "SCEN-SOCIAL01-Q1", "difficulty": "medium", "mode": "practice",
  "question": "A social media app's feed continuously loads new posts as the user scrolls, with no skip link and no landmark regions anywhere on the page. A keyboard user trying to reach the search box in the header, after having scrolled through 40 posts, must shift+tab backward through every single post's interactive elements (like, comment, share) to get back to it. Which Success Criterion does this violate?",
  "choices": ["2.4.1 Bypass Blocks", "2.2.2 Pause, Stop, Hide", "1.4.10 Reflow", "2.5.4 Motion Actuation"],
  "answer": 0,
  "explanation": "2.4.1 requires a mechanism to bypass blocks of repeated content. An infinitely growing feed with no landmarks and no skip mechanism forces exactly the kind of tedious, repeated navigation this criterion exists to prevent, made worse here since the 'repeated block' keeps growing as the user interacts with the page.",
  "questionType": "Application"
},
{
  "domain": "domain2", "lesson": "Operable: Social Media Scenario", "learningObjective": "Determine whether multiple Success Criteria are involved in a realistic finding",
  "level": "A", "principle": "Operable", "guideline": "Pause, Stop, Hide", "scNumber": "2.2.2", "scName": "Pause, Stop, Hide",
  "id": "SCEN-SOCIAL01-Q2", "difficulty": "hard", "mode": "challenge",
  "question": "The same feed also autoplays every video post's sound the instant it scrolls into view, with no visible pause or mute control on the video itself (only a tiny icon that appears after a two-second delay). Which Success Criterion does the autoplay-with-delayed-control pattern most directly violate?",
  "choices": [
    "1.4.2 Audio Control, since audio that plays automatically for more than 3 seconds needs an immediately available way to pause, stop, or control its volume, independent of overall system volume",
    "2.4.7 Focus Visible, since the issue is about focus indicators",
    "1.3.4 Orientation, since the issue is about screen rotation",
    "3.1.1 Language of Page, since the issue is about page language"
  ],
  "answer": 0,
  "explanation": "1.4.2 requires that audio playing automatically for more than 3 seconds have an immediately available mechanism to pause or stop it (or control volume independent of system volume). A control that only appears after a 2-second delay, while the audio is already playing, does not satisfy the 'available' requirement in a way that helps a user caught off guard the moment autoplay begins.",
  "questionType": "Application"
},
{
  "domain": "domain2", "lesson": "Operable: Social Media Scenario", "learningObjective": "Determine affected users across a combined set of findings",
  "level": "A", "principle": "Operable", "guideline": "Navigable", "scNumber": "2.4.1", "scName": "Bypass Blocks",
  "id": "SCEN-SOCIAL01-Q3", "difficulty": "hard", "mode": "challenge",
  "question": "Considering both the missing bypass mechanism and the autoplay audio issue together, which combination of users experiences the most severe compounded impact?",
  "choices": [
    "Screen reader users, who must tab through the growing feed to reach other page controls while also having unexpected, hard-to-silence audio interrupting their screen reader's own speech output",
    "Users with a fast internet connection, since the feed loads content quickly",
    "Users who have disabled cookies in their browser",
    "Users browsing during business hours only"
  ],
  "answer": 0,
  "explanation": "These two issues compound specifically for screen reader users: they face the tedious bypass problem while trying to navigate, and unpredictable autoplaying audio directly competes with and can drown out their screen reader's own speech output, making an already difficult navigation task substantially worse.",
  "questionType": "User Impact"
},
{
  "domain": "domain2", "lesson": "Operable: Social Media Scenario", "learningObjective": "Recommend an appropriate remediation strategy for a real-world accessibility finding",
  "level": "A", "principle": "Operable", "guideline": "Navigable", "scNumber": "2.4.1", "scName": "Bypass Blocks",
  "id": "SCEN-SOCIAL01-Q4", "difficulty": "medium", "mode": "practice",
  "question": "What is the most appropriate remediation for the missing bypass mechanism in the infinite-scroll feed?",
  "choices": [
    "Add persistent landmark regions (navigation, search, main content) and a skip link at the top of the page, so users can jump directly between major regions regardless of how many posts have loaded into the feed",
    "Limit the feed to showing only 10 posts total with no way to see more",
    "Remove the search box from the header entirely",
    "Add a 'scroll to top' button only, with no landmark or skip link changes"
  ],
  "answer": 0,
  "explanation": "Landmark regions and a skip link let a keyboard or screen reader user jump directly to major page sections at any point, regardless of how much feed content has loaded, which is exactly the bypass mechanism this criterion requires and directly solves the described navigation burden.",
  "questionType": "Remediation Planning"
},
{
  "domain": "domain2", "lesson": "Operable: Social Media Scenario", "learningObjective": "Assign severity to a combined finding involving two Success Criteria",
  "level": "A", "principle": "Operable", "guideline": "Pause, Stop, Hide", "scNumber": "1.4.2", "scName": "Audio Control",
  "id": "SCEN-SOCIAL01-Q5", "difficulty": "hard", "mode": "challenge",
  "question": "How should an auditor rate the combined severity of the autoplay-audio-with-delayed-control finding, given it occurs on nearly every video post in a feed most users scroll through dozens of times per session?",
  "choices": [
    "High/Serious - it is not fully blocking (a workaround, closing the tab or app, exists) but it is severely disruptive, occurs at very high frequency, and directly interferes with screen reader use",
    "Low/Minor - since a workaround exists, this cannot be rated above Low regardless of frequency",
    "Critical/Blocking - because any accessibility issue involving audio must always be rated Critical",
    "Not ratable - severity cannot be assessed for issues involving multimedia content"
  ],
  "answer": 0,
  "explanation": "Severity considers both technical fact and real-world experience: a workaround existing (leaving the app) does not make an issue low-severity if it is highly disruptive and occurs at very high frequency across nearly every encountered post, and its direct interference with screen reader speech output is a serious, compounding factor. This lands solidly at High/Serious rather than either extreme.",
  "questionType": "Severity Assessment"
},

/* ===== SCENARIO: Travel - flight booking date picker ===== */
{
  "domain": "domain2", "lesson": "Operable: Travel Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic travel booking scenario",
  "level": "A", "principle": "Operable", "guideline": "Keyboard Accessible", "scNumber": "2.1.1", "scName": "Keyboard",
  "id": "SCEN-TRAVEL01-Q1", "difficulty": "medium", "mode": "practice",
  "question": "A flight booking site's departure-date calendar widget can be opened with a mouse click, but once open, the calendar grid cannot be navigated with arrow keys, Tab only cycles through a few outer controls, and individual date cells cannot receive keyboard focus at all. Which Success Criterion is most directly violated?",
  "choices": ["2.1.1 Keyboard", "2.4.5 Multiple Ways", "3.2.3 Consistent Navigation", "1.4.11 Non-text Contrast"],
  "answer": 0,
  "explanation": "2.1.1 requires that all functionality be operable through a keyboard. A calendar grid whose individual date cells cannot receive keyboard focus or be navigated with arrow keys is not keyboard operable, regardless of whether the calendar can be opened by keyboard at all.",
  "questionType": "Application"
},
{
  "domain": "domain2", "lesson": "Operable: Travel Scenario", "learningObjective": "Assign an appropriate severity rating to a real-world accessibility finding",
  "level": "A", "principle": "Operable", "guideline": "Keyboard Accessible", "scNumber": "2.1.1", "scName": "Keyboard",
  "id": "SCEN-TRAVEL01-Q2", "difficulty": "hard", "mode": "challenge",
  "question": "The airline's booking flow requires selecting a departure date through this calendar widget with no alternative text-entry field for the date. How severe is this finding?",
  "choices": [
    "Critical/Blocking - keyboard-only and screen reader users cannot select any departure date at all, making it impossible to complete a booking through this flow",
    "Low/Minor - most travelers use a mouse or touchscreen, so this affects very few bookings",
    "Medium/Moderate - a workaround exists by calling the airline's phone line, so this is not fully blocking",
    "Cannot be assessed without knowing the exact number of affected users"
  ],
  "answer": 0,
  "explanation": "With no alternative text-entry method and no keyboard-operable calendar, keyboard-only and screen reader users are completely unable to complete a core purchasing task on the primary channel. A phone-line fallback existing elsewhere does not reduce the severity of the digital product's own complete functional failure - it just means the harm manifests as forcing users onto a separate, likely less convenient channel.",
  "questionType": "Severity Assessment"
},
{
  "domain": "domain2", "lesson": "Operable: Travel Scenario", "learningObjective": "Recommend an appropriate remediation strategy for a real-world accessibility finding",
  "level": "A", "principle": "Operable", "guideline": "Keyboard Accessible", "scNumber": "2.1.1", "scName": "Keyboard",
  "id": "SCEN-TRAVEL01-Q3", "difficulty": "medium", "mode": "practice",
  "question": "What is the most robust remediation approach for the date picker widget?",
  "choices": [
    "Implement the calendar following a documented ARIA date-picker interaction pattern (arrow keys move between days, Enter selects, Escape closes), and additionally provide a manually typeable date text field as a redundant, simpler alternative",
    "Remove the calendar and require users to call an agent to book every flight",
    "Add a tooltip explaining that the calendar is mouse-only",
    "Increase the calendar's visual size so it is easier to click accurately"
  ],
  "answer": 0,
  "explanation": "Following an established interaction pattern makes the calendar itself fully keyboard operable, and adding a typeable date field provides a second, often faster path for many users including some keyboard and screen reader users, without removing the calendar's visual convenience for mouse and touch users.",
  "questionType": "Remediation Planning"
},
{
  "domain": "domain2", "lesson": "Operable: Travel Scenario", "learningObjective": "Write a professional audit finding for a real-world accessibility issue",
  "level": "A", "principle": "Operable", "guideline": "Keyboard Accessible", "scNumber": "2.1.1", "scName": "Keyboard",
  "id": "SCEN-TRAVEL01-Q4", "difficulty": "hard", "mode": "challenge",
  "question": "Which is the most professionally complete audit finding for this issue?",
  "choices": [
    "Finding: Departure-date calendar widget (Flight Search page) has no keyboard-accessible date cells and no text-entry alternative, violating WCAG 2.1.1 (Level A). Impact: keyboard-only and screen reader users cannot select a departure date, fully blocking flight search. Severity: Critical. Recommendation: implement standard ARIA date-picker keyboard interaction and add a typeable date field as a redundant path.",
    "Finding: The calendar could look nicer with a different color scheme.",
    "Finding: Some users may have trouble with the calendar.",
    "Finding: Calendar widget uses JavaScript, which is a common cause of accessibility problems in general."
  ],
  "answer": 0,
  "explanation": "This finding includes the specific location, the violated criterion and level, the concrete impact and severity, and an actionable, complete remediation plan - the standard components of a professional finding a development team can act on directly.",
  "questionType": "Audit Documentation"
},

/* ===== SCENARIO: Streaming Media - captions and audio description ===== */
{
  "domain": "domain1", "lesson": "Perceivable: Streaming Media Scenario", "learningObjective": "Determine whether multiple Success Criteria are involved in a realistic finding",
  "level": "A", "principle": "Perceivable", "guideline": "Time-based Media", "scNumber": "1.2.2", "scName": "Captions (Prerecorded)",
  "id": "SCEN-STREAM01-Q1", "difficulty": "hard", "mode": "challenge",
  "question": "A streaming platform's original series has accurate captions for dialogue, but sound effects and music cues important to the plot (a phone ringing off-screen, ominous music signaling danger) are never captioned, only spoken dialogue is. Separately, none of the platform's original films have an audio description track available in any language. Which Success Criteria are implicated, and at what levels?",
  "choices": [
    "1.2.2 Captions (Prerecorded), Level A, for incomplete captions missing meaningful non-dialogue audio, and 1.2.3 Audio Description or Media Alternative (Prerecorded), Level A, for the completely missing audio description",
    "Only 1.2.2 applies; audio description is an optional enhancement with no WCAG requirement at any level",
    "Only 1.2.5 Audio Description (Prerecorded) applies, at Level AAA, since audio description is always an AAA-only concern",
    "Neither applies, since streaming platforms are not covered by WCAG"
  ],
  "answer": 0,
  "explanation": "1.2.2 requires captions for all prerecorded audio content, which includes meaningful sound effects and music cues carrying plot information, not just spoken dialogue - so partial captioning still fails this Level A criterion. Separately, 1.2.3, also Level A, requires either an audio description track or a full media alternative for video content; having neither for any film is a distinct, additional failure.",
  "questionType": "Multi-Success-Criterion Analysis"
},
{
  "domain": "domain1", "lesson": "Perceivable: Streaming Media Scenario", "learningObjective": "Determine affected users for a combined set of findings",
  "level": "A", "principle": "Perceivable", "guideline": "Time-based Media", "scNumber": "1.2.2", "scName": "Captions (Prerecorded)",
  "id": "SCEN-STREAM01-Q2", "difficulty": "medium", "mode": "practice",
  "question": "Which two distinct user groups are affected by these two separate findings, and how does the impact differ between them?",
  "choices": [
    "Deaf and hard-of-hearing users lose plot-relevant audio information the incomplete captions omit, while blind and low-vision users lose all access to visually-conveyed plot information with no audio description track available at all",
    "Both findings affect exactly the same group of users in exactly the same way",
    "Only sighted, hearing users are affected, since captions and audio description are convenience features for everyone",
    "Neither finding affects any specific user group differently than any other"
  ],
  "answer": 0,
  "explanation": "These are genuinely distinct populations with distinct needs: incomplete captions specifically harm deaf and hard-of-hearing viewers who rely entirely on text for audio information, while a missing audio description track specifically harms blind and low-vision viewers who rely on narration to understand what's happening visually. Treating them as the same issue would miss that two different remediations are needed for two different audiences.",
  "questionType": "User Impact"
},
{
  "domain": "domain1", "lesson": "Perceivable: Streaming Media Scenario", "learningObjective": "Determine implementation priority for a combined set of findings",
  "level": "A", "principle": "Perceivable", "guideline": "Time-based Media", "scNumber": "1.2.2", "scName": "Captions (Prerecorded)",
  "id": "SCEN-STREAM01-Q3", "difficulty": "hard", "mode": "challenge",
  "question": "Given limited production budget this quarter, which prioritization approach is most defensible?",
  "choices": [
    "Prioritize completing accurate captions (including meaningful sound effects and music cues) across the existing catalog first, since it is both a Level A requirement already partially implemented and a comparatively lower production cost than producing new audio description tracks, while scoping and budgeting audio description as a tracked, resourced initiative rather than leaving it unaddressed indefinitely",
    "Ignore both findings this quarter since neither is technically a 'bug'",
    "Only address audio description, since it is more visually noticeable in marketing materials",
    "Address both findings with equal budget allocation regardless of relative production cost or current completion status"
  ],
  "answer": 0,
  "explanation": "Both are Level A requirements, but practical prioritization also considers cost and current state: completing already-partial captions is typically far cheaper than producing new audio description tracks from scratch, making it a faster near-term win, while audio description still needs to be genuinely planned and resourced rather than deprioritized indefinitely just because it costs more.",
  "questionType": "Prioritization"
},

/* ===== SCENARIO: Enterprise dashboard - data visualization ===== */
{
  "domain": "domain1", "lesson": "Perceivable: Enterprise Dashboard Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic enterprise dashboard scenario",
  "level": "AA", "principle": "Perceivable", "guideline": "Distinguishable", "scNumber": "1.4.11", "scName": "Non-text Contrast",
  "id": "SCEN-DASH01-Q1", "difficulty": "hard", "mode": "challenge",
  "question": "An enterprise sales dashboard displays a multi-line chart where each of six sales regions is distinguished only by line color, several of which have very similar light pastel shades with low contrast against both the white background and each other, and no pattern, marker shape, or direct labeling distinguishes the lines. Which Success Criterion is most directly implicated by the low-contrast line colors themselves?",
  "choices": ["1.4.11 Non-text Contrast", "1.4.1 Use of Color", "2.4.6 Headings and Labels", "3.3.2 Labels or Instructions"],
  "answer": 0,
  "explanation": "1.4.11 requires that graphical objects necessary to understand content, such as chart lines conveying data, meet a 3:1 contrast ratio against adjacent colors. Faint pastel lines with low contrast against the background and each other fail this specific requirement, distinct from (though related to) the color-only distinction issue.",
  "questionType": "Application"
},
{
  "domain": "domain1", "lesson": "Perceivable: Enterprise Dashboard Scenario", "learningObjective": "Determine whether multiple Success Criteria are involved in a realistic finding",
  "level": "AA", "principle": "Perceivable", "guideline": "Distinguishable", "scNumber": "1.4.1", "scName": "Use of Color",
  "id": "SCEN-DASH01-Q2", "difficulty": "hard", "mode": "challenge",
  "question": "Beyond the contrast issue, the chart also has no pattern, marker shape, or direct labeling distinguishing the six lines, and hovering over a line shows a tooltip with the exact value but the tooltip is not reachable by keyboard at all. Identify all the Success Criteria this combined scenario implicates.",
  "choices": [
    "1.4.11 Non-text Contrast (low line contrast), 1.4.1 Use of Color (lines distinguished only by color, no pattern or label), and 2.1.1 Keyboard (the data tooltip is mouse-hover-only with no keyboard equivalent)",
    "Only 1.4.11 applies; the other issues are cosmetic preferences, not WCAG requirements",
    "Only 2.1.1 applies, since keyboard access is always the most important criterion in any finding",
    "This scenario does not implicate any Success Criterion since dashboards are internal tools, not public web content"
  ],
  "answer": 0,
  "explanation": "This realistic scenario spans three distinct requirements: 1.4.11 for the chart lines' own contrast, 1.4.1 for relying on color alone (with no pattern or label) to distinguish the six data series, and 2.1.1 for the tooltip data being reachable only via mouse hover with no keyboard-accessible equivalent. Internal enterprise tools are also commonly covered by the same accessibility obligations as public-facing sites in most organizational policies, so 'internal only' does not exempt this dashboard.",
  "questionType": "Multi-Success-Criterion Analysis"
},
{
  "domain": "domain1", "lesson": "Perceivable: Enterprise Dashboard Scenario", "learningObjective": "Determine affected users for a combined set of findings",
  "level": "AA", "principle": "Perceivable", "guideline": "Distinguishable", "scNumber": "1.4.11", "scName": "Non-text Contrast",
  "id": "SCEN-DASH01-Q3", "difficulty": "hard", "mode": "challenge",
  "question": "Which employees are most severely affected by this combination of chart issues, and what is the real-world consequence for their job function?",
  "choices": [
    "A sales analyst with low vision or color vision deficiency cannot distinguish regional performance lines at all, and a keyboard-only or screen-reader-using analyst cannot access the exact data values behind the chart, together preventing them from doing core parts of their job that sighted, mouse-using colleagues can do easily",
    "Only customers are affected, since this is an internal dashboard with no public users",
    "No one is meaningfully affected since the underlying data is also available in a spreadsheet export elsewhere",
    "Only users on older browsers are affected"
  ],
  "answer": 0,
  "explanation": "This is a workplace accessibility issue with direct employment consequences: an affected employee cannot perform core job functions (interpreting sales performance data) as effectively as unaffected colleagues, which is exactly the kind of real, job-relevant harm accessibility findings in internal tools are meant to catch, regardless of whether the raw data exists elsewhere in a less usable format.",
  "questionType": "User Impact"
},
{
  "domain": "domain1", "lesson": "Perceivable: Enterprise Dashboard Scenario", "learningObjective": "Recommend a remediation strategy addressing multiple related findings",
  "level": "AA", "principle": "Perceivable", "guideline": "Distinguishable", "scNumber": "1.4.11", "scName": "Non-text Contrast",
  "id": "SCEN-DASH01-Q4", "difficulty": "hard", "mode": "challenge",
  "question": "What remediation plan most efficiently addresses all three findings (contrast, color-only distinction, and keyboard-inaccessible data) together?",
  "choices": [
    "Redesign the chart with higher-contrast, distinguishable colors paired with distinct line patterns or markers per region, add direct end-of-line labels or a keyboard-accessible legend, and expose the underlying data through a keyboard-focusable element (such as an accessible data table alongside the chart, or keyboard-triggerable tooltips) rather than mouse-hover-only",
    "Only fix the contrast issue and leave the color-only distinction and keyboard access unresolved",
    "Replace the chart with a static screenshot image with descriptive alt text summarizing the whole dataset",
    "Add a disclaimer stating the dashboard is best viewed with a mouse"
  ],
  "answer": 0,
  "explanation": "A coordinated redesign, addressing color/contrast, adding non-color distinguishing cues, and providing keyboard-accessible access to the underlying data (often via an accompanying accessible data table, a well-established pattern for accessible charts) resolves all three findings together, and preserves the chart's genuine data value rather than reducing it to a static image that loses precision and interactivity for everyone.",
  "questionType": "Remediation Planning"
}
];
window.WCAG_LAB_EXPANSION_SCENARIOS_2 = WCAG_LAB_EXPANSION_SCENARIOS_2;

/* WCAG Accessibility Lab expansion - Scenario batch 3: Restaurant Ordering, Authentication, Documents, Mobile Applications, Forms */
var WCAG_LAB_EXPANSION_SCENARIOS_3 = [

/* ===== SCENARIO: Restaurant ordering - modifier selection ===== */
{
  "domain": "domain3", "lesson": "Understandable: Restaurant Ordering Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic food ordering scenario",
  "level": "A", "principle": "Understandable", "guideline": "Input Assistance", "scNumber": "3.3.1", "scName": "Error Identification",
  "id": "SCEN-REST01-Q1", "difficulty": "medium", "mode": "practice",
  "question": "A restaurant's online ordering app requires selecting exactly one size and at least one topping before adding a pizza to the cart. When a customer taps 'Add to Cart' without selecting a size, the button silently does nothing - no error message appears anywhere, visually or in the accessible tree. Which Success Criterion is most directly violated?",
  "choices": ["3.3.1 Error Identification", "2.4.6 Headings and Labels", "1.3.3 Sensory Characteristics", "2.5.3 Label in Name"],
  "answer": 0,
  "explanation": "3.3.1 requires that when an input error is automatically detected, the specific item in error is identified and described to the user in text. A button that silently does nothing, with no error identified anywhere, fails this criterion for every user, not only assistive technology users, though the impact is most severe for screen reader users who have no visual cue to notice something didn't work at all.",
  "questionType": "Application"
},
{
  "domain": "domain3", "lesson": "Understandable: Restaurant Ordering Scenario", "learningObjective": "Determine affected users for a real-world accessibility finding",
  "level": "A", "principle": "Understandable", "guideline": "Input Assistance", "scNumber": "3.3.1", "scName": "Error Identification",
  "id": "SCEN-REST01-Q2", "difficulty": "medium", "mode": "practice",
  "question": "Which users experience the most severe impact from the silent 'Add to Cart' failure, and why?",
  "choices": [
    "Screen reader users experience the most severe impact, since they have no visual cue at all that anything went wrong and may repeatedly tap the same non-functioning button with no way to diagnose why",
    "Sighted mouse users experience the most severe impact, since they can see the button clearly",
    "No user group is meaningfully more affected than another",
    "Only users ordering more than one pizza are affected"
  ],
  "answer": 0,
  "explanation": "A sighted user, while still poorly served, might eventually notice the cart count never increases and infer something is wrong. A screen reader user gets no equivalent signal at all - the interaction simply appears to do nothing, with no announced feedback to diagnose or act on, making the failure effectively total for them.",
  "questionType": "User Impact"
},
{
  "domain": "domain3", "lesson": "Understandable: Restaurant Ordering Scenario", "learningObjective": "Determine the root cause of a realistic accessibility finding",
  "level": "A", "principle": "Understandable", "guideline": "Input Assistance", "scNumber": "3.3.1", "scName": "Error Identification",
  "id": "SCEN-REST01-Q3", "difficulty": "hard", "mode": "challenge",
  "question": "Investigation shows the 'Add to Cart' button's validation logic runs correctly (it does detect the missing size selection), but the code path that would display an error message was left commented out during a recent redesign and never restored. What is the most accurate root cause characterization?",
  "choices": [
    "A regression: validation logic and error-display logic became decoupled during a change, so the detection still works but the resulting user-facing communication was silently lost",
    "The validation logic itself is fundamentally broken and does not detect the missing selection at all",
    "The issue is caused by the customer's device, not the application",
    "There is no real root cause; this is simply an isolated, one-time coincidence"
  ],
  "answer": 0,
  "explanation": "Correctly identifying this as a regression, where error detection and error communication became disconnected during a change, points directly at what needs fixing (restoring the display logic) and flags a process gap worth addressing (accessibility-relevant code paths should be covered by tests that would have caught this during the redesign), rather than treating it as a one-off mystery.",
  "questionType": "Root Cause Analysis"
},
{
  "domain": "domain3", "lesson": "Understandable: Restaurant Ordering Scenario", "learningObjective": "Recommend an appropriate remediation strategy for a real-world accessibility finding",
  "level": "A", "principle": "Understandable", "guideline": "Input Assistance", "scNumber": "3.3.1", "scName": "Error Identification",
  "id": "SCEN-REST01-Q4", "difficulty": "medium", "mode": "practice",
  "question": "What is the most appropriate remediation for the silent Add to Cart failure?",
  "choices": [
    "Restore a clear, specific, programmatically announced error message identifying that a size must be selected, ideally moving focus to or near the missing selection, and add automated test coverage so this regression cannot silently reoccur",
    "Automatically select the smallest size by default so the error can never occur",
    "Disable the Add to Cart button entirely until all fields are filled, with no explanation of why it is disabled",
    "Add a generic site-wide banner reading 'Errors may occur' at the top of every page"
  ],
  "answer": 0,
  "explanation": "The direct fix restores specific, announced error identification exactly as 3.3.1 requires. Adding test coverage addresses the root cause (an untested regression), preventing recurrence - a more complete remediation than the fix alone. Silently defaulting the size or leaving the button permanently, unexplainedly disabled would each create new usability problems rather than genuinely resolving the issue.",
  "questionType": "Remediation Planning"
},
{
  "domain": "domain3", "lesson": "Understandable: Restaurant Ordering Scenario", "learningObjective": "Write a professional audit finding for a real-world accessibility issue",
  "level": "A", "principle": "Understandable", "guideline": "Input Assistance", "scNumber": "3.3.1", "scName": "Error Identification",
  "id": "SCEN-REST01-Q5", "difficulty": "hard", "mode": "challenge",
  "question": "Which audit finding write-up best reflects professional standards for this issue?",
  "choices": [
    "Finding: 'Add to Cart' button (Pizza Customization screen) fails silently with no error message when required size selection is missing, violating WCAG 3.3.1 (Level A). Root cause: error-display logic was disconnected from validation logic during a recent redesign. Impact: all users receive no feedback; screen reader users experience total failure with no way to diagnose the issue. Recommendation: restore announced, specific error messaging and add regression test coverage.",
    "Finding: The Add to Cart button sometimes does not work.",
    "Finding: Ordering pizza is difficult for some people.",
    "Finding: Fix the button so it works properly for everyone all the time."
  ],
  "answer": 0,
  "explanation": "This finding specifies the exact location, cites the violated criterion and level, explains the root cause discovered during investigation, differentiates impact severity across user groups, and gives a two-part recommendation addressing both the symptom and its cause - the depth expected of a professional accessibility audit finding.",
  "questionType": "Audit Documentation"
},

/* ===== SCENARIO: Authentication - password reset flow ===== */
{
  "domain": "domain3", "lesson": "Understandable: Authentication Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic authentication scenario",
  "level": "AA", "principle": "Understandable", "guideline": "Input Assistance", "scNumber": "3.3.8", "scName": "Accessible Authentication (Minimum)",
  "id": "SCEN-AUTH01-Q1", "difficulty": "medium", "mode": "practice",
  "question": "An enterprise software platform's login page requires users to solve a puzzle (drag a jigsaw piece to complete an image) as a required anti-bot check, with no alternative verification method offered at all. A user with a motor disability who cannot perform the precise drag interaction cannot log in through any path. Which Success Criterion is most directly violated?",
  "choices": ["3.3.8 Accessible Authentication (Minimum)", "2.5.7 Dragging Movements", "2.2.1 Timing Adjustable", "3.2.2 On Input"],
  "answer": 0,
  "explanation": "3.3.8 prohibits requiring a cognitive function test, which includes puzzle-solving interactions, as part of authentication unless an alternative method not relying on a cognitive function test is also offered, among other narrow exceptions. A drag-based puzzle with no alternative fails this Level AA requirement directly, and also happens to overlap with 2.5.7's dragging concern, though 3.3.8 is the more specifically applicable criterion given the authentication context.",
  "questionType": "Application"
},
{
  "domain": "domain3", "lesson": "Understandable: Authentication Scenario", "learningObjective": "Assign an appropriate severity rating to a real-world accessibility finding",
  "level": "AA", "principle": "Understandable", "guideline": "Input Assistance", "scNumber": "3.3.8", "scName": "Accessible Authentication (Minimum)",
  "id": "SCEN-AUTH01-Q2", "difficulty": "hard", "mode": "challenge",
  "question": "This puzzle-based check gates every single login attempt platform-wide, with no alternative offered under any circumstance. How should this be rated?",
  "choices": [
    "Critical/Blocking - it prevents affected users from accessing their account at all, for every single login, which is as close to total exclusion from the product as a finding can get",
    "Low/Minor - CAPTCHA-style checks are industry standard and expected",
    "Medium/Moderate - since only login is affected, not every feature of the platform",
    "This cannot be rated as a WCAG issue since bot prevention is a security requirement, not an accessibility concern"
  ],
  "answer": 0,
  "explanation": "Authentication is the single point every other feature of a platform depends on; failing to log in means total exclusion from everything else the product offers, not just one feature. WCAG's 3.3.8 and 3.3.9 exist specifically because bot-prevention and accessibility are not actually in conflict - accessible alternatives (like passwordless links or object recognition) exist that satisfy both security and access needs together.",
  "questionType": "Severity Assessment"
},
{
  "domain": "domain3", "lesson": "Understandable: Authentication Scenario", "learningObjective": "Recommend an appropriate remediation strategy for a real-world accessibility finding",
  "level": "AA", "principle": "Understandable", "guideline": "Input Assistance", "scNumber": "3.3.8", "scName": "Accessible Authentication (Minimum)",
  "id": "SCEN-AUTH01-Q3", "difficulty": "medium", "mode": "practice",
  "question": "What is the most appropriate remediation for the drag-puzzle-only login check?",
  "choices": [
    "Offer at least one alternative verification method that does not rely on a cognitive function test, such as an email-based magic link, an SMS code, or a simpler object-recognition challenge, alongside or instead of the drag puzzle",
    "Remove all bot-prevention measures from the login page entirely",
    "Make the puzzle piece larger so it is easier to see",
    "Add a text explanation of how to complete the puzzle, with no alternative method offered"
  ],
  "answer": 0,
  "explanation": "3.3.8 does not require removing anti-bot protection; it requires that at least one path to authenticate not depend on a cognitive function test like solving a puzzle. Adding a genuinely alternative method (not just instructions for the same puzzle) satisfies the criterion while preserving the organization's legitimate security goals.",
  "questionType": "Remediation Planning"
},
{
  "domain": "domain3", "lesson": "Understandable: Authentication Scenario", "learningObjective": "Choose the best next action given a security team's objection",
  "level": "AA", "principle": "Understandable", "guideline": "Input Assistance", "scNumber": "3.3.8", "scName": "Accessible Authentication (Minimum)",
  "id": "SCEN-AUTH01-Q4", "difficulty": "hard", "mode": "challenge",
  "question": "The security team objects that removing the puzzle requirement will increase bot signups. What is the accessibility consultant's best next action?",
  "choices": [
    "Clarify that 3.3.8 does not require removing the puzzle; it requires adding at least one genuinely accessible alternative path (such as a magic link or rate-limited SMS code) alongside it, which can coexist with continued bot protection for the primary flow",
    "Concede the point entirely and drop the finding, since security concerns always override accessibility requirements",
    "Escalate immediately to executive leadership without first proposing any technical compromise",
    "Insist the puzzle be removed entirely with no bot protection replacement of any kind"
  ],
  "answer": 0,
  "explanation": "A skilled consultant recognizes this as a false tradeoff and proposes the actual requirement (an additional accessible path, not removal of security measures), which is usually enough to resolve the objection technically. Escalating or capitulating immediately, without first offering the accurate, less disruptive interpretation of the requirement, skips a step that often resolves the disagreement productively.",
  "questionType": "Best Next Action"
},

/* ===== SCENARIO: Documents - insurance policy PDF ===== */
{
  "domain": "domain1", "lesson": "Perceivable: Documents Scenario", "learningObjective": "Determine whether multiple Success Criteria are involved in a realistic document scenario",
  "level": "A", "principle": "Perceivable", "guideline": "Adaptable", "scNumber": "1.3.1", "scName": "Info and Relationships",
  "id": "SCEN-DOC01-Q1", "difficulty": "hard", "mode": "challenge",
  "question": "An insurance company's policy summary PDF has a real text layer (not scanned), but has no heading structure at all (every section title is just larger bold text with no tag), no table headers on its premium comparison table, and the document's title metadata reads 'Untitled-47'. Which Success Criteria are implicated?",
  "choices": [
    "1.3.1 Info and Relationships, for both the missing heading structure and the missing table header associations, and 2.4.2 Page Titled, for the meaningless document title metadata",
    "Only 1.1.1 Non-text Content applies, since PDFs are always evaluated under that single criterion",
    "Only 2.4.6 Headings and Labels applies; 1.3.1 does not apply to PDF documents",
    "No criteria apply, since this document has a real text layer and is therefore already accessible"
  ],
  "answer": 0,
  "explanation": "1.3.1 applies to PDFs just as it does to HTML: bold, larger text with no real heading tag, and a table with no header-cell association, both fail to expose structure programmatically. The meaningless 'Untitled-47' title is a distinct, separate failure of 2.4.2, which requires pages (and, by the same underlying principle, documents) to have a title describing their topic or purpose - 'Untitled-47' fails to do that entirely.",
  "questionType": "Multi-Success-Criterion Analysis"
},
{
  "domain": "domain1", "lesson": "Perceivable: Documents Scenario", "learningObjective": "Determine affected users for a realistic document accessibility finding",
  "level": "A", "principle": "Perceivable", "guideline": "Adaptable", "scNumber": "1.3.1", "scName": "Info and Relationships",
  "id": "SCEN-DOC01-Q2", "difficulty": "medium", "mode": "practice",
  "question": "A policyholder using a screen reader opens this PDF to review their premium comparison table before renewal. What do they experience?",
  "choices": [
    "They cannot navigate by heading at all since none are tagged, and the premium table is announced as a disconnected stream of numbers and labels with no way to tell which premium applies to which coverage tier",
    "They experience the document exactly as a sighted user does, since the text layer is present",
    "They cannot open the document at all",
    "They hear only the document's meaningless title, 'Untitled-47', and nothing else"
  ],
  "answer": 0,
  "explanation": "A present text layer means the words themselves are readable, but without real heading and table structure, the screen reader has no way to convey document organization or table relationships - the policyholder hears a flat stream of numbers and terms with no way to reliably determine which premium value corresponds to which coverage tier, a serious practical problem for a document meant to inform a renewal decision.",
  "questionType": "User Impact"
},
{
  "domain": "domain1", "lesson": "Perceivable: Documents Scenario", "learningObjective": "Recommend a remediation strategy addressing multiple related document findings",
  "level": "A", "principle": "Perceivable", "guideline": "Adaptable", "scNumber": "1.3.1", "scName": "Info and Relationships",
  "id": "SCEN-DOC01-Q3", "difficulty": "hard", "mode": "challenge",
  "question": "What is the most efficient remediation approach for this PDF, given all three findings identified?",
  "choices": [
    "Re-tag the PDF with real heading levels reflecting the document's actual outline, add proper header-cell associations to the premium table, and set a meaningful title in the document's metadata, ideally by fixing the source document (word processor or design file) and re-exporting rather than patching the PDF directly",
    "Only fix the title metadata, since that is the fastest change to make",
    "Convert the PDF to a scanned image, which resolves tagging issues by removing the text layer entirely",
    "Leave the PDF as is and instead train customer service staff to read the table aloud over the phone upon request"
  ],
  "answer": 0,
  "explanation": "All three issues stem from the document's structural tagging and metadata, and are most reliably and durably fixed together by correcting the source document and re-exporting with proper tags, headings, table structure, and title - consistent with the 'build it in from the start' principle for document accessibility. Converting to a scanned image would make things dramatically worse by removing the text layer entirely, and a phone-based workaround does not remediate the digital document itself.",
  "questionType": "Remediation Planning"
},

/* ===== SCENARIO: Mobile application - gesture-only navigation ===== */
{
  "domain": "domain2", "lesson": "Operable: Mobile Application Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic mobile app scenario",
  "level": "A", "principle": "Operable", "guideline": "Input Modalities", "scNumber": "2.5.1", "scName": "Pointer Gestures",
  "id": "SCEN-MOBILE01-Q1", "difficulty": "medium", "mode": "practice",
  "question": "A mobile photo-editing app requires a two-finger pinch gesture to zoom into a photo for detail editing, with no single-tap zoom button, slider, or menu-based alternative anywhere in the interface. A user with only one functional hand cannot perform the pinch gesture at all. Which Success Criterion is most directly violated?",
  "choices": ["2.5.1 Pointer Gestures", "2.5.7 Dragging Movements", "1.4.10 Reflow", "2.1.2 No Keyboard Trap"],
  "answer": 0,
  "explanation": "2.5.1 requires that functionality using a multipoint or path-based gesture (like a two-finger pinch) also be operable with a single-pointer action with no path-based movement required, unless the multipoint gesture is essential. Zoom functionality is a textbook case where a single-tap zoom button or slider provides an equivalent, non-essential alternative that should exist alongside the gesture.",
  "questionType": "Application"
},
{
  "domain": "domain2", "lesson": "Operable: Mobile Application Scenario", "learningObjective": "Determine the root cause of a realistic mobile accessibility finding",
  "level": "A", "principle": "Operable", "guideline": "Input Modalities", "scNumber": "2.5.1", "scName": "Pointer Gestures",
  "id": "SCEN-MOBILE01-Q2", "difficulty": "hard", "mode": "challenge",
  "question": "Investigation reveals the design team explicitly chose pinch-to-zoom as the 'primary' interaction to keep the interface visually minimal, deliberately omitting a zoom button from early mockups as a specific design decision, not an oversight. How does this change the remediation conversation?",
  "choices": [
    "The remediation still needs a single-pointer alternative regardless of the design rationale, but understanding this was a deliberate minimalist choice means the recommendation should include an accessible way to integrate a zoom control without undermining the design goal, such as a discoverable icon or a settings toggle, rather than assuming the team simply forgot",
    "Since it was a deliberate design decision rather than a mistake, no remediation is required",
    "The finding should be closed as 'by design' and not tracked further",
    "The finding becomes more severe and should now be escalated as intentional discrimination, changing nothing about the technical recommendation"
  ],
  "answer": 0,
  "explanation": "WCAG conformance does not have a 'deliberate design choice' exception for a genuinely non-essential gesture-only interaction; the requirement still applies. But understanding the underlying design goal (visual minimalism) helps the consultant propose a remediation the design team is more likely to accept quickly, such as a subtly integrated icon, rather than treating the finding purely as a technical bug report disconnected from why the gap exists.",
  "questionType": "Root Cause Analysis"
},
{
  "domain": "domain2", "lesson": "Operable: Mobile Application Scenario", "learningObjective": "Choose the best next action when a design team resists a recommended fix",
  "level": "A", "principle": "Operable", "guideline": "Input Modalities", "scNumber": "2.5.1", "scName": "Pointer Gestures",
  "id": "SCEN-MOBILE01-Q3", "difficulty": "hard", "mode": "challenge",
  "question": "The design team is willing to add a zoom control but is concerned it will clutter their minimalist interface. What is the accessibility consultant's best next action?",
  "choices": [
    "Propose specific, low-visual-footprint patterns already used successfully elsewhere (a small persistent icon, a control that appears on first touch and stays available, or a settings-based toggle) rather than simply repeating that a zoom control is required with no design input",
    "Insist on a large, permanently visible zoom slider taking up a quarter of the screen with no compromise",
    "Drop the recommendation entirely to avoid conflict with the design team",
    "Escalate to executive leadership immediately without attempting to resolve the design concern directly with the team first"
  ],
  "answer": 0,
  "explanation": "An effective consultant treats the design team's constraint as a real design problem to solve collaboratively, not an obstacle to overrule or capitulate to. Offering specific, proven low-footprint patterns is far more likely to produce a shipped fix than either an inflexible technical demand or simply dropping the requirement.",
  "questionType": "Best Next Action"
}
];
window.WCAG_LAB_EXPANSION_SCENARIOS_3 = WCAG_LAB_EXPANSION_SCENARIOS_3;

/* WCAG Accessibility Lab expansion - Scenario batch 4: Enterprise HR tool, Forms, Checkout review, Direct messaging */
var WCAG_LAB_EXPANSION_SCENARIOS_4 = [

/* ===== SCENARIO: Enterprise HR application - performance review form ===== */
{
  "domain": "domain2", "lesson": "Operable: Enterprise Application Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic enterprise HR scenario",
  "level": "A", "principle": "Operable", "guideline": "Enough Time", "scNumber": "2.2.5", "scName": "Re-authenticating",
  "id": "SCEN-ENT01-Q1", "difficulty": "hard", "mode": "challenge",
  "question": "An HR platform's annual performance review form times out after 15 minutes of inactivity, and when a manager who has spent 40 minutes writing detailed feedback for a direct report is prompted to re-authenticate, the entire form's contents are lost on re-login with no way to recover the draft. Which Success Criterion is most directly violated?",
  "choices": ["2.2.5 Re-authenticating", "2.2.1 Timing Adjustable", "3.3.4 Error Prevention (Legal, Financial, Data)", "1.3.1 Info and Relationships"],
  "answer": 0,
  "explanation": "2.2.5 requires that when an authenticated session expires, data entered by the user is preserved (or can be resumed) after re-authenticating, so their work is not lost. Losing 40 minutes of written feedback on session timeout is exactly the failure this criterion exists to prevent.",
  "questionType": "Application"
},
{
  "domain": "domain2", "lesson": "Operable: Enterprise Application Scenario", "learningObjective": "Determine whether multiple Success Criteria are involved in a realistic finding",
  "level": "A", "principle": "Operable", "guideline": "Enough Time", "scNumber": "2.2.6", "scName": "Timeouts",
  "id": "SCEN-ENT01-Q2", "difficulty": "hard", "mode": "challenge",
  "question": "Further testing shows the 15-minute timeout is never disclosed anywhere before it happens, and there is also no warning in the final two minutes before expiration. Which additional Success Criteria does this reveal, beyond 2.2.5?",
  "choices": [
    "2.2.6 Timeouts, since users are never told in advance how long they have before inactivity could cause data loss, and 2.2.1 Timing Adjustable, since there is no warning-and-extension mechanism before the timeout occurs",
    "Only 2.2.1 applies; 2.2.6 is not a real WCAG success criterion",
    "1.4.13 Content on Hover or Focus applies, since the issue involves a form field",
    "No additional criteria apply beyond 2.2.5"
  ],
  "answer": 0,
  "explanation": "This scenario actually spans all three closely related timing criteria together: 2.2.1 (no warning or extension near expiration), 2.2.5 (data lost after re-authentication), and 2.2.6 (no advance disclosure of the timeout duration at all) - together forming a complete failure across every angle WCAG addresses for session timing.",
  "questionType": "Multi-Success-Criterion Analysis"
},
{
  "domain": "domain2", "lesson": "Operable: Enterprise Application Scenario", "learningObjective": "Assign severity to a combined set of related findings",
  "level": "A", "principle": "Operable", "guideline": "Enough Time", "scNumber": "2.2.5", "scName": "Re-authenticating",
  "id": "SCEN-ENT01-Q3", "difficulty": "hard", "mode": "challenge",
  "question": "How should an auditor rate the combined severity of these three timing-related findings, given performance reviews are a mandatory, time-sensitive HR process affecting every employee annually?",
  "choices": [
    "High/Serious to Critical - repeated, undisclosed data loss on a mandatory, sensitive business process affects every manager in the organization annually and can cause real professional and interpersonal harm (having to redo detailed personal feedback, or giving up and writing something rushed)",
    "Low/Minor - performance reviews are not part of the product's core commercial function",
    "Medium/Moderate - the impact is limited since it only affects users who type slowly",
    "This cannot be rated since HR software is exempt from severity assessment"
  ],
  "answer": 0,
  "explanation": "Severity considers both breadth (every manager, every year) and depth of harm (losing substantial, thoughtfully written personal feedback, with real consequences for both the manager's time and the quality of feedback the employee ultimately receives). A mandatory, sensitive, universally-encountered process failing this way merits a High to Critical rating even though it doesn't block a purchase or login.",
  "questionType": "Severity Assessment"
},
{
  "domain": "domain2", "lesson": "Operable: Enterprise Application Scenario", "learningObjective": "Recommend a remediation strategy addressing multiple related findings",
  "level": "A", "principle": "Operable", "guideline": "Enough Time", "scNumber": "2.2.1", "scName": "Timing Adjustable",
  "id": "SCEN-ENT01-Q4", "difficulty": "hard", "mode": "challenge",
  "question": "What remediation approach addresses all three timing findings together most effectively?",
  "choices": [
    "Implement auto-saving of form data at regular intervals (addressing 2.2.5's data-preservation requirement even if a timeout occurs), add a warning with an extension option before the session expires (addressing 2.2.1), and disclose the session duration policy in help documentation or on first use (addressing 2.2.6)",
    "Only extend the timeout to 60 minutes with no other changes",
    "Remove authentication entirely from the performance review form",
    "Add a warning message but take no action on data preservation or advance disclosure"
  ],
  "answer": 0,
  "explanation": "A robust, layered fix, auto-save as a safety net, a warning-and-extension mechanism to prevent the timeout from being reached unnecessarily, and advance disclosure so users understand the constraint from the start, together closes all three gaps rather than addressing only one symptom of the broader timing problem.",
  "questionType": "Remediation Planning"
},

/* ===== SCENARIO: Checkout review page - price change without notice ===== */
{
  "domain": "domain3", "lesson": "Understandable: Shopping Cart Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic checkout scenario",
  "level": "A", "principle": "Understandable", "guideline": "Predictable", "scNumber": "3.2.2", "scName": "On Input",
  "id": "SCEN-SHOPCART01-Q1", "difficulty": "medium", "mode": "practice",
  "question": "On a checkout review page, changing the quantity of an item in a number input immediately and silently recalculates the order total and applies or removes a bulk-discount tier, with no confirmation step and no advance notice that changing quantity would do this. A user who changes quantity from 2 to 3 to check pricing is surprised when the total drops unexpectedly due to a newly applied discount they didn't know existed. Which Success Criterion is most relevant here, and is it actually violated?",
  "choices": [
    "3.2.2 On Input is relevant, but this is likely NOT a violation, since a total recalculating in response to a deliberate quantity change is an expected, direct consequence of that input, not an unexpected context change",
    "3.2.2 On Input is violated, since any total change after user input is automatically a violation regardless of context",
    "2.2.1 Timing Adjustable is violated, since the recalculation happens instantly",
    "1.4.1 Use of Color is violated, since the discount is shown in a different color"
  ],
  "answer": 0,
  "explanation": "3.2.2 prohibits unexpected context changes triggered by input, but a price total updating in direct, logical response to a quantity the user just changed is a normal, expected consequence of that specific input, not a surprising side effect unrelated to what the user did. This is a good example of correctly recognizing when a criterion does NOT apply, which is as important a skill as recognizing when it does.",
  "questionType": "Application"
},
{
  "domain": "domain3", "lesson": "Understandable: Shopping Cart Scenario", "learningObjective": "Identify a genuine violation within a related but non-violating scenario",
  "level": "A", "principle": "Understandable", "guideline": "Input Assistance", "scNumber": "3.3.4", "scName": "Error Prevention (Legal, Financial, Data)",
  "id": "SCEN-SHOPCART01-Q2", "difficulty": "hard", "mode": "challenge",
  "question": "On the same checkout page, clicking 'Place Order' immediately charges the customer's card with no review-and-confirm step of any kind - there is no order summary shown before the charge, and no way to catch a mistake before money changes hands. Which Success Criterion does this violate?",
  "choices": [
    "3.3.4 Error Prevention (Legal, Financial, Data), which requires that financial transactions be reversible, checked for errors with an opportunity to correct them, or confirmed before final submission",
    "3.2.2 On Input, the same criterion from the previous question, applied here as well",
    "2.4.3 Focus Order, since the button's position on the page is the issue",
    "1.3.2 Meaningful Sequence, since the order of steps is the issue"
  ],
  "answer": 0,
  "explanation": "3.3.4 specifically requires a safeguard, reversibility, error-checking with correction, or an explicit confirmation step, for submissions involving financial transactions. An instant charge with no review screen at all fails this Level AA... actually Level A requirement (Error Prevention for Legal, Financial, Data is Level A), regardless of how well the earlier quantity/discount interaction behaved.",
  "questionType": "Application"
},
{
  "domain": "domain3", "lesson": "Understandable: Shopping Cart Scenario", "learningObjective": "Recommend an appropriate remediation strategy for a real-world accessibility finding",
  "level": "A", "principle": "Understandable", "guideline": "Input Assistance", "scNumber": "3.3.4", "scName": "Error Prevention (Legal, Financial, Data)",
  "id": "SCEN-SHOPCART01-Q3", "difficulty": "medium", "mode": "practice",
  "question": "What is the most appropriate remediation for the instant-charge-with-no-review issue?",
  "choices": [
    "Add an explicit order review and confirmation step, displaying the final total, items, and shipping details, requiring a distinct confirming action before the charge is submitted",
    "Add a warning label near the Place Order button reading 'This will charge your card'",
    "Slow down the page load time so users have more time to notice the button before clicking it",
    "Remove the ability to change quantity on the checkout page entirely"
  ],
  "answer": 0,
  "explanation": "A genuine review-and-confirm step, showing the actual final details and requiring a separate confirming action, is the standard, WCAG-aligned way to satisfy 3.3.4 for financial transactions, giving every user, not just those relying on assistive technology, a real opportunity to catch a mistake before being charged.",
  "questionType": "Remediation Planning"
},

/* ===== SCENARIO: Direct messaging - read receipts and typing indicators ===== */
{
  "domain": "domain4", "lesson": "Robust: Social Media Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic messaging scenario",
  "level": "AA", "principle": "Robust", "guideline": "Compatible", "scNumber": "4.1.3", "scName": "Status Messages",
  "id": "SCEN-DM01-Q1", "difficulty": "medium", "mode": "practice",
  "question": "A direct messaging app shows a 'typing...' indicator and a 'Seen' read receipt that both appear and disappear dynamically below the message thread, with no live region markup of any kind. A screen reader user has no way to know the other person is typing or has read their message unless they manually re-navigate to that part of the screen repeatedly. Which Success Criterion is most directly violated?",
  "choices": ["4.1.3 Status Messages", "2.4.7 Focus Visible", "1.4.4 Resize Text", "3.1.2 Language of Parts"],
  "answer": 0,
  "explanation": "4.1.3 requires that status messages, dynamic updates like a typing indicator or a read receipt, be programmatically determinable and presented to assistive technology without requiring focus to move there. Two dynamic indicators with no live region announcement mechanism fail this criterion, leaving a screen reader user unaware of real-time conversational context sighted users get automatically.",
  "questionType": "Application"
},
{
  "domain": "domain4", "lesson": "Robust: Social Media Scenario", "learningObjective": "Recommend an appropriate remediation strategy avoiding overcorrection",
  "level": "AA", "principle": "Robust", "guideline": "Compatible", "scNumber": "4.1.3", "scName": "Status Messages",
  "id": "SCEN-DM01-Q2", "difficulty": "hard", "mode": "challenge",
  "question": "A developer proposes fixing this by making both the typing indicator and the read receipt assertive live regions, so they interrupt immediately every time either one changes. Why might this be an overcorrection, and what is the better approach?",
  "choices": [
    "A typing indicator can change very frequently as someone types and pauses repeatedly, so assertive announcements could become intrusive and repetitive; a polite live region is more appropriate for both the typing indicator and the read receipt, since neither is urgent, time-critical information like a security alert",
    "Assertive is always correct for any status message with no exceptions, so the developer's proposal is already ideal",
    "Neither indicator should use any live region at all, since typing indicators are purely decorative",
    "The read receipt should be assertive but the typing indicator should have no live region treatment at all"
  ],
  "answer": 0,
  "explanation": "Assertive announcements interrupt immediately and are meant for genuinely urgent information; a typing indicator that can toggle on and off rapidly as someone types in bursts would create a barrage of interruptions if assertive. A polite live region, which waits for a natural pause before announcing, is the better fit for both status updates here, matching the routine, non-urgent nature of the information.",
  "questionType": "Remediation Planning"
},
{
  "domain": "domain4", "lesson": "Robust: Social Media Scenario", "learningObjective": "Determine the root cause underlying a class of related findings",
  "level": "AA", "principle": "Robust", "guideline": "Compatible", "scNumber": "4.1.3", "scName": "Status Messages",
  "id": "SCEN-DM01-Q3", "difficulty": "hard", "mode": "challenge",
  "question": "An audit of the same messaging platform finds nearly identical missing-live-region issues on: the typing indicator, the read receipt, a 'message sent' confirmation, and a 'connection lost, reconnecting...' banner. What does this pattern suggest about the underlying root cause?",
  "choices": [
    "The engineering team likely has no established, shared pattern or component for announcing dynamic status updates to assistive technology, so every new dynamic UI element is built without one by default rather than as an exception",
    "Each of the four instances is an unrelated, coincidental bug with no shared cause",
    "The issue only affects users on a specific mobile carrier",
    "The messaging feature was recently deprecated and no longer requires fixes"
  ],
  "answer": 0,
  "explanation": "Four separate dynamic UI elements sharing the identical gap strongly suggests a missing shared pattern or reusable component for status announcements, rather than four independent mistakes - exactly the kind of systemic root cause that, once identified, points toward building one shared, well-tested live-region utility that every future dynamic status feature can use by default.",
  "questionType": "Root Cause Analysis"
}
];
window.WCAG_LAB_EXPANSION_SCENARIOS_4 = WCAG_LAB_EXPANSION_SCENARIOS_4;

/* WCAG Accessibility Lab expansion - Scenario batch 5: broadening SC coverage across Documents, Live Events, Forms, Mobile, Navigation */
var WCAG_LAB_EXPANSION_SCENARIOS_5 = [

/* ===== Meaningful Sequence / reading order ===== */
{
  "domain": "domain1", "lesson": "Perceivable: Enterprise Application Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic dashboard layout scenario",
  "level": "A", "principle": "Perceivable", "guideline": "Adaptable", "scNumber": "1.3.2", "scName": "Meaningful Sequence",
  "id": "SCEN-COVER01-Q1", "difficulty": "hard", "mode": "challenge",
  "question": "A dashboard uses CSS to visually reposition a 'critical alerts' panel to the top of the screen, even though it appears last in the underlying HTML source. A screen reader user navigating linearly hears the alerts panel announced last, after several less urgent widgets, even though sighted users see it first. Which Success Criterion is most directly violated?",
  "choices": ["1.3.2 Meaningful Sequence", "2.4.3 Focus Order", "1.3.1 Info and Relationships", "2.4.1 Bypass Blocks"],
  "answer": 0,
  "explanation": "1.3.2 requires that when the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined. Visually reordering critical content with CSS while leaving the DOM order unchanged creates exactly this mismatch: sighted and non-sighted users experience a meaningfully different order.",
  "questionType": "Application"
},
{
  "domain": "domain1", "lesson": "Perceivable: Enterprise Application Scenario", "learningObjective": "Assign severity to a realistic finding",
  "level": "A", "principle": "Perceivable", "guideline": "Adaptable", "scNumber": "1.3.2", "scName": "Meaningful Sequence",
  "id": "SCEN-COVER01-Q2", "difficulty": "hard", "mode": "challenge",
  "question": "Given that the misordered panel specifically contains critical system alerts an operator needs to act on quickly, how should this finding be rated?",
  "choices": [
    "High/Serious - a screen reader user may act on lower-priority information first, or miss the urgency of critical alerts entirely, in a monitoring context where timing matters",
    "Low/Minor - reading order rarely matters as long as all the content is present somewhere on the page",
    "Not applicable - CSS-based visual reordering is a design choice outside WCAG's scope",
    "Critical/Blocking - because any use of CSS positioning is automatically a Level A violation"
  ],
  "answer": 0,
  "explanation": "Content being present is not the same as content being usable in the right context; in a monitoring dashboard where response time to critical alerts matters, an operator encountering that information last, after routine widgets, could meaningfully delay their response - a real, high-impact consequence distinct from an aesthetic reordering issue on a low-stakes page.",
  "questionType": "Severity Assessment"
},

/* ===== Sensory Characteristics ===== */
{
  "domain": "domain1", "lesson": "Perceivable: Documents Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic instructional content scenario",
  "level": "A", "principle": "Perceivable", "guideline": "Adaptable", "scNumber": "1.3.3", "scName": "Sensory Characteristics",
  "id": "SCEN-COVER02-Q1", "difficulty": "medium", "mode": "practice",
  "question": "A tax-filing website's instructions read: \"To submit your return, click the green button on the right side of the screen.\" There is no other identifying text on or near the button. Which Success Criterion is most directly violated?",
  "choices": ["1.3.3 Sensory Characteristics", "1.4.1 Use of Color", "2.4.4 Link Purpose (In Context)", "3.3.2 Labels or Instructions"],
  "answer": 0,
  "explanation": "1.3.3 requires that instructions for understanding and operating content do not rely solely on sensory characteristics like shape, color, size, or location. Identifying a button only as 'the green button on the right' fails for users who cannot perceive color or visual position, such as blind users or users with color vision deficiency.",
  "questionType": "Application"
},
{
  "domain": "domain1", "lesson": "Perceivable: Documents Scenario", "learningObjective": "Recommend an appropriate remediation strategy",
  "level": "A", "principle": "Perceivable", "guideline": "Adaptable", "scNumber": "1.3.3", "scName": "Sensory Characteristics",
  "id": "SCEN-COVER02-Q2", "difficulty": "medium", "mode": "practice",
  "question": "What is the most appropriate remediation for the color-and-position-only button instructions?",
  "choices": [
    "Reference the button by its actual accessible name or visible text label (for example, 'click the Submit Return button'), in addition to or instead of its color and position",
    "Change the button's color to a more universally visible shade of green",
    "Move the button to a more central position on the page",
    "Add a sound effect when the button is focused"
  ],
  "answer": 0,
  "explanation": "The fix is instructional, not visual: referring to the control by its actual name or label works for every user regardless of how they perceive the page, while color and position changes only shift which specific sensory characteristic is being relied on rather than removing the dependency entirely.",
  "questionType": "Remediation Planning"
},

/* ===== Orientation ===== */
{
  "domain": "domain1", "lesson": "Perceivable: Mobile Application Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic mobile scenario",
  "level": "AA", "principle": "Perceivable", "guideline": "Adaptable", "scNumber": "1.3.4", "scName": "Orientation",
  "id": "SCEN-COVER03-Q1", "difficulty": "medium", "mode": "practice",
  "question": "A mobile banking app locks its entire interface to portrait orientation, refusing to render if the device is rotated to landscape. A user with a wheelchair-mounted tablet fixed in landscape orientation cannot use the app at all. Which Success Criterion is most directly violated?",
  "choices": ["1.3.4 Orientation", "1.4.10 Reflow", "2.5.4 Motion Actuation", "2.1.1 Keyboard"],
  "answer": 0,
  "explanation": "1.3.4 requires that content not restrict its view and operation to a single display orientation unless a specific orientation is essential. A banking app has no essential reason to require portrait-only orientation, making this a direct violation that fully blocks users whose device is physically fixed in landscape.",
  "questionType": "Application"
},

/* ===== Live captions ===== */
{
  "domain": "domain1", "lesson": "Perceivable: Streaming Media Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic live-event scenario",
  "level": "AA", "principle": "Perceivable", "guideline": "Time-based Media", "scNumber": "1.2.4", "scName": "Captions (Live)",
  "id": "SCEN-COVER04-Q1", "difficulty": "medium", "mode": "practice",
  "question": "A company streams its quarterly earnings call live with no captions, but posts an automatically generated transcript the following day. A deaf investor watching the live stream to react to the news in real time has no access to the audio content as it happens. Which Success Criterion is most directly violated?",
  "choices": ["1.2.4 Captions (Live)", "1.2.2 Captions (Prerecorded)", "1.2.1 Audio-only and Video-only (Prerecorded)", "1.2.8 Media Alternative (Prerecorded)"],
  "answer": 0,
  "explanation": "1.2.4 specifically requires captions for live audio content, distinct from 1.2.2's requirement for prerecorded content. A next-day transcript does not satisfy this criterion, since it does not serve users needing real-time access during the live event itself, which is often when the information has the most time-sensitive value (such as reacting to earnings news that moves stock prices immediately).",
  "questionType": "Application"
},
{
  "domain": "domain1", "lesson": "Perceivable: Streaming Media Scenario", "learningObjective": "Determine affected users and business impact for a real-world finding",
  "level": "AA", "principle": "Perceivable", "guideline": "Time-based Media", "scNumber": "1.2.4", "scName": "Captions (Live)",
  "id": "SCEN-COVER04-Q2", "difficulty": "hard", "mode": "challenge",
  "question": "Beyond the direct user-impact on deaf and hard-of-hearing investors, what additional real-world consequence does this finding carry for a publicly traded company?",
  "choices": [
    "Potential unequal access to material financial information at the moment it is disclosed, which can carry investor relations and regulatory implications beyond the accessibility finding itself",
    "No additional consequence; earnings calls are not typically covered by any accessibility-adjacent regulation",
    "The company's stock price will always drop as a direct result of this specific finding",
    "This only affects the company's marketing department, not its investor relations function"
  ],
  "answer": 0,
  "explanation": "For a publicly traded company, an earnings call is a moment of material information disclosure; unequal, delayed access for some investors is a consideration that extends beyond user experience into investor relations and, depending on jurisdiction, potential regulatory scrutiny, illustrating how accessibility findings can carry business risk beyond the immediate user harm.",
  "questionType": "User Impact"
},

/* ===== Multiple Ways navigation ===== */
{
  "domain": "domain2", "lesson": "Operable: Government Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic government site scenario",
  "level": "AA", "principle": "Operable", "guideline": "Navigable", "scNumber": "2.4.5", "scName": "Multiple Ways",
  "id": "SCEN-COVER05-Q1", "difficulty": "medium", "mode": "practice",
  "question": "A city government's website has over 400 pages, reachable only by manually clicking through a nested, nine-level-deep navigation menu with no site search, no sitemap, and no breadcrumb trail. Which Success Criterion is most directly violated?",
  "choices": ["2.4.5 Multiple Ways", "2.4.1 Bypass Blocks", "2.4.8 Location", "3.2.3 Consistent Navigation"],
  "answer": 0,
  "explanation": "2.4.5 requires more than one way to locate a page within a set of pages (such as search, a sitemap, or related links), except for pages that are steps in a process. A single nine-level-deep menu with no search or sitemap as an alternative path fails this requirement, especially costly at this scale (400+ pages).",
  "questionType": "Application"
},

/* ===== Consistent Identification ===== */
{
  "domain": "domain3", "lesson": "Understandable: Enterprise Application Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic enterprise scenario",
  "level": "AA", "principle": "Understandable", "guideline": "Predictable", "scNumber": "3.2.4", "scName": "Consistent Identification",
  "id": "SCEN-COVER06-Q1", "difficulty": "medium", "mode": "practice",
  "question": "An expense-reporting tool uses a floppy-disk icon to mean 'Save' on the Receipts screen, but the identical floppy-disk icon means 'Download as PDF' on the Reports screen, with no accompanying text label on either. Which Success Criterion is most directly violated?",
  "choices": ["3.2.4 Consistent Identification", "1.1.1 Non-Text Content", "2.4.6 Headings and Labels", "1.4.1 Use of Color"],
  "answer": 0,
  "explanation": "3.2.4 requires that components with the same functionality within a set of pages are identified consistently. The same icon meaning two different things across two screens, with no text to disambiguate, is exactly the inconsistency this criterion prohibits, and risks a user believing they saved data when they actually triggered a download, or vice versa.",
  "questionType": "Application"
},
{
  "domain": "domain3", "lesson": "Understandable: Enterprise Application Scenario", "learningObjective": "Determine the real-world consequence of a realistic finding",
  "level": "AA", "principle": "Understandable", "guideline": "Predictable", "scNumber": "3.2.4", "scName": "Consistent Identification",
  "id": "SCEN-COVER06-Q2", "difficulty": "hard", "mode": "challenge",
  "question": "What is the most serious realistic consequence of this icon inconsistency for a user submitting expense reports for reimbursement?",
  "choices": [
    "A user on the Receipts screen might click the icon expecting to save their entered data, and instead trigger an unexpected download, potentially believing their work was saved when it was not, risking data loss",
    "The icon will simply look slightly different in each location, a purely cosmetic issue",
    "The application will crash whenever the icon is clicked twice",
    "There is no realistic consequence since both actions are related to file handling"
  ],
  "answer": 0,
  "explanation": "Inconsistent identification creates a genuine risk of mistaken action, not just confusion: a user reasonably assuming familiar icon behavior carries over between screens may believe their data was saved when it was not, a real, potentially costly consequence in a context involving financial reimbursement data entry.",
  "questionType": "User Impact"
},

/* ===== Reflow ===== */
{
  "domain": "domain1", "lesson": "Perceivable: Mobile Application Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic zoom/reflow scenario",
  "level": "AA", "principle": "Perceivable", "guideline": "Distinguishable", "scNumber": "1.4.10", "scName": "Reflow",
  "id": "SCEN-COVER07-Q1", "difficulty": "medium", "mode": "practice",
  "question": "A low vision user zooms a retail website to 400% to read product descriptions comfortably. At this zoom level, the page requires horizontal scrolling to read every single line of body text, since the layout does not reflow into a single column. Which Success Criterion is most directly violated?",
  "choices": ["1.4.10 Reflow", "1.4.4 Resize Text", "1.4.8 Visual Presentation", "2.5.8 Target Size (Minimum)"],
  "answer": 0,
  "explanation": "1.4.10 requires that content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions, at 400% zoom (for content that normally reflows in a standard viewport). Requiring horizontal scrolling to read every line of body text at this zoom level is exactly the two-dimensional scrolling burden this criterion prohibits.",
  "questionType": "Application"
},

/* ===== Character Key Shortcuts ===== */
{
  "domain": "domain2", "lesson": "Operable: Enterprise Application Scenario", "learningObjective": "Identify the violated Success Criterion from a realistic keyboard shortcut scenario",
  "level": "A", "principle": "Operable", "guideline": "Keyboard Accessible", "scNumber": "2.1.4", "scName": "Character Key Shortcuts",
  "id": "SCEN-COVER08-Q1", "difficulty": "hard", "mode": "challenge",
  "question": "A project management tool implements a single-letter keyboard shortcut: pressing 'd' anywhere on the page deletes the currently selected task, with no modifier key required and no way to turn this shortcut off or remap it. A speech input user who says a task's name aloud to select it, and whose speech recognition software interprets part of that speech as the letter 'd', accidentally deletes tasks repeatedly. Which Success Criterion is most directly violated?",
  "choices": ["2.1.4 Character Key Shortcuts", "2.1.1 Keyboard", "2.1.2 No Keyboard Trap", "3.3.4 Error Prevention (Legal, Financial, Data)"],
  "answer": 0,
  "explanation": "2.1.4 requires that single-character key shortcuts can be turned off, remapped to include a modifier key, or are only active when a specific component has focus. An unmodifiable, always-active single-letter shortcut for a destructive action like delete is precisely the pattern this criterion addresses, since it creates exactly this kind of accidental-activation risk for speech input and other users.",
  "questionType": "Application"
},
{
  "domain": "domain2", "lesson": "Operable: Enterprise Application Scenario", "learningObjective": "Recommend an appropriate remediation strategy",
  "level": "A", "principle": "Operable", "guideline": "Keyboard Accessible", "scNumber": "2.1.4", "scName": "Character Key Shortcuts",
  "id": "SCEN-COVER08-Q2", "difficulty": "medium", "mode": "practice",
  "question": "What is the most appropriate remediation for the single-letter delete shortcut, especially given it triggers a destructive, hard-to-reverse action?",
  "choices": [
    "Require a modifier key (such as Ctrl or Cmd plus D) for the shortcut, or provide a setting to disable or remap it, and additionally consider requiring confirmation before a destructive delete action regardless of trigger method",
    "Remove all keyboard shortcuts from the application entirely",
    "Change the shortcut from 'd' to a different single letter with no modifier key",
    "Add a tooltip explaining what the 'd' key does, with no other change"
  ],
  "answer": 0,
  "explanation": "Adding a modifier key or an on/off setting directly satisfies 2.1.4. Given this shortcut also triggers an irreversible, destructive action, pairing the fix with a confirmation step is good complementary practice (echoing 3.3.4's error-prevention principle for consequential actions), even though 2.1.4 itself is satisfied by the modifier/remap/disable fix alone.",
  "questionType": "Remediation Planning"
}
];
window.WCAG_LAB_EXPANSION_SCENARIOS_5 = WCAG_LAB_EXPANSION_SCENARIOS_5;

/* WCAG Accessibility Lab expansion - baseline Recall/Recognition/Application questions for the 9 WCAG 2.2 Success Criteria previously missing from this Lab (2.4.11, 2.4.12, 2.4.13, 2.5.7, 2.5.8, 3.2.6, 3.3.7, 3.3.8, 3.3.9), matching the existing question pattern. */
var WCAG_LAB_EXPANSION_NEWSC_BASELINE = [
{ "domain":"domain2","lesson":"Operable: Navigable","learningObjective":"Recognize and apply WCAG 2.4.11 Focus Not Obscured (Minimum)","level":"AA","principle":"Operable","guideline":"Navigable","scNumber":"2.4.11","scName":"Focus Not Obscured (Minimum)","id":"WCAG2411Q1","difficulty":"easy","mode":"reinforce",
  "question":"Which WCAG Success Criterion is described by this requirement: When a user interface component receives keyboard focus, the component is not entirely hidden due to author-created content.",
  "choices":["2.4.11 Focus Not Obscured (Minimum)","2.4.7 Focus Visible","2.4.3 Focus Order","1.4.13 Content on Hover or Focus"],"answer":0,
  "explanation":"2.4.11 Focus Not Obscured (Minimum) requires: When a user interface component receives keyboard focus, the component is not entirely hidden due to author-created content.","questionType":"Recall" },
{ "domain":"domain2","lesson":"Operable: Navigable","learningObjective":"Recognize and apply WCAG 2.4.11 Focus Not Obscured (Minimum)","level":"AA","principle":"Operable","guideline":"Navigable","scNumber":"2.4.11","scName":"Focus Not Obscured (Minimum)","id":"WCAG2411Q2","difficulty":"medium","mode":"practice",
  "question":"Which Success Criterion matches the name \"Focus Not Obscured (Minimum)\"?",
  "choices":["2.4.11 Focus Not Obscured (Minimum)","2.4.12 Focus Not Obscured (Enhanced)","2.4.13 Focus Appearance","2.4.7 Focus Visible"],"answer":0,
  "explanation":"The Success Criterion named Focus Not Obscured (Minimum) is 2.4.11. It belongs to the Operable principle and is Level AA.","questionType":"Recognition" },
{ "domain":"domain2","lesson":"Operable: Navigable","learningObjective":"Recognize and apply WCAG 2.4.11 Focus Not Obscured (Minimum)","level":"AA","principle":"Operable","guideline":"Navigable","scNumber":"2.4.11","scName":"Focus Not Obscured (Minimum)","id":"WCAG2411Q3","difficulty":"hard","mode":"challenge",
  "question":"An accessibility review identifies this issue: a sticky header covers the top third of the page, and when a user tabs to a form field near the top of the form, the field is completely hidden underneath the sticky header with no part of it visible. Which WCAG Success Criterion is the strongest primary match?",
  "choices":["2.4.11 Focus Not Obscured (Minimum)","2.4.7 Focus Visible","2.1.2 No Keyboard Trap","1.4.10 Reflow"],"answer":0,
  "explanation":"This issue maps most directly to 2.4.11 Focus Not Obscured (Minimum), since the focused component is entirely hidden behind author-created content (the sticky header), not merely lacking a visible focus indicator.","questionType":"Application" },

{ "domain":"domain2","lesson":"Operable: Navigable","learningObjective":"Recognize and apply WCAG 2.4.12 Focus Not Obscured (Enhanced)","level":"AAA","principle":"Operable","guideline":"Navigable","scNumber":"2.4.12","scName":"Focus Not Obscured (Enhanced)","id":"WCAG2412Q1","difficulty":"easy","mode":"reinforce",
  "question":"Which WCAG Success Criterion is described by this requirement: When a user interface component receives keyboard focus, no part of the component is hidden by author-created content.",
  "choices":["2.4.12 Focus Not Obscured (Enhanced)","2.4.11 Focus Not Obscured (Minimum)","2.4.13 Focus Appearance","2.5.8 Target Size (Minimum)"],"answer":0,
  "explanation":"2.4.12 Focus Not Obscured (Enhanced) requires: When a user interface component receives keyboard focus, no part of the component is hidden by author-created content.","questionType":"Recall" },
{ "domain":"domain2","lesson":"Operable: Navigable","learningObjective":"Recognize and apply WCAG 2.4.12 Focus Not Obscured (Enhanced)","level":"AAA","principle":"Operable","guideline":"Navigable","scNumber":"2.4.12","scName":"Focus Not Obscured (Enhanced)","id":"WCAG2412Q2","difficulty":"medium","mode":"practice",
  "question":"Which Success Criterion matches the name \"Focus Not Obscured (Enhanced)\"?",
  "choices":["2.4.12 Focus Not Obscured (Enhanced)","2.4.11 Focus Not Obscured (Minimum)","2.4.7 Focus Visible","2.4.13 Focus Appearance"],"answer":0,
  "explanation":"The Success Criterion named Focus Not Obscured (Enhanced) is 2.4.12. It belongs to the Operable principle and is Level AAA.","questionType":"Recognition" },
{ "domain":"domain2","lesson":"Operable: Navigable","learningObjective":"Recognize and apply WCAG 2.4.12 Focus Not Obscured (Enhanced)","level":"AAA","principle":"Operable","guideline":"Navigable","scNumber":"2.4.12","scName":"Focus Not Obscured (Enhanced)","id":"WCAG2412Q3","difficulty":"hard","mode":"challenge",
  "question":"A team has satisfied 2.4.11 by ensuring focused elements are never entirely hidden, but a sticky footer still partially covers the bottom few pixels of some focused buttons. Which criterion would still require full remediation of this partial overlap, and at what level?",
  "choices":["2.4.12 Focus Not Obscured (Enhanced), Level AAA","2.4.11 Focus Not Obscured (Minimum), Level AA, since it already covers partial overlap","2.1.2 No Keyboard Trap, Level A","1.4.11 Non-text Contrast, Level AA"],"answer":0,
  "explanation":"2.4.11 only requires that a focused component not be entirely hidden; partial overlap can still satisfy it. 2.4.12 is the stricter, AAA-level version requiring no part of the component be hidden at all, which would still flag this partial overlap.","questionType":"Application" },

{ "domain":"domain2","lesson":"Operable: Navigable","learningObjective":"Recognize and apply WCAG 2.4.13 Focus Appearance","level":"AAA","principle":"Operable","guideline":"Navigable","scNumber":"2.4.13","scName":"Focus Appearance","id":"WCAG2413Q1","difficulty":"easy","mode":"reinforce",
  "question":"Which WCAG Success Criterion is described by this requirement: When the keyboard focus indicator is visible, an area of the focus indicator meets minimum size and contrast requirements between the focused and unfocused states.",
  "choices":["2.4.13 Focus Appearance","2.4.7 Focus Visible","1.4.11 Non-text Contrast","1.4.3 Contrast (Minimum)"],"answer":0,
  "explanation":"2.4.13 Focus Appearance requires: When the keyboard focus indicator is visible, an area of the focus indicator meets minimum size and contrast requirements between the focused and unfocused states.","questionType":"Recall" },
{ "domain":"domain2","lesson":"Operable: Navigable","learningObjective":"Recognize and apply WCAG 2.4.13 Focus Appearance","level":"AAA","principle":"Operable","guideline":"Navigable","scNumber":"2.4.13","scName":"Focus Appearance","id":"WCAG2413Q2","difficulty":"medium","mode":"practice",
  "question":"Which Success Criterion matches the name \"Focus Appearance\"?",
  "choices":["2.4.13 Focus Appearance","2.4.7 Focus Visible","2.4.11 Focus Not Obscured (Minimum)","2.4.12 Focus Not Obscured (Enhanced)"],"answer":0,
  "explanation":"The Success Criterion named Focus Appearance is 2.4.13. It belongs to the Operable principle and is Level AAA.","questionType":"Recognition" },
{ "domain":"domain2","lesson":"Operable: Navigable","learningObjective":"Recognize and apply WCAG 2.4.13 Focus Appearance","level":"AAA","principle":"Operable","guideline":"Navigable","scNumber":"2.4.13","scName":"Focus Appearance","id":"WCAG2413Q3","difficulty":"hard","mode":"challenge",
  "question":"A design system's focus indicator is a 1-pixel outline with only 1.5:1 contrast against the unfocused state. Which Success Criterion's quantified thresholds does this most directly fail to meet?",
  "choices":["2.4.13 Focus Appearance","2.4.7 Focus Visible, since 2.4.7 has the same numeric thresholds","1.4.1 Use of Color","2.5.8 Target Size (Minimum)"],"answer":0,
  "explanation":"2.4.7 requires only that a focus indicator be present at all; it does not define specific size or contrast thresholds. 2.4.13 is the criterion that defines the roughly 2-pixel-equivalent minimum size and 3:1 contrast ratio a focus indicator must meet, which this thin, low-contrast outline fails.","questionType":"Application" },

{ "domain":"domain2","lesson":"Operable: Input Modalities","learningObjective":"Recognize and apply WCAG 2.5.7 Dragging Movements","level":"AA","principle":"Operable","guideline":"Input Modalities","scNumber":"2.5.7","scName":"Dragging Movements","id":"WCAG257Q1","difficulty":"easy","mode":"reinforce",
  "question":"Which WCAG Success Criterion is described by this requirement: All functionality that uses a dragging movement for operation can be achieved by a single pointer without dragging, unless dragging is essential.",
  "choices":["2.5.7 Dragging Movements","2.5.1 Pointer Gestures","2.5.2 Pointer Cancellation","2.1.1 Keyboard"],"answer":0,
  "explanation":"2.5.7 Dragging Movements requires: All functionality that uses a dragging movement for operation can be achieved by a single pointer without dragging, unless dragging is essential.","questionType":"Recall" },
{ "domain":"domain2","lesson":"Operable: Input Modalities","learningObjective":"Recognize and apply WCAG 2.5.7 Dragging Movements","level":"AA","principle":"Operable","guideline":"Input Modalities","scNumber":"2.5.7","scName":"Dragging Movements","id":"WCAG257Q2","difficulty":"medium","mode":"practice",
  "question":"Which Success Criterion matches the name \"Dragging Movements\"?",
  "choices":["2.5.7 Dragging Movements","2.5.1 Pointer Gestures","2.5.4 Motion Actuation","2.5.2 Pointer Cancellation"],"answer":0,
  "explanation":"The Success Criterion named Dragging Movements is 2.5.7. It belongs to the Operable principle and is Level AA.","questionType":"Recognition" },
{ "domain":"domain2","lesson":"Operable: Input Modalities","learningObjective":"Recognize and apply WCAG 2.5.7 Dragging Movements","level":"AA","principle":"Operable","guideline":"Input Modalities","scNumber":"2.5.7","scName":"Dragging Movements","id":"WCAG257Q3","difficulty":"hard","mode":"challenge",
  "question":"An accessibility review identifies this issue: a task-management app requires dragging cards between status columns (To Do, In Progress, Done) with no button, menu, or keyboard-based way to move a card between columns. Which WCAG Success Criterion is the strongest primary match?",
  "choices":["2.5.7 Dragging Movements","2.1.1 Keyboard","1.3.1 Info and Relationships","2.4.3 Focus Order"],"answer":0,
  "explanation":"This issue maps most directly to 2.5.7 Dragging Movements, since a drag-only interaction with no single-pointer alternative (like a 'Move to' menu) is precisely the pattern this criterion prohibits. (Note: this scenario would also likely implicate 2.1.1 Keyboard for the same underlying gap, but 2.5.7 is the most specific match for the dragging requirement itself.)","questionType":"Application" },

{ "domain":"domain2","lesson":"Operable: Input Modalities","learningObjective":"Recognize and apply WCAG 2.5.8 Target Size (Minimum)","level":"AA","principle":"Operable","guideline":"Input Modalities","scNumber":"2.5.8","scName":"Target Size (Minimum)","id":"WCAG258Q1","difficulty":"easy","mode":"reinforce",
  "question":"Which WCAG Success Criterion is described by this requirement: The size of the target for pointer inputs is at least 24 by 24 CSS pixels, with defined exceptions for inline targets, equivalent controls, sufficient spacing, user-agent-controlled size, and essential presentation.",
  "choices":["2.5.8 Target Size (Minimum)","2.5.5 Target Size (Enhanced)","1.4.10 Reflow","2.5.1 Pointer Gestures"],"answer":0,
  "explanation":"2.5.8 Target Size (Minimum) requires: The size of the target for pointer inputs is at least 24 by 24 CSS pixels, with defined exceptions for inline targets, equivalent controls, sufficient spacing, user-agent-controlled size, and essential presentation.","questionType":"Recall" },
{ "domain":"domain2","lesson":"Operable: Input Modalities","learningObjective":"Recognize and apply WCAG 2.5.8 Target Size (Minimum)","level":"AA","principle":"Operable","guideline":"Input Modalities","scNumber":"2.5.8","scName":"Target Size (Minimum)","id":"WCAG258Q2","difficulty":"medium","mode":"practice",
  "question":"Which Success Criterion matches the name \"Target Size (Minimum)\"?",
  "choices":["2.5.8 Target Size (Minimum)","2.5.5 Target Size (Enhanced)","2.5.7 Dragging Movements","2.5.2 Pointer Cancellation"],"answer":0,
  "explanation":"The Success Criterion named Target Size (Minimum) is 2.5.8. It belongs to the Operable principle and is Level AA.","questionType":"Recognition" },
{ "domain":"domain2","lesson":"Operable: Input Modalities","learningObjective":"Recognize and apply WCAG 2.5.8 Target Size (Minimum)","level":"AA","principle":"Operable","guideline":"Input Modalities","scNumber":"2.5.8","scName":"Target Size (Minimum)","id":"WCAG258Q3","difficulty":"hard","mode":"challenge",
  "question":"A mobile app's icon-only toolbar buttons are each 16 by 16 CSS pixels with only 2 pixels of spacing between them, and no equivalent larger control exists elsewhere on the page. Which WCAG Success Criterion is the strongest primary match for this finding at Level AA?",
  "choices":["2.5.8 Target Size (Minimum)","2.5.5 Target Size (Enhanced), since 2.5.5 is the applicable minimum at Level AA","1.4.4 Resize Text","2.4.7 Focus Visible"],"answer":0,
  "explanation":"2.5.8 sets the Level AA minimum target size at 24 by 24 CSS pixels (with defined exceptions); 16-pixel buttons with minimal spacing and no larger equivalent fail this baseline. 2.5.5 is a separate, stricter 44-pixel Level AAA criterion, not the applicable AA requirement here.","questionType":"Application" },

{ "domain":"domain3","lesson":"Understandable: Predictable","learningObjective":"Recognize and apply WCAG 3.2.6 Consistent Help","level":"A","principle":"Understandable","guideline":"Predictable","scNumber":"3.2.6","scName":"Consistent Help","id":"WCAG326Q1","difficulty":"easy","mode":"reinforce",
  "question":"Which WCAG Success Criterion is described by this requirement: Repeated help mechanisms (human contact details, human contact mechanism, self-help option, or fully automated contact mechanism) occur in the same relative order across pages within a set of pages.",
  "choices":["3.2.6 Consistent Help","3.2.3 Consistent Navigation","3.2.4 Consistent Identification","2.4.5 Multiple Ways"],"answer":0,
  "explanation":"3.2.6 Consistent Help requires: Repeated help mechanisms (human contact details, human contact mechanism, self-help option, or fully automated contact mechanism) occur in the same relative order across pages within a set of pages.","questionType":"Recall" },
{ "domain":"domain3","lesson":"Understandable: Predictable","learningObjective":"Recognize and apply WCAG 3.2.6 Consistent Help","level":"A","principle":"Understandable","guideline":"Predictable","scNumber":"3.2.6","scName":"Consistent Help","id":"WCAG326Q2","difficulty":"medium","mode":"practice",
  "question":"Which Success Criterion matches the name \"Consistent Help\"?",
  "choices":["3.2.6 Consistent Help","3.2.3 Consistent Navigation","3.2.4 Consistent Identification","3.3.5 Help"],"answer":0,
  "explanation":"The Success Criterion named Consistent Help is 3.2.6. It belongs to the Understandable principle and is Level A.","questionType":"Recognition" },
{ "domain":"domain3","lesson":"Understandable: Predictable","learningObjective":"Recognize and apply WCAG 3.2.6 Consistent Help","level":"A","principle":"Understandable","guideline":"Predictable","scNumber":"3.2.6","scName":"Consistent Help","id":"WCAG326Q3","difficulty":"hard","mode":"challenge",
  "question":"A website's live-chat help button appears in the bottom-right corner on every page except the checkout flow, where it moves to the top-left with no clear reason. Which WCAG Success Criterion is the strongest primary match?",
  "choices":["3.2.6 Consistent Help","3.2.3 Consistent Navigation","2.4.8 Location","3.3.5 Help"],"answer":0,
  "explanation":"This issue maps most directly to 3.2.6 Consistent Help, which specifically requires help mechanisms like a live-chat contact option to appear in the same relative position across pages within a set, unless the user deliberately changes it.","questionType":"Application" },

{ "domain":"domain3","lesson":"Understandable: Input Assistance","learningObjective":"Recognize and apply WCAG 3.3.7 Redundant Entry","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.7","scName":"Redundant Entry","id":"WCAG337Q1","difficulty":"easy","mode":"reinforce",
  "question":"Which WCAG Success Criterion is described by this requirement: Information previously entered by the user in the same process is auto-populated or available to select, rather than requiring re-entry, except in defined cases.",
  "choices":["3.3.7 Redundant Entry","3.3.2 Labels or Instructions","1.3.5 Identify Input Purpose","3.3.4 Error Prevention (Legal, Financial, Data)"],"answer":0,
  "explanation":"3.3.7 Redundant Entry requires: Information previously entered by the user in the same process is auto-populated or available to select, rather than requiring re-entry, except in defined cases.","questionType":"Recall" },
{ "domain":"domain3","lesson":"Understandable: Input Assistance","learningObjective":"Recognize and apply WCAG 3.3.7 Redundant Entry","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.7","scName":"Redundant Entry","id":"WCAG337Q2","difficulty":"medium","mode":"practice",
  "question":"Which Success Criterion matches the name \"Redundant Entry\"?",
  "choices":["3.3.7 Redundant Entry","3.3.8 Accessible Authentication (Minimum)","3.3.2 Labels or Instructions","1.3.5 Identify Input Purpose"],"answer":0,
  "explanation":"The Success Criterion named Redundant Entry is 3.3.7. It belongs to the Understandable principle and is Level A.","questionType":"Recognition" },
{ "domain":"domain3","lesson":"Understandable: Input Assistance","learningObjective":"Recognize and apply WCAG 3.3.7 Redundant Entry","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.7","scName":"Redundant Entry","id":"WCAG337Q3","difficulty":"hard","mode":"challenge",
  "question":"An accessibility review identifies this issue: a multi-step rental car booking flow asks for the renter's driver's license number on step 2, then asks for it again, blank, on step 5's insurance add-on screen. Which WCAG Success Criterion is the strongest primary match?",
  "choices":["3.3.7 Redundant Entry","3.3.1 Error Identification","2.4.3 Focus Order","1.3.1 Info and Relationships"],"answer":0,
  "explanation":"This issue maps most directly to 3.3.7 Redundant Entry, which requires information already provided earlier in the same process, like a driver's license number, to be auto-populated or available for reuse rather than requiring the user to retype it later in the same flow.","questionType":"Application" },

{ "domain":"domain3","lesson":"Understandable: Input Assistance","learningObjective":"Recognize and apply WCAG 3.3.8 Accessible Authentication (Minimum)","level":"AA","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.8","scName":"Accessible Authentication (Minimum)","id":"WCAG338Q1","difficulty":"easy","mode":"reinforce",
  "question":"Which WCAG Success Criterion is described by this requirement: No step in an authentication process may require a cognitive function test unless an alternative, an assistive mechanism, or a user-provided object/content recognition exception applies.",
  "choices":["3.3.8 Accessible Authentication (Minimum)","3.3.9 Accessible Authentication (Enhanced)","3.3.1 Error Identification","2.2.1 Timing Adjustable"],"answer":0,
  "explanation":"3.3.8 Accessible Authentication (Minimum) requires: No step in an authentication process may require a cognitive function test unless an alternative, an assistive mechanism, or a user-provided object/content recognition exception applies.","questionType":"Recall" },
{ "domain":"domain3","lesson":"Understandable: Input Assistance","learningObjective":"Recognize and apply WCAG 3.3.8 Accessible Authentication (Minimum)","level":"AA","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.8","scName":"Accessible Authentication (Minimum)","id":"WCAG338Q2","difficulty":"medium","mode":"practice",
  "question":"Which Success Criterion matches the name \"Accessible Authentication (Minimum)\"?",
  "choices":["3.3.8 Accessible Authentication (Minimum)","3.3.9 Accessible Authentication (Enhanced)","3.3.7 Redundant Entry","2.2.5 Re-authenticating"],"answer":0,
  "explanation":"The Success Criterion named Accessible Authentication (Minimum) is 3.3.8. It belongs to the Understandable principle and is Level AA.","questionType":"Recognition" },
{ "domain":"domain3","lesson":"Understandable: Input Assistance","learningObjective":"Recognize and apply WCAG 3.3.8 Accessible Authentication (Minimum)","level":"AA","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.8","scName":"Accessible Authentication (Minimum)","id":"WCAG338Q3","difficulty":"hard","mode":"challenge",
  "question":"A login page requires solving a text-based math problem (e.g., 'what is 7 plus 4?') as its only anti-bot check, with no alternative offered. Which WCAG Success Criterion is the strongest primary match?",
  "choices":["3.3.8 Accessible Authentication (Minimum)","2.2.1 Timing Adjustable","1.4.5 Images of Text","3.3.1 Error Identification"],"answer":0,
  "explanation":"Solving a math problem is a cognitive function test. 3.3.8 requires at least one authentication path that does not depend on a cognitive function test like this, unless a narrow exception applies; a math-problem-only check with no alternative fails this Level AA requirement.","questionType":"Application" },

{ "domain":"domain3","lesson":"Understandable: Input Assistance","learningObjective":"Recognize and apply WCAG 3.3.9 Accessible Authentication (Enhanced)","level":"AAA","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.9","scName":"Accessible Authentication (Enhanced)","id":"WCAG339Q1","difficulty":"easy","mode":"reinforce",
  "question":"Which WCAG Success Criterion is described by this requirement: No step in an authentication process may require a cognitive function test unless an alternative or an assistive mechanism is provided; this level removes the object-recognition exception 3.3.8 allows.",
  "choices":["3.3.9 Accessible Authentication (Enhanced)","3.3.8 Accessible Authentication (Minimum)","2.2.6 Timeouts","2.2.5 Re-authenticating"],"answer":0,
  "explanation":"3.3.9 Accessible Authentication (Enhanced) requires: No step in an authentication process may require a cognitive function test unless an alternative or an assistive mechanism is provided; this level removes the object-recognition exception 3.3.8 allows.","questionType":"Recall" },
{ "domain":"domain3","lesson":"Understandable: Input Assistance","learningObjective":"Recognize and apply WCAG 3.3.9 Accessible Authentication (Enhanced)","level":"AAA","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.9","scName":"Accessible Authentication (Enhanced)","id":"WCAG339Q2","difficulty":"medium","mode":"practice",
  "question":"Which Success Criterion matches the name \"Accessible Authentication (Enhanced)\"?",
  "choices":["3.3.9 Accessible Authentication (Enhanced)","3.3.8 Accessible Authentication (Minimum)","3.3.7 Redundant Entry","2.2.5 Re-authenticating"],"answer":0,
  "explanation":"The Success Criterion named Accessible Authentication (Enhanced) is 3.3.9. It belongs to the Understandable principle and is Level AAA.","questionType":"Recognition" },
{ "domain":"domain3","lesson":"Understandable: Input Assistance","learningObjective":"Recognize and apply WCAG 3.3.9 Accessible Authentication (Enhanced)","level":"AAA","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.9","scName":"Accessible Authentication (Enhanced)","id":"WCAG339Q3","difficulty":"hard","mode":"challenge",
  "question":"A platform satisfies 3.3.8 by offering an image-based object-recognition challenge ('select all squares with a bicycle') as its alternative to a text CAPTCHA. Does this also satisfy 3.3.9, and why or why not?",
  "choices":[
    "No - 3.3.9 removes the object-recognition exception that 3.3.8 allows, so an object-recognition challenge alone does not satisfy the stricter AAA-level criterion",
    "Yes - object recognition satisfies both 3.3.8 and 3.3.9 equally, since they are functionally identical criteria",
    "Yes - 3.3.9 only applies to text-based CAPTCHAs, not image-based ones",
    "No - 3.3.9 does not exist as an active WCAG success criterion"
  ],"answer":0,
  "explanation":"3.3.8 (Level AA) explicitly allows object/content recognition as an accepted non-cognitive-test method. 3.3.9 (Level AAA) is stricter and removes that exception, meaning only a genuine non-cognitive-test alternative (like a passwordless email link or biometric option) satisfies it - an object-recognition challenge alone is not enough at this stricter level.","questionType":"Application" }
];
window.WCAG_LAB_EXPANSION_NEWSC_BASELINE = WCAG_LAB_EXPANSION_NEWSC_BASELINE;

(function () {
  var additions = [].concat(
    window.WCAG_LAB_EXPANSION_SCENARIOS_1 || [],
    window.WCAG_LAB_EXPANSION_SCENARIOS_2 || [],
    window.WCAG_LAB_EXPANSION_SCENARIOS_3 || [],
    window.WCAG_LAB_EXPANSION_SCENARIOS_4 || [],
    window.WCAG_LAB_EXPANSION_SCENARIOS_5 || [],
    window.WCAG_LAB_EXPANSION_NEWSC_BASELINE || []
  );
  if (window.WCAG_LAB_DATA && Array.isArray(window.WCAG_LAB_DATA.questions)) {
    window.WCAG_LAB_DATA.questions = window.WCAG_LAB_DATA.questions.concat(additions);
  }
}());
