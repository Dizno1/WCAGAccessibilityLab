/* WCAG Accessibility Lab expansion data, part 2.
   Adds full "scenario family" mini-audits: connected, multi-page realistic products (Banking Portal,
   Hospital Portal, University Registration Portal, Shopping Platform), each spanning 5 related pages
   with 14-20 independent questions per family, functioning as a miniature accessibility audit rather
   than a single isolated scenario. This file is loaded after wcag-lab-expansion.js and appends to the
   same window.WCAG_LAB_DATA.questions array without modifying, removing, or replacing any existing
   question from either the original data or the first expansion file. */
/* Scenario Family: Banking Portal - a connected, multi-page mini-audit spanning Login, Account Dashboard,
   Transfer Funds, Statements, and Chat Support. Independent questions, but each traceable to a specific
   page within one coherent product, mirroring how a real consulting engagement audits an entire portal. */
var WCAG_LAB_FAMILY_BANKING = [

/* --- Page 1: Login --- */
{ "domain":"domain3","lesson":"Understandable: Banking Portal - Login","learningObjective":"Identify the violated Success Criterion on a login page","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.1","scName":"Error Identification","id":"FAM-BANK-LOGIN-Q1","difficulty":"medium","mode":"practice",
  "question":"On the banking portal's login page, entering an incorrect password causes the password field's border to turn red, with no text message anywhere on the page explaining what went wrong. Which Success Criterion is most directly violated?",
  "choices":["3.3.1 Error Identification","1.4.1 Use of Color","2.4.3 Focus Order","3.3.8 Accessible Authentication (Minimum)"],"answer":0,
  "explanation":"3.3.1 requires that a detected input error be identified and described to the user in text. A red border alone, with no text description of the failed login, fails this requirement, and also happens to rely on color alone, but the primary, most direct failure is the missing error text.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Banking Portal - Login","learningObjective":"Determine whether multiple Success Criteria are involved","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"1.4.1","scName":"Use of Color","id":"FAM-BANK-LOGIN-Q2","difficulty":"hard","mode":"challenge",
  "question":"Given the login error is communicated only through a red border with no text, which additional Success Criterion, beyond 3.3.1, is also implicated?",
  "choices":["1.4.1 Use of Color, since the border color change is the only signal of the error state","2.5.3 Label in Name, since the password field's label is the issue","2.2.1 Timing Adjustable, since the login form has a time limit","1.3.5 Identify Input Purpose, since the field's autocomplete purpose is the issue"],"answer":0,
  "explanation":"This single failure spans two criteria at once: 3.3.1 for the missing text description of the error, and 1.4.1 for relying on a color change alone as the only visual signal something went wrong, which also fails users with color vision deficiency even if text were later added without also fixing the color-only signal.","questionType":"Multi-Success-Criterion Analysis" },
{ "domain":"domain2","lesson":"Operable: Banking Portal - Login","learningObjective":"Identify the violated Success Criterion for a login session timeout","level":"A","principle":"Operable","guideline":"Enough Time","scNumber":"2.2.1","scName":"Timing Adjustable","id":"FAM-BANK-LOGIN-Q3","difficulty":"medium","mode":"practice",
  "question":"The login page itself has no timing issue, but once logged in, the session expires after 5 minutes of inactivity with no warning and no way to extend it, common on banking sites for security reasons. Does this alone violate 2.2.1, and why?",
  "choices":[
    "Not necessarily - 2.2.1 includes an essential-timing exception for cases where extending the time limit would invalidate the activity's purpose, and session security on a financial platform is a commonly accepted example, though a warning before expiration is still good practice",
    "Yes, always - any session timeout under 20 hours automatically violates 2.2.1 with no exceptions",
    "Yes, always - banking sites are entirely exempt from 2.2.1 regardless of implementation",
    "No, never - 2.2.1 only applies to quizzes and tests, not banking sessions"
  ],"answer":0,
  "explanation":"2.2.1 does include a security-related essential-timing consideration, and financial session timeouts are a commonly cited real-world example where a strict limit may be justified. This question tests recognizing a genuine exception case, not just applying the rule mechanically - though best practice still recommends a warning before expiration even when the underlying limit itself is defensible.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Banking Portal - Login","learningObjective":"Recommend an appropriate remediation strategy","level":"A","principle":"Operable","guideline":"Enough Time","scNumber":"2.2.1","scName":"Timing Adjustable","id":"FAM-BANK-LOGIN-Q4","difficulty":"medium","mode":"practice",
  "question":"Even accepting that a strict session timeout is defensible for security, what remediation would still improve accessibility without weakening that security posture?",
  "choices":[
    "Add a warning at least 60 seconds before expiration with a one-click option to extend the session, preserving the same underlying security timeout while giving users a chance to avoid unexpected loss of work",
    "Remove the session timeout entirely",
    "Extend the timeout to 24 hours with no warning",
    "Do nothing further, since the timeout itself is already justified"
  ],"answer":0,
  "explanation":"A pre-expiration warning with an extension option satisfies 2.2.1's preferred approach without meaningfully weakening security, since the underlying timeout duration and re-authentication requirement remain unchanged - the user simply gets a chance to actively confirm they're still present before losing their session.","questionType":"Remediation Planning" },

/* --- Page 2: Account Dashboard --- */
{ "domain":"domain1","lesson":"Perceivable: Banking Portal - Account Dashboard","learningObjective":"Identify the violated Success Criterion on an account summary page","level":"AA","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.3","scName":"Contrast (Minimum)","id":"FAM-BANK-DASH-Q1","difficulty":"medium","mode":"practice",
  "question":"The account dashboard displays each account's available balance in light gray text (contrast ratio 2.9:1) against a white card background. Which Success Criterion is most directly violated?",
  "choices":["1.4.3 Contrast (Minimum)","1.4.6 Contrast (Enhanced)","1.4.11 Non-text Contrast","2.4.6 Headings and Labels"],"answer":0,
  "explanation":"1.4.3 requires normal text to meet a 4.5:1 contrast ratio against its background at Level AA. Light gray balance figures at 2.9:1 fall well below this threshold - a particularly consequential failure given balance figures are arguably the single most important piece of information on this page.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Banking Portal - Account Dashboard","learningObjective":"Identify the violated Success Criterion for a custom account-type filter","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-BANK-DASH-Q2","difficulty":"hard","mode":"challenge",
  "question":"The dashboard has a custom filter control (styled to look like a segmented button group: 'All', 'Checking', 'Savings', 'Credit') built from generic clickable elements with no ARIA role, and the currently selected filter is indicated only by a background color change with no announced state. Which Success Criterion is most directly violated?",
  "choices":["4.1.2 Name, Role, Value","2.4.6 Headings and Labels","1.3.5 Identify Input Purpose","2.5.3 Label in Name"],"answer":0,
  "explanation":"4.1.2 requires that a component's role and current state (here, which filter is selected) be programmatically determinable. Generic clickable elements with no role and a purely visual selected-state indicator fail both halves of this requirement for a screen reader user, who cannot tell what kind of control this is or which filter is currently active.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Banking Portal - Account Dashboard","learningObjective":"Assign severity to a finding involving core account information","level":"AA","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.3","scName":"Contrast (Minimum)","id":"FAM-BANK-DASH-Q3","difficulty":"hard","mode":"challenge",
  "question":"How should the low-contrast balance figures be rated, given that account balance is the single most-consulted piece of information on this dashboard, checked by nearly every user on nearly every visit?",
  "choices":[
    "High/Serious - it is not fully blocking (text is technically visible to many users) but it degrades the platform's single most important, most frequently used piece of information for users with low vision",
    "Low/Minor - contrast issues are always low severity regardless of what content is affected",
    "Critical/Blocking - because any 1.4.3 violation must always be rated Critical",
    "Not ratable - severity does not apply to numeric financial data"
  ],"answer":0,
  "explanation":"Severity weighs both the technical violation and what it affects: a contrast failure on rarely-viewed fine print is a different severity than the same technical failure on the specific figure nearly every user consults first, every time they open the app. High frequency of encounter combined with real (if not total) difficulty reading the content lands this at High/Serious.","questionType":"Severity Assessment" },
{ "domain":"domain1","lesson":"Perceivable: Banking Portal - Account Dashboard","learningObjective":"Determine implementation priority across two related dashboard findings","level":"AA","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.3","scName":"Contrast (Minimum)","id":"FAM-BANK-DASH-Q4","difficulty":"hard","mode":"challenge",
  "question":"Given both the balance contrast issue and the unlabeled filter control exist on the same page, and engineering can only address one before the next release, which should be prioritized and why?",
  "choices":[
    "The balance contrast issue - it affects every user viewing the page regardless of input method, while the filter control, though a real 4.1.2 failure, affects a narrower set of users (screen reader and some keyboard users) performing a secondary, optional action",
    "The filter control issue - Robust-principle findings always outrank Perceivable-principle findings by definition",
    "Neither should be prioritized over the other; they must always be fixed simultaneously or not at all",
    "The filter control issue, since 4.1.2 is a Level A criterion and 1.4.3 is Level AA, and Level A always outranks Level AA regardless of context"
  ],"answer":0,
  "explanation":"Conformance level alone does not determine priority; real-world reach and frequency matter. The balance contrast issue affects literally every visitor to the page's core information, while the filter's accessible-name gap affects a narrower population performing an optional filtering action - a legitimate, defensible reason to sequence the balance fix first, independent of which WCAG level each technically falls under.","questionType":"Prioritization" },

/* --- Page 3: Transfer Funds --- */
{ "domain":"domain3","lesson":"Understandable: Banking Portal - Transfer Funds","learningObjective":"Identify the violated Success Criterion for a high-value transfer flow","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.4","scName":"Error Prevention (Legal, Financial, Data)","id":"FAM-BANK-XFER-Q1","difficulty":"medium","mode":"practice",
  "question":"The Transfer Funds flow lets a user enter an amount and a recipient, then immediately submits the transfer on clicking 'Send' with no review screen and no confirmation step, for transfers of any amount including large ones. Which Success Criterion is most directly violated?",
  "choices":["3.3.4 Error Prevention (Legal, Financial, Data)","3.3.1 Error Identification","2.4.3 Focus Order","3.2.2 On Input"],"answer":0,
  "explanation":"3.3.4 requires that financial transactions be reversible, checked with an opportunity to correct errors, or confirmed before final submission. An instant, unconfirmed transfer of any amount, including large sums, fails this Level A requirement directly.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Banking Portal - Transfer Funds","learningObjective":"Identify a redundant-entry violation in a multi-step transfer flow","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.7","scName":"Redundant Entry","id":"FAM-BANK-XFER-Q2","difficulty":"medium","mode":"practice",
  "question":"After selecting a recipient on step 1 of the transfer flow, step 2 (choosing a transfer date) requires re-selecting the same recipient from a dropdown again before proceeding, discarding the step 1 selection. Which Success Criterion is most directly violated?",
  "choices":["3.3.7 Redundant Entry","3.3.4 Error Prevention (Legal, Financial, Data)","2.4.3 Focus Order","1.3.2 Meaningful Sequence"],"answer":0,
  "explanation":"3.3.7 requires that information already provided earlier in the same process be carried forward automatically or made available for reuse, not re-requested from scratch. Discarding the step 1 recipient selection and requiring it again on step 2 is exactly this failure pattern.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Banking Portal - Transfer Funds","learningObjective":"Identify a focus management violation after form submission","level":"A","principle":"Operable","guideline":"Navigable","scNumber":"2.4.3","scName":"Focus Order","id":"FAM-BANK-XFER-Q3","difficulty":"hard","mode":"challenge",
  "question":"After a transfer is submitted, a confirmation message appears at the very top of the page, but keyboard focus remains on the now-hidden 'Send' button below it, and Tab from that point moves to the footer rather than to or near the confirmation. Which Success Criterion is most directly violated?",
  "choices":["2.4.3 Focus Order","4.1.3 Status Messages","2.4.7 Focus Visible","3.2.1 On Focus"],"answer":0,
  "explanation":"2.4.3 requires that when content changes in a way that affects meaning or operation, subsequent focus order remains logical and usable. Focus staying on a now-irrelevant, hidden button, disconnected from the newly appeared confirmation, breaks the logical navigation sequence a keyboard user needs to follow to actually reach and read the confirmation.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Banking Portal - Transfer Funds","learningObjective":"Determine whether multiple Success Criteria are involved in the confirmation issue","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.3","scName":"Status Messages","id":"FAM-BANK-XFER-Q4","difficulty":"hard","mode":"challenge",
  "question":"Beyond the keyboard focus order problem, testing with a screen reader confirms the confirmation message is never announced at all, live region or otherwise. Which additional Success Criterion does this reveal?",
  "choices":[
    "4.1.3 Status Messages, since the confirmation is a dynamic status update that needs to be announced to assistive technology without requiring focus to move to it",
    "Only 2.4.3 applies; there is no additional criterion for the missing announcement",
    "1.4.13 Content on Hover or Focus applies, since the confirmation appears without a hover action",
    "2.1.2 No Keyboard Trap applies, since focus does not move automatically"
  ],"answer":0,
  "explanation":"This is a genuinely separate requirement from 2.4.3: 4.1.3 specifically addresses whether a dynamic update like this confirmation is announced to assistive technology at all, independent of where keyboard focus physically sits. A confirmation could theoretically satisfy 4.1.3 (via a live region) even with imperfect focus order, or vice versa - they are two distinct half-fixes needed together for a complete remediation.","questionType":"Multi-Success-Criterion Analysis" },
{ "domain":"domain3","lesson":"Understandable: Banking Portal - Transfer Funds","learningObjective":"Recommend a remediation plan addressing multiple related findings","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.4","scName":"Error Prevention (Legal, Financial, Data)","id":"FAM-BANK-XFER-Q5","difficulty":"hard","mode":"challenge",
  "question":"Given all four Transfer Funds findings together (no confirmation step, redundant recipient entry, broken focus order, and unannounced confirmation), what single redesign addresses the most findings at once?",
  "choices":[
    "Add an explicit review-and-confirm step that displays the already-selected recipient (resolving the redundant entry), requires a distinct confirming action (resolving error prevention), and, on submission, moves focus to a properly announced confirmation region (resolving both the focus order and status message findings)",
    "Only add a confirmation step with no changes to focus management, live regions, or data carry-forward",
    "Only fix the live region issue, since 4.1.3 is the most recently discussed criterion",
    "Rebuild the transfer flow as a single unlabeled page with no steps at all"
  ],"answer":0,
  "explanation":"A well-designed review-and-confirm step is a genuinely efficient fix here: displaying the carried-forward recipient selection resolves 3.3.7, requiring a distinct confirming action resolves 3.3.4, and directing focus to a properly-announced confirmation after submission resolves both 2.4.3 and 4.1.3 together - one coordinated redesign addressing four separate findings.","questionType":"Remediation Planning" },

/* --- Page 4: Statements & Documents --- */
{ "domain":"domain1","lesson":"Perceivable: Banking Portal - Statements","learningObjective":"Identify the violated Success Criterion for a document download link","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"2.4.4","scName":"Link Purpose (In Context)","id":"FAM-BANK-STMT-Q1","difficulty":"medium","mode":"practice",
  "question":"The statements page lists 12 months of statements, each with a download link reading only 'Download' with no indication of which month or year it corresponds to, even out of context (a screen reader user browsing all links on the page hears 'Download' twelve times in a row). Which Success Criterion is most directly violated?",
  "choices":["2.4.4 Link Purpose (In Context)","2.4.9 Link Purpose (Link Only)","1.1.1 Non-Text Content","2.4.6 Headings and Labels"],"answer":0,
  "explanation":"2.4.4 requires link purpose to be determinable from the link text combined with its programmatically determined context. Twelve identical 'Download' links with no distinguishing context (not even nearby associated text a screen reader would pick up) fail this requirement, since a user cannot tell which statement any given link refers to.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Banking Portal - Statements","learningObjective":"Identify the violated Success Criterion for a downloaded statement PDF","level":"A","principle":"Perceivable","guideline":"Adaptable","scNumber":"1.3.1","scName":"Info and Relationships","id":"FAM-BANK-STMT-Q2","difficulty":"hard","mode":"challenge",
  "question":"Once downloaded, a statement PDF shows a table of transactions with no header row markup at all - a screen reader reads each row as an undifferentiated string of a date, a description, and two dollar amounts with no way to tell which amount is a debit and which is a credit. Which Success Criterion is most directly violated?",
  "choices":["1.3.1 Info and Relationships","1.4.3 Contrast (Minimum)","2.4.2 Page Titled","3.1.5 Reading Level"],"answer":0,
  "explanation":"1.3.1 requires that structural relationships, including a data table's header-to-cell associations, be programmatically determinable. A transaction table with no header markup fails to convey which column is which, a serious problem for a document whose entire purpose is precise financial reporting.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Banking Portal - Statements","learningObjective":"Recommend a remediation strategy addressing two related document findings","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"2.4.4","scName":"Link Purpose (In Context)","id":"FAM-BANK-STMT-Q3","difficulty":"medium","mode":"practice",
  "question":"What remediation addresses both the ambiguous download links and the untagged statement table together?",
  "choices":[
    "Rename each link to include the specific month and year (e.g., 'Download March 2026 statement'), and regenerate statement PDFs with proper table header tagging so screen readers can announce column context for each transaction",
    "Only fix the link text, since PDF table structure cannot be remediated",
    "Combine all twelve statements into a single PDF with no other changes",
    "Add a general disclaimer at the top of the statements page stating that some content may not be accessible"
  ],"answer":0,
  "explanation":"These are two independent fixes for two independent findings, both squarely within reach: specific, descriptive link text directly resolves 2.4.4, and correctly tagging the PDF's transaction table (ideally by fixing the source template that generates these statements, so all future statements are fixed automatically) resolves 1.3.1.","questionType":"Remediation Planning" },

/* --- Page 5: Chat Support --- */
{ "domain":"domain2","lesson":"Operable: Banking Portal - Chat Support","learningObjective":"Identify a keyboard trap in a support widget","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.2","scName":"No Keyboard Trap","id":"FAM-BANK-CHAT-Q1","difficulty":"hard","mode":"challenge",
  "question":"Opening the live chat support widget moves keyboard focus into its message input field, but there is no way to Tab or Shift+Tab back out to the rest of the page, and the widget's close button is never reachable by keyboard. Which Success Criterion is most directly violated?",
  "choices":["2.1.2 No Keyboard Trap","2.1.1 Keyboard","2.4.3 Focus Order","4.1.2 Name, Role, Value"],"answer":0,
  "explanation":"2.1.2 requires that if keyboard focus can be moved to a component, it can also be moved away using only the keyboard. A chat widget that accepts focus but provides no keyboard path back out, and no keyboard-reachable close control, is a textbook keyboard trap.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Banking Portal - Chat Support","learningObjective":"Identify the violated Success Criterion for chat message announcements","level":"AA","principle":"Robust","guideline":"Compatible","scNumber":"4.1.3","scName":"Status Messages","id":"FAM-BANK-CHAT-Q2","difficulty":"medium","mode":"practice",
  "question":"When a support agent sends a new chat message, it appears visually in the chat window but is never announced to a screen reader user unless they manually navigate back into the chat window to check for new messages. Which Success Criterion is most directly violated?",
  "choices":["4.1.3 Status Messages","2.2.4 Interruptions","1.4.13 Content on Hover or Focus","3.3.5 Help"],"answer":0,
  "explanation":"4.1.3 requires that dynamically appearing status content, including new incoming chat messages, be announced to assistive technology without requiring the user to navigate to find it. A screen reader user having to repeatedly re-check the chat window for new messages is exactly the gap this criterion addresses.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Banking Portal - Chat Support","learningObjective":"Write a professional audit finding covering two related chat widget issues","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.2","scName":"No Keyboard Trap","id":"FAM-BANK-CHAT-Q3","difficulty":"hard","mode":"challenge",
  "question":"Which audit finding best documents both chat widget issues (the keyboard trap and the unannounced messages) for the development team?",
  "choices":[
    "Finding: Live chat widget (site-wide) traps keyboard focus inside its message input with no way to Tab out or reach its close button, violating WCAG 2.1.2 (Level A). Separately, incoming agent messages are not announced via a live region, violating WCAG 4.1.3 (Level AA). Impact: keyboard-only users cannot exit the chat once opened; screen reader users must manually re-check for new messages. Recommendation: make the close button keyboard-reachable and add a keyboard escape path, and wrap incoming messages in a polite live region.",
    "Finding: The chat widget has some issues and should be reviewed by engineering at some point.",
    "Finding: Live chat is broken.",
    "Finding: Users dislike the chat widget's design."
  ],"answer":0,
  "explanation":"This finding correctly documents two distinct, separately-cited violations with their specific criteria and levels, differentiates their distinct user impacts, and provides two specific, independently actionable recommendations - exactly the standard expected of professional audit documentation, especially important here since these are two unrelated fixes owned by potentially different parts of the codebase.","questionType":"Audit Documentation" },
{ "domain":"domain2","lesson":"Operable: Banking Portal - Chat Support","learningObjective":"Determine the root cause of the keyboard trap","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.2","scName":"No Keyboard Trap","id":"FAM-BANK-CHAT-Q4","difficulty":"hard","mode":"challenge",
  "question":"Investigation shows the chat widget is a third-party vendor component embedded via an iframe, and the bank's own engineering team has no access to modify its internal code. What does this imply about how the finding should be handled?",
  "choices":[
    "The finding should still be documented and tracked, with the remediation recommendation directed at the vendor relationship (requesting a fix or configuration change from the vendor, or evaluating alternative vendors) rather than assuming the bank's own engineers can patch third-party code directly",
    "The finding should be dropped entirely, since the bank cannot control third-party code",
    "The finding should be marked as the bank's fault only, with no mention of the vendor relationship anywhere in the documentation",
    "The finding should be escalated as a security vulnerability instead of an accessibility finding"
  ],"answer":0,
  "explanation":"A professional consultant does not simply drop a valid finding because the fix is not directly in the client's own codebase; third-party and vendor-supplied components are common in real audits, and the correct handling is documenting the issue, its real user impact, and directing the remediation path toward the actual party who can fix it (the vendor), which is itself valuable, actionable information for the client's procurement and vendor management process.","questionType":"Root Cause Analysis" }
];
window.WCAG_LAB_FAMILY_BANKING = WCAG_LAB_FAMILY_BANKING;

