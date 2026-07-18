/* WCAG Accessibility Lab expansion data, part 5.
   Continues breadth-first industry coverage while deliberately weighting toward Robust-principle
   (Domain 4) content per the flagged domain imbalance: Streaming Service, Enterprise Dashboard
   (a dedicated family, distinct from the single scenario in the first expansion), Mobile Application,
   and Authentication & Account Management. 17 of this session's 34 questions are Domain 4, focused on
   4.1.2 Name/Role/Value and 4.1.3 Status Messages across custom media controls, dashboard widgets,
   mobile tab bars and toggles, and authentication UI components.
   Loaded after wcag-lab-expansion-4.js and appends to the same window.WCAG_LAB_DATA.questions array
   without modifying, removing, or replacing any existing question from any prior file. */
/* Scenario Family: Streaming Service - Video Player, Content Browse, Watchlist, Subtitle Settings,
   Profile Switching. Deliberately weighted toward Robust/component-state questions (4.1.2, 4.1.3),
   given custom media player controls and live status updates are a natural fit for this domain. */
var WCAG_LAB_FAMILY_STREAMING = [

{ "domain":"domain4","lesson":"Robust: Streaming Service - Video Player","learningObjective":"Identify the violated Success Criterion for custom video player controls","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-STREAM-PLAYER-Q1","difficulty":"hard","mode":"challenge",
  "question":"The video player's custom play/pause button toggles its icon between a triangle and two bars, but a screen reader announces it only as 'button' both before and after activation, with no accessible name change reflecting the current state. Which Success Criterion is most directly violated?",
  "choices":["4.1.2 Name, Role, Value","2.1.1 Keyboard","1.1.1 Non-Text Content","2.5.3 Label in Name"],"answer":0,
  "explanation":"4.1.2 requires an accessible name and current state be programmatically determinable and updated as the component changes. A play/pause toggle announced only as 'button' with no indication of its current state or what activating it will do fails this requirement.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Streaming Service - Video Player","learningObjective":"Identify the violated Success Criterion for a custom volume slider","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-STREAM-PLAYER-Q2","difficulty":"hard","mode":"challenge",
  "question":"The player's volume control is a custom slider that can be dragged with a mouse; a screen reader announces it as 'slider' with no current volume level, no minimum/maximum, and no indication the value changed after adjustment. Which Success Criterion is most directly violated?",
  "choices":["4.1.2 Name, Role, Value","2.5.7 Dragging Movements","2.1.1 Keyboard","1.4.13 Content on Hover or Focus"],"answer":0,
  "explanation":"4.1.2 requires a component's value/state be both readable and announced when changed. A slider exposing a generic role with no current value, range, or change notification fails this requirement, distinct from (though this control likely also has separate 2.1.1 and 2.5.7 gaps if it is mouse-drag-only).","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Streaming Service - Video Player","learningObjective":"Identify the violated Success Criterion for a 'Skip Intro' button appearing dynamically","level":"AA","principle":"Robust","guideline":"Compatible","scNumber":"4.1.3","scName":"Status Messages","id":"FAM-STREAM-PLAYER-Q3","difficulty":"medium","mode":"practice",
  "question":"A 'Skip Intro' button appears dynamically a few seconds into an episode and disappears after 10 seconds if not used, with no live region announcing its appearance; a screen reader user has no way to know the option exists unless they happen to explore the player controls during that exact 10-second window. Which Success Criterion is most directly violated?",
  "choices":["4.1.3 Status Messages","2.2.1 Timing Adjustable","2.2.4 Interruptions","2.4.3 Focus Order"],"answer":0,
  "explanation":"4.1.3 requires dynamic content appearances relevant to the user be announced to assistive technology. A time-limited, silently-appearing button gives a screen reader user no practical way to discover or use it within its brief availability window.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Streaming Service - Video Player","learningObjective":"Recommend a remediation plan addressing all three player findings together","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-STREAM-PLAYER-Q4","difficulty":"hard","mode":"challenge",
  "question":"Given the play/pause button, volume slider, and Skip Intro button all have related but distinct accessibility gaps, what is the most efficient remediation approach?",
  "choices":[
    "Address each control's specific gap individually within a shared, documented custom-player-controls pattern: accessible names that update with state for play/pause, a fully exposed range and current value for the volume slider, and a live region announcement when Skip Intro appears - implemented once as a reusable pattern, since all three controls likely share the same underlying custom-component codebase",
    "Replace the entire custom player with a single generic play button and remove all other controls",
    "Only fix the play/pause button, since it is used most frequently",
    "Add a single alt attribute to the whole player container describing all controls in one sentence"
  ],"answer":0,
  "explanation":"These are three related but genuinely distinct 4.1.2/4.1.3 gaps, each needing its own specific fix, but since they likely share the same custom video player codebase, documenting and implementing the fix as a reusable accessible pattern (rather than three one-off patches) is both more efficient and more likely to prevent the same gaps recurring in the next custom player feature built.","questionType":"Remediation Planning" },

/* --- Content Browse --- */
{ "domain":"domain2","lesson":"Operable: Streaming Service - Content Browse","learningObjective":"Identify the violated Success Criterion for a horizontally-scrolling content carousel","level":"A","principle":"Operable","guideline":"Navigable","scNumber":"2.4.1","scName":"Bypass Blocks","id":"FAM-STREAM-BROWSE-Q1","difficulty":"medium","mode":"practice",
  "question":"The home screen has 15 horizontally-scrolling content carousels ('Trending Now', 'Because You Watched...', etc.), each containing 20+ titles, with no landmark regions and no way to skip past an entire carousel to the next one - a keyboard user must tab through every single title in a carousel before reaching the next carousel. Which Success Criterion is most directly violated?",
  "choices":["2.4.1 Bypass Blocks","2.1.1 Keyboard","1.4.10 Reflow","2.4.3 Focus Order"],"answer":0,
  "explanation":"2.4.1 requires a mechanism to bypass repeated blocks of content. Fifteen carousels of 20+ items each, with no way to skip a whole carousel, creates an extreme version of the tedious navigation burden this criterion addresses.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Streaming Service - Content Browse","learningObjective":"Identify the violated Success Criterion for a custom 'Add to Watchlist' toggle","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-STREAM-BROWSE-Q2","difficulty":"hard","mode":"challenge",
  "question":"Each title card has a custom '+' icon to add it to the watchlist; once added, the icon changes to a checkmark, but the accessible name never changes from 'Add to Watchlist' even after the title has already been added, and no state (added/not added) is exposed. Which Success Criterion is most directly violated?",
  "choices":["4.1.2 Name, Role, Value","2.5.3 Label in Name","1.4.1 Use of Color","2.4.6 Headings and Labels"],"answer":0,
  "explanation":"4.1.2 requires that a control's current state be exposed and updated. An accessible name that never reflects whether a title is already on the watchlist leaves a screen reader user unable to tell current status or risk of accidentally removing versus adding a title.","questionType":"Application" },

/* --- Watchlist --- */
{ "domain":"domain3","lesson":"Understandable: Streaming Service - Watchlist","learningObjective":"Identify the violated Success Criterion for a watchlist-removal confirmation","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.4","scName":"Error Prevention (Legal, Financial, Data)","id":"FAM-STREAM-LIST-Q1","difficulty":"hard","mode":"challenge",
  "question":"A 'Clear entire watchlist' button, once clicked, immediately removes all saved titles with no confirmation and no way to undo. Given a large watchlist could represent months of curation, does this genuinely violate 3.3.4, which specifically names legal, financial, and data-related actions?",
  "choices":[
    "Yes - 3.3.4 explicitly includes actions that 'delete user-controllable data' among its covered categories, not only legal and financial transactions; irreversibly deleting a substantial, effortfully curated data set fits this category directly",
    "No - 3.3.4 only applies to financial transactions and legal contracts, never to any other kind of data",
    "No - since watchlists are considered entertainment, not serious enough data to warrant this criterion",
    "This cannot be determined without knowing exactly how many titles are on the watchlist"
  ],"answer":0,
  "explanation":"This tests knowing 3.3.4's actual scope precisely: it covers legal commitments, financial transactions, and actions that delete user-controllable data, not only the first two categories the criterion's short name might suggest. An irreversible bulk-delete of user data fits squarely within this third category.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Streaming Service - Watchlist","learningObjective":"Recommend an appropriate remediation strategy","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.4","scName":"Error Prevention (Legal, Financial, Data)","id":"FAM-STREAM-LIST-Q2","difficulty":"medium","mode":"practice",
  "question":"What is the most appropriate remediation for the instant, unconfirmed 'Clear entire watchlist' action?",
  "choices":[
    "Add a confirmation dialog requiring a distinct confirming action before the deletion proceeds, or make the action reversible for a reasonable window (such as an 'Undo' option immediately after clearing)",
    "Remove the 'Clear entire watchlist' feature entirely",
    "Require the user to type their full name to confirm, similar to a legal document signature",
    "Add a warning icon next to the button with no other behavioral change"
  ],"answer":0,
  "explanation":"Either a confirmation step before the irreversible action, or making the action itself reversible for a reasonable window, satisfies 3.3.4's intent - giving users a genuine opportunity to avoid or recover from an accidental bulk deletion.","questionType":"Remediation Planning" },

/* --- Subtitle Settings --- */
{ "domain":"domain1","lesson":"Perceivable: Streaming Service - Subtitle Settings","learningObjective":"Identify the violated Success Criterion for a subtitle color-contrast preview","level":"AA","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.3","scName":"Contrast (Minimum)","id":"FAM-STREAM-SUB-Q1","difficulty":"medium","mode":"practice",
  "question":"The subtitle customization screen lets users choose a text color and background, but the default preset ('Light Gray on White') has a contrast ratio of 1.8:1, and this default preset text describing the option itself is styled using that same low-contrast combination. Which Success Criterion is most directly violated?",
  "choices":["1.4.3 Contrast (Minimum)","1.4.1 Use of Color","1.4.8 Visual Presentation","2.4.6 Headings and Labels"],"answer":0,
  "explanation":"1.4.3 requires text meet a 4.5:1 contrast ratio at Level AA. A default preset option's own label text, styled at 1.8:1, fails this requirement for the interface's own settings text, independent of what the user might separately choose for their actual subtitle appearance.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Streaming Service - Subtitle Settings","learningObjective":"Identify the violated Success Criterion for a subtitle preview live update","level":"AA","principle":"Robust","guideline":"Compatible","scNumber":"4.1.3","scName":"Status Messages","id":"FAM-STREAM-SUB-Q2","difficulty":"hard","mode":"challenge",
  "question":"Changing the subtitle font size updates a live preview panel showing sample subtitle text at the new size, with no live region markup - a screen reader user adjusting the font size has no way to know the preview updated without manually re-navigating to it after every change. Which Success Criterion is most directly violated?",
  "choices":["4.1.3 Status Messages","1.4.4 Resize Text","2.4.3 Focus Order","3.2.2 On Input"],"answer":0,
  "explanation":"4.1.3 requires dynamic content updates be announced to assistive technology. A silently updating preview leaves a screen reader user unable to verify their font-size selection had the expected visual effect without repeated manual re-checking.","questionType":"Application" },

/* --- Profile Switching --- */
{ "domain":"domain4","lesson":"Robust: Streaming Service - Profile Switching","learningObjective":"Identify the violated Success Criterion for a profile-picker grid","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-STREAM-PROFILE-Q1","difficulty":"medium","mode":"practice",
  "question":"The 'Who's watching?' profile selection screen shows profile avatars in a grid; each is announced by a screen reader only as 'button' with no profile name, since the name is rendered as a separate, visually-adjacent but programmatically unconnected text element below each avatar. Which Success Criterion is most directly violated?",
  "choices":["4.1.2 Name, Role, Value","1.3.1 Info and Relationships","2.4.6 Headings and Labels","2.5.3 Label in Name"],"answer":0,
  "explanation":"4.1.2 requires an accessible name for each interactive component. A profile button with no accessible name, relying only on visually-adjacent but programmatically disconnected text, fails to expose the profile's identity to assistive technology.","questionType":"Application" }
];
window.WCAG_LAB_FAMILY_STREAMING = WCAG_LAB_FAMILY_STREAMING;

