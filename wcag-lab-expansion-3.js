/* WCAG Accessibility Lab expansion data, part 3.
   Introduces the progressive-difficulty pattern within a single domain: Government Services Portal A
   (beginner, single clear-cut issues), B (intermediate, multiple interacting failures), and C
   (advanced, ambiguous edge cases requiring professional judgment) - a demonstration of revisiting one
   domain at increasing difficulty rather than only adding breadth across new industries.
   Also adds two further single-tier families: Airline Booking Platform and Social Media Platform.
   Loaded after wcag-lab-expansion-2.js and appends to the same window.WCAG_LAB_DATA.questions array
   without modifying, removing, or replacing any existing question from any prior file. */
/* Scenario Family: Government Services Portal A (Beginner tier) - single, clear-cut issues across
   Benefits Application Landing, License Renewal Form, Document Upload, and Payment. Designed as an
   entry point into the progressive Government Services family (A = foundational, B = interacting
   failures, C = ambiguous judgment calls). */
var WCAG_LAB_FAMILY_GOV_A = [

{ "domain":"domain1","lesson":"Perceivable: Government Services Portal A - Benefits Landing","learningObjective":"Identify a clear-cut violation on a benefits landing page","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-GOVA-LAND-Q1","difficulty":"easy","mode":"reinforce",
  "question":"A state benefits landing page has a large hero image reading 'Apply for Assistance Today' rendered entirely as a graphic, with alt text left completely empty despite the image conveying this call-to-action text visually. Which Success Criterion is most directly violated?",
  "choices":["1.1.1 Non-Text Content","1.4.5 Images of Text","2.4.6 Headings and Labels","3.1.1 Language of Page"],"answer":0,
  "explanation":"1.1.1 requires a text alternative serving an equivalent purpose. An empty alt attribute is only appropriate for purely decorative images; here the image conveys meaningful call-to-action text with no equivalent alternative, so a screen reader user gets no access to it at all.","questionType":"Recognition" },
{ "domain":"domain1","lesson":"Perceivable: Government Services Portal A - Benefits Landing","learningObjective":"Identify a clear-cut contrast violation","level":"AA","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.3","scName":"Contrast (Minimum)","id":"FAM-GOVA-LAND-Q2","difficulty":"easy","mode":"reinforce",
  "question":"The landing page's eligibility summary text is light gray (contrast ratio 2.1:1) on a white background. Which Success Criterion is most directly violated?",
  "choices":["1.4.3 Contrast (Minimum)","1.4.1 Use of Color","1.4.11 Non-text Contrast","2.4.7 Focus Visible"],"answer":0,
  "explanation":"1.4.3 requires normal body text to meet at least a 4.5:1 contrast ratio at Level AA. Text at 2.1:1 falls well short of this minimum.","questionType":"Recognition" },
{ "domain":"domain2","lesson":"Operable: Government Services Portal A - License Renewal","learningObjective":"Identify a clear-cut keyboard access violation","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.1","scName":"Keyboard","id":"FAM-GOVA-LICENSE-Q1","difficulty":"easy","mode":"reinforce",
  "question":"The driver's license renewal form's 'I agree to the terms' checkbox can only be checked by clicking directly on the small checkbox square with a mouse; pressing Space or Enter while it has focus does nothing. Which Success Criterion is most directly violated?",
  "choices":["2.1.1 Keyboard","2.5.8 Target Size (Minimum)","3.3.2 Labels or Instructions","2.4.3 Focus Order"],"answer":0,
  "explanation":"2.1.1 requires all functionality to be operable through a keyboard. A checkbox that can receive focus but does not respond to Space (the standard native checkbox activation key) fails this requirement, suggesting it may be a custom-built control missing standard keyboard handling.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Government Services Portal A - License Renewal","learningObjective":"Identify a clear-cut missing-label violation","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.2","scName":"Labels or Instructions","id":"FAM-GOVA-LICENSE-Q2","difficulty":"easy","mode":"reinforce",
  "question":"The license renewal form's date-of-birth field has no visible label and no programmatically associated label - only placeholder text reading 'MM/DD/YYYY' that disappears once the user starts typing. Which Success Criterion is most directly violated?",
  "choices":["3.3.2 Labels or Instructions","1.3.5 Identify Input Purpose","2.4.6 Headings and Labels","3.3.1 Error Identification"],"answer":0,
  "explanation":"3.3.2 requires labels or instructions for fields requiring user input. Placeholder text alone, which disappears on focus and is not reliably announced as a persistent label by all screen readers, does not satisfy this requirement.","questionType":"Recognition" },
{ "domain":"domain1","lesson":"Perceivable: Government Services Portal A - Document Upload","learningObjective":"Identify a clear-cut violation for an upload status icon","level":"A","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.1","scName":"Use of Color","id":"FAM-GOVA-UPLOAD-Q1","difficulty":"easy","mode":"reinforce",
  "question":"After uploading a document, a small circle appears next to the file name: green means accepted, red means rejected, with no icon shape difference, text, or other indicator. Which Success Criterion is most directly violated?",
  "choices":["1.4.1 Use of Color","1.1.1 Non-Text Content","1.4.11 Non-text Contrast","2.4.4 Link Purpose (In Context)"],"answer":0,
  "explanation":"1.4.1 requires color not be the sole means of conveying information. A colored circle with no shape, icon, or text difference fails for users with color vision deficiency who cannot reliably distinguish red from green.","questionType":"Recognition" },
{ "domain":"domain2","lesson":"Operable: Government Services Portal A - Document Upload","learningObjective":"Identify a clear-cut timing violation","level":"A","principle":"Operable","guideline":"Enough Time","scNumber":"2.2.1","scName":"Timing Adjustable","id":"FAM-GOVA-UPLOAD-Q2","difficulty":"medium","mode":"practice",
  "question":"The document upload page displays a session countdown ('Session expires in 4:32') with no way to extend it and no warning dialog when it reaches zero - the page simply reloads and any uploaded-but-unsubmitted documents are lost. Which Success Criterion is most directly violated?",
  "choices":["2.2.1 Timing Adjustable","2.2.6 Timeouts","2.2.5 Re-authenticating","3.3.4 Error Prevention (Legal, Financial, Data)"],"answer":0,
  "explanation":"2.2.1 requires time limits be adjustable through a warning-and-extension mechanism, among other accepted approaches, unless a narrow exception applies. A hard countdown with no extension option and no warning dialog fails this Level A requirement, especially costly here since it discards uploaded work.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Government Services Portal A - Payment","learningObjective":"Identify a clear-cut error identification violation","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.1","scName":"Error Identification","id":"FAM-GOVA-PAY-Q1","difficulty":"medium","mode":"practice",
  "question":"Submitting a license renewal fee payment with an invalid card number causes the 'Pay Now' button to simply become disabled and grayed out, with no text message explaining why. Which Success Criterion is most directly violated?",
  "choices":["3.3.1 Error Identification","3.3.3 Error Suggestion","1.4.1 Use of Color","2.4.3 Focus Order"],"answer":0,
  "explanation":"3.3.1 requires that a detected error be identified and described in text. A disabled button with no explanation gives the user no information about what went wrong or how to proceed, failing this requirement for every user, not only those using assistive technology.","questionType":"Recognition" },
{ "domain":"domain4","lesson":"Robust: Government Services Portal A - Payment","learningObjective":"Identify a clear-cut accessible name violation","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-GOVA-PAY-Q2","difficulty":"medium","mode":"practice",
  "question":"The payment page's 'edit payment method' icon button (a small pencil icon) has no accessible name; a screen reader announces it only as 'button'. Which Success Criterion is most directly violated?",
  "choices":["4.1.2 Name, Role, Value","1.1.1 Non-Text Content","2.5.3 Label in Name","2.4.9 Link Purpose (Link Only)"],"answer":0,
  "explanation":"4.1.2 requires a programmatically determinable accessible name for every interface component. An icon-only button with no accessible name leaves a screen reader user with no way to know what 'button' does.","questionType":"Recognition" },
{ "domain":"domain1","lesson":"Perceivable: Government Services Portal A - Payment","learningObjective":"Identify a clear-cut link purpose violation","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"2.4.4","scName":"Link Purpose (In Context)","id":"FAM-GOVA-PAY-Q3","difficulty":"easy","mode":"reinforce",
  "question":"The payment confirmation page has a link at the bottom reading only 'Click Here' that leads to a printable receipt, with no surrounding text clarifying its destination. Which Success Criterion is most directly violated?",
  "choices":["2.4.4 Link Purpose (In Context)","2.4.9 Link Purpose (Link Only)","3.3.2 Labels or Instructions","1.3.1 Info and Relationships"],"answer":0,
  "explanation":"2.4.4 requires link purpose be determinable from the link text and its context. 'Click Here' with no surrounding context describing what will happen fails to communicate the link's destination or purpose.","questionType":"Recognition" },
{ "domain":"domain3","lesson":"Operable: Government Services Portal A - Payment","learningObjective":"Recommend an appropriate remediation for a beginner-level finding","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.1","scName":"Error Identification","id":"FAM-GOVA-PAY-Q4","difficulty":"medium","mode":"practice",
  "question":"What is the most appropriate remediation for the payment page's silently-disabled 'Pay Now' button?",
  "choices":[
    "Display a specific, text-based error message identifying the problem (e.g., 'Card number is invalid - please check and re-enter it') when the button is disabled",
    "Remove the ability to disable the button under any circumstance",
    "Add a loading spinner with no explanatory text",
    "Change the button's color to a brighter shade of gray"
  ],"answer":0,
  "explanation":"A specific, visible, programmatically available error message directly satisfies 3.3.1's requirement to identify and describe the error in text, giving the user the information they need to correct the problem.","questionType":"Remediation Planning" },
{ "domain":"domain1","lesson":"Perceivable: Government Services Portal A - Benefits Landing","learningObjective":"Determine affected users for a beginner-level finding","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-GOVA-LAND-Q3","difficulty":"medium","mode":"practice",
  "question":"Which users are most directly affected by the empty alt attribute on the benefits landing page's call-to-action image?",
  "choices":[
    "Screen reader users, who receive no announcement of the image's content at all, potentially missing the page's primary call to action entirely",
    "Users with a fast internet connection, since the image loads quickly",
    "Users who prefer using a mouse",
    "Users viewing the page on a very large monitor"
  ],"answer":0,
  "explanation":"An empty alt attribute tells assistive technology to skip the image entirely, appropriate for decoration but not for an image conveying the page's main call-to-action text - screen reader users get no indication this content exists at all.","questionType":"User Impact" }
];
window.WCAG_LAB_FAMILY_GOV_A = WCAG_LAB_FAMILY_GOV_A;

