/* WCAG Accessibility Lab expansion data, part 6.
   The first expansion session planned using the validation dashboard's coverage-tier report as the
   authoritative map, rather than choosing industries first. Four families - Financial Reporting,
   Document Management, Collaboration Platform, and Human Resources Portal - were each designed
   around specific Baseline-tier (1-4 question) Success Criteria identified by
   generate-validation-report.js, deliberately strengthening: 1.2.1, 1.2.5, 1.3.6, 1.4.4, 1.4.5, 1.4.9,
   2.2.2, 2.3.1, 2.3.2, 2.4.2, 2.4.3, 2.4.5, 2.4.7, 2.4.8, 2.4.9, 2.4.10, 2.5.2, 2.5.4, 2.5.5, 2.5.6,
   3.1.3, 3.1.4, 3.2.1, 3.2.5, 3.3.5, 3.3.6, 3.3.7.
   Loaded after wcag-lab-expansion-5.js and appends to the same window.WCAG_LAB_DATA.questions array
   without modifying, removing, or replacing any existing question from any prior file. */
/* Scenario Family: Financial Reporting Platform - Earnings Call Archive, Interactive Charts, Report
   Navigation, Terminology & Disclosures. Deliberately targets Baseline-tier Success Criteria per the
   validation dashboard's coverage-tier report: 1.2.1, 1.2.5, 2.4.5, 2.4.8, 2.5.2, 3.1.3, 3.1.4. */