/* Scenario Family: Enterprise Dashboard (dedicated family, distinct from the single scenario in the
   first expansion) - Widget Configuration, Filters & Date Range, Real-Time KPI Tiles, Data Export,
   Alert Rules. Deliberately weighted toward Robust/component-state and live-announcement questions. */
var WCAG_LAB_FAMILY_DASHBOARD = [

{ "domain":"domain4","lesson":"Robust: Enterprise Dashboard - Widget Configuration","learningObjective":"Identify the violated Success Criterion for a drag-to-reorder widget grid","level":"AA","principle":"Robust","guideline":"Compatible","scNumber":"2.5.7","scName":"Dragging Movements","id":"FAM-DASH-WIDGET-Q1","difficulty":"medium","mode":"practice",
  "question":"Dashboard widgets can be rearranged by dragging them to new grid positions, with no button, menu, or keyboard-based alternative to change a widget's position. Which Success Criterion is most directly violated?",
  "choices":["2.5.7 Dragging Movements","2.1.1 Keyboard","1.3.2 Meaningful Sequence","2.4.3 Focus Order"],"answer":0,
  "explanation":"2.5.7 requires dragging-based functionality also be achievable through a single-pointer action without dragging, unless dragging is essential. A 'Move widget' menu option is a common, straightforward alternative.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Enterprise Dashboard - Widget Configuration","learningObjective":"Identify the violated Success Criterion for a widget-visibility toggle","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-DASH-WIDGET-Q2","difficulty":"hard","mode":"challenge",
  "question":"Each widget has a custom eye-icon toggle to show/hide it on the dashboard; the icon changes appearance between open-eye and closed-eye, but the accessible name remains the generic 'button' throughout with no exposed pressed/toggled state. Which Success Criterion is most directly violated?",
  "choices":["4.1.2 Name, Role, Value","1.1.1 Non-Text Content","2.4.6 Headings and Labels","1.4.11 Non-text Contrast"],"answer":0,
  "explanation":"4.1.2 requires both an accessible name describing purpose and an exposed current state. A generic 'button' announcement with no name or visibility-state information leaves a screen reader user unable to know what the control does or its current effect.","questionType":"Application" },

/* --- Filters & Date Range --- */
{ "domain":"domain2","lesson":"Operable: Enterprise Dashboard - Filters & Date Range","learningObjective":"Identify the violated Success Criterion for a custom date-range picker","level":"A","principle":"Operable","guideline":"Keyboard Accessible","scNumber":"2.1.1","scName":"Keyboard","id":"FAM-DASH-FILTER-Q1","difficulty":"medium","mode":"practice",
  "question":"The date-range filter's calendar grid opens on click, but individual date cells cannot receive keyboard focus at all - only mouse clicks select a start or end date. Which Success Criterion is most directly violated?",
  "choices":["2.1.1 Keyboard","2.4.3 Focus Order","4.1.2 Name, Role, Value","1.3.5 Identify Input Purpose"],"answer":0,
  "explanation":"2.1.1 requires all functionality be operable through a keyboard. A calendar whose individual date cells never receive keyboard focus is not keyboard operable at all for date selection.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Enterprise Dashboard - Filters & Date Range","learningObjective":"Identify the violated Success Criterion for applied-filter status communication","level":"AA","principle":"Robust","guideline":"Compatible","scNumber":"4.1.3","scName":"Status Messages","id":"FAM-DASH-FILTER-Q2","difficulty":"hard","mode":"challenge",
  "question":"After applying a date-range and region filter, all dashboard widgets silently recalculate their data with no announcement that filtering completed or how many data points now match; a screen reader user has no way to know the filter took effect or when the new data finished loading. Which Success Criterion is most directly violated?",
  "choices":["4.1.3 Status Messages","2.2.1 Timing Adjustable","3.2.2 On Input","2.4.3 Focus Order"],"answer":0,
  "explanation":"4.1.3 requires dynamic status updates, including confirmation that a filter was applied and results updated, be announced to assistive technology. Complete silence after filtering leaves a screen reader user uncertain whether their action succeeded.","questionType":"Application" },

/* --- Real-Time KPI Tiles --- */
{ "domain":"domain4","lesson":"Robust: Enterprise Dashboard - Real-Time KPI Tiles","learningObjective":"Determine the correct live-region urgency for auto-refreshing KPI tiles","level":"AA","principle":"Robust","guideline":"Compatible","scNumber":"4.1.3","scName":"Status Messages","id":"FAM-DASH-KPI-Q1","difficulty":"hard","mode":"challenge",
  "question":"A revenue KPI tile refreshes every 10 seconds with live data, and a developer proposes making it an assertive live region so screen reader users never miss an update. What is the correct urgency assessment?",
  "choices":[
    "Assertive is very likely the wrong choice here - interrupting the user every 10 seconds with a routine number update would be highly disruptive; a polite live region, or better, no automatic announcement at all with the current value simply available on demand when the user navigates to the tile, is more appropriate for a routinely-changing metric with no inherent urgency",
    "Assertive is always correct for any numeric data that updates automatically",
    "This tile should have no accessible markup of any kind since it is 'just a number'",
    "The refresh rate should be slowed to once per hour specifically to accommodate screen reader users"
  ],"answer":0,
  "explanation":"This tests recognizing when automatic announcement of ANY kind may be excessive: a routinely fluctuating metric with no inherent urgency does not need to interrupt a user's current activity every 10 seconds; making the current value available and readable on demand (via correct accessible naming and state, not necessarily a live region at all) often serves the user better than constant, unrequested announcements.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Enterprise Dashboard - Real-Time KPI Tiles","learningObjective":"Identify the violated Success Criterion for a KPI trend arrow icon","level":"A","principle":"Perceivable","guideline":"Text Alternatives","scNumber":"1.1.1","scName":"Non-Text Content","id":"FAM-DASH-KPI-Q2","difficulty":"medium","mode":"practice",
  "question":"Each KPI tile shows a small up or down arrow icon next to the percentage change, conveyed purely as a background CSS image with no accessible text indicating direction. Which Success Criterion is most directly violated?",
  "choices":["1.1.1 Non-Text Content","1.4.1 Use of Color","1.4.11 Non-text Contrast","4.1.2 Name, Role, Value"],"answer":0,
  "explanation":"1.1.1 requires a text alternative for meaningful non-text content. An unlabeled trend arrow conveys no direction information to a screen reader user, who only hears the percentage number with no indication of whether it represents an increase or decrease.","questionType":"Application" },

/* --- Data Export --- */
{ "domain":"domain3","lesson":"Understandable: Enterprise Dashboard - Data Export","learningObjective":"Identify the violated Success Criterion for an export-format error","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.1","scName":"Error Identification","id":"FAM-DASH-EXPORT-Q1","difficulty":"medium","mode":"practice",
  "question":"Attempting to export a dataset larger than the platform's 50,000-row limit as a PDF causes the export button to become disabled with no text explanation of the row limit or why the export failed to start. Which Success Criterion is most directly violated?",
  "choices":["3.3.1 Error Identification","3.3.3 Error Suggestion","2.4.3 Focus Order","4.1.3 Status Messages"],"answer":0,
  "explanation":"3.3.1 requires a detected error be identified and described in text. A silently disabled button with no explanation leaves the user unaware of the actual row-limit constraint or how to proceed (such as narrowing their filter first).","questionType":"Application" },

/* --- Alert Rules --- */
{ "domain":"domain3","lesson":"Understandable: Enterprise Dashboard - Alert Rules","learningObjective":"Identify the violated Success Criterion for redundant alert-condition entry","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.7","scName":"Redundant Entry","id":"FAM-DASH-ALERT-Q1","difficulty":"medium","mode":"practice",
  "question":"Creating a new alert rule asks the user to select a metric and threshold on step 1, then asks again on step 3's 'review notification settings' page, blank, before the rule can be saved. Which Success Criterion is most directly violated?",
  "choices":["3.3.7 Redundant Entry","3.3.4 Error Prevention (Legal, Financial, Data)","1.3.1 Info and Relationships","3.3.2 Labels or Instructions"],"answer":0,
  "explanation":"3.3.7 requires information already provided earlier in the same process be carried forward. The metric and threshold selected on step 1 should be pre-filled or displayed on step 3, not requested again from scratch.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Enterprise Dashboard - Alert Rules","learningObjective":"Write a professional audit finding covering the dashboard's Robust-principle findings together","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-DASH-ALERT-Q2","difficulty":"hard","mode":"challenge",
  "question":"Across this dashboard audit, several Robust-principle findings were identified: an unlabeled widget-visibility toggle, a silent filter-application update, and an over-aggressive proposed fix (assertive KPI announcements) that was correctly rejected during review. How should this cluster of findings be characterized in the audit summary?",
  "choices":[
    "The dashboard exhibits a pattern of custom, dynamically-updating components built without deliberate attention to accessible naming, state exposure, or appropriately-scoped live announcements; recommend establishing a shared accessible-components library and a live-region usage guideline (including urgency-level guidance) so future custom widgets do not repeat this pattern",
    "These findings are unrelated and should be reported with no shared framing or systemic recommendation",
    "Since one proposed fix was correctly rejected, no further Robust-principle recommendations are needed",
    "This pattern only affects this specific dashboard and has no implications for other parts of the product"
  ],"answer":0,
  "explanation":"Recognizing a systemic pattern (multiple custom components independently missing the same category of accessibility properties) and recommending both a technical solution (a shared component library) and a process one (live-region usage guidance) is the kind of higher-level synthesis that distinguishes a senior consulting engagement from a flat list of individual bug reports.","questionType":"Audit Documentation" }
];
window.WCAG_LAB_FAMILY_DASHBOARD = WCAG_LAB_FAMILY_DASHBOARD;