/* Scenario Family: Hospital Portal - a connected, multi-page mini-audit spanning Appointment Scheduling,
   Medical Records, Prescription Refill, Telehealth Video Visit, and Billing. */
var WCAG_LAB_FAMILY_HOSPITAL = [

/* --- Page 1: Appointment Scheduling --- */
{ "domain":"domain2","lesson":"Operable: Hospital Portal - Appointment Scheduling","learningObjective":"Identify the violated Success Criterion for a provider-search filter","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.1","scName":"Keyboard","id":"FAM-HOSP-SCHED-Q1","difficulty":"medium","mode":"practice",
  "question":"The appointment scheduler's specialty filter is a custom multi-select dropdown (choose one or more specialties) that opens on click but can only have options checked or unchecked by clicking directly with a mouse; there is no keyboard way to toggle any option. Which Success Criterion is most directly violated?",
  "choices":["2.1.1 Keyboard","2.4.6 Headings and Labels","1.3.5 Identify Input Purpose","2.5.3 Label in Name"],"answer":0,
  "explanation":"2.1.1 requires all functionality be operable through a keyboard. A multi-select filter whose individual options cannot be toggled without a mouse click fails this requirement, even if the dropdown itself can be opened by keyboard.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Hospital Portal - Appointment Scheduling","learningObjective":"Identify the violated Success Criterion for appointment time selection","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.2","scName":"Labels or Instructions","id":"FAM-HOSP-SCHED-Q2","difficulty":"medium","mode":"practice",
  "question":"After selecting a date, a grid of available appointment times appears as plain buttons labeled only with times ('9:00', '9:30', '10:00') with no indication anywhere on the page of what time zone these times are displayed in. Which Success Criterion is most directly violated?",
  "choices":["3.3.2 Labels or Instructions","2.4.6 Headings and Labels","1.3.1 Info and Relationships","3.1.5 Reading Level"],"answer":0,
  "explanation":"3.3.2 requires labels or instructions when content requires user input, which includes making the meaning of that input clear. Ambiguous time zone information on a healthcare appointment (a context where a missed or mistimed appointment carries real consequences) is a genuine instructional gap this criterion addresses.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Hospital Portal - Appointment Scheduling","learningObjective":"Determine affected users for a keyboard-inaccessible filter","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.1","scName":"Keyboard","id":"FAM-HOSP-SCHED-Q3","difficulty":"medium","mode":"practice",
  "question":"Which users are most severely affected by the keyboard-inaccessible specialty filter, and what is the practical consequence for them?",
  "choices":[
    "Keyboard-only and screen reader users cannot narrow their provider search by specialty at all, forcing them to manually review every listed provider regardless of relevance, a significantly more burdensome and error-prone process when searching for specialized care",
    "Only users with a slow internet connection are affected",
    "Only users searching for a general practitioner are affected, since specialists are rarely searched for",
    "No user group is meaningfully affected since the filter is optional"
  ],"answer":0,
  "explanation":"An inaccessible filter does not just create inconvenience; it forces affected users into a categorically worse experience (manually reviewing an unfiltered list) for a task, finding an appropriate medical specialist, where getting it right matters more than most routine web tasks, making the real-world stakes of this finding higher than a typical filter bug.","questionType":"User Impact" },
{ "domain":"domain2","lesson":"Operable: Hospital Portal - Appointment Scheduling","learningObjective":"Recommend an appropriate remediation strategy","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.1","scName":"Keyboard","id":"FAM-HOSP-SCHED-Q4","difficulty":"medium","mode":"practice",
  "question":"What is the most appropriate remediation for the keyboard-inaccessible specialty filter?",
  "choices":[
    "Rebuild the multi-select using native checkbox inputs (which are keyboard accessible by default), or, if a custom component is retained, add full keyboard support following a documented listbox/checkbox-group interaction pattern",
    "Remove the specialty filter entirely and require phone-based scheduling for specialist searches",
    "Add a text label above the filter explaining that it requires a mouse",
    "Increase the size of each checkbox so it is easier to click accurately"
  ],"answer":0,
  "explanation":"Native checkboxes provide keyboard accessibility automatically with no additional implementation work, making them the most efficient fix; a custom-built alternative can also work but requires deliberately implementing the keyboard support the native option gets for free.","questionType":"Remediation Planning" },

/* --- Page 2: Medical Records --- */
{ "domain":"domain1","lesson":"Perceivable: Hospital Portal - Medical Records","learningObjective":"Identify the violated Success Criterion for a lab results chart","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-HOSP-RECORDS-Q1","difficulty":"medium","mode":"practice",
  "question":"A patient's lab results page displays a line chart tracking cholesterol levels over the past two years, rendered as an image with alt text reading 'chart.png'. Which Success Criterion is most directly violated?",
  "choices":["1.1.1 Non-Text Content","1.4.5 Images of Text","2.4.2 Page Titled","3.1.5 Reading Level"],"answer":0,
  "explanation":"1.1.1 requires non-text content to have a text alternative serving an equivalent purpose. 'chart.png' identifies the file, not the medical information the chart conveys, meaning a screen reader user gets zero access to trend information that could be clinically relevant to understand.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Hospital Portal - Medical Records","learningObjective":"Recommend an appropriate remediation for complex medical data visualization","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-HOSP-RECORDS-Q2","difficulty":"hard","mode":"challenge",
  "question":"What is the most appropriate remediation for the cholesterol trend chart, given the underlying data is clinically meaningful and precise?",
  "choices":[
    "Provide a short identifying alt attribute plus an accessible data table listing each recorded date and cholesterol value alongside the chart, so the precise data is available in a form assistive technology can read completely, not just a general description",
    "Write a longer, more detailed alt attribute describing the chart's general shape and trend in a single sentence",
    "Remove the chart entirely and only show the single most recent value",
    "Add a caption below the chart repeating the file name in a more readable format"
  ],"answer":0,
  "explanation":"For genuinely data-rich, clinically precise content like a lab trend chart, a general prose description in alt text cannot substitute for the actual data points; pairing a short alt attribute with a real, accessible data table gives a screen reader user complete, precise access to the same clinical information a sighted user gets from reading the chart carefully.","questionType":"Remediation Planning" },
{ "domain":"domain4","lesson":"Robust: Hospital Portal - Medical Records","learningObjective":"Identify the violated Success Criterion for a records document viewer","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-HOSP-RECORDS-Q3","difficulty":"hard","mode":"challenge",
  "question":"The medical records page has a custom document viewer with page-forward and page-back icon buttons built from generic elements with no accessible name; a screen reader announces both simply as 'button'. Which Success Criterion is most directly violated?",
  "choices":["4.1.2 Name, Role, Value","2.4.4 Link Purpose (In Context)","1.4.11 Non-text Contrast","2.5.8 Target Size (Minimum)"],"answer":0,
  "explanation":"4.1.2 requires an accessible name describing a control's purpose. Two icon-only buttons both announced only as 'button', with no way to distinguish 'next page' from 'previous page', is a direct failure to expose the required name for either control.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Hospital Portal - Medical Records","learningObjective":"Assign severity to a clinically significant finding","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-HOSP-RECORDS-Q4","difficulty":"hard","mode":"challenge",
  "question":"How should the inaccessible cholesterol trend chart be rated, considering the information is used by patients to understand their own health trajectory and prepare questions for their doctor?",
  "choices":[
    "High/Serious - it does not block access to the portal generally, but it denies a blind patient meaningful access to clinically relevant personal health information other patients can review independently",
    "Low/Minor - lab results are always also discussed verbally during appointments, so the chart itself is redundant",
    "Critical/Blocking - because any inaccessible image is automatically Critical regardless of context",
    "Not ratable - clinical data visualizations are outside the scope of WCAG"
  ],"answer":0,
  "explanation":"This does not block portal access broadly (the rating should reflect the actual scope of the barrier), but it does deny meaningful, independent access to personally significant health information - a real, serious harm distinct from a merely decorative or low-stakes image failing the same criterion, landing this at High/Serious rather than either extreme.","questionType":"Severity Assessment" },

/* --- Page 3: Prescription Refill --- */
{ "domain":"domain3","lesson":"Understandable: Hospital Portal - Prescription Refill","learningObjective":"Identify the violated Success Criterion for a refill request form","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.1","scName":"Error Identification","id":"FAM-HOSP-RX-Q1","difficulty":"medium","mode":"practice",
  "question":"Submitting a prescription refill request for a medication that was already refilled within the last 7 days (too soon per pharmacy policy) results in the page simply reloading with the form cleared, no error message, and no explanation of why the request did not go through. Which Success Criterion is most directly violated?",
  "choices":["3.3.1 Error Identification","3.3.3 Error Suggestion","2.4.3 Focus Order","3.2.2 On Input"],"answer":0,
  "explanation":"3.3.1 requires that a detected error, here, a business-rule rejection (too-soon refill), be identified and described to the user in text. A silently cleared form with no explanation fails this requirement and leaves the patient without understanding why their medication request failed.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Hospital Portal - Prescription Refill","learningObjective":"Distinguish between two related but distinct error-handling criteria","level":"AA","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.3","scName":"Error Suggestion","id":"FAM-HOSP-RX-Q2","difficulty":"hard","mode":"challenge",
  "question":"After fixing the missing error message, the form now displays 'This medication cannot be refilled at this time.' with no further detail. Does this fully satisfy both 3.3.1 and 3.3.3?",
  "choices":[
    "It satisfies 3.3.1 (an error is now identified in text) but likely falls short of 3.3.3's spirit, since a more specific suggestion, such as stating the exact date the medication becomes eligible for refill, would be a genuinely available and more helpful correction suggestion",
    "It fully satisfies both criteria, since any error message text automatically satisfies both requirements equally",
    "It satisfies neither criterion, since the message does not use the word 'error' explicitly",
    "It only satisfies 3.3.3 and fails 3.3.1, since the message is too brief"
  ],"answer":0,
  "explanation":"3.3.1 requires identifying that an error occurred, which this message does. 3.3.3 asks for a correction suggestion when one can be determined - here, the exact eligible-refill date is known information the system could surface but currently doesn't, meaning the fix is real progress but not the most complete, most helpful version of this remediation.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Hospital Portal - Prescription Refill","learningObjective":"Recommend a more complete remediation covering both error criteria","level":"AA","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.3","scName":"Error Suggestion","id":"FAM-HOSP-RX-Q3","difficulty":"hard","mode":"challenge",
  "question":"What remediation would more completely satisfy the spirit of both 3.3.1 and 3.3.3 together for the too-soon refill rejection?",
  "choices":[
    "Display a specific message stating the medication cannot be refilled yet and the exact date it becomes eligible, such as 'This medication can be refilled starting March 14.'",
    "Keep the generic message but make the text larger",
    "Remove the 7-day refill policy entirely so this error can never occur",
    "Redirect the user to a phone number with no on-screen explanation at all"
  ],"answer":0,
  "explanation":"Surfacing the specific eligible date turns a generic rejection into genuinely actionable guidance, exactly the kind of concrete correction suggestion 3.3.3 is meant to encourage wherever the system has the information available to provide it, which it does here (the exact refill-eligible date is calculable from the last fill date and the pharmacy's policy).","questionType":"Remediation Planning" },

/* --- Page 4: Telehealth Video Visit --- */
{ "domain":"domain1","lesson":"Perceivable: Hospital Portal - Telehealth","learningObjective":"Identify the violated Success Criterion for a telehealth video call","level":"A","principle":"Perceivable","guideline":"Time-based Media","scNumber":"1.2.4","scName":"Captions (Live)","id":"FAM-HOSP-TELE-Q1","difficulty":"medium","mode":"practice",
  "question":"The telehealth platform's live video visit feature has no live captioning option available for the doctor-patient conversation, and the platform's help documentation confirms none is planned. Which Success Criterion is most directly violated?",
  "choices":["1.2.4 Captions (Live)","1.2.2 Captions (Prerecorded)","1.2.6 Sign Language (Prerecorded)","2.1.1 Keyboard"],"answer":0,
  "explanation":"1.2.4 requires captions for live audio content in synchronized media. A telehealth video visit is genuinely live, two-way audio content, and a deaf or hard-of-hearing patient having no captioning option available at all for a medical consultation is a serious, direct failure of this Level AA criterion.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Hospital Portal - Telehealth","learningObjective":"Assign severity to a telehealth accessibility finding","level":"AA","principle":"Perceivable","guideline":"Time-based Media","scNumber":"1.2.4","scName":"Captions (Live)","id":"FAM-HOSP-TELE-Q2","difficulty":"hard","mode":"challenge",
  "question":"How severe is the missing live-captioning finding, given telehealth is increasingly the primary way many patients access care, and a medical consultation involves safety-critical information (diagnoses, dosage instructions)?",
  "choices":[
    "Critical/Blocking - a deaf or hard-of-hearing patient cannot meaningfully participate in a safety-critical medical conversation at all through this channel, with no accessible fallback offered within the same visit",
    "Low/Minor - patients can always request a follow-up written summary after the call",
    "Medium/Moderate - since video calling itself works technically, the missing captions are a secondary concern",
    "This cannot be assessed as a severity issue since telehealth is a relatively new technology"
  ],"answer":0,
  "explanation":"This is about as severe as findings get: it excludes a patient from meaningfully participating in real-time, safety-critical medical communication, with no equivalent accessible option offered during the actual consultation. A later written summary does not restore the patient's ability to ask follow-up questions or clarify instructions in real time the way captions would.","questionType":"Severity Assessment" },
{ "domain":"domain1","lesson":"Perceivable: Hospital Portal - Telehealth","learningObjective":"Recommend an appropriate remediation strategy","level":"AA","principle":"Perceivable","guideline":"Time-based Media","scNumber":"1.2.4","scName":"Captions (Live)","id":"FAM-HOSP-TELE-Q3","difficulty":"medium","mode":"practice",
  "question":"What is the most appropriate remediation for the missing live captioning in telehealth visits?",
  "choices":[
    "Integrate a real-time captioning service (automated speech-to-text with human review available for clinical accuracy, or a live captioning/CART service) directly into the video visit interface",
    "Require all deaf or hard-of-hearing patients to bring a family member to interpret during every visit",
    "Replace video visits with phone-only visits for all patients",
    "Add a one-time disclaimer stating that captions are not available"
  ],"answer":0,
  "explanation":"A genuine remediation integrates real captioning capability into the platform itself, ideally with attention to clinical accuracy given the consequences of a mistranscribed dosage or diagnosis, rather than shifting the burden onto the patient to arrange their own accommodation for every single visit.","questionType":"Remediation Planning" },

/* --- Page 5: Billing --- */
{ "domain":"domain3","lesson":"Understandable: Hospital Portal - Billing","learningObjective":"Identify the violated Success Criterion for a billing dispute form","level":"A","principle":"Understandable","guideline":"Readable","scNumber":"3.1.5","scName":"Reading Level","id":"FAM-HOSP-BILL-Q1","difficulty":"hard","mode":"challenge",
  "question":"The billing dispute explanation page is written entirely in dense insurance and medical billing terminology ('adjudicated claim', 'coordination of benefits', 'explanation of benefits reconciliation') with no plain-language summary offered anywhere. Is this alone a WCAG violation, and at what level, if the terminology is genuinely necessary for precision?",
  "choices":[
    "Potentially, under 3.1.5 at Level AAA, which requires a plain-language supplement when content requires reading ability beyond lower secondary education level - though this is one of the few criteria organizations often choose to target selectively for specific high-impact content like this, rather than pursuing full AAA conformance sitewide",
    "Yes, always, and always at Level A, since technical jargon is automatically a Level A violation",
    "No, never, since medical and insurance terminology is exempt from all WCAG requirements",
    "Yes, but only under 1.1.1, since the issue is about text content"
  ],"answer":0,
  "explanation":"3.1.5 is a Level AAA criterion, one organizations often apply selectively to specific high-stakes content, like billing disputes affecting real financial decisions, even without pursuing full AAA conformance elsewhere. This tests recognizing both the correct criterion and the nuance that AAA criteria are still genuinely worth applying deliberately in the right context.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Hospital Portal - Billing","learningObjective":"Recommend an appropriate remediation without removing necessary precision","level":"AAA","principle":"Understandable","guideline":"Readable","scNumber":"3.1.5","scName":"Reading Level","id":"FAM-HOSP-BILL-Q2","difficulty":"hard","mode":"challenge",
  "question":"What is the most appropriate remediation for the dense billing terminology, given the precise terms may still be legally or operationally necessary?",
  "choices":[
    "Add a plain-language summary alongside the technical explanation (not replacing it), translating key terms and next steps into everyday language, preserving the precise terminology for those who need or prefer it",
    "Delete all technical terminology and replace it entirely with informal language, removing the precise terms altogether",
    "Add a single tooltip defining one term, leaving the rest of the page unchanged",
    "Require patients to hire a professional interpreter to understand their bill"
  ],"answer":0,
  "explanation":"Pairing a plain-language summary alongside the precise original text serves both needs at once: patients who need simpler language get it, while the legally or operationally necessary precise terminology remains available and unaltered for contexts (like formal disputes) where it may still be required.","questionType":"Remediation Planning" },
{ "domain":"domain3","lesson":"Understandable: Hospital Portal - Billing","learningObjective":"Determine the best next action given competing legal and accessibility considerations","level":"AAA","principle":"Understandable","guideline":"Readable","scNumber":"3.1.5","scName":"Reading Level","id":"FAM-HOSP-BILL-Q3","difficulty":"hard","mode":"challenge",
  "question":"The hospital's legal team is concerned that a plain-language summary could be interpreted as legally binding if it conflicts with the precise technical text. What is the accessibility consultant's best next action?",
  "choices":[
    "Recommend the plain-language summary be clearly labeled as a non-binding explanatory aid, with the technical text remaining the authoritative version, addressing the legal concern while still providing genuine comprehension support",
    "Drop the plain-language recommendation entirely to avoid any legal risk",
    "Recommend removing the precise technical text entirely so only the plain-language version remains",
    "Escalate directly to hospital executive leadership without first proposing a compromise with the legal team"
  ],"answer":0,
  "explanation":"A clear disclaimer distinguishing an explanatory aid from the authoritative legal text is a standard, well-established way to address exactly this kind of legal concern without abandoning the accessibility improvement altogether - the kind of practical, collaborative solution a skilled consultant proposes before escalating or conceding.","questionType":"Best Next Action" }
];
window.WCAG_LAB_FAMILY_HOSPITAL = WCAG_LAB_FAMILY_HOSPITAL;

