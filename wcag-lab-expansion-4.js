/* WCAG Accessibility Lab expansion data, part 4.
   Continues breadth-first industry coverage per the standing roadmap: Hotel Reservation Platform,
   Learning Management System, Insurance Platform, and Public Transit App - four further foundational,
   single-tier families. Loaded after wcag-lab-expansion-3.js and appends to the same
   window.WCAG_LAB_DATA.questions array without modifying, removing, or replacing any existing
   question from any prior file. */
/* Scenario Family: Hotel Reservation Platform - Property Search, Room Selection, Guest Details &
   Booking, Amenities & Reviews, Confirmation & Modification. */
var WCAG_LAB_FAMILY_HOTEL = [

{ "domain":"domain1","lesson":"Perceivable: Hotel Reservation - Property Search","learningObjective":"Identify the violated Success Criterion for a map-based property picker","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-HOTEL-SEARCH-Q1","difficulty":"medium","mode":"practice",
  "question":"Search results are shown as pins on an interactive map, each pin clickable to reveal a hotel's name and price; there is no list-based alternative anywhere on the page, and the pins themselves have no accessible name. Which Success Criterion is most directly violated?",
  "choices":["1.1.1 Non-Text Content","2.4.5 Multiple Ways","1.4.10 Reflow","2.5.8 Target Size (Minimum)"],"answer":0,
  "explanation":"1.1.1 requires a text alternative for meaningful non-text content, including functional map pins. With no accessible name on any pin and no list-based alternative, a screen reader user has no way to discover which hotels exist in the results at all.","questionType":"Application" },
{ "domain":"domain2","lesson":"Perceivable: Hotel Reservation - Property Search","learningObjective":"Identify the violated Success Criterion for a nightly-rate price filter slider","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.1","scName":"Keyboard","id":"FAM-HOTEL-SEARCH-Q2","difficulty":"medium","mode":"practice",
  "question":"The price range filter is a dual-handle slider that can be focused with Tab, but arrow keys do not move either handle - only mouse dragging works. Which Success Criterion is most directly violated?",
  "choices":["2.1.1 Keyboard","2.5.7 Dragging Movements","1.4.13 Content on Hover or Focus","2.4.7 Focus Visible"],"answer":0,
  "explanation":"2.1.1 requires all functionality be operable through a keyboard. A slider that can receive focus but does not respond to arrow keys to adjust its value fails this requirement, even though it is technically reachable by Tab.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Hotel Reservation - Room Selection","learningObjective":"Identify the violated Success Criterion for ambiguous room-type icons","level":"A","principle":"Understandable","guideline":"Readable","scNumber":"1.3.3","scName":"Sensory Characteristics","id":"FAM-HOTEL-ROOM-Q1","difficulty":"medium","mode":"practice",
  "question":"Room selection instructions read: \"Rooms with the star icon include free breakfast.\" No other text identifies which rooms include breakfast. Which Success Criterion is most directly violated?",
  "choices":["1.3.3 Sensory Characteristics","1.1.1 Non-Text Content","1.4.1 Use of Color","2.4.6 Headings and Labels"],"answer":0,
  "explanation":"1.3.3 requires instructions not rely solely on a sensory characteristic like shape or icon appearance. Identifying breakfast-inclusive rooms only by 'the star icon' fails for users who cannot perceive the icon's shape, such as blind users relying on a screen reader that has no separate text conveying the same meaning.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Hotel Reservation - Room Selection","learningObjective":"Identify the violated Success Criterion for a room-quantity stepper","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-HOTEL-ROOM-Q2","difficulty":"hard","mode":"challenge",
  "question":"The 'Number of Rooms' stepper's plus/minus buttons are both announced only as 'button' with no accessible name, and the current room count between them never announces when changed. Which Success Criterion is most directly violated?",
  "choices":["4.1.2 Name, Role, Value","2.5.3 Label in Name","1.3.5 Identify Input Purpose","2.4.6 Headings and Labels"],"answer":0,
  "explanation":"4.1.2 requires a programmatically determinable name for each control and announced state changes for dynamic values, both of which are missing here.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Hotel Reservation - Guest Details & Booking","learningObjective":"Identify the violated Success Criterion for redundant guest information","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.7","scName":"Redundant Entry","id":"FAM-HOTEL-BOOK-Q1","difficulty":"medium","mode":"practice",
  "question":"For a multi-room booking, the primary guest's name and email are entered once for the reservation, but each individual room's guest details form asks for the same primary guest's name and email again, blank, with no pre-fill. Which Success Criterion is most directly violated?",
  "choices":["3.3.7 Redundant Entry","3.3.2 Labels or Instructions","1.3.1 Info and Relationships","3.3.4 Error Prevention (Legal, Financial, Data)"],"answer":0,
  "explanation":"3.3.7 requires information already provided earlier in the same process be carried forward or made available for reuse, rather than requested again from scratch.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Hotel Reservation - Guest Details & Booking","learningObjective":"Identify the violated Success Criterion for a cancellation-policy checkbox","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.4","scName":"Error Prevention (Legal, Financial, Data)","id":"FAM-HOTEL-BOOK-Q2","difficulty":"medium","mode":"practice",
  "question":"Clicking 'Confirm Booking' immediately charges a non-refundable rate to the guest's card with no review screen and no distinct confirming action beyond the single click. Which Success Criterion is most directly violated?",
  "choices":["3.3.4 Error Prevention (Legal, Financial, Data)","3.3.1 Error Identification","2.4.3 Focus Order","3.2.2 On Input"],"answer":0,
  "explanation":"3.3.4 requires financial transactions be reversible, checked with a correction opportunity, or confirmed before final submission. A single click immediately charging a non-refundable rate, with no review step, fails this Level A requirement especially seriously given the non-refundable stakes.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Hotel Reservation - Amenities & Reviews","learningObjective":"Identify the violated Success Criterion for a review star-rating display","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-HOTEL-REVIEW-Q1","difficulty":"easy","mode":"reinforce",
  "question":"Each hotel's guest rating is shown as a row of star icons (e.g., 4 filled stars, 1 empty) rendered as a single background CSS image with no accessible text stating the numeric rating anywhere. Which Success Criterion is most directly violated?",
  "choices":["1.1.1 Non-Text Content","1.4.1 Use of Color","1.4.11 Non-text Contrast","2.4.6 Headings and Labels"],"answer":0,
  "explanation":"1.1.1 requires a text alternative for meaningful non-text content. A star-rating graphic with no accompanying text (such as '4 out of 5 stars') gives a screen reader user zero access to this significant piece of decision-making information.","questionType":"Recognition" },
{ "domain":"domain2","lesson":"Operable: Hotel Reservation - Amenities & Reviews","learningObjective":"Identify the violated Success Criterion for a photo gallery lightbox","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.2","scName":"No Keyboard Trap","id":"FAM-HOTEL-REVIEW-Q2","difficulty":"hard","mode":"challenge",
  "question":"Clicking a room photo opens a full-screen lightbox gallery; keyboard focus moves into the lightbox, but there is no keyboard-reachable close button and Escape does not close it, leaving a keyboard user stuck. Which Success Criterion is most directly violated?",
  "choices":["2.1.2 No Keyboard Trap","2.1.1 Keyboard","2.4.3 Focus Order","4.1.2 Name, Role, Value"],"answer":0,
  "explanation":"2.1.2 requires that if focus can move into a component, it can also move out using the keyboard alone. A lightbox with no keyboard-reachable exit is a textbook keyboard trap.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Hotel Reservation - Confirmation & Modification","learningObjective":"Identify the violated Success Criterion for a booking-change confirmation","level":"AA","principle":"Robust","guideline":"Compatible","scNumber":"4.1.3","scName":"Status Messages","id":"FAM-HOTEL-CONFIRM-Q1","difficulty":"medium","mode":"practice",
  "question":"Changing a booking's check-out date triggers a recalculated total price displayed dynamically near the top of the page, with no live region markup, so a screen reader user is unaware their date change affected the price at all unless they manually re-check. Which Success Criterion is most directly violated?",
  "choices":["4.1.3 Status Messages","3.2.2 On Input","2.4.3 Focus Order","1.4.13 Content on Hover or Focus"],"answer":0,
  "explanation":"4.1.3 requires dynamic status updates be announced to assistive technology without requiring focus to move. A silently updating price total leaves a screen reader user unaware their change had a financial consequence.","questionType":"Application" },
{ "domain":"domain4","lesson":"Understandable: Hotel Reservation - Confirmation & Modification","learningObjective":"Recommend a remediation plan addressing the price-update finding","level":"AA","principle":"Robust","guideline":"Compatible","scNumber":"4.1.3","scName":"Status Messages","id":"FAM-HOTEL-CONFIRM-Q2","difficulty":"medium","mode":"practice",
  "question":"What is the most appropriate remediation for the silently updating booking-change price total?",
  "choices":[
    "Wrap the updated price total in a polite live region so the new amount is automatically announced when the date change causes a recalculation",
    "Add a popup alert dialog that interrupts the user every time the price changes",
    "Remove the ability to change dates after a booking is made",
    "Increase the font size of the price total with no other change"
  ],"answer":0,
  "explanation":"A polite live region correctly announces the routine, non-urgent price update without requiring focus to move or interrupting the user's current activity - the standard, appropriate fix for this class of finding.","questionType":"Remediation Planning" },
{ "domain":"domain1","lesson":"Perceivable: Hotel Reservation - Property Search","learningObjective":"Determine affected users for the map-only search results finding","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-HOTEL-SEARCH-Q3","difficulty":"medium","mode":"practice",
  "question":"Which users are most severely affected by search results existing only as unlabeled map pins with no list alternative?",
  "choices":[
    "Screen reader users cannot discover that any search results exist at all, since the map and its pins convey no accessible information, effectively blocking the core search function entirely",
    "Only users with a slow internet connection are affected",
    "Only users searching in unfamiliar cities are affected",
    "No user group is meaningfully affected since prices are also shown elsewhere on the page"
  ],"answer":0,
  "explanation":"This is a complete functional blocker for screen reader users, not a minor inconvenience: with no accessible way to perceive that results exist, let alone compare them, the core search function is entirely unusable through assistive technology.","questionType":"User Impact" }
];
window.WCAG_LAB_FAMILY_HOTEL = WCAG_LAB_FAMILY_HOTEL;