/* Scenario Family: Mobile Application (dedicated family) - Tab Bar Navigation, Gesture Controls,
   Push Notification Settings, Offline Sync Status, In-App Purchase. */
var WCAG_LAB_FAMILY_MOBILE = [

{ "domain":"domain4","lesson":"Robust: Mobile Application - Tab Bar Navigation","learningObjective":"Identify the violated Success Criterion for a custom bottom tab bar","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-MOB-TABBAR-Q1","difficulty":"hard","mode":"challenge",
  "question":"The app's bottom tab bar (Home, Search, Notifications, Profile) is custom-built; a screen reader announces each icon only as 'button' with no name, and the currently active tab is indicated only by a color change with no exposed selected state. Which Success Criterion is most directly violated?",
  "choices":["4.1.2 Name, Role, Value","1.4.1 Use of Color","2.5.8 Target Size (Minimum)","2.4.6 Headings and Labels"],"answer":0,
  "explanation":"4.1.2 requires an accessible name and exposed state for interactive components. Four unlabeled 'button' announcements with no indication of which tab is currently selected fails this requirement for the app's primary navigation mechanism, and also separately implicates 1.4.1 for the color-only selected-state indicator.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Mobile Application - Gesture Controls","learningObjective":"Identify the violated Success Criterion for a swipe-to-delete list item","level":"A","principle":"Operable","guideline":"Input Modalities","scNumber":"2.5.1","scName":"Pointer Gestures","id":"FAM-MOB-GESTURE-Q1","difficulty":"medium","mode":"practice",
  "question":"Deleting an item from a list requires swiping it left with a specific gesture to reveal a delete button; there is no long-press menu, no edit-mode button, and no other single-pointer way to trigger the same delete action. Which Success Criterion is most directly violated?",
  "choices":["2.5.1 Pointer Gestures","2.5.7 Dragging Movements","2.1.1 Keyboard","2.5.2 Pointer Cancellation"],"answer":0,
  "explanation":"2.5.1 requires that path-based gestures like a directional swipe have a single-pointer alternative, unless essential. An 'Edit' mode toggle revealing tap-to-delete buttons is a standard, commonly implemented alternative.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Mobile Application - Gesture Controls","learningObjective":"Identify the violated Success Criterion for a shake-to-undo feature","level":"A","principle":"Operable","guideline":"Input Modalities","scNumber":"2.5.4","scName":"Motion Actuation","id":"FAM-MOB-GESTURE-Q2","difficulty":"hard","mode":"challenge",
  "question":"The app implements 'shake to undo' (physically shaking the device undoes the last action) as the only way to trigger undo, with no on-screen button offering the same function and no way to disable the motion trigger. Which Success Criterion is most directly violated?",
  "choices":["2.5.4 Motion Actuation","2.5.1 Pointer Gestures","2.1.1 Keyboard","2.3.1 Three Flashes or Below Threshold"],"answer":0,
  "explanation":"2.5.4 requires that functionality triggered by device motion also be operable through a standard UI component, and that motion-triggered actuation can be disabled, unless the motion is essential. A shake-only undo with no on-screen alternative and no disable option fails this requirement, and is inoperable for users who cannot physically shake the device or whose device is mounted in a fixed position.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Mobile Application - Push Notification Settings","learningObjective":"Identify the violated Success Criterion for notification-category toggles","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-MOB-NOTIF-Q1","difficulty":"medium","mode":"practice",
  "question":"Notification preference toggles for 'Messages', 'Likes', and 'Mentions' are custom switches; a screen reader announces all three identically as 'switch, button' with no category name and no on/off state exposed for any of them. Which Success Criterion is most directly violated?",
  "choices":["4.1.2 Name, Role, Value","2.5.3 Label in Name","1.3.5 Identify Input Purpose","3.3.2 Labels or Instructions"],"answer":0,
  "explanation":"4.1.2 requires both an accessible name and current state for each control. Three identically-announced switches with no category name or on/off state leave a screen reader user unable to tell which toggle is which or its current setting.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Mobile Application - Offline Sync Status","learningObjective":"Identify the violated Success Criterion for a sync-status icon","level":"AA","principle":"Robust","guideline":"Compatible","scNumber":"4.1.3","scName":"Status Messages","id":"FAM-MOB-SYNC-Q1","difficulty":"hard","mode":"challenge",
  "question":"When the app regains internet connectivity after being offline, a small icon in the header silently changes from a 'no connection' symbol to a 'synced' checkmark once pending changes finish uploading, with no announcement of this transition. Which Success Criterion is most directly violated?",
  "choices":["4.1.3 Status Messages","2.2.1 Timing Adjustable","1.1.1 Non-Text Content","4.1.2 Name, Role, Value"],"answer":0,
  "explanation":"4.1.3 requires dynamic status changes be announced to assistive technology. A silently updating sync icon leaves a screen reader user unaware whether their offline changes have actually been saved to the server, a meaningful uncertainty for data they may be relying on.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Mobile Application - In-App Purchase","learningObjective":"Identify the violated Success Criterion for a one-tap purchase confirmation","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.4","scName":"Error Prevention (Legal, Financial, Data)","id":"FAM-MOB-PURCHASE-Q1","difficulty":"medium","mode":"practice",
  "question":"Tapping 'Buy' on an in-app purchase immediately charges the linked payment method with no review of the price or item, and no confirmation step beyond the single tap. Which Success Criterion is most directly violated?",
  "choices":["3.3.4 Error Prevention (Legal, Financial, Data)","3.3.1 Error Identification","2.5.2 Pointer Cancellation","2.4.3 Focus Order"],"answer":0,
  "explanation":"3.3.4 requires financial transactions be reversible, checked with a correction opportunity, or confirmed before submission. A single tap with no review or confirmation fails this Level A requirement, especially risky for accidental taps.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Mobile Application - In-App Purchase","learningObjective":"Recommend a remediation that also considers 2.5.2 Pointer Cancellation","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.4","scName":"Error Prevention (Legal, Financial, Data)","id":"FAM-MOB-PURCHASE-Q2","difficulty":"hard","mode":"challenge",
  "question":"Beyond adding a confirmation step, what related fix should also be checked given this is a purchase button specifically?",
  "choices":[
    "Verify the 'Buy' button itself follows 2.5.2's requirement to trigger on release rather than initial touch contact, so a user can still abort an accidental touchdown on the button by sliding away before lifting their finger, providing an additional layer of protection alongside the confirmation step",
    "No related fix is needed since 3.3.4's confirmation step alone fully addresses every possible accidental-purchase scenario",
    "The button should be made larger with no other change",
    "The button should be moved to a different part of the screen with no other change"
  ],"answer":0,
  "explanation":"This tests connecting related but distinct criteria: 3.3.4's confirmation step and 2.5.2's release-based activation are complementary protections against accidental purchase, not redundant with each other - checking both is more thorough than assuming a confirmation dialog alone covers every accidental-touch scenario, particularly the very first tap that opens the purchase flow.","questionType":"Best Next Action" }
];
window.WCAG_LAB_FAMILY_MOBILE = WCAG_LAB_FAMILY_MOBILE;