/* Scenario Family: Government Services Portal B (Intermediate tier) - multiple interacting WCAG
   failures across a Multi-Step Eligibility Wizard, an Appeals Process, and Notification Preferences.
   Continues the progressive Government Services family started in Portal A. */
var WCAG_LAB_FAMILY_GOV_B = [

/* --- Multi-Step Eligibility Wizard: interacting failures --- */
{ "domain":"domain3","lesson":"Understandable: Government Services Portal B - Eligibility Wizard","learningObjective":"Identify the first of several interacting violations in a multi-step wizard","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.7","scName":"Redundant Entry","id":"FAM-GOVB-WIZ-Q1","difficulty":"medium","mode":"practice",
  "question":"A 6-step eligibility wizard asks for household size on step 2, then asks again on step 5 (framed as 'confirming' household size for a different benefit calculation within the same application) with the field left blank rather than pre-filled. Which Success Criterion is most directly violated?",
  "choices":["3.3.7 Redundant Entry","3.3.1 Error Identification","1.3.2 Meaningful Sequence","2.4.3 Focus Order"],"answer":0,
  "explanation":"3.3.7 requires previously entered information to be carried forward or made available for reuse within the same process. Even when reframed as a 'confirmation', the field should be pre-populated with the step 2 value for the user to confirm or correct, not presented blank.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Government Services Portal B - Eligibility Wizard","learningObjective":"Identify a second, related but distinct violation in the same wizard","level":"A","principle":"Operable","guideline":"Enough Time","scNumber":"2.2.6","scName":"Timeouts","id":"FAM-GOVB-WIZ-Q2","difficulty":"hard","mode":"challenge",
  "question":"The wizard's session will time out after 12 minutes total, but this is never disclosed anywhere before the user begins, and the wizard itself, given its length and the research many applicants need to do (locating documents, checking eligibility rules), often takes users 20-30 minutes to complete. Which Success Criterion does this violate?",
  "choices":["2.2.6 Timeouts","2.2.1 Timing Adjustable","2.2.5 Re-authenticating","3.2.6 Consistent Help"],"answer":0,
  "explanation":"2.2.6 requires users be warned of the duration of any session inactivity that could cause data loss, unless the duration is more than 20 hours. A 12-minute limit with no advance disclosure, on a task realistically taking 20-30 minutes, fails this criterion and virtually guarantees many applicants will be caught off guard.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Government Services Portal B - Eligibility Wizard","learningObjective":"Determine whether the wizard's timeout warning behavior satisfies a third, related criterion","level":"A","principle":"Operable","guideline":"Enough Time","scNumber":"2.2.1","scName":"Timing Adjustable","id":"FAM-GOVB-WIZ-Q3","difficulty":"hard","mode":"challenge",
  "question":"Further testing shows that when the 12-minute limit is actually reached, a warning dialog does appear with a 'Continue Session' button, giving users a chance to extend. Given this, is 2.2.1 also violated, separately from the 2.2.6 finding above?",
  "choices":[
    "No - 2.2.1 specifically requires a warning-and-extension mechanism near expiration, which is present here; this is a case where one closely related timing criterion (2.2.6, advance disclosure) is violated while a different one (2.2.1, warning and extension) is actually satisfied",
    "Yes - any session timeout under 20 hours automatically violates both 2.2.1 and 2.2.6 simultaneously with no exceptions",
    "No - since 2.2.6 is violated, 2.2.1 cannot also be evaluated for the same page",
    "Yes - the warning dialog itself is a 2.2.1 violation because it interrupts the user"
  ],"answer":0,
  "explanation":"This tests distinguishing between closely related criteria: 2.2.1 is satisfied here by the warning-and-extension dialog at the moment of expiration, while 2.2.6 is separately violated by the complete absence of advance disclosure before the user ever begins. A page can pass one timing criterion while failing another closely related one - recognizing this distinction, not just pattern-matching 'timeout equals violation', is the actual skill being tested.","questionType":"Multi-Success-Criterion Analysis" },
{ "domain":"domain3","lesson":"Understandable: Government Services Portal B - Eligibility Wizard","learningObjective":"Recommend a remediation plan addressing multiple interacting findings","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.7","scName":"Redundant Entry","id":"FAM-GOVB-WIZ-Q4","difficulty":"hard","mode":"challenge",
  "question":"Given the redundant household-size entry and the missing advance timeout disclosure both exist on this wizard, what remediation plan addresses both efficiently?",
  "choices":[
    "These require two independent, unrelated fixes: pre-populate the step 5 household-size field from the step 2 value (resolving 3.3.7), and add a persistent, visible statement at the start of the wizard disclosing the session duration (resolving 2.2.6) - there is no single shared fix, since they stem from different underlying causes",
    "A single fix resolves both: simply increasing the session timeout to 30 minutes resolves both findings automatically",
    "Only the timeout disclosure needs fixing; redundant entry is not a real accessibility concern for government forms specifically",
    "Both findings should be closed as 'won't fix' since government eligibility rules are legally mandated and cannot be changed"
  ],"answer":0,
  "explanation":"This tests recognizing when two findings on the same feature do NOT share a root cause or a combined fix - data-carry-forward and session-timeout-disclosure are unrelated technical concerns requiring two separate, specific remediations, not a single shared one. WCAG requirements govern the interface's behavior, not the underlying eligibility rules themselves, so 'legally mandated eligibility rules' does not exempt the interface's accessibility.","questionType":"Remediation Planning" },

/* --- Appeals Process: interacting failures --- */
{ "domain":"domain1","lesson":"Perceivable: Government Services Portal B - Appeals Process","learningObjective":"Identify the first of two related document-handling violations","level":"A","principle":"Perceivable","guideline":"Adaptable","scNumber":"1.3.1","scName":"Info and Relationships","id":"FAM-GOVB-APPEAL-Q1","difficulty":"hard","mode":"challenge",
  "question":"The appeals process requires uploading a scanned copy of a denial letter, and the confirmation page then displays a table summarizing 'Appeal Deadline', 'Case Number', and 'Assigned Reviewer' with no header row markup connecting each label to its value - a screen reader announces all six pieces of text as one undifferentiated stream. Which Success Criterion is most directly violated?",
  "choices":["1.3.1 Info and Relationships","1.1.1 Non-Text Content","2.4.6 Headings and Labels","3.1.1 Language of Page"],"answer":0,
  "explanation":"1.3.1 requires that structural relationships, including which label corresponds to which value in a table-like layout, be programmatically determinable. Six pieces of text with no structural association leave a screen reader user unable to reliably match each label to its value.","questionType":"Application" },
{ "domain":"domain3","lesson":"Operable: Government Services Portal B - Appeals Process","learningObjective":"Identify a related, but distinct, deadline-communication issue","level":"AA","principle":"Understandable","guideline":"Predictable","scNumber":"3.2.6","scName":"Consistent Help","id":"FAM-GOVB-APPEAL-Q2","difficulty":"hard","mode":"challenge",
  "question":"The appeals confirmation page shows a 'Contact your caseworker' help link in the page's right sidebar. On the separate 'Appeal Status' tracking page, the same help mechanism appears instead at the very bottom of the page, below the footer, in a different relative position. Which Success Criterion is most directly violated?",
  "choices":["3.2.6 Consistent Help","3.2.3 Consistent Navigation","2.4.8 Location","3.2.4 Consistent Identification"],"answer":0,
  "explanation":"3.2.6 requires that a help mechanism, such as a caseworker contact link, appear in the same relative order and position across pages within a set, unless the user changes it. Moving from the sidebar to below the footer on a different page within the same appeals flow fails this requirement, at a point in the process where users are often already stressed and specifically looking for help.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Government Services Portal B - Appeals Process","learningObjective":"Determine affected users across two interacting appeals-process findings","level":"A","principle":"Perceivable","guideline":"Adaptable","scNumber":"1.3.1","scName":"Info and Relationships","id":"FAM-GOVB-APPEAL-Q3","difficulty":"hard","mode":"challenge",
  "question":"Considering both the untagged confirmation table and the inconsistent help link placement together, what is the compounded real-world impact on a screen reader user trying to track and understand their appeal?",
  "choices":[
    "The user cannot reliably determine their own appeal deadline, case number, or assigned reviewer from the confirmation table, and if they need help clarifying this confusion, the help mechanism has moved to an unexpected location on the very next page, compounding a moment of genuine stress and legal significance with two separate barriers in immediate sequence",
    "The two findings do not meaningfully interact with each other in any way",
    "Only sighted users are affected by either finding",
    "The compounded impact is negligible since appeals are optional"
  ],"answer":0,
  "explanation":"These two findings compound specifically because they occur in sequence during the same high-stakes task: a user confused by the untagged deadline information, already in a stressful legal process, then cannot easily find help because it moved to an unexpected position on the very next page - two separate barriers stacking at exactly the moment a user most needs both clarity and support.","questionType":"User Impact" },

/* --- Notification Preferences: interacting failures --- */
{ "domain":"domain4","lesson":"Robust: Government Services Portal B - Notification Preferences","learningObjective":"Identify a custom toggle violation","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-GOVB-NOTIF-Q1","difficulty":"medium","mode":"practice",
  "question":"The notification preferences page has custom toggle switches for 'Email updates', 'SMS updates', and 'Mail updates', built from styled generic elements with no role, no accessible name beyond a generic 'toggle', and no exposed on/off state. Which Success Criterion is most directly violated?",
  "choices":["4.1.2 Name, Role, Value","2.5.3 Label in Name","1.4.1 Use of Color","2.4.6 Headings and Labels"],"answer":0,
  "explanation":"4.1.2 requires a programmatically determinable name, role, and state for interactive components. Three toggles with generic, undifferentiated announcements and no exposed state fail this requirement, leaving a screen reader user unable to tell which toggle is which or whether it's currently on or off.","questionType":"Application" },
{ "domain":"domain4","lesson":"Understandable: Government Services Portal B - Notification Preferences","learningObjective":"Identify a related but distinct save-confirmation issue","level":"AA","principle":"Robust","guideline":"Compatible","scNumber":"4.1.3","scName":"Status Messages","id":"FAM-GOVB-NOTIF-Q2","difficulty":"hard","mode":"challenge",
  "question":"After toggling a preference, a small 'Saved' confirmation appears briefly near the top of the page with no live region markup, disappearing after 2 seconds. Given the toggles themselves already have unclear accessible names and state (per the prior finding), what additional problem does the missing save confirmation create?",
  "choices":[
    "A screen reader user who cannot reliably perceive the toggle's own state change now also has no way to know whether their change was successfully saved, compounding uncertainty about both what they changed and whether it took effect",
    "This creates no additional problem beyond the toggle's own accessible-name issue",
    "The missing save confirmation is more severe than the toggle issue and should be treated as the only real finding",
    "This is not a real WCAG concern since confirmation messages are optional UI polish"
  ],"answer":0,
  "explanation":"These two findings compound: even if a screen reader user manages to activate the correct toggle despite its unclear naming, they then have no way to confirm the change actually saved, since the confirmation itself is inaccessible. The user is left with two layers of uncertainty stacked on the same simple task.","questionType":"Multi-Success-Criterion Analysis" },
{ "domain":"domain4","lesson":"Robust: Government Services Portal B - Notification Preferences","learningObjective":"Determine root cause across the wizard, appeals, and notification findings","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-GOVB-NOTIF-Q3","difficulty":"hard","mode":"challenge",
  "question":"Across the eligibility wizard, appeals process, and notification preferences, the audit has now found: redundant data entry, undisclosed timeouts, an untagged confirmation table, inconsistent help placement, unlabeled toggles, and an unannounced save confirmation. What is the most useful way to characterize this pattern for the engineering leadership receiving the audit report?",
  "choices":[
    "Rather than six unrelated bugs, this reflects a portal-wide absence of accessibility consideration during development, spanning multiple different components and teams; the recommendation should include process changes (accessibility review gates, shared accessible component libraries) alongside the individual fixes, since individually patching six symptoms without addressing the underlying practice will likely produce a seventh finding on the next page audited",
    "These are six entirely unrelated, coincidental issues requiring no shared framing or process recommendation",
    "Only the most recently found issue (notification preferences) should be reported; earlier findings become obsolete once a new one is found",
    "The report should recommend rebuilding the entire portal from scratch as the only viable option"
  ],"answer":0,
  "explanation":"A mature audit report does more than list individual findings; when a pattern this broad emerges across genuinely different features, the most valuable insight for leadership is the systemic one - pointing toward process and tooling changes that prevent the next ten findings, not just fixing the six already found. This is the kind of higher-level synthesis a senior consultant provides beyond a simple bug list.","questionType":"Root Cause Analysis" }
];
window.WCAG_LAB_FAMILY_GOV_B = WCAG_LAB_FAMILY_GOV_B;