/* Scenario Family: University Registration Portal - a connected, multi-page mini-audit spanning Course
   Search, Registration Cart, Financial Aid Form, Degree Audit, and Campus Map. */
var WCAG_LAB_FAMILY_UNIVERSITY = [

/* --- Page 1: Course Search --- */
{ "domain":"domain2","lesson":"Operable: University Portal - Course Search","learningObjective":"Identify the violated Success Criterion for a course search results page","level":"AA","principle":"Operable","guideline":"Navigable","scNumber":"2.4.6","scName":"Headings and Labels","id":"FAM-UNIV-SEARCH-Q1","difficulty":"medium","mode":"practice",
  "question":"Searching for 'Biology' returns 40 course sections, each displayed in an identical card with the heading 'Course Section' repeated 40 times, with the actual course number and title only shown in smaller, non-heading text below. Which Success Criterion is most directly violated?",
  "choices":["2.4.6 Headings and Labels","2.4.5 Multiple Ways","1.3.1 Info and Relationships","3.2.4 Consistent Identification"],"answer":0,
  "explanation":"2.4.6 requires headings that describe topic or purpose. Forty identical 'Course Section' headings provide no way for a screen reader user navigating by heading to distinguish one result from another, defeating the purpose of heading-based navigation entirely for this results page.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: University Portal - Course Search","learningObjective":"Recommend an appropriate remediation strategy","level":"AA","principle":"Operable","guideline":"Navigable","scNumber":"2.4.6","scName":"Headings and Labels","id":"FAM-UNIV-SEARCH-Q2","difficulty":"medium","mode":"practice",
  "question":"What is the most appropriate remediation for the repeated, non-descriptive 'Course Section' headings?",
  "choices":[
    "Make each result's actual course number and title (e.g., 'BIO 101: Introduction to Biology, Section A') the heading itself, so each of the 40 headings is genuinely distinct and descriptive",
    "Remove headings from the results entirely",
    "Keep the heading text the same but increase its font size",
    "Add a single heading at the top of the page reading 'Search Results' with no per-result headings"
  ],"answer":0,
  "explanation":"Using the actual distinguishing information (course number, title, section) as each result's heading directly satisfies 2.4.6 and makes heading-based navigation genuinely useful for scanning results, exactly the purpose this navigation technique serves.","questionType":"Remediation Planning" },
{ "domain":"domain1","lesson":"Perceivable: University Portal - Course Search","learningObjective":"Identify the violated Success Criterion for a seat-availability indicator","level":"A","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.1","scName":"Use of Color","id":"FAM-UNIV-SEARCH-Q3","difficulty":"medium","mode":"practice",
  "question":"Each course section shows seat availability as a colored dot: green for open, yellow for nearly full, red for full, with no text label anywhere indicating which is which. Which Success Criterion is most directly violated?",
  "choices":["1.4.1 Use of Color","1.4.3 Contrast (Minimum)","2.4.4 Link Purpose (In Context)","1.1.1 Non-Text Content"],"answer":0,
  "explanation":"1.4.1 requires that color not be the sole means of conveying information. Three colored dots with no accompanying text label fail this requirement for students with color vision deficiency, who may not reliably distinguish which status each dot represents.","questionType":"Application" },

/* --- Page 2: Registration Cart --- */
{ "domain":"domain3","lesson":"Understandable: University Portal - Registration Cart","learningObjective":"Identify the violated Success Criterion for a schedule conflict warning","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.1","scName":"Error Identification","id":"FAM-UNIV-CART-Q1","difficulty":"medium","mode":"practice",
  "question":"Adding a course section that time-conflicts with an already-added section highlights both course cards with a thin orange outline, with no text explaining that a conflict exists or which two courses are conflicting. Which Success Criterion is most directly violated?",
  "choices":["3.3.1 Error Identification","1.4.1 Use of Color","2.4.3 Focus Order","3.2.2 On Input"],"answer":0,
  "explanation":"3.3.1 requires that a detected error, here, a scheduling conflict, be identified and described in text. An orange outline alone does not tell the user what the problem is or which two specific courses conflict, failing this requirement (and likely 1.4.1 as well, given the outline color is the only signal).","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: University Portal - Registration Cart","learningObjective":"Identify the violated Success Criterion for a drag-to-reorder course list","level":"AA","principle":"Robust","guideline":"Compatible","scNumber":"2.5.7","scName":"Dragging Movements","id":"FAM-UNIV-CART-Q2","difficulty":"medium","mode":"practice",
  "question":"The registration cart lets students drag course cards to reorder their priority ranking (in case of a lottery for oversubscribed courses), with no button or menu-based alternative to change a course's rank. Which Success Criterion is most directly violated?",
  "choices":["2.5.7 Dragging Movements","2.1.1 Keyboard","1.3.2 Meaningful Sequence","2.4.3 Focus Order"],"answer":0,
  "explanation":"2.5.7 requires that dragging-based functionality also be achievable through a single-pointer action without dragging (such as an 'increase priority' / 'decrease priority' button), unless dragging is essential. Reordering a priority ranking is a common case where a non-drag alternative is straightforward to provide.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: University Portal - Registration Cart","learningObjective":"Recommend a remediation strategy addressing two related cart findings","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.1","scName":"Error Identification","id":"FAM-UNIV-CART-Q3","difficulty":"hard","mode":"challenge",
  "question":"What remediation addresses both the unclear conflict warning and the drag-only priority reordering together most efficiently?",
  "choices":[
    "These are unrelated findings requiring separate fixes: add specific text identifying the conflicting courses and times for the warning, and add up/down priority buttons (or a numeric rank input) as a single-pointer alternative to dragging for reordering",
    "A single fix can resolve both: simply increasing the outline's color contrast fixes both issues",
    "Remove both the conflict warning and the drag-reorder feature entirely, since both are optional conveniences",
    "Only fix the conflict warning, since dragging is always exempt from WCAG for list-reordering use cases"
  ],"answer":0,
  "explanation":"These are genuinely independent findings, from different Guidelines, with no single shared fix; a good consultant recognizes when two problems on the same page do NOT share a root cause or remediation, and documents two separate, specific recommendations rather than forcing an artificial combined fix.","questionType":"Remediation Planning" },

/* --- Page 3: Financial Aid Form --- */
{ "domain":"domain3","lesson":"Understandable: University Portal - Financial Aid","learningObjective":"Identify the violated Success Criterion for a financial aid application","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.7","scName":"Redundant Entry","id":"FAM-UNIV-AID-Q1","difficulty":"medium","mode":"practice",
  "question":"The financial aid application asks for household income on page 2 and again, blank, on page 6's 'verification' section, in the same single application session. Which Success Criterion is most directly violated?",
  "choices":["3.3.7 Redundant Entry","3.3.4 Error Prevention (Legal, Financial, Data)","1.3.5 Identify Input Purpose","3.3.2 Labels or Instructions"],"answer":0,
  "explanation":"3.3.7 requires that information already provided earlier in the same process be carried forward or made available for reuse. Household income entered on page 2 should be pre-filled or referenced on page 6, not requested again from scratch within the same session.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: University Portal - Financial Aid","learningObjective":"Determine whether a redundant-entry exception applies","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.7","scName":"Redundant Entry","id":"FAM-UNIV-AID-Q2","difficulty":"hard","mode":"challenge",
  "question":"The financial aid office argues that re-entering income on the verification page is intentional, since it is a distinct legal attestation step where re-typing the figure prompts the applicant to carefully re-confirm accuracy under penalty of perjury. Does 3.3.7's essential-re-entry exception plausibly apply here?",
  "choices":[
    "Possibly - 3.3.7 does include an exception when re-entry is essential, and a legal re-attestation step designed specifically to prompt careful re-confirmation is a defensible candidate for that exception, though the field should still be pre-populated as a starting point the user then actively confirms or corrects, rather than left entirely blank",
    "No, never - 3.3.7 has no exceptions of any kind and this must always be treated as a violation",
    "Yes, absolutely, with no further consideration needed - any legal attestation automatically qualifies for the exception",
    "This question is unanswerable since 3.3.7 does not apply to financial aid forms"
  ],"answer":0,
  "explanation":"This tests genuine judgment: 3.3.7 does allow an essential-re-entry exception, and a legal re-attestation purpose is a plausible fit, but the strongest, most defensible implementation still pre-populates the field with the previously entered value for the user to actively confirm or correct, rather than presenting a blank field indistinguishable from simple redundant re-entry with no clear purpose.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: University Portal - Financial Aid","learningObjective":"Identify the violated Success Criterion for a document upload timeout","level":"A","principle":"Operable","guideline":"Enough Time","scNumber":"2.2.1","scName":"Timing Adjustable","id":"FAM-UNIV-AID-Q3","difficulty":"medium","mode":"practice",
  "question":"The financial aid form times out after 10 minutes of inactivity while a student is in the middle of locating and uploading tax documents from their computer, with no warning and all progress lost. Which Success Criterion is most directly violated?",
  "choices":["2.2.1 Timing Adjustable","2.2.6 Timeouts","3.3.4 Error Prevention (Legal, Financial, Data)","1.4.13 Content on Hover or Focus"],"answer":0,
  "explanation":"2.2.1 requires that time limits be adjustable, through a warning with extension option, unless a narrow exception applies. A 10-minute timeout with no warning, during a task (locating and uploading documents) that plausibly takes longer than that for many users, fails this Level A requirement.","questionType":"Application" },

/* --- Page 4: Degree Audit --- */
{ "domain":"domain1","lesson":"Perceivable: University Portal - Degree Audit","learningObjective":"Identify the violated Success Criterion for a degree progress visualization","level":"A","principle":"Perceivable","guideline":"Adaptable","scNumber":"1.3.1","scName":"Info and Relationships","id":"FAM-UNIV-AUDIT-Q1","difficulty":"hard","mode":"challenge",
  "question":"The degree audit page shows a progress ring (a circular chart) indicating '78% complete' visually, and separately lists remaining required courses in a plain list below with no structural connection between the two - the percentage and the list of remaining requirements are not programmatically linked, even though they represent the same underlying data. Which Success Criterion is most directly relevant, and is there necessarily a violation?",
  "choices":[
    "1.3.1 is the relevant criterion, but this specific case may not be a violation on its own, since both pieces of information (the percentage and the list) are independently available as real text/data to a screen reader; the criterion concerns whether each piece of content's own structure is programmatically exposed, not whether unrelated pieces of content are cross-linked to each other",
    "Yes, always a violation, since two related pieces of information appearing separately on a page automatically fails 1.3.1",
    "No, never a violation, since 1.3.1 does not apply to progress indicators of any kind",
    "This is a 2.4.6 violation instead, since the issue concerns heading text"
  ],"answer":0,
  "explanation":"This question tests recognizing when a criterion does NOT clearly apply just because two things seem thematically related. 1.3.1 is about whether a given piece of content's own structure and relationships (like a table's headers, or a list's items) are exposed - it does not generally require unrelated visual elements to be linked together programmatically just because a sighted user might mentally connect them.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: University Portal - Degree Audit","learningObjective":"Identify a genuine violation within the same progress ring component","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-UNIV-AUDIT-Q2","difficulty":"medium","mode":"practice",
  "question":"Testing further reveals the progress ring itself is rendered as an SVG image with no accessible text anywhere - not even the '78%' figure is available to a screen reader, only visually rendered as part of the graphic. Which Success Criterion is now violated?",
  "choices":["1.1.1 Non-Text Content", "1.3.1 Info and Relationships (the same finding as the previous question)", "2.4.6 Headings and Labels", "1.4.11 Non-text Contrast"],"answer":0,
  "explanation":"This is a genuine, distinct 1.1.1 failure: the '78% complete' figure conveyed visually within the SVG graphic has no text alternative at all, meaning a screen reader user gets zero access to this specific piece of information, unlike the previous question's scenario where the same conclusion (percent complete) was still derivable from the separately-listed course requirements.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: University Portal - Degree Audit","learningObjective":"Recommend an appropriate remediation strategy","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-UNIV-AUDIT-Q3","difficulty":"medium","mode":"practice",
  "question":"What is the most appropriate remediation for the progress ring's missing text alternative?",
  "choices":[
    "Add an accessible text alternative stating the completion percentage in words (e.g., 'Degree progress: 78 percent complete'), either as alt text on the graphic or as adjacent real text",
    "Increase the size of the progress ring so the percentage is easier to see visually",
    "Remove the percentage figure from the graphic and only show it in the page's browser tab title",
    "Change the progress ring's color to a higher-contrast shade with no other changes"
  ],"answer":0,
  "explanation":"A direct, real text alternative stating the percentage in words gives a screen reader user complete access to the same core information the visual graphic conveys, satisfying 1.1.1 without needing to redesign the visual component itself.","questionType":"Remediation Planning" },

/* --- Page 5: Campus Map --- */
{ "domain":"domain1","lesson":"Perceivable: University Portal - Campus Map","learningObjective":"Identify the violated Success Criterion for an interactive campus map","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-UNIV-MAP-Q1","difficulty":"medium","mode":"practice",
  "question":"An interactive campus map lets students click building icons to see room availability, but the map itself is a single large image with clickable coordinate regions (an image map) and no text alternative identifying what each clickable region represents. Which Success Criterion is most directly violated?",
  "choices":["1.1.1 Non-Text Content","1.4.10 Reflow","2.5.8 Target Size (Minimum)","2.4.4 Link Purpose (In Context)"],"answer":0,
  "explanation":"1.1.1 requires text alternatives for non-text content, including each functional area of an image map. Clickable regions with no accessible name identifying which building or room they represent are completely unusable to a screen reader user, who has no way to know what each area does before or after activating it.","questionType":"Application" },
{ "domain":"domain1","lesson":"Operable: University Portal - Campus Map","learningObjective":"Recommend an appropriate remediation strategy for an inaccessible image map","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-UNIV-MAP-Q2","difficulty":"hard","mode":"challenge",
  "question":"What is the most appropriate remediation for the inaccessible campus image map, preserving its practical usefulness for wayfinding?",
  "choices":[
    "Add real, accessible names to each clickable region (using standard image map accessibility techniques), and provide a supplementary text-based building/room directory as a fully accessible alternative way to reach the same room-availability information",
    "Remove the map entirely with no replacement",
    "Add a single alt attribute to the entire map image describing the whole campus in one sentence",
    "Convert the map to a video with no other changes"
  ],"answer":0,
  "explanation":"Making the map's own clickable regions accessible directly addresses 1.1.1, while a supplementary text-based directory provides a genuinely different, often faster path to the same information for many users, consistent with how 2.4.5's multiple-ways principle reinforces good navigation design generally, even though 2.4.5 itself is a separate criterion.","questionType":"Remediation Planning" }
];
window.WCAG_LAB_FAMILY_UNIVERSITY = WCAG_LAB_FAMILY_UNIVERSITY;