/* Scenario Family: Learning Management System - Course Dashboard, Video Lecture Player, Quiz &
   Assessment, Discussion Forum, Gradebook. */
var WCAG_LAB_FAMILY_LMS = [

{ "domain":"domain2","lesson":"Operable: Learning Management System - Course Dashboard","learningObjective":"Identify the violated Success Criterion for a course-tile grid","level":"A","principle":"Operable","guideline":"Navigable","scNumber":"2.4.6","scName":"Headings and Labels","id":"FAM-LMS-DASH-Q1","difficulty":"medium","mode":"practice",
  "question":"The student dashboard shows enrolled courses as tiles, each with the heading 'Course' repeated identically on all 8 tiles, with the actual course name shown only in smaller, non-heading text below. Which Success Criterion is most directly violated?",
  "choices":["2.4.6 Headings and Labels","1.3.1 Info and Relationships","2.4.4 Link Purpose (In Context)","3.2.4 Consistent Identification"],"answer":0,
  "explanation":"2.4.6 requires headings that describe topic or purpose. Eight identical 'Course' headings give a screen reader user navigating by heading no way to distinguish one course tile from another.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Learning Management System - Course Dashboard","learningObjective":"Identify the violated Success Criterion for an assignment-due-date indicator","level":"A","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.1","scName":"Use of Color","id":"FAM-LMS-DASH-Q2","difficulty":"easy","mode":"reinforce",
  "question":"Assignments due within 24 hours are shown with red text; all other assignments are shown in standard black text, with no icon, label, or other indicator of urgency. Which Success Criterion is most directly violated?",
  "choices":["1.4.1 Use of Color","1.4.3 Contrast (Minimum)","2.4.6 Headings and Labels","3.3.5 Help"],"answer":0,
  "explanation":"1.4.1 requires color not be the sole means of conveying information. Red text alone, with no other urgency indicator, fails for students with color vision deficiency who may not distinguish it from standard text.","questionType":"Recognition" },
{ "domain":"domain1","lesson":"Perceivable: Learning Management System - Video Lecture Player","learningObjective":"Identify the violated Success Criterion for an uncaptioned lecture video","level":"A","principle":"Perceivable","guideline":"Time-based Media","scNumber":"1.2.2","scName":"Captions (Prerecorded)","id":"FAM-LMS-VIDEO-Q1","difficulty":"medium","mode":"practice",
  "question":"A 90-minute recorded lecture video has no captions available in any format, and the course's syllabus states captioning is 'available upon request with two weeks notice.' Which Success Criterion is most directly violated, and is the two-week request process a sufficient remediation on its own?",
  "choices":[
    "1.2.2 Captions (Prerecorded) is violated; a request-based, two-week-delay process is not equivalent access, since it forces a deaf or hard-of-hearing student to identify themselves, wait weeks, and fall behind their hearing classmates for every single video, rather than having the same immediate access as everyone else",
    "1.2.2 is not violated, since a request process satisfies the requirement regardless of delay",
    "1.2.4 Captions (Live) applies instead, since this is course content",
    "No violation exists since captioning is offered as an accommodation"
  ],"answer":0,
  "explanation":"1.2.2 requires captions be provided for prerecorded video content, and a two-week request-based delay does not provide equivalent, timely access - the student is structurally disadvantaged compared to classmates who can watch immediately, which is exactly the kind of unequal access WCAG exists to prevent.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Learning Management System - Video Lecture Player","learningObjective":"Identify the violated Success Criterion for a video player's custom controls","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.1","scName":"Keyboard","id":"FAM-LMS-VIDEO-Q2","difficulty":"hard","mode":"challenge",
  "question":"The lecture video player's custom scrubber (seek bar) can be focused with Tab, but arrow keys do not move the playhead - only mouse dragging works to seek to a different point in the video. Which Success Criterion is most directly violated?",
  "choices":["2.1.1 Keyboard","2.5.7 Dragging Movements","2.4.7 Focus Visible","1.4.2 Audio Control"],"answer":0,
  "explanation":"2.1.1 requires all functionality be operable through a keyboard. A seek bar that receives focus but does not respond to arrow keys fails this requirement, an especially significant gap for a lecture video where a student may need to review a specific section.","questionType":"Application" },
{ "domain":"domain2","lesson":"Understandable: Learning Management System - Quiz & Assessment","learningObjective":"Identify the violated Success Criterion for a strict quiz timer","level":"A","principle":"Operable","guideline":"Enough Time","scNumber":"2.2.1","scName":"Timing Adjustable","id":"FAM-LMS-QUIZ-Q1","difficulty":"medium","mode":"practice",
  "question":"A 20-question quiz has a hard 15-minute timer with no warning and no extension option, auto-submitting whatever answers exist when time expires, with no accommodation setting available anywhere for students with documented extended-time approval. Which Success Criterion is most directly violated?",
  "choices":["2.2.1 Timing Adjustable","2.2.3 No Timing","2.2.6 Timeouts","3.3.4 Error Prevention (Legal, Financial, Data)"],"answer":0,
  "explanation":"2.2.1 requires time limits be adjustable, through a warning-and-extension mechanism among other accepted approaches, unless a narrow exception applies. A hard timer with no accommodation mechanism at all fails this Level A requirement, with real academic consequences.","questionType":"Application" },
{ "domain":"domain2","lesson":"Robust: Learning Management System - Quiz & Assessment","learningObjective":"Identify the violated Success Criterion for a drag-and-drop matching question","level":"A","principle":"Operable","guideline":"Input Modalities","scNumber":"2.5.7","scName":"Dragging Movements","id":"FAM-LMS-QUIZ-Q2","difficulty":"medium","mode":"practice",
  "question":"A quiz question requires dragging terms into matching definition boxes, with no click-to-select, keyboard, or menu-based alternative to complete the matching. Which Success Criterion is most directly violated?",
  "choices":["2.5.7 Dragging Movements","2.1.1 Keyboard","1.3.1 Info and Relationships","2.4.3 Focus Order"],"answer":0,
  "explanation":"2.5.7 requires dragging-based functionality also be achievable through a single-pointer action without dragging, unless dragging is essential. A click-to-select-then-click-to-match alternative is a common, straightforward way to satisfy this for matching questions.","questionType":"Application" },
{ "domain":"domain1","lesson":"Operable: Learning Management System - Discussion Forum","learningObjective":"Identify the violated Success Criterion for a forum reply-nesting structure","level":"A","principle":"Perceivable","guideline":"Adaptable","scNumber":"1.3.1","scName":"Info and Relationships","id":"FAM-LMS-FORUM-Q1","difficulty":"hard","mode":"challenge",
  "question":"Discussion forum replies are visually indented to show nested reply threads (a reply to a reply is indented further), but this nesting exists purely through CSS margin, with no list structure or other programmatic indication of which reply responds to which. Which Success Criterion is most directly violated?",
  "choices":["1.3.1 Info and Relationships","2.4.3 Focus Order","1.3.2 Meaningful Sequence","3.2.3 Consistent Navigation"],"answer":0,
  "explanation":"1.3.1 requires that structural relationships, including which reply belongs to which parent post, be programmatically determinable. Purely visual indentation with no underlying structure leaves a screen reader user unable to tell how replies relate to each other.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Learning Management System - Discussion Forum","learningObjective":"Identify the violated Success Criterion for a forum post character limit warning","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.1","scName":"Error Identification","id":"FAM-LMS-FORUM-Q2","difficulty":"medium","mode":"practice",
  "question":"Submitting a forum reply over the 500-character limit causes the text box to shake briefly with no text message, and the Post button remains clickable but does nothing. Which Success Criterion is most directly violated?",
  "choices":["3.3.1 Error Identification","1.4.1 Use of Color","2.4.3 Focus Order","3.3.3 Error Suggestion"],"answer":0,
  "explanation":"3.3.1 requires the error be identified and described in text. A shaking animation with no text message and a silently non-functional button gives no information about what went wrong or how many characters need to be removed.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Learning Management System - Gradebook","learningObjective":"Identify the violated Success Criterion for a grade-trend chart","level":"A","principle":"Perceivable","guideline":"Adaptable","scNumber":"1.3.1","scName":"Info and Relationships","id":"FAM-LMS-GRADES-Q1","difficulty":"hard","mode":"challenge",
  "question":"The gradebook's per-assignment score table has no header row markup connecting each column (Assignment, Due Date, Points Earned, Points Possible) to its data. Which Success Criterion is most directly violated?",
  "choices":["1.3.1 Info and Relationships","1.4.3 Contrast (Minimum)","2.4.2 Page Titled","3.1.5 Reading Level"],"answer":0,
  "explanation":"1.3.1 requires table header-to-cell associations be programmatically determinable. Without this, a screen reader user cannot reliably tell which number is the earned score versus the possible total for a given assignment.","questionType":"Application" },
{ "domain":"domain1","lesson":"Understandable: Learning Management System - Gradebook","learningObjective":"Recommend a remediation strategy for the gradebook table","level":"A","principle":"Perceivable","guideline":"Adaptable","scNumber":"1.3.1","scName":"Info and Relationships","id":"FAM-LMS-GRADES-Q2","difficulty":"medium","mode":"practice",
  "question":"What is the most appropriate remediation for the gradebook's untagged score table?",
  "choices":[
    "Add proper header-cell markup connecting each column header to its data cells, so a screen reader announces both the value and what it represents (e.g., 'Points Earned: 18')",
    "Add a text description above the table summarizing the general contents in one sentence",
    "Convert the table to a bar chart image with alt text describing the general trend",
    "Remove the Points Possible column entirely to simplify the table"
  ],"answer":0,
  "explanation":"Proper header-cell association directly resolves 1.3.1, letting a screen reader announce meaningful, complete context for each value rather than a stream of disconnected numbers - the standard, correct fix for this failure pattern.","questionType":"Remediation Planning" }
];
window.WCAG_LAB_FAMILY_LMS = WCAG_LAB_FAMILY_LMS;