/* Scenario Family: Authentication & Account Management (dedicated family) - Login, Multi-Factor
   Verification, Password Reset, Account Recovery, Session Management. */
var WCAG_LAB_FAMILY_AUTH = [

{ "domain":"domain3","lesson":"Understandable: Authentication - Login","learningObjective":"Identify the violated Success Criterion for a puzzle-only bot check","level":"AA","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.8","scName":"Accessible Authentication (Minimum)","id":"FAM-AUTH-LOGIN-Q1","difficulty":"medium","mode":"practice",
  "question":"The login page requires solving a slider puzzle (dragging a piece to complete an image) as its only anti-bot check, with no alternative offered. Which Success Criterion is most directly violated?",
  "choices":["3.3.8 Accessible Authentication (Minimum)","2.5.7 Dragging Movements","2.1.1 Keyboard","3.3.1 Error Identification"],"answer":0,
  "explanation":"3.3.8 prohibits requiring a cognitive function test, including puzzle-solving, as part of authentication unless an alternative is also offered. A drag-puzzle with no alternative fails this Level AA requirement.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Authentication - Multi-Factor Verification","learningObjective":"Identify the violated Success Criterion for an MFA code input's countdown","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.3","scName":"Status Messages","id":"FAM-AUTH-MFA-Q1","difficulty":"hard","mode":"challenge",
  "question":"The six-digit MFA code entry screen shows a visual countdown ('Code expires in 4:32') that updates every second, with no live region; if the code expires while the user is still typing, the field simply rejects the code with no explanation connecting the rejection to the expiration. Which Success Criteria are implicated together?",
  "choices":[
    "4.1.3 Status Messages, since the countdown itself is a status update with no accessible announcement mechanism (though continuous per-second announcement would be inappropriate; a threshold-based announcement, such as at 30 seconds remaining, would be more suitable), and 3.3.1 Error Identification, since the rejected-code error does not explain that expiration was the specific cause",
    "Only 4.1.3 applies; the rejection message is not a separate concern",
    "Only 2.2.1 Timing Adjustable applies, since the issue is fundamentally about the time limit itself",
    "Neither criterion applies since MFA codes are a security feature exempt from WCAG"
  ],"answer":0,
  "explanation":"This scenario spans two distinct concerns: some accessible way to be aware of the approaching expiration (4.1.3, though not necessarily a constant per-second announcement, which would itself be excessive), and a specific, connected error explanation when the code IS rejected due to expiration (3.3.1) rather than a generic 'invalid code' message that could equally mean a typo.","questionType":"Multi-Success-Criterion Analysis" },
{ "domain":"domain2","lesson":"Operable: Authentication - Multi-Factor Verification","learningObjective":"Identify the violated Success Criterion for the MFA time limit itself","level":"A","principle":"Operable","guideline":"Enough Time","scNumber":"2.2.1","scName":"Timing Adjustable","id":"FAM-AUTH-MFA-Q2","difficulty":"hard","mode":"challenge",
  "question":"The MFA code expires after 5 minutes with no way to request a new code without restarting the entire login process from the beginning. For a user who needs extra time to retrieve and read the code (such as a user with a cognitive disability checking a separate device), is this a defensible security exception or a 2.2.1 violation?",
  "choices":[
    "Likely a violation - while some time limit on a security code is reasonable, 5 minutes with absolutely no extension option and no simpler recovery than a full restart is stricter than necessary for the stated security purpose; a 'resend code' option that doesn't require restarting the whole login, or a modestly longer window, would still provide adequate security while meeting 2.2.1's adjustability expectation",
    "Always fully defensible with no further analysis needed, since any security code is automatically exempt from 2.2.1",
    "Never defensible under any circumstances, since 2.2.1 prohibits any and all authentication time limits",
    "This cannot be evaluated since MFA is a relatively new technology not addressed by WCAG"
  ],"answer":0,
  "explanation":"This tests genuine judgment: unlike some timing constraints with a strong structural security justification, requiring a full login restart (rather than a simple 'resend code' option) for a common, low-risk situation like needing a bit more time is stricter than the security goal actually requires, making this a more defensible 2.2.1 finding than, for example, a fixed public-comment deadline would be.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Authentication - Password Reset","learningObjective":"Identify the violated Success Criterion for password requirements communication","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.2","scName":"Labels or Instructions","id":"FAM-AUTH-RESET-Q1","difficulty":"medium","mode":"practice",
  "question":"The 'Create New Password' field has specific requirements (12+ characters, one number, one symbol) that are only revealed after a failed submission attempt; there is no visible instruction before the user first attempts to set their password. Which Success Criterion is most directly violated?",
  "choices":["3.3.2 Labels or Instructions","3.3.1 Error Identification","3.3.3 Error Suggestion","1.3.5 Identify Input Purpose"],"answer":0,
  "explanation":"3.3.2 requires labels or instructions be provided for fields requiring specific input, ideally before the user attempts to enter data. Only revealing requirements after a failed attempt is a reactive, less helpful approach than proactive, visible instructions from the start.","questionType":"Application" },
{ "domain":"domain4","lesson":"Robust: Authentication - Password Reset","learningObjective":"Identify the violated Success Criterion for a password-strength meter","level":"A","principle":"Robust","guideline":"Compatible","scNumber":"4.1.2","scName":"Name, Role, Value","id":"FAM-AUTH-RESET-Q2","difficulty":"hard","mode":"challenge",
  "question":"A password-strength meter shows a colored bar (red/yellow/green) that fills as the user types, with no accessible text indicating the current strength level; a screen reader user typing a password gets no indication of the meter's assessment at all. Which Success Criterion is most directly violated?",
  "choices":["4.1.2 Name, Role, Value","1.4.1 Use of Color","1.4.3 Contrast (Minimum)","4.1.3 Status Messages"],"answer":0,
  "explanation":"4.1.2 requires a component's current value/state be programmatically determinable. A purely visual strength meter with no accessible text representation of its current assessment ('Weak', 'Medium', 'Strong') gives a screen reader user no access to this feedback at all.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Authentication - Account Recovery","learningObjective":"Identify the violated Success Criterion for security-question-only recovery","level":"AAA","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.9","scName":"Accessible Authentication (Enhanced)","id":"FAM-AUTH-RECOVER-Q1","difficulty":"hard","mode":"challenge",
  "question":"An organization targeting full AAA conformance for its account recovery flow finds that recovery is only possible by answering three security questions (a cognitive function test), with no biometric, passwordless, or object-recognition alternative offered. Does this satisfy 3.3.9?",
  "choices":[
    "No - 3.3.9 removes even the object-recognition exception 3.3.8 allows, requiring at minimum a genuinely non-cognitive-test alternative (such as a passwordless email/SMS recovery link or biometric option) alongside or instead of security questions",
    "Yes - security questions are always acceptable under 3.3.9 since they are a long-established, common practice",
    "Yes - 3.3.9 only applies to login, never to account recovery flows",
    "This cannot be evaluated since 3.3.9 does not exist as an active WCAG success criterion"
  ],"answer":0,
  "explanation":"3.3.9's stricter AAA standard removes even 3.3.8's object-recognition exception, meaning security questions (a classic cognitive function test) alone, with no alternative, do not satisfy it - a genuinely non-cognitive-test recovery path is required for full AAA conformance here.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Authentication - Session Management","learningObjective":"Recommend a remediation plan for the authentication family's timing findings together","level":"A","principle":"Operable","guideline":"Enough Time","scNumber":"2.2.1","scName":"Timing Adjustable","id":"FAM-AUTH-SESSION-Q1","difficulty":"hard","mode":"challenge",
  "question":"Given the MFA timeout finding (requiring a full restart) and a separate finding that the main session itself times out after 15 minutes with no warning, what unified remediation approach addresses both efficiently?",
  "choices":[
    "Implement a consistent, reusable session-and-verification-timing pattern across the authentication flow: a 'resend/extend' option for MFA that does not require restarting login, and a warning-with-extension dialog before the main session expires - both following the same underlying UX pattern (proactive warning plus low-friction extension) rather than two differently-designed fixes for what is fundamentally the same category of problem",
    "These are unrelated findings requiring two completely different remediation philosophies with no shared pattern",
    "Only fix the session timeout; the MFA restart requirement is a necessary security measure with no possible improvement",
    "Extend both timers to 24 hours as the only necessary change"
  ],"answer":0,
  "explanation":"Recognizing that both findings share an underlying pattern, a security-motivated time limit implemented without a low-friction way to extend or recover, lets the remediation apply one consistent, well-designed UX pattern across both instances rather than solving the same underlying problem twice in two different ways.","questionType":"Remediation Planning" }
];
window.WCAG_LAB_FAMILY_AUTH = WCAG_LAB_FAMILY_AUTH;

(function () {
  var additions = [].concat(
    window.WCAG_LAB_FAMILY_STREAMING || [],
    window.WCAG_LAB_FAMILY_DASHBOARD || [],
    window.WCAG_LAB_FAMILY_MOBILE || [],
    window.WCAG_LAB_FAMILY_AUTH || []
  );
  if (window.WCAG_LAB_DATA && Array.isArray(window.WCAG_LAB_DATA.questions)) {
    window.WCAG_LAB_DATA.questions = window.WCAG_LAB_DATA.questions.concat(additions);
  }
}());