/* Scenario Family: Government Services Portal C (Advanced tier) - ambiguous edge cases requiring
   professional judgment, genuine exception analysis, and defensible reasoning under real-world
   constraints. Completes the progressive Government Services family (A -> B -> C). */
var WCAG_LAB_FAMILY_GOV_C = [

{ "domain":"domain3","lesson":"Operable: Government Services Portal C - Identity Verification","learningObjective":"Determine whether a security-driven interaction genuinely qualifies for a WCAG exception","level":"AA","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.8","scName":"Accessible Authentication (Minimum)","id":"FAM-GOVC-IDV-Q1","difficulty":"hard","mode":"challenge",
  "question":"To prevent benefits fraud, a portal requires applicants to answer three knowledge-based questions generated from credit bureau data ('Which of these addresses have you lived at?') with no alternative verification path offered. The agency argues this is essential for fraud prevention in a high-fraud-risk program. Is this a defensible 3.3.8 exception?",
  "choices":[
    "Likely not - 3.3.8's recognized exceptions are narrow (object/content recognition the user provided, or an assisting mechanism), and knowledge-based questions are a cognitive function test with no listed exception covering general fraud-risk justification alone; a genuinely defensible approach would pair this with an accessible alternative (such as in-person or phone verification with equivalent rigor) rather than making it the only path",
    "Yes, absolutely - any security or fraud-prevention justification automatically qualifies for a 3.3.8 exception with no further analysis needed",
    "Yes, but only for benefits programs specifically, since 3.3.8 explicitly exempts government fraud-prevention systems",
    "No, WCAG never permits any identity verification step for any reason"
  ],"answer":0,
  "explanation":"This tests real judgment: fraud prevention is a legitimate business goal, but 3.3.8's actual exceptions are specific and narrow, not a general 'security justifies anything' clause. The professionally defensible position is recommending an equally rigorous but accessible alternative path exists alongside the knowledge-based questions, not simply overriding the requirement because a business justification exists.","questionType":"Application" },
{ "domain":"domain3","lesson":"Operable: Government Services Portal C - Identity Verification","learningObjective":"Recommend a remediation that respects a legitimate competing constraint","level":"AA","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.8","scName":"Accessible Authentication (Minimum)","id":"FAM-GOVC-IDV-Q2","difficulty":"hard","mode":"challenge",
  "question":"Given the fraud-prevention team's legitimate concern, what remediation genuinely respects both the security requirement and 3.3.8?",
  "choices":[
    "Offer an equally rigorous alternative verification path not based on a cognitive function test, such as in-person verification at a local office, video-call verification with a caseworker, or document-based verification through a mail-in process, ensuring the alternative provides comparable fraud protection rather than being a weaker workaround",
    "Remove identity verification entirely from the fraud-risk program",
    "Keep the knowledge-based questions as the only path, since no accessible alternative can ever be equally secure",
    "Add a text explanation of the knowledge-based questions with no actual alternative verification path"
  ],"answer":0,
  "explanation":"The professionally sound path treats accessibility and security as compatible goals to jointly satisfy, not as a tradeoff requiring one to lose: an alternative path with genuinely comparable rigor (not a token, weaker substitute) satisfies 3.3.8 while preserving the fraud-prevention team's legitimate need for confidence in the verification.","questionType":"Best Next Action" },
{ "domain":"domain1","lesson":"Perceivable: Government Services Portal C - Accessibility Statement","learningObjective":"Evaluate whether a documented accessibility limitation is professionally defensible","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.2.1","scName":"Audio-only and Video-only (Prerecorded)","id":"FAM-GOVC-STMT-Q1","difficulty":"hard","mode":"challenge",
  "question":"The portal's public accessibility statement discloses: 'Historical video recordings of public hearings from before 2019 do not have captions or transcripts due to the cost of retroactively processing archival footage; recordings from 2019 onward are fully captioned.' As a consultant reviewing this statement, how should this disclosure be evaluated?",
  "choices":[
    "This is a reasonable example of honest, specific disclosure of a known, bounded limitation with a clear go-forward remediation already in place (captions for all content since 2019); it does not eliminate the underlying 1.2.1/1.2.3 gap for the older archive, but it is professionally credible because it is specific, honest, and shows the organization already fixed the practice going forward rather than only promising to someday",
    "This disclosure is meaningless since any gap at all makes the entire accessibility statement worthless",
    "This is fully compliant and requires no further action or mention in an audit, since a statement exists",
    "This disclosure should be rejected outright because government agencies are never permitted to have any known limitations"
  ],"answer":0,
  "explanation":"This tests the Introduction-level judgment (from the Academy's professional-practice content) that a credible accessibility statement is honest and specific about real limitations rather than either overclaiming compliance or being penalized to zero for any imperfection; a consultant would still list the older archive as an open finding while recognizing the statement's overall approach and the go-forward fix as genuinely good practice worth noting positively in the audit.","questionType":"Audit Documentation" },
{ "domain":"domain3","lesson":"Understandable: Government Services Portal C - Multilingual Forms","learningObjective":"Determine whether a translated form section creates a genuine violation or a defensible design choice","level":"A","principle":"Understandable","guideline":"Readable","scNumber":"3.1.2","scName":"Language of Parts","id":"FAM-GOVC-LANG-Q1","difficulty":"hard","mode":"challenge",
  "question":"A benefits form is available in both English and Spanish as two entirely separate pages (a language switcher lets the user pick one or the other), each page's HTML lang attribute correctly matching its own content. A single Spanish-language legal disclaimer, required verbatim by state law, appears unchanged and untagged within the otherwise-English version of the page. Does this violate 3.1.2, and what is the professionally correct assessment?",
  "choices":[
    "Yes - even though the overall page structure is well-designed (correct lang attribute per language version), the untagged Spanish disclaimer embedded within the English page is exactly the kind of individual-passage language change 3.1.2 requires be marked, regardless of why the passage exists in that language",
    "No - since the disclaimer text is legally mandated, it is automatically exempt from 3.1.2 with no further action needed",
    "No - 3.1.2 only applies to entire pages, never to individual passages within a page",
    "Yes, but only because the page also fails 3.1.1, which is unrelated to this specific finding"
  ],"answer":0,
  "explanation":"This tests recognizing that a legal requirement to include specific text does not exempt that text from needing correct language markup; the legal mandate explains why the Spanish text exists on an English page, but the remediation, adding the correct lang attribute to that specific passage, is straightforward and does not conflict with the legal requirement to include the text verbatim.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Government Services Portal C - Public Comment Period","learningObjective":"Assess a genuinely time-boxed process against 2.2.1's essential-timing exception","level":"A","principle":"Operable","guideline":"Enough Time","scNumber":"2.2.1","scName":"Timing Adjustable","id":"FAM-GOVC-COMMENT-Q1","difficulty":"hard","mode":"challenge",
  "question":"A regulatory public-comment portal closes comment submission at exactly 11:59 PM on a legally mandated deadline, with no extensions possible for any user, disability-related or otherwise, since the deadline is set by statute and affects the legal validity of the entire rulemaking process. Is a same-day, no-extension deadline like this defensible under 2.2.1?",
  "choices":[
    "This is a genuinely strong candidate for 2.2.1's essential-timing exception, since the deadline's legal function specifically requires a fixed, universal cutoff, and extending it for some users but not others could itself create legal and fairness problems; the more actionable accessibility question is whether the portal gives ALL users, including those needing more time due to disability, adequate advance notice and a fully accessible submission process well before the deadline, not whether the deadline itself can flex",
    "No - 2.2.1 requires every deadline of any kind be extendable with no exceptions, regardless of legal context",
    "Yes, trivially, with no further reasoning needed, since anything described as a 'legal deadline' is automatically exempt",
    "This question has no correct answer since legal deadlines are outside the scope of accessibility consulting entirely"
  ],"answer":0,
  "explanation":"This is a genuinely hard, realistic case: unlike many time limits where 'the business wants it this way' is not a strong essential-timing justification, a fixed, universal legal deadline governing a formal process has a real structural reason a flexible extension would undermine. Good professional judgment redirects energy toward what IS fixable (accessible advance notice, accessible submission tooling well before the deadline) rather than either accepting the deadline uncritically or insisting on an accommodation that could create its own legitimacy problems.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Government Services Portal C - Appeals Review","learningObjective":"Determine the best next action when a proposed fix creates a new accessibility concern","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.4","scName":"Error Prevention (Legal, Financial, Data)","id":"FAM-GOVC-REVIEW-Q1","difficulty":"hard","mode":"challenge",
  "question":"To satisfy 3.3.4 on the appeals submission page, a developer proposes adding a modal confirmation dialog before final submission. Testing the proposed implementation reveals the modal itself has a keyboard trap. What is the consultant's best next action?",
  "choices":[
    "Do not approve the fix as complete; flag the new keyboard trap as a distinct 2.1.2 finding introduced by this specific change, and require both issues be resolved together before considering the remediation verified",
    "Approve the fix as complete, since it technically satisfies 3.3.4 even though it introduces a new violation of a different criterion",
    "Reject the entire confirmation-dialog approach and recommend removing it, reverting to no confirmation step at all",
    "Ignore the keyboard trap since it was found by accident during testing for an unrelated criterion"
  ],"answer":0,
  "explanation":"A thorough consultant verifies that a fix for one finding did not introduce a new one - a genuinely common real-world occurrence, since a rushed remediation focused narrowly on the reported issue can easily create a new problem elsewhere in the same component. Approving a fix that trades one violation for another is not real progress, and simply removing the confirmation step would abandon a genuinely needed safeguard rather than fixing the new defect it introduced.","questionType":"Best Next Action" },
{ "domain":"domain1","lesson":"Perceivable: Government Services Portal C - Accessible Format Requests","learningObjective":"Evaluate a proposed remediation for scalability across a large document archive","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-GOVC-FORMAT-Q1","difficulty":"hard","mode":"challenge",
  "question":"An agency proposes resolving all inaccessible scanned PDF forms (numbering in the thousands, accumulated over 20 years) by adding a 'Request Accessible Format' button that lets a user email a request and receive a manually remediated version within 5 business days. Is this a complete, defensible remediation strategy on its own?",
  "choices":[
    "It is a reasonable interim accommodation for the existing archive, but not a complete remediation on its own; it should be paired with a plan to proactively fix the most-requested and highest-traffic documents directly, and, critically, ensure all NEW documents are published in an accessible format from the start, so the backlog does not continue growing indefinitely while the request-based process only ever addresses the past",
    "This fully and completely resolves the finding with no further action needed, since a workaround now exists",
    "This is not a valid remediation at all and should be rejected outright with no credit given",
    "This only needs to apply to documents published in the last year; older documents are automatically exempt from any remediation"
  ],"answer":0,
  "explanation":"A request-based accommodation is a legitimate, honest interim measure for a genuinely large existing backlog, but treating it as the complete, final answer would let the underlying problem persist indefinitely and continue growing with every new document published the same inaccessible way. A complete strategy pairs the interim accommodation with both prioritized backlog remediation and a fixed go-forward publishing process - exactly the kind of layered, realistic recommendation a senior consultant provides rather than a single, incomplete point fix.","questionType":"Remediation Planning" }
];
window.WCAG_LAB_FAMILY_GOV_C = WCAG_LAB_FAMILY_GOV_C;