var WCAG_LAB_FAMILY_FINANCIAL = [

{ "domain":"domain1","lesson":"Perceivable: Financial Reporting - Earnings Call Archive","learningObjective":"Identify the violated Success Criterion for an audio-only earnings call recording","level":"A","principle":"Perceivable","guideline":"Time-based Media","scNumber":"1.2.1","scName":"Audio-only and Video-only (Prerecorded)","id":"FAM-FIN-EARNINGS-Q1","difficulty":"medium","mode":"practice",
  "question":"A quarterly earnings call is archived as an audio-only MP3 recording with no transcript available anywhere on the page. Which Success Criterion is most directly violated?",
  "choices":["1.2.1 Audio-only and Video-only (Prerecorded)","1.2.2 Captions (Prerecorded)","1.2.3 Audio Description or Media Alternative (Prerecorded)","2.4.5 Multiple Ways"],"answer":0,
  "explanation":"1.2.1 requires a text alternative for prerecorded audio-only content. A financial earnings call with no transcript denies deaf and hard-of-hearing investors, and anyone unable to listen to audio in their current context, access to material financial information.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Financial Reporting - Earnings Call Archive","learningObjective":"Determine affected users and business risk for the missing transcript","level":"A","principle":"Perceivable","guideline":"Time-based Media","scNumber":"1.2.1","scName":"Audio-only and Video-only (Prerecorded)","id":"FAM-FIN-EARNINGS-Q2","difficulty":"hard","mode":"challenge",
  "question":"Beyond deaf and hard-of-hearing investors, what additional real-world consequence does a missing earnings call transcript carry for a publicly traded company?",
  "choices":[
    "It also disadvantages any investor, analyst, or journalist who needs to quickly search, quote, or reference specific statements for research or reporting purposes, and can carry investor-relations risk if material information is less accessible to some market participants than others",
    "No additional consequence exists beyond the direct accessibility impact",
    "This only matters for companies with fewer than 100 employees",
    "Transcripts are purely a convenience feature with no business relevance"
  ],"answer":0,
  "explanation":"A transcript serves purposes well beyond accessibility alone (searchability, quotability, faster analyst research), and its absence compounds both a direct accessibility barrier and a broader information-equity consideration relevant to investor relations.","questionType":"User Impact" },
{ "domain":"domain1","lesson":"Perceivable: Financial Reporting - Earnings Call Archive","learningObjective":"Identify the violated Success Criterion for a video presentation's missing audio description","level":"A","principle":"Perceivable","guideline":"Time-based Media","scNumber":"1.2.5","scName":"Audio Description (Prerecorded)","id":"FAM-FIN-EARNINGS-Q3","difficulty":"medium","mode":"practice",
  "question":"A recorded video presentation of the CFO walking through slides showing charts and figures has accurate captions for spoken narration, but no audio description track, meaning any chart data referenced only visually (a slide shown on screen with no verbal reading of its exact numbers) is unavailable to blind investors. Which Success Criterion is most directly violated?",
  "choices":["1.2.5 Audio Description (Prerecorded)","1.2.2 Captions (Prerecorded)","1.1.1 Non-Text Content","2.4.6 Headings and Labels"],"answer":0,
  "explanation":"1.2.5 requires audio description for prerecorded video content, providing narration of visually-conveyed information not already covered by the existing dialogue. Captions cover the audio channel; audio description is needed specifically for visual-only information like an on-screen chart never read aloud.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Financial Reporting - Terminology & Disclosures","learningObjective":"Identify the violated Success Criterion for unexplained financial jargon","level":"AAA","principle":"Understandable","guideline":"Readable","scNumber":"3.1.3","scName":"Unusual Words","id":"FAM-FIN-TERM-Q1","difficulty":"medium","mode":"practice",
  "question":"A quarterly report repeatedly uses terms like 'EBITDA', 'goodwill impairment', and 'diluted earnings per share' with no glossary, tooltip, or first-use definition anywhere in the document. Which Success Criterion is most relevant, and at what level?",
  "choices":["3.1.3 Unusual Words, Level AAA", "3.1.5 Reading Level, Level AAA", "1.3.1 Info and Relationships, Level A", "2.4.6 Headings and Labels, Level AA"],"answer":0,
  "explanation":"3.1.3 requires a mechanism for identifying the meaning of words used in a specialized way, which specifically covers technical financial terminology like this. A linked glossary or first-use definition is the standard way organizations satisfy this AAA-level criterion for dense, jargon-heavy content.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Financial Reporting - Terminology & Disclosures","learningObjective":"Identify the violated Success Criterion for unexpanded abbreviations","level":"AAA","principle":"Understandable","guideline":"Readable","scNumber":"3.1.4","scName":"Abbreviations","id":"FAM-FIN-TERM-Q2","difficulty":"medium","mode":"practice",
  "question":"The report uses 'YoY', 'QoQ', and 'GAAP' throughout without ever spelling out what any of them stand for on first use. Which Success Criterion is most directly relevant?",
  "choices":["3.1.4 Abbreviations","3.1.3 Unusual Words","1.4.5 Images of Text","2.4.4 Link Purpose (In Context)"],"answer":0,
  "explanation":"3.1.4 requires a mechanism for identifying the expanded form of abbreviations, distinct from 3.1.3's broader unusual-terminology concern. Spelling out 'Year over Year' on first use, then using 'YoY' afterward, is the standard technique.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Financial Reporting - Terminology & Disclosures","learningObjective":"Recommend a remediation plan addressing both terminology findings together","level":"AAA","principle":"Understandable","guideline":"Readable","scNumber":"3.1.3","scName":"Unusual Words","id":"FAM-FIN-TERM-Q3","difficulty":"hard","mode":"challenge",
  "question":"What is the most efficient remediation covering both the unexplained jargon (3.1.3) and unexpanded abbreviations (3.1.4) together?",
  "choices":[
    "Build a single linked financial glossary covering both full technical terms and abbreviations, and link each term's or abbreviation's first meaningful use per document to the relevant glossary entry",
    "Remove all financial terminology and abbreviations entirely, replacing them with only plain conversational language",
    "Add a single disclaimer at the top of the report stating that some terms may be unfamiliar",
    "Address only 3.1.4, since abbreviations are more common than unusual terminology in financial documents"
  ],"answer":0,
  "explanation":"A single shared glossary resource, linked from first use throughout every report, efficiently addresses both criteria together and is reusable across every future quarterly report without rebuilding the reference material each time.","questionType":"Remediation Planning" },
{ "domain":"domain2","lesson":"Operable: Financial Reporting - Interactive Charts","learningObjective":"Identify the violated Success Criterion for a chart tooltip triggered on initial touch","level":"A","principle":"Operable","guideline":"Input Modalities","scNumber":"2.5.2","scName":"Pointer Cancellation","id":"FAM-FIN-CHART-Q1","difficulty":"hard","mode":"challenge",
  "question":"An interactive revenue chart on a touchscreen device navigates to a detailed breakdown page the instant a data point is touched, with no opportunity to cancel by sliding away before lifting the finger, unlike the chart's own hover-preview behavior on desktop which only shows a tooltip without navigating. Which Success Criterion is most directly violated on the touchscreen version?",
  "choices":["2.5.2 Pointer Cancellation","2.5.1 Pointer Gestures","1.4.13 Content on Hover or Focus","2.1.1 Keyboard"],"answer":0,
  "explanation":"2.5.2 requires that single-pointer actions complete on release, not on initial touch, so users can abort by moving away before lifting their finger. Navigating away instantly on touch-down removes this opportunity to cancel an accidental tap.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Financial Reporting - Interactive Charts","learningObjective":"Recommend an appropriate remediation strategy","level":"A","principle":"Operable","guideline":"Input Modalities","scNumber":"2.5.2","scName":"Pointer Cancellation","id":"FAM-FIN-CHART-Q2","difficulty":"medium","mode":"practice",
  "question":"What is the most appropriate remediation for the chart's touch-triggered-on-contact navigation?",
  "choices":[
    "Change the interaction to trigger navigation on touch release rather than initial contact, matching standard button behavior and allowing users to slide away to cancel before lifting their finger",
    "Remove touch interaction from the chart entirely, making it desktop-only",
    "Add a confirmation dialog before every single data point navigation",
    "Increase the size of each data point with no change to the activation timing"
  ],"answer":0,
  "explanation":"Switching to release-based activation directly satisfies 2.5.2 and matches how standard, accessible touch interfaces already behave, without removing the chart's touch functionality or adding friction for every interaction.","questionType":"Remediation Planning" },
{ "domain":"domain2","lesson":"Operable: Financial Reporting - Report Navigation","learningObjective":"Identify the violated Success Criterion for a 200-page annual report with no navigation aid","level":"AA","principle":"Operable","guideline":"Navigable","scNumber":"2.4.5","scName":"Multiple Ways","id":"FAM-FIN-NAV-Q1","difficulty":"medium","mode":"practice",
  "question":"A 200-page annual report is published as one long HTML page with no table of contents, no section jump-links, and no search function - the only way to find a specific section is scrolling linearly through the entire document. Which Success Criterion is most directly violated?",
  "choices":["2.4.5 Multiple Ways","2.4.1 Bypass Blocks","2.4.10 Section Headings","2.4.8 Location"],"answer":0,
  "explanation":"2.4.5 requires more than one way to locate content within a set of pages (or, by extension, within a single very long document functioning like one). No table of contents, jump-links, or search on a 200-page document fails this requirement significantly.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Financial Reporting - Report Navigation","learningObjective":"Identify the violated Success Criterion for a missing 'you are here' indicator","level":"AAA","principle":"Operable","guideline":"Navigable","scNumber":"2.4.8","scName":"Location","id":"FAM-FIN-NAV-Q2","difficulty":"medium","mode":"practice",
  "question":"After adding a table of contents, testing shows that once a user jumps to a specific section (e.g., 'Risk Factors'), there is no indication anywhere on that section's view of where it sits within the overall document structure - no breadcrumb, no highlighted table-of-contents entry, nothing. Which Success Criterion does this address, and at what level?",
  "choices":["2.4.8 Location, Level AAA","2.4.5 Multiple Ways, Level AA","2.4.1 Bypass Blocks, Level A","3.2.3 Consistent Navigation, Level AA"],"answer":0,
  "explanation":"2.4.8 requires information about the user's location within a set of pages be available, commonly through breadcrumbs or a highlighted current-section indicator. This is a separate, AAA-level enhancement on top of 2.4.5's more basic multiple-ways requirement.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Financial Reporting - Report Navigation","learningObjective":"Determine implementation priority between the two navigation findings","level":"AA","principle":"Operable","guideline":"Navigable","scNumber":"2.4.5","scName":"Multiple Ways","id":"FAM-FIN-NAV-Q3","difficulty":"hard","mode":"challenge",
  "question":"Given limited development time, which of the two report-navigation findings (missing table of contents/search, or missing location indicator) should be prioritized first, and why?",
  "choices":[
    "The missing table of contents and search (2.4.5) - it is a Level AA baseline requirement addressing a complete absence of navigation aids, while the location indicator (2.4.8) is a Level AAA enhancement that only becomes relevant once basic navigation aids already exist to navigate from",
    "The location indicator (2.4.8) - AAA criteria are always higher priority than AA criteria",
    "Both are equally urgent and cannot be sequenced",
    "Neither is a real priority since the underlying content is still technically present on the page"
  ],"answer":0,
  "explanation":"The Level AA finding addresses a more foundational, currently completely absent capability (any way to jump around a 200-page document), while the Level AAA finding is a genuine but secondary enhancement to a navigation system that does not yet exist - building the foundation first is the more defensible sequencing regardless of the general AA-before-AAA convention, which happens to align here anyway.","questionType":"Prioritization" }
];
window.WCAG_LAB_FAMILY_FINANCIAL = WCAG_LAB_FAMILY_FINANCIAL;