/* Scenario Family: Shopping Cart / E-commerce Platform - a connected, multi-page mini-audit spanning
   Product Browse, Product Detail, Cart, Checkout, and Order Tracking. */
var WCAG_LAB_FAMILY_SHOPPING = [

/* --- Page 1: Product Browse --- */
{ "domain":"domain2","lesson":"Operable: Shopping Platform - Product Browse","learningObjective":"Identify the violated Success Criterion for infinite-scroll product listings","level":"A","principle":"Operable","guideline":"Navigable","scNumber":"2.4.1","scName":"Bypass Blocks","id":"FAM-SHOP-BROWSE-Q1","difficulty":"medium","mode":"practice",
  "question":"A product listing page loads more products as the user scrolls, with no landmark regions and no skip link anywhere on the page. Which Success Criterion is most directly violated?",
  "choices":["2.4.1 Bypass Blocks","2.2.2 Pause, Stop, Hide","1.4.10 Reflow","2.4.5 Multiple Ways"],"answer":0,
  "explanation":"2.4.1 requires a mechanism to bypass repeated content blocks. An infinite-scroll product grid with no landmarks or skip link forces a keyboard user to tab through every loaded product to reach other page regions, exactly the burden this criterion addresses.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Shopping Platform - Product Browse","learningObjective":"Identify the violated Success Criterion for a product image gallery thumbnail set","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-SHOP-BROWSE-Q2","difficulty":"medium","mode":"practice",
  "question":"Each product card's thumbnail image has alt text that is simply the product's internal SKU code (e.g., 'IMG-88213-A'), not a description of the product shown. Which Success Criterion is most directly violated?",
  "choices":["1.1.1 Non-Text Content","2.4.4 Link Purpose (In Context)","1.4.5 Images of Text","3.1.1 Language of Page"],"answer":0,
  "explanation":"1.1.1 requires a text alternative serving an equivalent purpose. An internal SKU code identifies the file for inventory systems, not the product's actual appearance or identity, so it fails to serve the same purpose the image serves for a sighted shopper browsing visually.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Shopping Platform - Product Browse","learningObjective":"Identify the violated Success Criterion for a 'New Arrival' badge","level":"A","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.1","scName":"Use of Color","id":"FAM-SHOP-BROWSE-Q3","difficulty":"easy","mode":"reinforce",
  "question":"Products released in the last 7 days have their price displayed in blue instead of the standard black, with no 'New' badge, icon, or text label anywhere. Which Success Criterion is most directly violated?",
  "choices":["1.4.1 Use of Color","1.4.3 Contrast (Minimum)","2.4.6 Headings and Labels","3.2.4 Consistent Identification"],"answer":0,
  "explanation":"1.4.1 requires that color not be the sole means of conveying information. A blue price with no other indicator fails to reliably communicate 'new arrival' status to users with color vision deficiency, who may not perceive the color distinction from standard black at all.","questionType":"Recognition" },

/* --- Page 2: Product Detail --- */
{ "domain":"domain2","lesson":"Operable: Shopping Platform - Product Detail","learningObjective":"Identify the violated Success Criterion for a product image zoom feature","level":"A","principle":"Operable","guideline":"Input Modalities","scNumber":"2.5.1","scName":"Pointer Gestures","id":"FAM-SHOP-DETAIL-Q1","difficulty":"medium","mode":"practice",
  "question":"The product detail page's main image can be zoomed in only via a two-finger pinch gesture on touchscreens, with no tap-based zoom button or alternative anywhere. Which Success Criterion is most directly violated?",
  "choices":["2.5.1 Pointer Gestures","2.5.7 Dragging Movements","1.4.4 Resize Text","1.4.10 Reflow"],"answer":0,
  "explanation":"2.5.1 requires that multipoint or path-based gestures like a two-finger pinch have a single-pointer alternative, unless the gesture is essential. A tap-based zoom button is a straightforward, commonly implemented alternative that should exist alongside the pinch gesture.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Shopping Platform - Product Detail","learningObjective":"Identify the violated Success Criterion for a size-selection error","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.1","scName":"Error Identification","id":"FAM-SHOP-DETAIL-Q2","difficulty":"medium","mode":"practice",
  "question":"Clicking 'Add to Bag' without selecting a size makes the size-selector swatches briefly flash red, with no text message and no focus movement to the size selector. Which Success Criterion is most directly violated?",
  "choices":["3.3.1 Error Identification","1.4.1 Use of Color","2.4.3 Focus Order","3.2.1 On Focus"],"answer":0,
  "explanation":"3.3.1 requires the specific error to be identified in text. A brief color flash with no text description, and no focus movement to help the user find and fix the issue, leaves screen reader users with no way to know why their action didn't work or what to do about it.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Shopping Platform - Product Detail","learningObjective":"Identify the violated Success Criterion for a custom quantity stepper","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-SHOP-DETAIL-Q3","difficulty":"hard","mode":"challenge",
  "question":"The quantity stepper's plus and minus buttons are both announced by a screen reader only as 'button', and the current quantity value between them never announces when it changes. Which Success Criterion is most directly violated?",
  "choices":["4.1.2 Name, Role, Value","2.5.3 Label in Name","1.3.5 Identify Input Purpose","2.4.6 Headings and Labels"],"answer":0,
  "explanation":"4.1.2 requires a programmatically determinable name for each control and announced state changes for dynamic values. Two identically-announced, unlabeled buttons and a silently-updating quantity together fail both halves of this requirement.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Shopping Platform - Product Detail","learningObjective":"Determine whether multiple Success Criteria are involved in a size-guide finding","level":"A","principle":"Understandable","guideline":"Adaptable","scNumber":"1.3.1","scName":"Info and Relationships","id":"FAM-SHOP-DETAIL-Q4","difficulty":"hard","mode":"challenge",
  "question":"The product page's size guide is a data table (comparing sizes across US, UK, and EU standards, plus chest/waist measurements) with no header row markup at all. Separately, the 'View Size Guide' link that opens this table is only reachable after tabbing through all 15 unrelated 'Customers Also Bought' product links first. Which Success Criteria are implicated?",
  "choices":[
    "1.3.1 Info and Relationships, for the untagged size-comparison table, and 2.4.1 Bypass Blocks (or a page-structure/order issue), for forcing users through 15 unrelated links to reach a directly relevant, frequently needed link",
    "Only 1.3.1 applies; link ordering is never a WCAG concern",
    "Only 2.1.1 Keyboard applies, since the issue is about tabbing",
    "Neither criterion applies since size guides are supplementary content"
  ],"answer":0,
  "explanation":"This scenario spans two genuinely distinct issues: 1.3.1 for the table's missing header structure (making size comparisons unreadable in relationship to each other), and a navigable-structure concern most closely tied to 2.4.1's bypass-blocks principle, or more precisely a page-structure design issue, for burying a frequently-needed, directly relevant link behind 15 unrelated ones purely due to DOM order.","questionType":"Multi-Success-Criterion Analysis" },

/* --- Page 3: Cart --- */
{ "domain":"domain3","lesson":"Understandable: Shopping Platform - Cart","learningObjective":"Recognize when a cart interaction does NOT violate a criterion","level":"A","principle":"Understandable","guideline":"Predictable","scNumber":"3.2.2","scName":"On Input","id":"FAM-SHOP-CART-Q1","difficulty":"hard","mode":"challenge",
  "question":"Changing an item's quantity in the cart immediately recalculates and displays the new subtotal, with no confirmation step. Does this violate 3.2.2 On Input?",
  "choices":[
    "No - a subtotal updating in direct response to a quantity the user just changed is an expected, logical consequence of that specific input, not an unexpected context change",
    "Yes - any page content changing immediately after user input is automatically a 3.2.2 violation",
    "Yes - subtotal recalculation always requires an explicit confirmation button under WCAG",
    "This cannot be determined without knowing the exact dollar amount involved"
  ],"answer":0,
  "explanation":"This is a correct-rejection question: 3.2.2 prohibits unexpected changes, but a subtotal updating because the user directly changed a quantity is the expected, predictable behavior of that specific field, not a surprising side effect - recognizing non-violations is as important a skill as spotting real ones.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Shopping Platform - Cart","learningObjective":"Identify a genuine violation within the same cart page","level":"A","principle":"Understandable","guideline":"Predictable","scNumber":"3.2.2","scName":"On Input","id":"FAM-SHOP-CART-Q2","difficulty":"hard","mode":"challenge",
  "question":"On the same cart page, selecting a different shipping speed from a dropdown immediately navigates the user away to a completely different 'Shipping Details' page, with no warning that selecting an option would do this. Does this violate 3.2.2, and why is it different from the quantity-change scenario?",
  "choices":[
    "Yes - navigating to an entirely different page is a substantial, likely unexpected context change triggered purely by making a selection, unlike a subtotal recalculating in place on the same page in direct response to the same input",
    "No - this is the same situation as the quantity change and is equally acceptable",
    "Yes, but only because dropdowns are always prohibited from having any on-change behavior under WCAG",
    "No - navigating to a new page can never violate 3.2.2 regardless of context"
  ],"answer":0,
  "explanation":"The key distinction is the nature and scale of the change: an in-place subtotal update is a direct, expected consequence of a quantity change, while navigating away to an entirely different page is a substantial context change a user selecting a shipping option would not necessarily expect, especially with no advance warning that this specific dropdown behaves this way.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Shopping Platform - Cart","learningObjective":"Recommend an appropriate remediation strategy","level":"A","principle":"Understandable","guideline":"Predictable","scNumber":"3.2.2","scName":"On Input","id":"FAM-SHOP-CART-Q3","difficulty":"medium","mode":"practice",
  "question":"What is the most appropriate remediation for the shipping-speed dropdown that unexpectedly navigates away?",
  "choices":[
    "Either keep the shipping selection in place and update the total on the same page without navigating, or, if navigation to a details page is genuinely needed, add a visible 'Continue' button requiring a separate, deliberate action rather than triggering navigation directly from the dropdown's selection event",
    "Remove the shipping speed option entirely",
    "Add a text warning below the dropdown with no change to the actual navigation behavior",
    "Convert the dropdown to a set of radio buttons with no other change to the navigation behavior"
  ],"answer":0,
  "explanation":"The fix targets the actual problem, the surprising automatic navigation, either by avoiding it entirely (update the total in place) or by requiring a distinct, deliberate confirming action (a Continue button) before navigating, giving the user control over when the significant context change happens.","questionType":"Remediation Planning" },

/* --- Page 4: Checkout --- */
{ "domain":"domain3","lesson":"Understandable: Shopping Platform - Checkout","learningObjective":"Identify the violated Success Criterion for an instant-charge checkout","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.4","scName":"Error Prevention (Legal, Financial, Data)","id":"FAM-SHOP-CHECKOUT-Q1","difficulty":"medium","mode":"practice",
  "question":"Clicking 'Place Order' immediately charges the customer's saved card with no order review screen shown beforehand. Which Success Criterion is most directly violated?",
  "choices":["3.3.4 Error Prevention (Legal, Financial, Data)","3.3.1 Error Identification","2.4.3 Focus Order","3.2.2 On Input"],"answer":0,
  "explanation":"3.3.4 requires financial transactions to be reversible, checked with a correction opportunity, or confirmed before submission. An instant charge with no review step at all fails this Level A requirement directly.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Shopping Platform - Checkout","learningObjective":"Identify the violated Success Criterion for a promo code field","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.1","scName":"Error Identification","id":"FAM-SHOP-CHECKOUT-Q2","difficulty":"medium","mode":"practice",
  "question":"Entering an expired promo code causes a small red exclamation icon to appear next to the field, with no text explaining the code is expired versus simply invalid or already used. Which Success Criterion is most directly violated?",
  "choices":["3.3.1 Error Identification","1.1.1 Non-Text Content","1.4.11 Non-text Contrast","3.3.3 Error Suggestion"],"answer":0,
  "explanation":"3.3.1 requires the error to be described in text specifically enough to be understood. An icon alone, with no distinguishing text between 'expired', 'invalid', and 'already used', fails to identify what actually went wrong, leaving the user unable to determine their next step.","questionType":"Application" },
{ "domain":"domain3","lesson":"Operable: Shopping Platform - Checkout","learningObjective":"Determine implementation priority across multiple checkout findings","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.4","scName":"Error Prevention (Legal, Financial, Data)","id":"FAM-SHOP-CHECKOUT-Q3","difficulty":"hard","mode":"challenge",
  "question":"Given both the instant-charge issue and the vague promo code error exist on the checkout page, and only one can be fixed before a major sales event next week, which should be prioritized?",
  "choices":[
    "The instant-charge issue - it affects every single purchase and creates real risk of unintended, unreversible financial transactions, while the promo code issue, though a genuine finding, only affects the subset of users attempting to apply a code and is less severe in consequence",
    "The promo code issue, since error messages are always higher priority than confirmation steps under WCAG",
    "Neither should be prioritized over the other; both must ship simultaneously or not at all",
    "Whichever is faster for engineering to implement, regardless of relative severity or reach"
  ],"answer":0,
  "explanation":"The instant-charge issue affects every checkout and carries the risk of real financial harm (an accidental purchase with no chance to catch it), while the promo code issue, though worth fixing, affects a narrower subset of transactions with a lower-stakes consequence (an unclear error, not an unwanted charge) - a clear, defensible basis for prioritization independent of implementation speed.","questionType":"Prioritization" },

/* --- Page 5: Order Tracking --- */
{ "domain":"domain4","lesson":"Robust: Shopping Platform - Order Tracking","learningObjective":"Identify the violated Success Criterion for a live order-status update","level":"AA","principle":"Robust","guideline":"Compatible","scNumber":"4.1.3","scName":"Status Messages","id":"FAM-SHOP-TRACK-Q1","difficulty":"medium","mode":"practice",
  "question":"The order tracking page updates a shipment's status in real time ('Out for delivery' appears automatically without a page reload once the carrier updates it), but this update is not announced to screen reader users unless they manually re-navigate to that part of the page. Which Success Criterion is most directly violated?",
  "choices":["4.1.3 Status Messages","2.2.4 Interruptions","1.4.13 Content on Hover or Focus","2.4.2 Page Titled"],"answer":0,
  "explanation":"4.1.3 requires dynamic status updates to be announced to assistive technology without requiring focus to move there. A real-time shipment status change with no live region announcement leaves a screen reader user unaware their package's status just changed unless they happen to re-check.","questionType":"Application" },
{ "domain":"domain4","lesson":"Operable: Shopping Platform - Order Tracking","learningObjective":"Write a professional audit finding for a realistic order-tracking issue","level":"AA","principle":"Robust","guideline":"Compatible","scNumber":"4.1.3","scName":"Status Messages","id":"FAM-SHOP-TRACK-Q2","difficulty":"hard","mode":"challenge",
  "question":"Which audit finding best documents the order-tracking status update issue?",
  "choices":[
    "Finding: Order tracking page's real-time shipment status update (e.g., 'Out for delivery') has no live region markup, violating WCAG 4.1.3 (Level AA). Impact: screen reader users are unaware of status changes unless they manually re-navigate to check. Recommendation: wrap the status text in a polite live region so updates are announced automatically without requiring focus to move.",
    "Finding: Order tracking sometimes does not update properly.",
    "Finding: The delivery status feature could be improved.",
    "Finding: Users may miss their delivery because of this bug."
  ],"answer":0,
  "explanation":"This finding specifies the exact component and behavior, cites the violated criterion and level, states the concrete impact, and gives an actionable, technically specific recommendation (a polite live region, appropriate for this routine, non-urgent status update) - the standard of a professional, developer-actionable audit finding.","questionType":"Audit Documentation" }
];
window.WCAG_LAB_FAMILY_SHOPPING = WCAG_LAB_FAMILY_SHOPPING;

(function () {
  var additions = [].concat(
    window.WCAG_LAB_FAMILY_BANKING || [],
    window.WCAG_LAB_FAMILY_HOSPITAL || [],
    window.WCAG_LAB_FAMILY_UNIVERSITY || [],
    window.WCAG_LAB_FAMILY_SHOPPING || []
  );
  if (window.WCAG_LAB_DATA && Array.isArray(window.WCAG_LAB_DATA.questions)) {
    window.WCAG_LAB_DATA.questions = window.WCAG_LAB_DATA.questions.concat(additions);
  }
}());