/* Scenario Family: Airline Booking Platform - Flight Search, Seat Selection, Passenger Details,
   Baggage & Add-ons, Boarding Pass / Check-in. */
var WCAG_LAB_FAMILY_AIRLINE = [

/* --- Flight Search --- */
{ "domain":"domain2","lesson":"Operable: Airline Booking - Flight Search","learningObjective":"Identify the violated Success Criterion for a fare-comparison sort control","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.1","scName":"Keyboard","id":"FAM-AIR-SEARCH-Q1","difficulty":"medium","mode":"practice",
  "question":"The flight results page's 'Sort by: Price / Duration / Departure Time' control is a custom dropdown that opens on click but whose options can only be selected with a mouse click; arrow keys and Enter do nothing once the dropdown is open. Which Success Criterion is most directly violated?",
  "choices":["2.1.1 Keyboard","2.4.3 Focus Order","4.1.2 Name, Role, Value","1.3.5 Identify Input Purpose"],"answer":0,
  "explanation":"2.1.1 requires all functionality be operable through a keyboard. A dropdown whose individual options cannot be selected without a mouse fails this requirement, regardless of whether the dropdown itself can be opened by keyboard.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Airline Booking - Flight Search","learningObjective":"Identify the violated Success Criterion for a fare-class comparison table","level":"A","principle":"Perceivable","guideline":"Adaptable","scNumber":"1.3.1","scName":"Info and Relationships","id":"FAM-AIR-SEARCH-Q2","difficulty":"hard","mode":"challenge",
  "question":"Each flight result shows a fare comparison (Basic, Standard, Flex) as three columns of checkmarks and X marks indicating which amenities (checked bag, seat selection, changes) are included, built with no table header markup connecting each row's amenity name to each column's fare class. Which Success Criterion is most directly violated?",
  "choices":["1.3.1 Info and Relationships","1.1.1 Non-Text Content","1.4.1 Use of Color","2.4.6 Headings and Labels"],"answer":0,
  "explanation":"1.3.1 requires structural relationships, including a comparison table's row-to-column associations, be programmatically determinable. Checkmarks and X marks with no header association leave a screen reader user unable to reliably tell which fare class includes which amenity.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Airline Booking - Flight Search","learningObjective":"Identify a checkmark/X-mark specific sub-issue within the same comparison table","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-AIR-SEARCH-Q3","difficulty":"hard","mode":"challenge",
  "question":"Beyond the missing table structure, the checkmark and X-mark icons themselves are background CSS images with no text alternative of any kind, not even within a properly structured table. Once table structure is fixed, does an additional finding remain?",
  "choices":[
    "Yes - even inside a properly structured table, each checkmark/X-mark icon still needs its own accessible text ('Included' / 'Not included') since a background CSS image conveys no information to assistive technology on its own; fixing the table structure alone does not fix this separate 1.1.1 gap",
    "No - fixing the table structure automatically resolves any icon-level accessibility gap as a side effect",
    "No - checkmark and X-mark icons are exempt from 1.1.1 since they are considered purely decorative by definition",
    "Yes, but this becomes a 1.3.1 finding instead of 1.1.1 once inside a table"
  ],"answer":0,
  "explanation":"This tests recognizing that structural fixes and content fixes are independent: correct table markup tells assistive technology which cell belongs to which row and column, but if the cell's actual content (the icon) has no accessible text at all, the cell is still effectively empty to a screen reader - both the structure AND the icon-level text alternative need fixing.","questionType":"Application" },

/* --- Seat Selection --- */
{ "domain":"domain4","lesson":"Robust: Airline Booking - Seat Selection","learningObjective":"Identify the violated Success Criterion for an interactive seat map","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-AIR-SEAT-Q1","difficulty":"hard","mode":"challenge",
  "question":"The seat selection map shows a grid of clickable seat icons; a screen reader announces each one only as 'button' with no seat number, no indication of window/middle/aisle, no price, and no occupied/available state. Which Success Criterion is most directly violated?",
  "choices":["4.1.2 Name, Role, Value","2.5.8 Target Size (Minimum)","1.4.1 Use of Color","2.4.4 Link Purpose (In Context)"],"answer":0,
  "explanation":"4.1.2 requires a programmatically determinable name, role, and state for each interactive component. A grid of identically-announced buttons with no seat identity or availability state is a severe failure for a feature whose entire purpose is choosing a specific seat.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Airline Booking - Seat Selection","learningObjective":"Identify a color-only availability violation on the same seat map","level":"A","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.1","scName":"Use of Color","id":"FAM-AIR-SEAT-Q2","difficulty":"medium","mode":"practice",
  "question":"On the same seat map, available seats are shown in light gray and occupied seats in dark gray, with no other visual distinction (no X mark, no different icon). Which Success Criterion is most directly violated?",
  "choices":["1.4.1 Use of Color","1.4.3 Contrast (Minimum)","2.5.8 Target Size (Minimum)","4.1.2 Name, Role, Value"],"answer":0,
  "explanation":"1.4.1 requires color not be the sole means of conveying information. Two shades of gray with no other visual cue fail for users with low vision or color vision deficiency who may not reliably distinguish the two states, compounding the separate 4.1.2 failure on the same component.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Airline Booking - Seat Selection","learningObjective":"Recommend a remediation plan addressing both seat map findings together","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-AIR-SEAT-Q3","difficulty":"hard","mode":"challenge",
  "question":"What remediation plan addresses both the missing accessible names/state and the color-only availability indicator together?",
  "choices":[
    "Give each seat button a full accessible name (e.g., '14A, window seat, available, no extra fee') combining identity, type, and availability, and additionally add a non-color visual indicator (icon or pattern) distinguishing available from occupied seats for sighted low-vision users",
    "Only add accessible names, since fixing 4.1.2 automatically satisfies 1.4.1 as a side effect",
    "Replace the interactive seat map entirely with a single button reading 'Assign me any seat'",
    "Only fix the color contrast between the two gray shades, leaving both underlying findings unresolved"
  ],"answer":0,
  "explanation":"These are two independent, non-overlapping fixes needed together: a complete accessible name resolves 4.1.2 for screen reader users, while a non-color visual indicator resolves 1.4.1 for sighted users with color vision deficiency - fixing one does not automatically fix the other, since they serve different populations through different mechanisms.","questionType":"Remediation Planning" },

/* --- Passenger Details --- */
{ "domain":"domain3","lesson":"Understandable: Airline Booking - Passenger Details","learningObjective":"Identify the violated Success Criterion for a passenger name mismatch error","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.3","scName":"Error Suggestion","id":"FAM-AIR-PAX-Q1","difficulty":"medium","mode":"practice",
  "question":"Entering a passenger's name with a hyphen ('Mary-Jane') triggers a validation error reading 'Invalid name format' with no explanation of what format is actually expected or what specifically about the input is invalid. Which Success Criterion is most directly violated?",
  "choices":["3.3.3 Error Suggestion","3.3.1 Error Identification","1.3.5 Identify Input Purpose","3.3.2 Labels or Instructions"],"answer":0,
  "explanation":"3.3.3 requires a suggestion for correction when an error is detected and a suggestion is known. Since the system clearly has a specific validation rule causing this rejection, a specific correction suggestion, such as clarifying which characters are or are not accepted, is genuinely available but not provided, distinct from 3.3.1's more basic error-identification requirement, which this message does technically satisfy.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Airline Booking - Passenger Details","learningObjective":"Identify the violated Success Criterion for redundant passenger information","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.7","scName":"Redundant Entry","id":"FAM-AIR-PAX-Q2","difficulty":"medium","mode":"practice",
  "question":"For a round-trip booking, the passenger's full name and date of birth are entered on the outbound flight's passenger page, then requested again, blank, on the separate return flight's passenger page within the same booking session. Which Success Criterion is most directly violated?",
  "choices":["3.3.7 Redundant Entry","3.3.1 Error Identification","1.3.2 Meaningful Sequence","2.4.3 Focus Order"],"answer":0,
  "explanation":"3.3.7 requires information already entered earlier in the same process be carried forward. A round trip is one booking session; the same passenger's details should not need to be re-entered for the return flight.","questionType":"Application" },

/* --- Baggage & Add-ons --- */
{ "domain":"domain2","lesson":"Operable: Airline Booking - Baggage & Add-ons","learningObjective":"Identify the violated Success Criterion for a bag-count stepper","level":"AA","principle":"Operable","guideline":"Input Modalities","scNumber":"2.5.8","scName":"Target Size (Minimum)","id":"FAM-AIR-BAG-Q1","difficulty":"medium","mode":"practice",
  "question":"The checked-bag quantity stepper's plus and minus buttons are each only 14 by 14 CSS pixels with just 1 pixel of spacing between them and neighboring controls, and no larger equivalent control exists elsewhere. Which Success Criterion is most directly violated?",
  "choices":["2.5.8 Target Size (Minimum)","2.5.5 Target Size (Enhanced)","2.5.1 Pointer Gestures","1.4.4 Resize Text"],"answer":0,
  "explanation":"2.5.8 requires pointer targets be at least 24 by 24 CSS pixels at Level AA, with defined exceptions. Buttons at 14 by 14 pixels with minimal spacing and no larger alternative fail this baseline, making accurate tapping difficult for users with limited fine motor control.","questionType":"Application" },
{ "domain":"domain2","lesson":"Understandable: Airline Booking - Baggage & Add-ons","learningObjective":"Identify the violated Success Criterion for an upsell modal's dismiss control","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.2","scName":"No Keyboard Trap","id":"FAM-AIR-BAG-Q2","difficulty":"hard","mode":"challenge",
  "question":"After selecting baggage, a modal appears offering seat upgrades. The modal's 'No thanks' dismiss link is present visually but never receives keyboard focus in the tab order, and Escape does not close the modal either. Which Success Criterion is most directly violated?",
  "choices":["2.1.2 No Keyboard Trap","2.1.1 Keyboard","2.4.3 Focus Order","3.2.1 On Focus"],"answer":0,
  "explanation":"2.1.2 requires that if focus can move into a component, it can also move out using the keyboard alone. Focus moving into the modal (as it opens) with no keyboard-reachable way to dismiss it and no Escape handling is a keyboard trap.","questionType":"Application" },

/* --- Boarding Pass / Check-in --- */
{ "domain":"domain1","lesson":"Perceivable: Airline Booking - Check-in","learningObjective":"Identify the violated Success Criterion for a mobile boarding pass barcode","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-AIR-CHECKIN-Q1","difficulty":"easy","mode":"reinforce",
  "question":"The mobile boarding pass screen displays a barcode image for gate scanning with alt text reading 'barcode', but the flight number, seat, boarding group, and gate, all also shown only within that same image, have no separate text alternative anywhere on the screen. Which Success Criterion is most directly violated?",
  "choices":["1.1.1 Non-Text Content","2.4.2 Page Titled","1.4.4 Resize Text","3.1.1 Language of Page"],"answer":0,
  "explanation":"1.1.1 requires a text alternative serving an equivalent purpose. 'Barcode' identifies what kind of image it is but conveys none of the actual flight information (number, seat, group, gate) a passenger critically needs, which sighted users get directly from the same image.","questionType":"Recognition" },
{ "domain":"domain1","lesson":"Perceivable: Airline Booking - Check-in","learningObjective":"Recommend an appropriate remediation for a mobile boarding pass","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-AIR-CHECKIN-Q2","difficulty":"medium","mode":"practice",
  "question":"What is the most appropriate remediation for the boarding pass screen, preserving the barcode's scanning function while fixing the accessibility gap?",
  "choices":[
    "Keep the barcode image for gate scanning, but display the flight number, seat, boarding group, and gate as separate, real text elements on the same screen, not embedded only within the image",
    "Remove the barcode entirely and replace it with a text-only boarding pass with no scannable code",
    "Add a longer alt attribute to the barcode image describing all four pieces of information in one sentence",
    "Increase the barcode's image resolution with no other change"
  ],"answer":0,
  "explanation":"The barcode's function (gate scanning) and the passenger's need for readable flight information are two different requirements; displaying the key details as real, separate text alongside the barcode serves both, whereas cramming everything into a single alt attribute is a weaker, less reliable substitute for genuine text content.","questionType":"Remediation Planning" }
];
window.WCAG_LAB_FAMILY_AIRLINE = WCAG_LAB_FAMILY_AIRLINE;