/* Scenario Family: Document Management Platform - Document Viewer, File Listing, Version History,
   Sharing & Permissions. Deliberately targets Baseline-tier Success Criteria: 1.4.4, 1.4.5, 1.4.9,
   1.3.6, 2.4.9, 2.4.10, 2.5.6. */
var WCAG_LAB_FAMILY_DOCMGMT = [

{ "domain":"domain1","lesson":"Perceivable: Document Management - Document Viewer","learningObjective":"Identify the violated Success Criterion for a viewer with no text resize support","level":"AA","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.4","scName":"Resize Text","id":"FAM-DOC-VIEWER-Q1","difficulty":"medium","mode":"practice",
  "question":"The in-browser document viewer renders pages as fixed-size raster images; using the browser's zoom function enlarges the surrounding page chrome but the document image itself becomes pixelated and blurry rather than reflowing as sharp, readable text at 200% zoom. Which Success Criterion is most directly violated?",
  "choices":["1.4.4 Resize Text","1.4.10 Reflow","1.4.8 Visual Presentation","2.5.8 Target Size (Minimum)"],"answer":0,
  "explanation":"1.4.4 requires text be resizable up to 200% without loss of content or functionality, using standard browser zoom, without requiring assistive technology. Rendering document pages as fixed raster images defeats this, since 'zooming' just enlarges an already-fixed-resolution image rather than genuinely resizing the underlying text.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Document Management - File Listing","learningObjective":"Identify the violated Success Criterion for a file-type badge rendered as an image of text","level":"AA","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.5","scName":"Images of Text","id":"FAM-DOC-LIST-Q1","difficulty":"medium","mode":"practice",
  "question":"Each file in the document list has a small badge showing its file type ('PDF', 'DOCX', 'XLSX') rendered as a graphic with the letters baked into the image rather than as real, styleable text, with no functional or essential reason requiring an image specifically. Which Success Criterion is most directly violated?",
  "choices":["1.4.5 Images of Text","1.1.1 Non-Text Content","1.4.3 Contrast (Minimum)","2.4.6 Headings and Labels"],"answer":0,
  "explanation":"1.4.5 requires that text be used to convey information rather than images of text, except where the specific visual presentation is essential (such as a logo) or customizable. A file-type badge with no essential visual-presentation reason to be an image fails this requirement, in addition to whatever text alternative it may or may not have under 1.1.1.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Document Management - File Listing","learningObjective":"Determine whether the same finding also applies at the stricter AAA level","level":"AAA","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.9","scName":"Images of Text (No Exception)","id":"FAM-DOC-LIST-Q2","difficulty":"hard","mode":"challenge",
  "question":"If an organization is targeting full AAA conformance, does fixing the file-type badge to use real text (satisfying 1.4.5) automatically also satisfy 1.4.9?",
  "choices":[
    "Yes, in this specific case - since the badge had no essential visual-presentation reason to be an image in the first place, converting it to real text satisfies both 1.4.5's AA-level exception-based requirement and 1.4.9's stricter AAA-level requirement, which removes even the 'customizable' exception 1.4.5 allows, leaving only logos and similarly essential cases exempt",
    "No, 1.4.9 can never be satisfied by any fix, since it requires removing all images from a page entirely",
    "No, 1.4.9 only applies to headings, never to small UI badges",
    "This cannot be determined without knowing the exact pixel dimensions of the original badge image"
  ],"answer":0,
  "explanation":"Since this particular image had no essential presentational reason to exist as an image, replacing it with real text satisfies both the AA and the stricter AAA standard at once - a good example of how, for content with no genuine exception justification, the AAA-level fix is often no more work than the AA-level one.","questionType":"Application" },
{ "domain":"domain1","lesson":"Understandable: Document Management - File Listing","learningObjective":"Identify the violated Success Criterion for ambiguous sort/filter icon purpose","level":"A","principle":"Perceivable","guideline":"Adaptable","scNumber":"1.3.6","scName":"Identify Purpose","id":"FAM-DOC-LIST-Q3","difficulty":"medium","mode":"practice",
  "question":"The file listing's toolbar has icon-only buttons for sort, filter, and grid/list view toggle, with no landmark regions distinguishing the toolbar from the file list itself, and the icons carry no programmatically identifiable purpose beyond a generic accessible name like 'button 1', 'button 2'. Which Success Criterion is most directly relevant, and at what level?",
  "choices":["1.3.6 Identify Purpose, Level AAA","4.1.2 Name, Role, Value, Level A","2.4.6 Headings and Labels, Level AA","1.1.1 Non-Text Content, Level A"],"answer":0,
  "explanation":"1.3.6 (Level AAA) addresses programmatically identifiable purpose for UI components and icons beyond the standard form-field types covered elsewhere, useful for personalization and symbol-substitution tools. Note that generic accessible names like 'button 1' would also separately fail the more foundational 4.1.2 (Level A) - a real-world instance of this component likely needs both fixed, with 4.1.2 being the more urgent baseline requirement.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Document Management - Version History","learningObjective":"Identify the violated Success Criterion for ambiguous 'Restore' links","level":"A","principle":"Operable","guideline":"Navigable","scNumber":"2.4.9","scName":"Link Purpose (Link Only)","id":"FAM-DOC-VERSION-Q1","difficulty":"hard","mode":"challenge",
  "question":"The version history panel lists five prior versions of a document, each with a 'Restore' link; a screen reader user navigating the page's links list in isolation hears 'Restore' five times with no way to distinguish which version each one would restore. Testing confirms context from the surrounding row (the version date and author) IS programmatically associated via 2.4.4's requirements. Given that, does this specific finding also fail 2.4.9, the stricter link-only standard?",
  "choices":[
    "Yes - even though 2.4.4 (link purpose in context) is satisfied by the programmatic association with surrounding row context, 2.4.9 is a stricter, AAA-level standard requiring the purpose be determinable from link text ALONE, with no reliance on context; 'Restore' alone does not meet that stricter bar even if 2.4.4 is satisfied",
    "No - if 2.4.4 is satisfied, 2.4.9 is automatically satisfied too, since they are the same requirement at different levels",
    "No - 2.4.9 only applies to navigation menus, never to action links within a data table",
    "This cannot be evaluated without knowing how many total versions exist"
  ],"answer":0,
  "explanation":"This tests a genuinely important distinction: 2.4.4 (Level A) allows context to supply meaning, while 2.4.9 (Level AAA) requires the link text alone, without any surrounding context, to convey purpose - a stricter bar that identical link text like 'Restore' repeated five times cannot meet even when correctly associated with context that satisfies the more lenient standard.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Document Management - Version History","learningObjective":"Recommend a remediation satisfying the stricter link-only standard","level":"A","principle":"Operable","guideline":"Navigable","scNumber":"2.4.9","scName":"Link Purpose (Link Only)","id":"FAM-DOC-VERSION-Q2","difficulty":"medium","mode":"practice",
  "question":"What remediation would satisfy 2.4.9's stricter, link-text-alone standard for the version history 'Restore' links?",
  "choices":[
    "Expand each link's accessible name to include the distinguishing detail directly, such as 'Restore version from March 14, 2:30 PM' rather than just 'Restore'",
    "Remove the word 'Restore' entirely and rely only on the surrounding row context",
    "Add a tooltip that only appears on mouse hover with no change to the link's accessible name",
    "Convert all the links into a single dropdown with no individual links at all"
  ],"answer":0,
  "explanation":"Expanding each link's own accessible name to include the distinguishing version details satisfies 2.4.9's requirement that purpose be clear from the link text alone, without needing to rely on any surrounding context, unlike a tooltip which does not change the link's own accessible name at all.","questionType":"Remediation Planning" },
{ "domain":"domain1","lesson":"Operable: Document Management - Version History","learningObjective":"Identify the violated Success Criterion for a version-history document with no section structure","level":"A","principle":"Perceivable","guideline":"Adaptable","scNumber":"2.4.10","scName":"Section Headings","id":"FAM-DOC-VERSION-Q3","difficulty":"medium","mode":"practice",
  "question":"A long change-log document accompanying a major release has 40 distinct entries spanning six months, formatted as one continuous, unbroken block of text with no heading structure separating entries by month or category. Which Success Criterion is most directly violated?",
  "choices":["2.4.10 Section Headings","2.4.6 Headings and Labels","1.3.2 Meaningful Sequence","2.4.1 Bypass Blocks"],"answer":0,
  "explanation":"2.4.10 requires section headings be used to organize content when it is genuinely long or multi-topic enough to benefit from them. Forty entries spanning six months with no heading breaks at all fails to provide the structural organization this length and complexity of content warrants.","questionType":"Application" },
{ "domain":"domain4","lesson":"Operable: Document Management - Sharing & Permissions","learningObjective":"Identify the violated Success Criterion for a drag-and-drop permission assignment","level":"AA","principle":"Robust","guideline":"Compatible","scNumber":"2.5.6","scName":"Concurrent Input Mechanisms","id":"FAM-DOC-SHARE-Q1","difficulty":"hard","mode":"challenge",
  "question":"The sharing panel detects that a user's device has touch capability and disables keyboard focus on the permission-level dropdown entirely, assuming a touch-only interaction model, even though the same device also has a connected physical keyboard actively in use for other parts of the page. Which Success Criterion is most directly violated?",
  "choices":["2.5.6 Concurrent Input Mechanisms","2.1.1 Keyboard","2.5.1 Pointer Gestures","4.1.2 Name, Role, Value"],"answer":0,
  "explanation":"2.5.6 requires content not restrict available input modalities based on an assumed device type; a user with a connected keyboard on a touch-capable device should still be able to use it. Disabling keyboard focus based on touch-capability detection alone, while a keyboard is actively in use elsewhere on the same page, is exactly the pattern this criterion prohibits.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: Document Management - Sharing & Permissions","learningObjective":"Identify the violated Success Criterion for redundant recipient entry","level":"A","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.7","scName":"Redundant Entry","id":"FAM-DOC-SHARE-Q2","difficulty":"medium","mode":"practice",
  "question":"Sharing a document with a colleague requires entering their email on step 1 to send an invite, then, if the colleague requests edit access instead of view access, the entire sharing flow restarts from step 1 requiring the same email to be re-entered rather than simply changing the permission level of the existing share. Which Success Criterion is most directly violated?",
  "choices":["3.3.7 Redundant Entry","3.3.4 Error Prevention (Legal, Financial, Data)","1.3.1 Info and Relationships","3.3.1 Error Identification"],"answer":0,
  "explanation":"3.3.7 requires previously entered information be carried forward or reusable within the same process. Forcing a complete restart with re-entry of the same email address, just to change a permission level, fails this requirement.","questionType":"Application" }
];
window.WCAG_LAB_FAMILY_DOCMGMT = WCAG_LAB_FAMILY_DOCMGMT;