/* Scenario Family: Insurance Platform - Quote Calculator, Policy Comparison, Claims Filing, Document
   Center. */
var WCAG_LAB_FAMILY_INSURANCE = [

{ "domain":"domain2","lesson":"Operable: Insurance Platform - Quote Calculator","learningObjective":"Identify the violated Success Criterion for a coverage-amount slider","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.1","scName":"Keyboard","id":"FAM-INS-QUOTE-Q1","difficulty":"medium","mode":"practice",
  "question":"The coverage amount selector is a slider that can be focused with Tab, but only mouse dragging changes its value; arrow keys, Page Up/Down, Home, and End all do nothing. Which Success Criterion is most directly violated?",
  "choices":["2.1.1 Keyboard","2.5.7 Dragging Movements","1.4.13 Content on Hover or Focus","2.4.7 Focus Visible"],"answer":0,
  "explanation":"2.1.1 requires all functionality be operable through a keyboard. A slider that receives focus but does not respond to any standard keyboard adjustment keys fails this requirement entirely.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Insurance Platform - Quote Calculator","learningObjective":"Identify the violated Success Criterion for a deductible-selection error","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.1","scName":"Error Identification","id":"FAM-INS-QUOTE-Q2","difficulty":"medium","mode":"practice",
  "question":"Selecting a deductible amount incompatible with the chosen coverage tier (e.g., a $2,000 deductible with a 'Premium Plus' tier that only allows deductibles up to $1,000) causes the deductible field to reset silently to blank, with no explanation. Which Success Criterion is most directly violated?",
  "choices":["3.3.1 Error Identification","3.3.3 Error Suggestion","3.2.2 On Input","1.3.5 Identify Input Purpose"],"answer":0,
  "explanation":"3.3.1 requires a detected error be identified and described in text. A silent reset with no explanation leaves the user unaware their selection was invalid or why, likely to result in a confused, repeated attempt at the same invalid combination.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Insurance Platform - Policy Comparison","learningObjective":"Identify the violated Success Criterion for a coverage-comparison table","level":"A","principle":"Perceivable","guideline":"Adaptable","scNumber":"1.3.1","scName":"Info and Relationships","id":"FAM-INS-COMPARE-Q1","difficulty":"hard","mode":"challenge",
  "question":"A side-by-side comparison of three policy tiers (Basic, Standard, Premium) shows coverage limits, deductibles, and premiums in a grid with no table header markup connecting each row's coverage type to each column's tier. Which Success Criterion is most directly violated?",
  "choices":["1.3.1 Info and Relationships","1.4.1 Use of Color","2.4.6 Headings and Labels","3.1.5 Reading Level"],"answer":0,
  "explanation":"1.3.1 requires structural relationships in a comparison table be programmatically determinable. Without header association, a screen reader user cannot reliably tell which deductible or premium belongs to which policy tier - a serious problem for a decision this financially significant.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Insurance Platform - Policy Comparison","learningObjective":"Assign severity to the policy comparison table finding","level":"A","principle":"Perceivable","guideline":"Adaptable","scNumber":"1.3.1","scName":"Info and Relationships","id":"FAM-INS-COMPARE-Q2","difficulty":"hard","mode":"challenge",
  "question":"How should the untagged policy comparison table be rated, given comparing coverage details across tiers is the primary purpose of this specific page?",
  "choices":[
    "High/Serious - the page's entire purpose is enabling an informed comparison, and a screen reader user cannot reliably perform that comparison at all, risking a genuinely costly wrong decision about their own insurance coverage",
    "Low/Minor - comparison tables are always low severity regardless of their content or purpose",
    "Critical/Blocking - because any 1.3.1 finding on a table is automatically Critical with no further analysis needed",
    "Not ratable - insurance products are outside the scope of accessibility severity assessment"
  ],"answer":0,
  "explanation":"Severity should reflect both the technical failure and what the page is actually for; a comparison table failing on the one page whose entire purpose is enabling comparison, for a decision with real financial and coverage consequences, merits a High/Serious rating even though it is not a complete site-wide blocker.","questionType":"Severity Assessment" },
{ "domain":"domain3","lesson":"Understandable: Insurance Platform - Claims Filing","learningObjective":"Identify the violated Success Criterion for redundant claim information","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.7","scName":"Redundant Entry","id":"FAM-INS-CLAIM-Q1","difficulty":"medium","mode":"practice",
  "question":"The claims filing wizard asks for the policyholder's policy number on step 1, then asks again on step 4's 'supporting documents' section, blank, with no pre-fill. Which Success Criterion is most directly violated?",
  "choices":["3.3.7 Redundant Entry","3.3.2 Labels or Instructions","1.3.1 Info and Relationships","3.3.4 Error Prevention (Legal, Financial, Data)"],"answer":0,
  "explanation":"3.3.7 requires information already provided earlier in the same process be carried forward. The policy number entered on step 1 should be pre-filled or referenced on step 4, not requested again.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Insurance Platform - Claims Filing","learningObjective":"Identify the violated Success Criterion for a photo-upload damage assessment tool","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-INS-CLAIM-Q2","difficulty":"medium","mode":"practice",
  "question":"After uploading photos of vehicle damage, an automated tool circles areas of detected damage directly on the image with no text description of what was detected or where. Which Success Criterion is most directly violated?",
  "choices":["1.1.1 Non-Text Content","1.4.11 Non-text Contrast","2.4.2 Page Titled","3.1.5 Reading Level"],"answer":0,
  "explanation":"1.1.1 requires a text alternative for meaningful non-text content. Visual circles indicating detected damage convey no information to a screen reader user with no accompanying text description of what was found.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Insurance Platform - Claims Filing","learningObjective":"Identify the violated Success Criterion for a claim-submission session timeout","level":"A","principle":"Operable","guideline":"Enough Time","scNumber":"2.2.5","scName":"Re-authenticating","id":"FAM-INS-CLAIM-Q3","difficulty":"hard","mode":"challenge",
  "question":"A claims adjuster's session expires while a policyholder is midway through describing a detailed accident narrative (several paragraphs of text); after re-authenticating, the entire narrative is lost with no way to recover it. Which Success Criterion is most directly violated?",
  "choices":["2.2.5 Re-authenticating","2.2.1 Timing Adjustable","3.3.4 Error Prevention (Legal, Financial, Data)","1.3.1 Info and Relationships"],"answer":0,
  "explanation":"2.2.5 requires that data entered by the user is preserved after re-authenticating following a session expiration. Losing a detailed, potentially lengthy accident narrative is exactly the harm this criterion is meant to prevent.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Insurance Platform - Document Center","learningObjective":"Identify the violated Success Criterion for a policy document PDF","level":"A","principle":"Perceivable","guideline":"Adaptable","scNumber":"1.3.1","scName":"Info and Relationships","id":"FAM-INS-DOCS-Q1","difficulty":"hard","mode":"challenge",
  "question":"A downloaded policy declarations PDF has a real text layer but no heading structure at all (section titles are just larger bold text) and no table headers on its coverage-limits table. Which Success Criterion is most directly violated?",
  "choices":["1.3.1 Info and Relationships","1.1.1 Non-Text Content","2.4.2 Page Titled","1.4.8 Visual Presentation"],"answer":0,
  "explanation":"1.3.1 applies to PDFs the same as HTML: bold, larger text with no real heading tags, and an untagged coverage-limits table, both fail to expose structure programmatically, leaving a screen reader user with a flat, disorganized reading experience of an important legal document.","questionType":"Application" },
{ "domain":"domain1","lesson":"Understandable: Insurance Platform - Document Center","learningObjective":"Recommend a remediation strategy for the policy document","level":"A","principle":"Perceivable","guideline":"Adaptable","scNumber":"1.3.1","scName":"Info and Relationships","id":"FAM-INS-DOCS-Q2","difficulty":"medium","mode":"practice",
  "question":"What is the most durable remediation for the policy declarations PDF's structural issues?",
  "choices":[
    "Fix the source document template (the system that generates these declarations pages) to output real heading tags and proper table structure, then regenerate affected documents, rather than manually patching each PDF individually",
    "Manually re-tag each individual policyholder's PDF one at a time with no change to the underlying generation system",
    "Convert all policy documents to scanned images to simplify the format",
    "Add a single summary paragraph at the top of each PDF with no other structural changes"
  ],"answer":0,
  "explanation":"Since these documents are generated from a shared template or system, fixing the generation process itself resolves the issue for every current and future policyholder's document at once, far more efficient and durable than patching PDFs individually after the fact.","questionType":"Remediation Planning" }
];
window.WCAG_LAB_FAMILY_INSURANCE = WCAG_LAB_FAMILY_INSURANCE;