/* Scenario Family: Social Media Platform - News Feed, Post Composer, Notifications, Profile Settings,
   Direct Messaging. */
var WCAG_LAB_FAMILY_SOCIAL = [

/* --- News Feed --- */
{ "domain":"domain2","lesson":"Operable: Social Media Platform - News Feed","learningObjective":"Identify the violated Success Criterion for an infinite-scroll feed with no bypass mechanism","level":"A","principle":"Operable","guideline":"Navigable","scNumber":"2.4.1","scName":"Bypass Blocks","id":"FAM-SOC-FEED-Q1","difficulty":"medium","mode":"practice",
  "question":"The news feed loads additional posts continuously as the user scrolls, with no landmark regions and no skip link anywhere on the page. Which Success Criterion is most directly violated?",
  "choices":["2.4.1 Bypass Blocks","2.2.2 Pause, Stop, Hide","1.4.10 Reflow","2.4.5 Multiple Ways"],"answer":0,
  "explanation":"2.4.1 requires a mechanism to bypass repeated blocks of content. An ever-growing feed with no landmarks or skip link forces tedious, repeated navigation through every loaded post to reach other page regions.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Social Media Platform - News Feed","learningObjective":"Identify the violated Success Criterion for autoplaying video with delayed controls","level":"A","principle":"Perceivable","guideline":"Time-based Media","scNumber":"1.4.2","scName":"Audio Control","id":"FAM-SOC-FEED-Q2","difficulty":"medium","mode":"practice",
  "question":"Video posts autoplay with sound the instant they scroll into view, and the mute/pause control only appears after a 2-second delay, during which the audio is already playing uncontrolled. Which Success Criterion is most directly violated?",
  "choices":["1.4.2 Audio Control","2.2.2 Pause, Stop, Hide","1.2.2 Captions (Prerecorded)","2.3.1 Three Flashes or Below Threshold"],"answer":0,
  "explanation":"1.4.2 requires audio playing automatically for more than 3 seconds to have an immediately available mechanism to pause, stop, or control its volume. A 2-second delay before any control appears means the audio plays uncontrolled during a window when a user caught off guard has no way to react.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Social Media Platform - News Feed","learningObjective":"Identify the violated Success Criterion for a custom 'like' button","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-SOC-FEED-Q3","difficulty":"hard","mode":"challenge",
  "question":"The 'like' button on each post is a custom heart icon with no accessible name and no exposed pressed/liked state; a screen reader announces it only as 'button' both before and after activating it. Which Success Criterion is most directly violated?",
  "choices":["4.1.2 Name, Role, Value","2.5.3 Label in Name","1.1.1 Non-Text Content","2.4.6 Headings and Labels"],"answer":0,
  "explanation":"4.1.2 requires both an accessible name describing the control's purpose and an exposed, updating state. A heart icon announced only as 'button' with no name and no liked/unliked state leaves a screen reader user unable to know what the control does or whether they've already liked the post.","questionType":"Application" },

/* --- Post Composer --- */
{ "domain":"domain3","lesson":"Understandable: Social Media Platform - Post Composer","learningObjective":"Identify the violated Success Criterion for a character-limit warning","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.1","scName":"Error Identification","id":"FAM-SOC-COMPOSE-Q1","difficulty":"medium","mode":"practice",
  "question":"Typing past the post composer's 280-character limit turns the remaining-character counter red with no other indication, and the 'Post' button silently does nothing when clicked while over the limit. Which Success Criterion is most directly violated?",
  "choices":["3.3.1 Error Identification","1.4.1 Use of Color","2.4.3 Focus Order","3.3.3 Error Suggestion"],"answer":0,
  "explanation":"3.3.1 requires the error be identified and described in text. A red counter with a silently non-functional Post button gives no textual explanation of why posting failed, leaving especially screen reader users with no way to diagnose the problem.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Social Media Platform - Post Composer","learningObjective":"Identify the violated Success Criterion for image upload without alt text prompting","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-SOC-COMPOSE-Q2","difficulty":"medium","mode":"practice",
  "question":"Uploading a photo to a post gives no prompt or field to add a description of the image; the platform publishes the post with no alt text mechanism available to the author at all. Which Success Criterion is most directly implicated, and whose responsibility does this framing highlight?",
  "choices":[
    "1.1.1 Non-Text Content - while individual users write post content, the platform itself bears responsibility for providing the mechanism (an alt text field) that would let authors satisfy this requirement; its complete absence is a platform-level accessibility failure, not merely an individual user's oversight",
    "1.1.1 does not apply to user-generated content under any circumstances",
    "This is solely the posting user's fault and the platform bears no responsibility at all",
    "2.4.6 Headings and Labels is the correct criterion instead"
  ],"answer":0,
  "explanation":"This tests recognizing platform-level versus content-level responsibility: 1.1.1 ultimately requires images have text alternatives, but a platform that provides no mechanism for authors to add one has itself created a systemic barrier affecting every image posted, which is a legitimate, platform-level finding distinct from any single user's individual choice not to add a description.","questionType":"Root Cause Analysis" },

/* --- Notifications --- */
{ "domain":"domain4","lesson":"Robust: Social Media Platform - Notifications","learningObjective":"Identify the violated Success Criterion for a notification badge","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-SOC-NOTIF-Q1","difficulty":"medium","mode":"practice",
  "question":"The notifications bell icon in the header shows a small red badge with a number ('12') indicating unread notifications, conveyed purely through a CSS-styled circle with no accessible text; a screen reader announces only 'Notifications, button' with no indication of the unread count. Which Success Criterion is most directly violated?",
  "choices":["4.1.2 Name, Role, Value","1.4.1 Use of Color","2.4.4 Link Purpose (In Context)","2.5.3 Label in Name"],"answer":0,
  "explanation":"4.1.2 requires relevant state information be programmatically exposed. The unread count is meaningful state a sighted user perceives at a glance but a screen reader user cannot access at all, since it exists purely as unlabeled visual styling.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Social Media Platform - Notifications","learningObjective":"Identify the violated Success Criterion for browser push notification permission requests","level":"A","principle":"Operable","guideline":"Enough Time","scNumber":"2.2.4","scName":"Interruptions","id":"FAM-SOC-NOTIF-Q2","difficulty":"hard","mode":"challenge",
  "question":"The platform re-prompts for browser push notification permission on every single page load until the user grants it, interrupting whatever the user is doing each time, with no way to permanently dismiss the prompt short of granting permission. Which Success Criterion is most directly violated?",
  "choices":["2.2.4 Interruptions","2.2.1 Timing Adjustable","4.1.3 Status Messages","3.2.5 Change on Request"],"answer":0,
  "explanation":"2.2.4 requires that interruptions can be postponed or suppressed by the user, except for genuine emergencies. A permission prompt re-appearing on every page load with no way to permanently dismiss it (short of complying) fails this requirement, and is particularly disruptive for screen reader users whose reading flow is interrupted repeatedly.","questionType":"Application" },

/* --- Profile Settings --- */
{ "domain":"domain3","lesson":"Understandable: Social Media Platform - Profile Settings","learningObjective":"Identify the violated Success Criterion for inconsistent settings navigation","level":"AA","principle":"Understandable","guideline":"Predictable","scNumber":"3.2.3","scName":"Consistent Navigation","id":"FAM-SOC-PROFILE-Q1","difficulty":"hard","mode":"challenge",
  "question":"The Settings section's left sidebar lists Privacy, Notifications, Security, and Account in that order on the main Settings page, but on the Security sub-page specifically, the same sidebar reorders to Account, Privacy, Security, Notifications with no clear reason. Which Success Criterion is most directly violated?",
  "choices":["3.2.3 Consistent Navigation","3.2.4 Consistent Identification","2.4.5 Multiple Ways","2.4.8 Location"],"answer":0,
  "explanation":"3.2.3 requires navigational mechanisms repeated across pages within a set to occur in the same relative order. A sidebar that reorders itself on one specific sub-page, with no user-initiated reason, fails this requirement and undermines the predictability a consistent settings menu is meant to provide.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Social Media Platform - Profile Settings","learningObjective":"Recommend an appropriate remediation strategy","level":"AA","principle":"Understandable","guideline":"Predictable","scNumber":"3.2.3","scName":"Consistent Navigation","id":"FAM-SOC-PROFILE-Q2","difficulty":"medium","mode":"practice",
  "question":"What is the most likely underlying cause and appropriate fix for the Security sub-page's reordered sidebar?",
  "choices":[
    "The Security sub-page likely uses a separately maintained copy of the sidebar navigation rather than a single shared component; the fix is consolidating all settings sub-pages to render the sidebar from one shared, centrally maintained source so order can never drift between pages",
    "This is expected, correct behavior and requires no fix, since sidebars are allowed to vary between pages under WCAG",
    "The fix is removing the sidebar from the Security page entirely",
    "The fix is alphabetizing the sidebar differently on every single sub-page"
  ],"answer":0,
  "explanation":"Inconsistent navigation across pages within the same section is a very common symptom of duplicated rather than shared navigation code; consolidating to one shared component both fixes the current finding and prevents the same drift from recurring as new settings pages are added later.","questionType":"Remediation Planning" },

/* --- Direct Messaging --- */
{ "domain":"domain2","lesson":"Operable: Social Media Platform - Direct Messaging","learningObjective":"Identify the violated Success Criterion for a message-delete confirmation gesture","level":"A","principle":"Operable","guideline":"Input Modalities","scNumber":"2.5.1","scName":"Pointer Gestures","id":"FAM-SOC-DM-Q1","difficulty":"medium","mode":"practice",
  "question":"On mobile, deleting a sent message requires swiping the message bubble left with a specific gesture; there is no long-press menu, no button, and no alternative single-pointer way to trigger delete. Which Success Criterion is most directly violated?",
  "choices":["2.5.1 Pointer Gestures","2.5.7 Dragging Movements","2.1.1 Keyboard","2.5.2 Pointer Cancellation"],"answer":0,
  "explanation":"2.5.1 requires that path-based gestures like a directional swipe have a single-pointer alternative, unless essential. A tap-triggered context menu with a delete option is a straightforward, commonly implemented alternative that should exist alongside the swipe gesture.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Social Media Platform - Direct Messaging","learningObjective":"Determine whether multiple Success Criteria are involved in a messaging status scenario","level":"AA","principle":"Robust","guideline":"Compatible","scNumber":"4.1.3","scName":"Status Messages","id":"FAM-SOC-DM-Q2","difficulty":"hard","mode":"challenge",
  "question":"In the same messaging feature, a 'typing...' indicator and message delivery status ('Sent', 'Delivered', 'Read') all update dynamically with no live region markup, and separately, the conversation list on the left has no landmark distinguishing it from the open conversation on the right, making it hard for a screen reader user to know which region they're currently in. Which Success Criteria are implicated together?",
  "choices":[
    "4.1.3 Status Messages, for the unannounced typing and delivery-status updates, and 1.3.1 Info and Relationships (or a landmark-structure concern most closely tied to 2.4.1's underlying principle), for the missing structural distinction between the conversation list and the open conversation",
    "Only 4.1.3 applies; landmark structure is never a relevant concern for messaging interfaces",
    "Only 2.1.1 Keyboard applies, since the issue involves interactive regions",
    "Neither criterion applies since real-time messaging is exempt from WCAG"
  ],"answer":0,
  "explanation":"This scenario spans two distinct concerns: 4.1.3 for the unannounced dynamic status updates, and a structural/landmark concern (rooted in 1.3.1's programmatic-relationship principle and closely related to 2.4.1's navigation concerns) for the missing distinction between two functionally separate regions of the same screen, which compounds a screen reader user's difficulty understanding both what changed and where they currently are.","questionType":"Multi-Success-Criterion Analysis" }
];
window.WCAG_LAB_FAMILY_SOCIAL = WCAG_LAB_FAMILY_SOCIAL;

(function () {
  var additions = [].concat(
    window.WCAG_LAB_FAMILY_GOV_A || [],
    window.WCAG_LAB_FAMILY_GOV_B || [],
    window.WCAG_LAB_FAMILY_GOV_C || [],
    window.WCAG_LAB_FAMILY_AIRLINE || [],
    window.WCAG_LAB_FAMILY_SOCIAL || []
  );
  if (window.WCAG_LAB_DATA && Array.isArray(window.WCAG_LAB_DATA.questions)) {
    window.WCAG_LAB_DATA.questions = window.WCAG_LAB_DATA.questions.concat(additions);
  }
}());