/* Scenario Family: Collaboration Platform - Live Document Editing, Comment Threads, Presence
   Indicators, Video Call Interface. Deliberately targets Baseline-tier Success Criteria: 2.2.2, 2.3.1,
   2.3.2, 2.3.3, 1.4.13, 3.2.1, 2.5.4. */
var WCAG_LAB_FAMILY_COLLAB = [

{ "domain":"domain2","lesson":"Operable: Collaboration Platform - Live Document Editing","learningObjective":"Identify the violated Success Criterion for auto-scrolling cursor tracking","level":"A","principle":"Operable","guideline":"Enough Time","scNumber":"2.2.2","scName":"Pause, Stop, Hide","id":"FAM-COLLAB-EDIT-Q1","difficulty":"medium","mode":"practice",
  "question":"When a collaborator's cursor moves to a different part of a shared document, the viewport auto-scrolls to follow it, continuously and automatically, with no button or setting to pause or disable this auto-follow behavior. Which Success Criterion is most directly violated?",
  "choices":["2.2.2 Pause, Stop, Hide","2.2.1 Timing Adjustable","2.3.1 Three Flashes or Below Threshold","4.1.3 Status Messages"],"answer":0,
  "explanation":"2.2.2 requires that moving, auto-updating, or auto-scrolling content that starts automatically and lasts more than 5 seconds have a mechanism to pause, stop, or hide it. Continuous, undisableable auto-scroll following another user's cursor fails this requirement, and can be genuinely disorienting for users with cognitive or vestibular conditions.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Collaboration Platform - Live Document Editing","learningObjective":"Recommend an appropriate remediation strategy","level":"A","principle":"Operable","guideline":"Enough Time","scNumber":"2.2.2","scName":"Pause, Stop, Hide","id":"FAM-COLLAB-EDIT-Q2","difficulty":"medium","mode":"practice",
  "question":"What is the most appropriate remediation for the undisableable cursor-following auto-scroll?",
  "choices":[
    "Add a visible, easily discoverable toggle to disable auto-follow, defaulting to a state that respects the user's prior preference, while still showing where collaborators are working through a less intrusive indicator (such as a marker in a scrollbar) when auto-follow is off",
    "Remove collaborative cursor visibility entirely",
    "Make the auto-scroll happen even faster so it is less noticeable",
    "Add a warning message that appears once per session with no way to actually change the behavior"
  ],"answer":0,
  "explanation":"Adding a genuine, persistent toggle directly satisfies 2.2.2's requirement while preserving the collaborative awareness feature's value for users who want it, rather than removing a genuinely useful feature entirely or offering only a token acknowledgment with no actual control.","questionType":"Remediation Planning" },
{ "domain":"domain1","lesson":"Perceivable: Collaboration Platform - Presence Indicators","learningObjective":"Identify the violated Success Criterion for a flashing 'someone is typing' indicator","level":"A","principle":"Perceivable","guideline":"Seizures and Physical Reactions","scNumber":"2.3.1","scName":"Three Flashes or Below Threshold","id":"FAM-COLLAB-PRESENCE-Q1","difficulty":"hard","mode":"challenge",
  "question":"A comment thread's 'someone is typing' indicator flashes brightly on and off four times per second while active. Which Success Criterion is most directly violated?",
  "choices":["2.3.1 Three Flashes or Below Threshold","2.3.2 Three Flashes","2.2.2 Pause, Stop, Hide","1.4.11 Non-text Contrast"],"answer":0,
  "explanation":"2.3.1 prohibits content that flashes more than three times per second, unless the flash is below defined size and contrast thresholds, since this rate can trigger seizures in users with photosensitive epilepsy. Four flashes per second exceeds this threshold and is a genuine safety concern, not merely a usability one.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Collaboration Platform - Presence Indicators","learningObjective":"Assign severity to a photosensitive-safety finding","level":"A","principle":"Perceivable","guideline":"Seizures and Physical Reactions","scNumber":"2.3.1","scName":"Three Flashes or Below Threshold","id":"FAM-COLLAB-PRESENCE-Q2","difficulty":"hard","mode":"challenge",
  "question":"How should the flashing typing indicator be rated, given 2.3.1 findings involve a genuine physical safety risk rather than only a usability or access barrier?",
  "choices":[
    "Critical/Blocking - unlike most accessibility findings, a seizure-risk flash rate represents a potential physical safety hazard, not only reduced usability, which typically places genuine 2.3.1 violations at the highest severity tier regardless of how minor the feature itself seems (a small typing indicator)",
    "Low/Minor - since the indicator is small and only appears briefly, any flash-rate violation on a small element is automatically low severity",
    "Medium/Moderate - flash-rate findings are treated the same as any generic visual inconsistency",
    "Not ratable - flashing content is a design choice outside the scope of severity assessment"
  ],"answer":0,
  "explanation":"2.3.1 is one of the few WCAG criteria addressing genuine physical safety rather than only usability or information access; the small visual size of the offending element does not reduce the real seizure risk for a photosensitive user, which is why flash-rate violations are typically treated at the highest severity regardless of the element's visual footprint.","questionType":"Severity Assessment" },
{ "domain":"domain1","lesson":"Perceivable: Collaboration Platform - Presence Indicators","learningObjective":"Distinguish 2.3.1 from the stricter 2.3.2 for the same finding","level":"AAA","principle":"Perceivable","guideline":"Seizures and Physical Reactions","scNumber":"2.3.2","scName":"Three Flashes","id":"FAM-COLLAB-PRESENCE-Q3","difficulty":"hard","mode":"challenge",
  "question":"If this organization is also targeting AAA conformance, does fixing the typing indicator to flash below the size/contrast threshold defined by 2.3.1 (rather than eliminating the flash rate itself) satisfy 2.3.2 as well?",
  "choices":[
    "No - 2.3.2 removes the size-and-contrast-threshold exception entirely, prohibiting any content from flashing more than three times per second regardless of how small or low-contrast the flash is; only reducing the flash rate itself to three or fewer per second satisfies both criteria together",
    "Yes - meeting the size/contrast exception under 2.3.1 always automatically satisfies 2.3.2 as well",
    "Yes, but only for indicators smaller than a defined pixel size",
    "This cannot be evaluated since 2.3.2 does not exist as an active WCAG success criterion"
  ],"answer":0,
  "explanation":"2.3.2 is stricter than 2.3.1 specifically by removing the size/contrast exception; the only way to satisfy both is reducing the actual flash rate itself to three or fewer per second, which is also simply the safer, more broadly protective fix regardless of which level is being targeted.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Collaboration Platform - Comment Threads","learningObjective":"Identify the violated Success Criterion for a hover-triggered mention preview","level":"AA","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.13","scName":"Content on Hover or Focus","id":"FAM-COLLAB-COMMENT-Q1","difficulty":"hard","mode":"challenge",
  "question":"Hovering over an '@mention' in a comment shows a preview card with that person's role and recent activity; the card disappears the instant the mouse moves even slightly, cannot be dismissed with Escape, and moving the mouse toward the card itself to read more causes it to vanish before the pointer arrives. Which Success Criterion is most directly violated?",
  "choices":["1.4.13 Content on Hover or Focus","2.5.3 Label in Name","2.4.7 Focus Visible","4.1.2 Name, Role, Value"],"answer":0,
  "explanation":"1.4.13 requires that hover/focus-triggered content be dismissible (without moving pointer/focus, e.g. via Escape), hoverable (the pointer can move onto the new content without it disappearing), and persistent until dismissed or no longer relevant. A preview that vanishes on the slightest movement and cannot be dismissed with Escape fails at least two of these three requirements.","questionType":"Application" },
{ "domain":"domain1","lesson":"Perceivable: Collaboration Platform - Comment Threads","learningObjective":"Recommend a remediation addressing all three 1.4.13 sub-requirements","level":"AA","principle":"Perceivable","guideline":"Distinguishable","scNumber":"1.4.13","scName":"Content on Hover or Focus","id":"FAM-COLLAB-COMMENT-Q2","difficulty":"medium","mode":"practice",
  "question":"What remediation addresses 1.4.13's dismissible, hoverable, and persistent requirements together for the mention preview card?",
  "choices":[
    "Add Escape-key dismissal, keep the card visible while the pointer moves toward and over it (not just over the original mention), and keep it visible until the user moves away entirely or explicitly dismisses it",
    "Remove the hover preview feature entirely",
    "Make the card appear instantly with no hover delay, with no other change",
    "Only add Escape-key dismissal, leaving the disappearing-on-movement behavior unchanged"
  ],"answer":0,
  "explanation":"All three of 1.4.13's requirements need to be satisfied together: dismissible (Escape), hoverable (pointer can reach the new content without it vanishing), and persistent (stays until genuinely dismissed) - a partial fix addressing only one of the three still leaves the criterion failing.","questionType":"Remediation Planning" },
{ "domain":"domain3","lesson":"Understandable: Collaboration Platform - Comment Threads","learningObjective":"Identify the violated Success Criterion for a comment box that submits on focus loss","level":"A","principle":"Understandable","guideline":"Predictable","scNumber":"3.2.1","scName":"On Focus","id":"FAM-COLLAB-COMMENT-Q3","difficulty":"hard","mode":"challenge",
  "question":"A comment composer automatically submits and posts the comment the instant the text field loses focus (such as when Tab moves to the next element), with no explicit 'Post' action required or possible to avoid this. Which Success Criterion is most directly violated?",
  "choices":["3.2.1 On Focus","3.2.2 On Input","3.3.4 Error Prevention (Legal, Financial, Data)","2.4.3 Focus Order"],"answer":0,
  "explanation":"3.2.1 requires that a component receiving or losing focus does not automatically trigger a substantial change of context. Auto-submitting a comment on focus loss (such as a keyboard user simply tabbing away, not intending to submit) is exactly this kind of unexpected, focus-triggered context change.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: Collaboration Platform - Video Call Interface","learningObjective":"Identify the violated Success Criterion for a shake-to-react feature","level":"A","principle":"Operable","guideline":"Input Modalities","scNumber":"2.5.4","scName":"Motion Actuation","id":"FAM-COLLAB-VIDEO-Q1","difficulty":"hard","mode":"challenge",
  "question":"The mobile video call app lets users send a 'thumbs up' reaction by shaking their device, with no on-screen button offering the same reaction and no setting to disable the motion trigger. Which Success Criterion is most directly violated?",
  "choices":["2.5.4 Motion Actuation","2.5.1 Pointer Gestures","2.1.1 Keyboard","2.3.1 Three Flashes or Below Threshold"],"answer":0,
  "explanation":"2.5.4 requires that motion-triggered functionality also be operable through a standard UI component, and that the motion trigger can be disabled, unless motion is essential. A shake-only reaction with no on-screen alternative and no disable option fails this requirement, and is inoperable for users who cannot physically shake their device or have it mounted.","questionType":"Application" }
];
window.WCAG_LAB_FAMILY_COLLAB = WCAG_LAB_FAMILY_COLLAB;