/* Scenario Family: Public Transit App - Trip Planner, Real-Time Arrivals, Fare Payment, Service Alerts. */
var WCAG_LAB_FAMILY_TRANSIT = [

{ "domain":"domain1","lesson":"Perceivable: Public Transit App - Trip Planner","learningObjective":"Identify the violated Success Criterion for a route-map-only trip result","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-TRANSIT-PLAN-Q1","difficulty":"medium","mode":"practice",
  "question":"Trip planner results show the suggested route as a colored line on a map image with no accessible text alternative describing the actual bus/train lines, transfer points, or walking directions. Which Success Criterion is most directly violated?",
  "choices":["1.1.1 Non-Text Content","1.4.1 Use of Color","2.4.4 Link Purpose (In Context)","1.4.10 Reflow"],"answer":0,
  "explanation":"1.1.1 requires a text alternative for meaningful non-text content. A route shown only as a colored line on a map image, with no step-by-step text directions, gives a screen reader user zero access to the actual trip instructions.","questionType":"Application" },
{ "domain":"domain4","lesson":"Operable: Public Transit App - Real-Time Arrivals","learningObjective":"Identify the violated Success Criterion for an auto-refreshing arrivals board","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.3","scName":"Status Messages","id":"FAM-TRANSIT-ARRIVE-Q1","difficulty":"medium","mode":"practice",
  "question":"The real-time arrivals board refreshes every 15 seconds, updating each bus's countdown ('4 min', '3 min'...) with no live region markup, so a screen reader user hears nothing as the countdown changes and must manually re-check repeatedly. Which Success Criterion is most directly violated?",
  "choices":["4.1.3 Status Messages","2.2.1 Timing Adjustable","2.2.2 Pause, Stop, Hide","1.4.13 Content on Hover or Focus"],"answer":0,
  "explanation":"4.1.3 requires dynamic status updates be announced to assistive technology without requiring focus to move there. A silently updating countdown leaves a screen reader user needing to manually re-check the page repeatedly to get current arrival information most sighted users perceive automatically.","questionType":"Application" },
{ "domain":"domain4","lesson":"Understandable: Public Transit App - Real-Time Arrivals","learningObjective":"Determine whether an assertive live region is the correct urgency level","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.3","scName":"Status Messages","id":"FAM-TRANSIT-ARRIVE-Q2","difficulty":"hard","mode":"challenge",
  "question":"A developer proposes fixing the silent countdown by making it an assertive live region, announcing every single 15-second update immediately and interrupting whatever the screen reader is currently reading. Is this the right urgency level?",
  "choices":[
    "No - announcing every 15-second countdown tick as an interruption would be highly disruptive; a better approach is a polite live region announcing only meaningful state changes (such as when a bus is now '1 minute away' or 'arriving now'), not every routine countdown decrement",
    "Yes - arrival information is always urgent and must always be assertive with no exceptions",
    "Yes - assertive is always the safest choice for any transit-related information",
    "No live region of any kind should be used for this content"
  ],"answer":0,
  "explanation":"This tests real judgment about live region urgency: constant assertive interruptions every 15 seconds would make the page nearly unusable with a screen reader, while a polite region limited to meaningful threshold changes (not every tick) respects both the informational need and the user's ability to keep reading other content undisturbed.","questionType":"Application" },
{ "domain":"domain1","lesson":"Operable: Public Transit App - Fare Payment","learningObjective":"Identify the violated Success Criterion for a QR-code-only fare display","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-TRANSIT-FARE-Q1","difficulty":"easy","mode":"reinforce",
  "question":"The digital fare pass screen displays a QR code for the driver to scan, with the fare type and expiration date also embedded only within that same image, with alt text reading 'QR code'. Which Success Criterion is most directly violated?",
  "choices":["1.1.1 Non-Text Content","2.4.2 Page Titled","1.4.4 Resize Text","3.1.1 Language of Page"],"answer":0,
  "explanation":"1.1.1 requires a text alternative serving an equivalent purpose. 'QR code' identifies the image type but conveys none of the actual fare type or expiration information a rider (or a transit employee) might need in text form.","questionType":"Recognition" },
{ "domain":"domain3","lesson":"Understandable: Public Transit App - Fare Payment","learningObjective":"Identify the violated Success Criterion for a fare-reload payment error","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.4","scName":"Error Prevention (Legal, Financial, Data)","id":"FAM-TRANSIT-FARE-Q2","difficulty":"medium","mode":"practice",
  "question":"Reloading transit fare balance charges the linked card immediately upon tapping 'Add $20', with no review step and no confirmation. Which Success Criterion is most directly violated?",
  "choices":["3.3.4 Error Prevention (Legal, Financial, Data)","3.3.1 Error Identification","2.4.3 Focus Order","3.2.2 On Input"],"answer":0,
  "explanation":"3.3.4 requires financial transactions be reversible, checked with a correction opportunity, or confirmed before submission. An instant charge with no review step fails this Level A requirement.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Public Transit App - Service Alerts","learningObjective":"Identify the violated Success Criterion for a service-disruption banner","level":"A","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.1","scName":"Use of Color","id":"FAM-TRANSIT-ALERT-Q1","difficulty":"medium","mode":"practice",
  "question":"Service alerts are color-coded: yellow banners for minor delays, red banners for full service suspensions, with identical banner text styling and no icon or word ('Delay' / 'Suspended') distinguishing severity beyond the background color. Which Success Criterion is most directly violated?",
  "choices":["1.4.1 Use of Color","1.4.3 Contrast (Minimum)","2.4.6 Headings and Labels","3.3.1 Error Identification"],"answer":0,
  "explanation":"1.4.1 requires color not be the sole means of conveying information. Riders with color vision deficiency cannot reliably distinguish a minor delay from a full suspension if the banner color is the only differentiating signal - a meaningful practical problem for trip planning.","questionType":"Application" },
{ "domain":"domain1","lesson":"Robust: Public Transit App - Service Alerts","learningObjective":"Assign severity to the service-alert color-coding finding","level":"A","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.1","scName":"Use of Color","id":"FAM-TRANSIT-ALERT-Q2","difficulty":"hard","mode":"challenge",
  "question":"How should the color-only severity distinction between 'delay' and 'suspended' alerts be rated?",
  "choices":[
    "High/Serious - misreading a full suspension as a minor delay (or vice versa) could cause a rider to miss a connection entirely or make a real-world trip-planning decision based on incorrect information, a meaningfully worse consequence than a typical color-only UI issue",
    "Low/Minor - service alerts are supplementary information most riders check casually",
    "Critical/Blocking - because any 1.4.1 finding is automatically Critical",
    "Not ratable - transit alerts are outside WCAG's scope"
  ],"answer":0,
  "explanation":"Severity should reflect real consequence, not just the technical criterion violated: confusing a minor delay with a full service suspension has genuine, time-sensitive real-world impact on a rider's actual trip, distinguishing this from a lower-stakes color-only issue elsewhere on a page with less time pressure.","questionType":"Severity Assessment" }
];
window.WCAG_LAB_FAMILY_TRANSIT = WCAG_LAB_FAMILY_TRANSIT;

(function () {
  var additions = [].concat(
    window.WCAG_LAB_FAMILY_HOTEL || [],
    window.WCAG_LAB_FAMILY_LMS || [],
    window.WCAG_LAB_FAMILY_INSURANCE || [],
    window.WCAG_LAB_FAMILY_TRANSIT || []
  );
  if (window.WCAG_LAB_DATA && Array.isArray(window.WCAG_LAB_DATA.questions)) {
    window.WCAG_LAB_DATA.questions = window.WCAG_LAB_DATA.questions.concat(additions);
  }
}());