/* Scenario Family: Human Resources Portal - Time-Off Request, Employee Directory, Onboarding Checklist.
   Deliberately targets Baseline-tier Success Criteria: 2.4.2, 2.4.3, 2.4.7, 3.2.5, 3.3.5, 3.3.6, 2.5.5. */
var WCAG_LAB_FAMILY_HR = [

{ "domain":"domain2","lesson":"Operable: HR Portal - Time-Off Request","learningObjective":"Identify the violated Success Criterion for identical browser tab titles","level":"A","principle":"Operable","guideline":"Navigable","scNumber":"2.4.2","scName":"Page Titled","id":"FAM-HR-TIMEOFF-Q1","difficulty":"medium","mode":"practice",
  "question":"Every page within the HR portal, including 'Request Time Off', 'View Pay Stubs', and 'Update Benefits', shows the identical browser tab title 'HR Portal' with no page-specific distinction. Which Success Criterion is most directly violated?",
  "choices":["2.4.2 Page Titled","2.4.8 Location","3.2.3 Consistent Navigation","2.4.6 Headings and Labels"],"answer":0,
  "explanation":"2.4.2 requires pages have titles describing their specific topic or purpose. An identical generic title across every distinct page fails this requirement, particularly disruptive for screen reader users who rely on the announced title to confirm they landed on the correct page after navigation, and for anyone managing multiple open tabs.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: HR Portal - Time-Off Request","learningObjective":"Identify the violated Success Criterion for illogical focus order after a dynamic date-range field appears","level":"A","principle":"Operable","guideline":"Navigable","scNumber":"2.4.3","scName":"Focus Order","id":"FAM-HR-TIMEOFF-Q2","difficulty":"hard","mode":"challenge",
  "question":"Selecting 'Multi-day request' on the time-off form dynamically inserts a new 'End Date' field visually between the existing 'Start Date' and 'Reason' fields, but in the underlying tab order, the new field is appended at the very end of the form, after 'Submit' - so tabbing from Start Date goes to Reason, skipping End Date until after Submit. Which Success Criterion is most directly violated?",
  "choices":["2.4.3 Focus Order","2.4.6 Headings and Labels","3.2.2 On Input","1.3.2 Meaningful Sequence"],"answer":0,
  "explanation":"2.4.3 requires that focus order preserves meaning and operability, including when content changes dynamically. A newly-inserted field appearing visually in one place but tab-ordered somewhere entirely different creates a confusing, illogical navigation sequence for keyboard users.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: HR Portal - Time-Off Request","learningObjective":"Identify the violated Success Criterion for a submit button with no visible focus indicator","level":"AA","principle":"Operable","guideline":"Navigable","scNumber":"2.4.7","scName":"Focus Visible","id":"FAM-HR-TIMEOFF-Q3","difficulty":"medium","mode":"practice",
  "question":"The time-off form's 'Submit Request' button has its default focus outline removed via CSS with no replacement style, making it visually indistinguishable whether the button currently has keyboard focus. Which Success Criterion is most directly violated?",
  "choices":["2.4.7 Focus Visible","2.4.3 Focus Order","1.4.11 Non-text Contrast","2.1.1 Keyboard"],"answer":0,
  "explanation":"2.4.7 requires that any keyboard-operable interface have a visible indicator of keyboard focus. A submit button with no visible focus state leaves a sighted keyboard user unable to confirm whether pressing Enter will actually submit the form.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: HR Portal - Time-Off Request","learningObjective":"Identify the violated Success Criterion for an automatic recalculation with no user-initiated control","level":"AAA","principle":"Understandable","guideline":"Predictable","scNumber":"3.2.5","scName":"Change on Request","id":"FAM-HR-TIMEOFF-Q4","difficulty":"hard","mode":"challenge",
  "question":"Changing the requested date range automatically and immediately recalculates the employee's remaining PTO balance shown elsewhere on the page, with no setting to disable this automatic recalculation and require an explicit 'Recalculate' action instead. If an organization is targeting full AAA conformance, is this a 3.2.5 concern?",
  "choices":[
    "Potentially yes, at the stricter AAA level - 3.2.5 requires changes of context be initiated only by user request, or that an option exists to disable automatic changes, even when the change itself is a logical, expected consequence of input (which would already satisfy the more lenient Level A/AA criteria on this exact scenario); this is a case where a change that is perfectly fine under 3.2.2 could still be flagged at the stricter AAA standard",
    "No - since the recalculation is a logical, expected consequence of changing dates, it can never be a 3.2.5 concern at any level",
    "Yes, but only under 3.2.2, since 3.2.5 does not apply to numeric recalculations",
    "This cannot be evaluated since PTO balances are not covered by WCAG"
  ],"answer":0,
  "explanation":"This tests recognizing that a criterion satisfying the more lenient Level A/AA bar (3.2.2, since the change is a logical, expected consequence of direct input) does not automatically mean the stricter Level AAA bar (3.2.5) is also satisfied - 3.2.5 requires user-initiated control or an explicit disable option even for expected changes, a meaningfully higher standard.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: HR Portal - Employee Directory","learningObjective":"Identify the violated Success Criterion for a directory search with no contextual help","level":"AAA","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.5","scName":"Help","id":"FAM-HR-DIRECTORY-Q1","difficulty":"medium","mode":"practice",
  "question":"The employee directory's advanced search supports specific query syntax (e.g., 'dept:engineering AND title:manager') with no help text, examples, or documentation link anywhere near the search field explaining this syntax. Which Success Criterion is most relevant, and at what level?",
  "choices":["3.3.5 Help, Level AAA","3.3.2 Labels or Instructions, Level A","3.3.3 Error Suggestion, Level AA","2.4.6 Headings and Labels, Level AA"],"answer":0,
  "explanation":"3.3.5 requires context-sensitive help be available for content requiring user input, particularly relevant here given the search syntax is genuinely non-obvious and specialized. A brief 'Search tips' link or expandable example near the field would satisfy this AAA-level criterion.","questionType":"Application" },
{ "domain":"domain3","lesson":"Understandable: HR Portal - Onboarding Checklist","learningObjective":"Identify the violated Success Criterion for a checklist with no confirmation before marking a step complete","level":"AAA","principle":"Understandable","guideline":"Input Assistance","scNumber":"3.3.6","scName":"Error Prevention (All)","id":"FAM-HR-ONBOARD-Q1","difficulty":"hard","mode":"challenge",
  "question":"The new-hire onboarding checklist lets a manager mark any step 'Complete' with a single click and no undo, confirmation, or correction opportunity, even for low-stakes steps like 'Reviewed welcome email'. If the organization targets full AAA conformance across the whole portal (not just its financial/legal forms), does this checklist need the same kind of safeguard 3.3.4 requires for financial transactions?",
  "choices":[
    "Yes, under 3.3.6 specifically - this AAA-level criterion extends 3.3.4's safeguard principle (reversibility, checking, or confirmation) to essentially all forms sitewide, not only the narrower legal/financial/data-deletion categories 3.3.4 targets",
    "No - 3.3.4 already covers this and no additional criterion applies at any level",
    "No - low-stakes checklist items are always exempt from any error-prevention requirement regardless of conformance target",
    "Yes, but only under 3.3.1, which requires all actions to be reversible"
  ],"answer":0,
  "explanation":"3.3.6 is precisely the criterion for this situation: an organization targeting comprehensive AAA conformance needs safeguards on essentially all forms, not only the narrower high-stakes categories 3.3.4 (Level A) specifically names, even for a seemingly low-stakes onboarding checklist step.","questionType":"Application" },
{ "domain":"domain2","lesson":"Operable: HR Portal - Onboarding Checklist","learningObjective":"Identify the violated Success Criterion for small checklist checkboxes on mobile","level":"AAA","principle":"Operable","guideline":"Input Modalities","scNumber":"2.5.5","scName":"Target Size (Enhanced)","id":"FAM-HR-ONBOARD-Q2","difficulty":"medium","mode":"practice",
  "question":"On the mobile onboarding app, each checklist item's checkbox is 20 by 20 CSS pixels with 6 pixels of spacing - satisfying the Level AA 24-pixel minimum's spacing exception, but well short of the Level AAA 44-pixel target. For an organization targeting full AAA conformance, what does this mean for the checkboxes?",
  "choices":[
    "They likely satisfy 2.5.8 (Level AA) via the spacing exception, but still fail 2.5.5 (Level AAA), which sets a stricter 44-by-44 pixel minimum with a narrower set of exceptions; achieving full AAA conformance would require enlarging the checkboxes themselves, not just relying on spacing",
    "They automatically satisfy both 2.5.8 and 2.5.5 identically, since the two criteria use the same threshold",
    "They fail both 2.5.8 and 2.5.5 equally, since 20 pixels is below both thresholds regardless of spacing",
    "Target size criteria do not apply to checkboxes, only to buttons"
  ],"answer":0,
  "explanation":"This tests understanding that 2.5.5 and 2.5.8 are related but distinct thresholds with different exception scopes; satisfying the more lenient AA-level spacing exception does not carry over to automatically satisfy the stricter, less exception-flexible AAA standard.","questionType":"Application" }
];
window.WCAG_LAB_FAMILY_HR = WCAG_LAB_FAMILY_HR;

(function () {
  var additions = [].concat(
    window.WCAG_LAB_FAMILY_FINANCIAL || [],
    window.WCAG_LAB_FAMILY_DOCMGMT || [],
    window.WCAG_LAB_FAMILY_COLLAB || [],
    window.WCAG_LAB_FAMILY_HR || []
  );
  if (window.WCAG_LAB_DATA && Array.isArray(window.WCAG_LAB_DATA.questions)) {
    window.WCAG_LAB_DATA.questions = window.WCAG_LAB_DATA.questions.concat(additions);
  }
}());
