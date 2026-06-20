/* BEGIN ANCHOR (OPEN_DOOR_ACCESSIBILITY_LAB_APP_V13) */
(function () {
    "use strict";

    var SCENARIO_BANK = {
    "1.1.1": {
        basicScenario: "A screen reader user reaches an image button that is only announced as graphic. The user cannot tell what the control does. Which Success Criterion is most directly applicable?",
        auditScenario: "During a JAWS test of a checkout page, several product images and icon-only buttons are announced without meaningful text alternatives. The user cannot determine the purpose of the images or controls without sight. Which Success Criterion is most directly applicable?",
        challengeScenario: "An icon-only button has no accessible name. The issue may involve non-text content and also name, role, value. Which Success Criterion should be considered the strongest primary issue when the main failure is that the graphic control has no text alternative?"
    },
    "1.2.1": {
        basicScenario: "A prerecorded audio-only announcement is posted on a website, but there is no transcript or equivalent alternative. Which Success Criterion is most directly applicable?",
        auditScenario: "A training site provides a prerecorded audio message from leadership. Learners who are deaf or cannot use audio have no text alternative that presents the same information. Which Success Criterion is most directly applicable?",
        challengeScenario: "A prerecorded audio-only file contains required course information. Captions are not relevant because there is no video, but an equivalent alternative is missing. Which Success Criterion should be cited?"
    },
    "1.2.2": {
        basicScenario: "A prerecorded training video includes spoken instructions, but no captions are available. Which Success Criterion is most directly applicable?",
        auditScenario: "A learning module contains prerecorded video with dialogue and important audio instructions. Learners who rely on captions cannot access the spoken information because captions are missing. Which Success Criterion is most directly applicable?",
        challengeScenario: "A prerecorded video has audio dialogue but no synchronized captions. Audio description is a different requirement, but the immediate failure is lack of captions for spoken audio. Which Success Criterion applies?"
    },
    "1.2.3": {
        basicScenario: "A prerecorded video shows important visual actions, but there is no audio description or media alternative explaining them. Which Success Criterion is most directly applicable?",
        auditScenario: "A software demo video shows a sequence of visual steps that are not described in the narration. Blind learners cannot understand the demonstrated actions, and no text alternative is provided. Which Success Criterion is most directly applicable?",
        challengeScenario: "A prerecorded video contains visual information needed to understand the content. Captions exist, but they do not explain the visual actions. Which Success Criterion should be considered?"
    },
    "1.2.4": {
        basicScenario: "A live webinar includes spoken content, but live captions are not provided. Which Success Criterion is most directly applicable?",
        auditScenario: "A live company training session is streamed to employees. People who need captions cannot access the spoken information because no live captioning is available. Which Success Criterion is most directly applicable?",
        challengeScenario: "A live video event has audio content but no captions. The content is not prerecorded, so prerecorded caption requirements do not apply. Which Success Criterion applies?"
    },
    "1.2.5": {
        basicScenario: "A prerecorded video includes important visual information, but no audio description is provided. Which Success Criterion is most directly applicable?",
        auditScenario: "A prerecorded safety video shows hazards and emergency exits visually, but the narration does not describe them and no audio description track is available. Which Success Criterion is most directly applicable?",
        challengeScenario: "A prerecorded video already has captions, but blind users still miss important visual information. Which Success Criterion focuses on providing audio description?"
    },
    "1.2.6": {
        basicScenario: "A prerecorded video with spoken content has captions but no sign language interpretation. Which Success Criterion is most directly applicable?",
        auditScenario: "A public training video includes spoken instructions and captions, but no sign language interpretation is provided for users who require it. Which Success Criterion is most directly applicable?",
        challengeScenario: "A prerecorded video includes captions, but the test is focused on whether sign language interpretation is provided. Which Success Criterion applies?"
    },
    "1.2.7": {
        basicScenario: "A prerecorded video has important visual information, and normal pauses are too short for audio description to explain it. Which Success Criterion is most directly applicable?",
        auditScenario: "A complex instructional video shows detailed visual steps with almost no pauses in the audio track. Standard audio description cannot fit without pausing the video, and extended audio description is not provided. Which Success Criterion is most directly applicable?",
        challengeScenario: "Audio description is needed, but the timing of the video does not allow the description to fit naturally. Which Success Criterion covers extended audio description?"
    },
    "1.2.8": {
        basicScenario: "A prerecorded video has no full text alternative that provides all the information from the media. Which Success Criterion is most directly applicable?",
        auditScenario: "A recorded training video includes audio, visual demonstrations, and on-screen text, but no complete media alternative is provided for users who need a full text version. Which Success Criterion is most directly applicable?",
        challengeScenario: "A video includes captions and some description, but the requirement being tested is whether a complete alternative for time-based media is available. Which Success Criterion applies?"
    },
    "1.2.9": {
        basicScenario: "A live audio-only broadcast provides required information, but no text alternative is available. Which Success Criterion is most directly applicable?",
        auditScenario: "A live audio-only town hall is streamed on a website. Users who cannot access the audio have no text alternative or equivalent live text information. Which Success Criterion is most directly applicable?",
        challengeScenario: "The content is live and audio-only, not prerecorded. Which Success Criterion covers an alternative for live audio-only content?"
    },
    "1.3.1": {
        basicScenario: "A page visually shows headings, labels, and grouped information, but the screen reader does not announce those relationships. Which Success Criterion is most directly applicable?",
        auditScenario: "During JAWS testing, a form appears visually organized into sections, but the fields are not programmatically associated with their labels or groups. The structure conveyed visually is not available to screen reader users. Which Success Criterion is most directly applicable?",
        challengeScenario: "A form visually communicates relationships between labels and fields, but those relationships are not programmatically available. The issue may overlap with labels or name, role, value. Which Success Criterion is strongest when the main failure is missing programmatic structure?"
    },
    "1.3.2": {
        basicScenario: "A screen reader reads page content in an order that changes the meaning of the information. Which Success Criterion is most directly applicable?",
        auditScenario: "A multi-column layout is visually understandable, but JAWS reads the content out of sequence so instructions are announced after the controls they explain. Which Success Criterion is most directly applicable?",
        challengeScenario: "The content exists and is labeled, but the reading order causes users to misunderstand the task. Which Success Criterion focuses on meaningful sequence?"
    },
    "1.3.3": {
        basicScenario: "Instructions say to press the red button on the right, but no non-visual identification is provided. Which Success Criterion is most directly applicable?",
        auditScenario: "A form instruction tells users to select the green option below to continue. Screen reader users do not receive an equivalent way to identify the correct option. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not that color is used visually, but that instructions rely only on visual location and color. Which Success Criterion applies?"
    },
    "1.3.4": {
        basicScenario: "A mobile page only works in landscape orientation even though portrait orientation would not prevent the task. Which Success Criterion is most directly applicable?",
        auditScenario: "A training app locks users into portrait orientation for all lessons, even though the content could function in either orientation. Some users with mounted devices cannot rotate their screen. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not responsive layout size, but a restriction to one screen orientation without an essential reason. Which Success Criterion applies?"
    },
    "1.3.5": {
        basicScenario: "A form asks for common personal information, but the purpose of the input fields cannot be programmatically determined for autofill or assistive technologies. Which Success Criterion is most directly applicable?",
        auditScenario: "A registration form asks for name, email, phone number, and address. The visible labels are present, but the input purpose is not programmatically identified for supported autocomplete purposes. Which Success Criterion is most directly applicable?",
        challengeScenario: "The field has a visible label, so this is not simply a missing label issue. The problem is that the input purpose cannot be programmatically determined. Which Success Criterion applies?"
    },
    "1.3.6": {
        basicScenario: "Icons and interface regions have purposes that cannot be programmatically determined by assistive technology. Which Success Criterion is most directly applicable?",
        auditScenario: "A complex web application uses many custom icons and regions. Their purposes are visually clear, but assistive technologies cannot determine what those interface components are for. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue involves programmatically identifying the purpose of user interface components, icons, and regions beyond basic labels. Which Success Criterion applies?"
    },
    "1.4.1": {
        basicScenario: "A form marks required fields only by using red text, with no other indicator. Which Success Criterion is most directly applicable?",
        auditScenario: "A dashboard uses green numbers for success and red numbers for failure, but no text, icon, or programmatic information provides the same meaning. Which Success Criterion is most directly applicable?",
        challengeScenario: "The problem is not contrast. The problem is that color is the only method used to communicate information. Which Success Criterion applies?"
    },
    "1.4.2": {
        basicScenario: "Audio starts automatically on a page and continues for more than three seconds with no way to pause, stop, or control it separately. Which Success Criterion is most directly applicable?",
        auditScenario: "A homepage loads background audio that plays automatically while a screen reader user is trying to navigate. The audio lasts more than three seconds and there is no accessible pause or volume control. Which Success Criterion is most directly applicable?",
        challengeScenario: "The audio is interfering with screen reader use because it plays automatically for more than three seconds. Which Success Criterion applies?"
    },
    "1.4.3": {
        basicScenario: "Text on a page has insufficient contrast against its background. Which Success Criterion is most directly applicable?",
        auditScenario: "A settings page uses light gray text on a white background for important instructions. The contrast ratio is below the minimum requirement for normal text. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is about visual contrast for text, not non-text controls or focus indicators. Which Success Criterion applies?"
    },
    "1.4.4": {
        basicScenario: "Text cannot be resized up to 200 percent without losing content or functionality. Which Success Criterion is most directly applicable?",
        auditScenario: "When browser zoom or text resizing is increased, form instructions overlap controls and some text becomes clipped. The user cannot complete the task. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not full page reflow at small viewport sizes. It is text resizing up to 200 percent causing loss of content. Which Success Criterion applies?"
    },
    "1.4.5": {
        basicScenario: "Important text is presented as an image even though real text could be used. Which Success Criterion is most directly applicable?",
        auditScenario: "A promotional page presents pricing details inside an image. The text cannot be resized, searched, or customized, and there is no essential reason to use an image of text. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not missing alt text alone. The problem is using an image of text where real text could achieve the same presentation. Which Success Criterion applies?"
    },
    "1.4.6": {
        basicScenario: "Text contrast is below the enhanced contrast requirement for AAA conformance. Which Success Criterion is most directly applicable?",
        auditScenario: "A page meets minimum contrast but does not meet the enhanced contrast ratio required for AAA evaluation. Which Success Criterion is most directly applicable?",
        challengeScenario: "The test is for enhanced contrast rather than minimum AA contrast. Which Success Criterion applies?"
    },
    "1.4.7": {
        basicScenario: "A prerecorded speech recording has background audio that is too loud and cannot be turned off. Which Success Criterion is most directly applicable?",
        auditScenario: "A podcast-style training recording includes speech over background music. The background audio makes speech difficult to understand and cannot be disabled or lowered enough. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not auto-playing audio. The problem is background audio interfering with prerecorded speech. Which Success Criterion applies?"
    },
    "1.4.8": {
        basicScenario: "A block of text cannot be visually customized for spacing, width, or colors in the ways required for AAA. Which Success Criterion is most directly applicable?",
        auditScenario: "A long article provides no mechanism to adjust foreground and background colors, line spacing, paragraph spacing, or line width for users who need customized visual presentation. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is broader than text resize. It concerns visual presentation controls for blocks of text. Which Success Criterion applies?"
    },
    "1.4.9": {
        basicScenario: "Images of text are used even though they are not decorative or essential. Which Success Criterion is most directly applicable?",
        auditScenario: "A page uses images of text for headings and instructions. The images are not decorative and the exact visual presentation is not essential. Which Success Criterion is most directly applicable?",
        challengeScenario: "The evaluation is AAA and does not allow the same exceptions as the AA images of text criterion. Which Success Criterion applies?"
    },
    "1.4.10": {
        basicScenario: "At narrow viewport width, users must scroll both vertically and horizontally to read content. Which Success Criterion is most directly applicable?",
        auditScenario: "At 400 percent zoom, a page requires horizontal scrolling to read normal text content. Information is lost unless the user scrolls in two directions. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not text resizing alone. It is loss of information or two-dimensional scrolling at reflow dimensions. Which Success Criterion applies?"
    },
    "1.4.11": {
        basicScenario: "The visual boundary of a button has insufficient contrast against the background. Which Success Criterion is most directly applicable?",
        auditScenario: "A form uses custom checkboxes with borders that are too faint to identify against the page background. The non-text visual information needed to identify the controls does not meet contrast requirements. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not text contrast. It is contrast for user interface components or graphical objects. Which Success Criterion applies?"
    },
    "1.4.12": {
        basicScenario: "Increasing text spacing causes content to overlap or become hidden. Which Success Criterion is most directly applicable?",
        auditScenario: "When a user applies increased line height, paragraph spacing, letter spacing, and word spacing, a page loses content and buttons overlap text. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not general zoom or text resize. It specifically involves custom text spacing settings causing loss of content or functionality. Which Success Criterion applies?"
    },
    "1.4.13": {
        basicScenario: "A tooltip appears on focus but disappears before users can move to or dismiss it. Which Success Criterion is most directly applicable?",
        auditScenario: "A custom help popup appears when a field receives focus. Keyboard users cannot dismiss it without moving focus, and it disappears before they can interact with it. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue involves additional content triggered by hover or focus. The content must be dismissible, hoverable, and persistent. Which Success Criterion applies?"
    },
    "2.1.1": {
        basicScenario: "A feature can only be operated with a mouse and has no keyboard alternative. Which Success Criterion is most directly applicable?",
        auditScenario: "During keyboard testing, a user can tab through the page but cannot open the custom date picker because it only responds to mouse clicks. Which Success Criterion is most directly applicable?",
        challengeScenario: "The user is not trapped. The problem is that functionality is not available from the keyboard at all. Which Success Criterion applies?"
    },
    "2.1.2": {
        basicScenario: "Keyboard focus enters a component and cannot be moved away using the keyboard. Which Success Criterion is most directly applicable?",
        auditScenario: "A keyboard user tabs into a modal menu. Focus remains inside the menu, and Escape, Tab, Shift+Tab, and standard navigation keys cannot move focus out. Which Success Criterion is most directly applicable?",
        challengeScenario: "The component can receive keyboard focus, but the user cannot leave it using the keyboard. This is not just a focus order problem. Which Success Criterion applies?"
    },
    "2.1.3": {
        basicScenario: "A function requires non-keyboard input even though the evaluation is for keyboard access with no exceptions. Which Success Criterion is most directly applicable?",
        auditScenario: "An interactive drawing task in an AAA evaluation requires pointer movement and provides no keyboard method for completing the same function. Which Success Criterion is most directly applicable?",
        challengeScenario: "The test is AAA and removes the exception allowed under the lower keyboard criterion. Which Success Criterion applies?"
    },
    "2.1.4": {
        basicScenario: "A single-letter shortcut triggers unexpectedly and cannot be turned off, remapped, or limited to focused controls. Which Success Criterion is most directly applicable?",
        auditScenario: "A web app uses the letter S to submit a form whenever the page is open. Speech recognition users accidentally trigger the shortcut, and there is no way to disable or remap it. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not that shortcuts exist. The problem is single-character shortcuts without a way to turn off, remap, or scope them. Which Success Criterion applies?"
    },
    "2.2.1": {
        basicScenario: "A timed activity expires before users can finish, and there is no way to turn off, adjust, or extend the time limit. Which Success Criterion is most directly applicable?",
        auditScenario: "A job application times out after ten minutes. Users are not warned, cannot extend the time, and lose entered data. Which Success Criterion is most directly applicable?",
        challengeScenario: "The main issue is the presence of a time limit without user control. Which Success Criterion applies?"
    },
    "2.2.2": {
        basicScenario: "Moving or auto-updating content starts automatically and cannot be paused, stopped, or hidden. Which Success Criterion is most directly applicable?",
        auditScenario: "A dashboard contains an auto-updating news ticker that starts automatically and continues while users are trying to read the page. There is no accessible pause, stop, or hide control. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not a form timeout. It is moving, blinking, scrolling, or auto-updating content without user control. Which Success Criterion applies?"
    },
    "2.2.3": {
        basicScenario: "A task has a time limit even though timing is not essential to the activity. Which Success Criterion is most directly applicable?",
        auditScenario: "A practice quiz for general learning forces users to answer within thirty seconds even though the timing is not essential to the learning activity. Which Success Criterion is most directly applicable?",
        challengeScenario: "The evaluation is AAA and asks whether timing is used only when essential. Which Success Criterion applies?"
    },
    "2.2.4": {
        basicScenario: "Interruptions appear during a task and users cannot postpone or suppress them. Which Success Criterion is most directly applicable?",
        auditScenario: "While completing a long application, promotional popups interrupt the workflow. Users cannot postpone or suppress the interruptions. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not simply moving content. The problem is interruptions that cannot be postponed or suppressed. Which Success Criterion applies?"
    },
    "2.2.5": {
        basicScenario: "An authenticated session expires and the user cannot continue the activity after signing back in. Which Success Criterion is most directly applicable?",
        auditScenario: "A user is filling out an authenticated benefits form. The session expires, and after re-authentication the user loses all entered information and cannot continue the activity. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is about preserving activity after re-authentication, not simply warning about a timeout. Which Success Criterion applies?"
    },
    "2.2.6": {
        basicScenario: "Users are not warned about inactivity that could cause data loss. Which Success Criterion is most directly applicable?",
        auditScenario: "A secure portal deletes unsaved form data after a period of inactivity, but users are not warned about the duration of inactivity that may cause data loss. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not whether users can extend the time limit. The issue is warning users about inactivity that could cause data loss. Which Success Criterion applies?"
    },
    "2.3.1": {
        basicScenario: "A page contains flashing content that flashes more than three times in one second and exceeds the threshold. Which Success Criterion is most directly applicable?",
        auditScenario: "A promotional animation flashes rapidly during page load. Testing shows the flashing exceeds the general flash threshold more than three times in one second. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is flashing content that can trigger seizures or physical reactions. Which Success Criterion applies at Level A?"
    },
    "2.3.2": {
        basicScenario: "A page contains content that flashes more than three times in one second. Which Success Criterion is most directly applicable for AAA?",
        auditScenario: "An AAA evaluation finds an animation that flashes more than three times in a one-second period. Which Success Criterion is most directly applicable?",
        challengeScenario: "The evaluation is AAA and applies the stricter three flashes requirement. Which Success Criterion applies?"
    },
    "2.3.3": {
        basicScenario: "Motion animation triggered by interaction cannot be disabled. Which Success Criterion is most directly applicable?",
        auditScenario: "A page uses large animated transitions whenever users open panels. The animation is triggered by user interaction and there is no setting to disable it. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not flashing. It is motion animation from interaction without a way to disable it. Which Success Criterion applies?"
    },
    "2.4.1": {
        basicScenario: "A page has repeated navigation before the main content and no way to bypass it. Which Success Criterion is most directly applicable?",
        auditScenario: "Every page starts with a long header, menu, and promotional region. Keyboard and screen reader users must pass through all repeated content before reaching the main content because no bypass mechanism exists. Which Success Criterion is most directly applicable?",
        challengeScenario: "The problem is not heading structure alone. The issue is lack of a mechanism to bypass repeated blocks. Which Success Criterion applies?"
    },
    "2.4.2": {
        basicScenario: "A web page title does not describe the topic or purpose of the page. Which Success Criterion is most directly applicable?",
        auditScenario: "A multi-step application uses the same browser title, Home, on every page. Screen reader users cannot identify which step or page they are on from the title. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not the visible H1. It is the document or browser page title failing to describe purpose. Which Success Criterion applies?"
    },
    "2.4.3": {
        basicScenario: "Keyboard focus moves through controls in an order that does not preserve meaning or operation. Which Success Criterion is most directly applicable?",
        auditScenario: "A keyboard user tabs through a checkout form. Focus jumps from shipping address to submit, then back to required payment fields, causing the task sequence to become confusing. Which Success Criterion is most directly applicable?",
        challengeScenario: "The controls are keyboard accessible, but the focus order disrupts meaning and operability. Which Success Criterion applies?"
    },
    "2.4.4": {
        basicScenario: "Several links are named click here and their purpose cannot be determined from context. Which Success Criterion is most directly applicable?",
        auditScenario: "A screen reader user opens the links list and hears several links named Read more. The surrounding context does not programmatically identify where each link goes. Which Success Criterion is most directly applicable?",
        challengeScenario: "The link has an accessible name, but the name and context do not identify its destination or purpose. Which Success Criterion applies?"
    },
    "2.4.5": {
        basicScenario: "A page in a set of web pages can only be found in one way, and it is not part of a required process. Which Success Criterion is most directly applicable?",
        auditScenario: "A help article can only be reached from one deeply nested menu path. There is no search, site map, table of contents, or alternate navigation method. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not link text. The issue is whether more than one way exists to locate a page within a set of pages. Which Success Criterion applies?"
    },
    "2.4.6": {
        basicScenario: "A page contains headings or labels that do not clearly describe the topic or purpose of the content. Which Success Criterion is most directly applicable?",
        auditScenario: "A settings page contains multiple sections labeled More, Details, and Other. Users cannot determine the topic or purpose of each section or field from the headings and labels. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue may overlap with form instructions, but the main failure is that headings and labels do not describe topic or purpose. Which Success Criterion applies?"
    },
    "2.4.7": {
        basicScenario: "A keyboard user cannot visually determine where focus is located while tabbing. Which Success Criterion is most directly applicable?",
        auditScenario: "During keyboard testing, all controls can be reached and operated, but there is no visible focus indicator on buttons or links. Which Success Criterion is most directly applicable?",
        challengeScenario: "The keyboard works and focus order is logical, but the visible focus indicator is missing. Which Success Criterion applies?"
    },
    "2.4.8": {
        basicScenario: "Users are not given information about their location within a set of web pages. Which Success Criterion is most directly applicable?",
        auditScenario: "A documentation site contains many nested pages, but there is no breadcrumb, current page indication, or other location information to show where users are within the set. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not page title or navigation order. It is missing information about user location within a set of pages. Which Success Criterion applies?"
    },
    "2.4.9": {
        basicScenario: "A link's purpose cannot be identified from the link text alone. Which Success Criterion is most directly applicable for AAA?",
        auditScenario: "An AAA evaluation finds several links named Learn more. Their purpose can only be understood by reading surrounding text, not from the link text alone. Which Success Criterion is most directly applicable?",
        challengeScenario: "The Level A requirement allows programmatic context, but this AAA criterion requires the link purpose from link text alone. Which Success Criterion applies?"
    },
    "2.4.10": {
        basicScenario: "Sections of content are not organized with headings. Which Success Criterion is most directly applicable for AAA?",
        auditScenario: "A long policy page contains many sections of related content, but no section headings are used to organize the material. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not whether headings are descriptive. The issue is whether section headings are used to organize content. Which Success Criterion applies?"
    },
    "2.5.1": {
        basicScenario: "A feature requires a multi-point or path-based gesture and has no single-pointer alternative. Which Success Criterion is most directly applicable?",
        auditScenario: "A mobile map feature requires a two-finger pinch gesture to zoom and provides no plus or minus controls or other single-pointer method. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not keyboard access. It is a pointer gesture requiring a multipoint or path-based action without an alternative. Which Success Criterion applies?"
    },
    "2.5.2": {
        basicScenario: "A control activates on pointer down and users cannot cancel or undo the action. Which Success Criterion is most directly applicable?",
        auditScenario: "A destructive action is triggered as soon as the mouse button is pressed down. Users cannot move away to cancel and there is no undo option. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not target size. The problem is pointer activation behavior and lack of cancellation or undo. Which Success Criterion applies?"
    },
    "2.5.3": {
        basicScenario: "A button's visible label does not match the name announced to assistive technology. Which Success Criterion is most directly applicable?",
        auditScenario: "A speech recognition user says Click Submit Application, matching the visible label. The accessible name is Send, so the voice command does not activate the button. Which Success Criterion is most directly applicable?",
        challengeScenario: "The control has an accessible name, but the visible label is not included in that name. Which Success Criterion applies?"
    },
    "2.5.4": {
        basicScenario: "A feature can only be operated by shaking or tilting the device, and there is no alternative control. Which Success Criterion is most directly applicable?",
        auditScenario: "A mobile app requires users to shake the phone to undo an action. Users who cannot perform device motion have no button or setting to complete the same task. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not touch target size or gesture complexity. It is functionality triggered by device motion without an alternative. Which Success Criterion applies?"
    },
    "2.5.5": {
        basicScenario: "A clickable target is too small for the required target size standard. Which Success Criterion is most directly applicable?",
        auditScenario: "An AAA evaluation finds that several icon buttons are very small and closely spaced. They do not meet the required target size and no exception applies. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not label or keyboard access. It is the physical size of the target area. Which Success Criterion applies?"
    },
    "2.5.6": {
        basicScenario: "A page restricts users to one input method even though other input mechanisms are available. Which Success Criterion is most directly applicable?",
        auditScenario: "A web app blocks keyboard input when a touch screen is detected, forcing users to use touch even when they rely on a keyboard or switch device. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not whether one input method works. It is preventing concurrent use of available input mechanisms. Which Success Criterion applies?"
    },
    "3.1.1": {
        basicScenario: "The default language of the page is not programmatically identified. Which Success Criterion is most directly applicable?",
        auditScenario: "A page is written in English, but the HTML language attribute is missing. Screen reader pronunciation and language processing may be incorrect. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue applies to the overall page language, not a phrase or section in another language. Which Success Criterion applies?"
    },
    "3.1.2": {
        basicScenario: "A phrase in another language is not programmatically identified. Which Success Criterion is most directly applicable?",
        auditScenario: "An English page includes several Spanish phrases, but the language changes are not marked. Screen readers continue using English pronunciation. Which Success Criterion is most directly applicable?",
        challengeScenario: "The page language is set correctly, but a passage in a different language is not identified. Which Success Criterion applies?"
    },
    "3.1.3": {
        basicScenario: "A page uses unusual words or specialized terms without a way to determine their meaning. Which Success Criterion is most directly applicable?",
        auditScenario: "A training module uses internal acronyms and specialized terms that learners are unlikely to know. No glossary, definition, or explanation is available. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not abbreviation expansion alone. It is unusual words or specialized terms without a mechanism to determine meaning. Which Success Criterion applies?"
    },
    "3.1.4": {
        basicScenario: "A page uses abbreviations without a way to determine their expanded form or meaning. Which Success Criterion is most directly applicable?",
        auditScenario: "A benefits page repeatedly uses abbreviations such as EOB and FSA, but provides no expansion or mechanism for users to determine what they mean. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is specifically about abbreviations, not general reading level or unusual words. Which Success Criterion applies?"
    },
    "3.1.5": {
        basicScenario: "Text requires advanced reading ability and no supplemental content or simpler version is provided. Which Success Criterion is most directly applicable?",
        auditScenario: "A public service page contains instructions written above a lower secondary education reading level. No summary, illustrations, or simpler version is available. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not missing labels or instructions for controls. It is reading level of the content itself. Which Success Criterion applies?"
    },
    "3.1.6": {
        basicScenario: "The meaning of words depends on pronunciation, but no pronunciation information is provided. Which Success Criterion is most directly applicable?",
        auditScenario: "A language learning page uses words that are spelled the same but pronounced differently, and meaning depends on pronunciation. No pronunciation guide is provided. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not language identification. It is that pronunciation is required to understand meaning. Which Success Criterion applies?"
    },
    "3.2.1": {
        basicScenario: "A component receives focus and immediately causes a change of context. Which Success Criterion is most directly applicable?",
        auditScenario: "When a keyboard user tabs into a dropdown field, the page immediately submits the form and loads a new page without user activation. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is triggered by focus alone, not by changing a value or pressing a button. Which Success Criterion applies?"
    },
    "3.2.2": {
        basicScenario: "Changing the value of a form control automatically causes a change of context without warning. Which Success Criterion is most directly applicable?",
        auditScenario: "A user selects a state from a dropdown, and the page immediately navigates to a new page without a submit button or prior warning. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue happens when input changes, not merely when focus lands on the control. Which Success Criterion applies?"
    },
    "3.2.3": {
        basicScenario: "Navigation appears in a different relative order across pages in the same site. Which Success Criterion is most directly applicable?",
        auditScenario: "A website has the same main navigation on every page, but the order of links changes from page to page without a user-controlled reason. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not whether multiple navigation methods exist. It is inconsistent relative order of repeated navigation. Which Success Criterion applies?"
    },
    "3.2.4": {
        basicScenario: "The same feature is identified with different labels in different places. Which Success Criterion is most directly applicable?",
        auditScenario: "A site uses My Account, Profile, and User Center for links that all open the same account page. Users cannot reliably identify the repeated function. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not link purpose for one link. It is inconsistent identification of the same functionality across the site. Which Success Criterion applies?"
    },
    "3.2.5": {
        basicScenario: "A major change of context happens without being initiated by the user or without a mechanism to disable it. Which Success Criterion is most directly applicable?",
        auditScenario: "A page automatically opens a new window and moves focus away while the user is reading. The user did not request the change and cannot disable it. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is a change of context that is not on request. Which Success Criterion applies?"
    },
    "3.3.1": {
        basicScenario: "A form error occurs, but the user is not told which field is in error. Which Success Criterion is most directly applicable?",
        auditScenario: "After submitting a registration form, the page says There was a problem but does not identify which field failed validation. Screen reader users cannot determine where the error occurred. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not whether instructions existed before submission. The problem is that the error item is not identified after validation. Which Success Criterion applies?"
    },
    "3.3.2": {
        basicScenario: "A required input field is missing a clear label or instruction telling users what to enter. Which Success Criterion is most directly applicable?",
        auditScenario: "A form includes a required text field with no visible label and no instruction explaining the expected information. Users do not know what to enter. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue may overlap with accessible names, but the main failure is missing labels or instructions needed to complete the form. Which Success Criterion applies?"
    },
    "3.3.3": {
        basicScenario: "A form error is detected, but no suggestion is provided even though a suggestion is known and appropriate. Which Success Criterion is most directly applicable?",
        auditScenario: "A user enters a password that fails the rules. The page says Invalid password but does not explain the required format even though the needed correction is known. Which Success Criterion is most directly applicable?",
        challengeScenario: "The error is identified, but the user is not given a helpful suggestion for correcting it. Which Success Criterion applies?"
    },
    "3.3.4": {
        basicScenario: "A legal or financial transaction can be submitted without review, confirmation, or reversal. Which Success Criterion is most directly applicable?",
        auditScenario: "A banking site lets users submit a funds transfer immediately after entering the amount, with no confirmation step, no review, and no way to reverse the transaction. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not ordinary error identification. It concerns preventing serious errors in legal, financial, or data-changing transactions. Which Success Criterion applies?"
    },
    "3.3.5": {
        basicScenario: "Users are completing a complex task, but no help mechanism is available. Which Success Criterion is most directly applicable?",
        auditScenario: "A benefits application requires detailed information and complex decisions, but no contextual help, instructions, or support mechanism is available. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not that a single field lacks a label. It is that help is not available for users completing the task. Which Success Criterion applies?"
    },
    "3.3.6": {
        basicScenario: "A user can submit any type of data without a way to review, confirm, or reverse errors. Which Success Criterion is most directly applicable for AAA?",
        auditScenario: "An AAA evaluation finds that users can submit important profile changes without review, confirmation, or a way to reverse mistakes. Which Success Criterion is most directly applicable?",
        challengeScenario: "The evaluation is AAA and applies error prevention more broadly than legal, financial, or data transactions. Which Success Criterion applies?"
    },
    "4.1.1": {
        basicScenario: "Markup contains parsing errors that prevent assistive technologies from correctly interpreting the content. Which Success Criterion is most directly applicable?",
        auditScenario: "A legacy page has duplicate IDs and malformed markup that cause assistive technology to misinterpret labels and relationships. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue involves invalid markup structure causing assistive technology problems. Which Success Criterion applies in WCAG 2.1 contexts?"
    },
    "4.1.2": {
        basicScenario: "A custom control does not expose its name, role, or state to assistive technology. Which Success Criterion is most directly applicable?",
        auditScenario: "A custom accordion visually behaves like an expandable button, but JAWS announces it only as text and does not expose its expanded or collapsed state. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue may look like a label problem, but the control's role and state are also missing from assistive technology. Which Success Criterion is strongest?"
    },
    "4.1.3": {
        basicScenario: "A status update appears on the page, but screen reader users are not informed without moving focus. Which Success Criterion is most directly applicable?",
        auditScenario: "After a user submits a search, the page updates to show No results found. Focus does not move, and the screen reader does not announce the status message. Which Success Criterion is most directly applicable?",
        challengeScenario: "The issue is not that the search button is unlabeled. The problem is that a dynamic status message is not programmatically announced. Which Success Criterion applies?"
    }
};

    var W3C_LINKS = {
        "1.1.1": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html",
        "1.2.1": "https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html",
        "1.2.2": "https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html",
        "1.2.3": "https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded.html",
        "1.2.4": "https://www.w3.org/WAI/WCAG21/Understanding/captions-live.html",
        "1.2.5": "https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded.html",
        "1.2.6": "https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded.html",
        "1.2.7": "https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded.html",
        "1.2.8": "https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded.html",
        "1.2.9": "https://www.w3.org/WAI/WCAG21/Understanding/audio-only-live.html",
        "1.3.1": "https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html",
        "1.3.2": "https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html",
        "1.3.3": "https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html",
        "1.3.4": "https://www.w3.org/WAI/WCAG21/Understanding/orientation.html",
        "1.3.5": "https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html",
        "1.3.6": "https://www.w3.org/WAI/WCAG21/Understanding/identify-purpose.html",
        "1.4.1": "https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html",
        "1.4.2": "https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html",
        "1.4.3": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html",
        "1.4.4": "https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html",
        "1.4.5": "https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html",
        "1.4.6": "https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html",
        "1.4.7": "https://www.w3.org/WAI/WCAG21/Understanding/low-or-no-background-audio.html",
        "1.4.8": "https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html",
        "1.4.9": "https://www.w3.org/WAI/WCAG21/Understanding/images-of-text-no-exception.html",
        "1.4.10": "https://www.w3.org/WAI/WCAG21/Understanding/reflow.html",
        "1.4.11": "https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html",
        "1.4.12": "https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html",
        "1.4.13": "https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html",
        "2.1.1": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html",
        "2.1.2": "https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html",
        "2.1.3": "https://www.w3.org/WAI/WCAG21/Understanding/keyboard-no-exception.html",
        "2.1.4": "https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html",
        "2.2.1": "https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html",
        "2.2.2": "https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html",
        "2.2.3": "https://www.w3.org/WAI/WCAG21/Understanding/no-timing.html",
        "2.2.4": "https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html",
        "2.2.5": "https://www.w3.org/WAI/WCAG21/Understanding/re-authenticating.html",
        "2.2.6": "https://www.w3.org/WAI/WCAG21/Understanding/timeouts.html",
        "2.3.1": "https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html",
        "2.3.2": "https://www.w3.org/WAI/WCAG21/Understanding/three-flashes.html",
        "2.3.3": "https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html",
        "2.4.1": "https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html",
        "2.4.2": "https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html",
        "2.4.3": "https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html",
        "2.4.4": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html",
        "2.4.5": "https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html",
        "2.4.6": "https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html",
        "2.4.7": "https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html",
        "2.4.8": "https://www.w3.org/WAI/WCAG21/Understanding/location.html",
        "2.4.9": "https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html",
        "2.4.10": "https://www.w3.org/WAI/WCAG21/Understanding/section-headings.html",
        "2.5.1": "https://www.w3.org/WAI/WCAG21/Understanding/pointer-gestures.html",
        "2.5.2": "https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html",
        "2.5.3": "https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html",
        "2.5.4": "https://www.w3.org/WAI/WCAG21/Understanding/motion-actuation.html",
        "2.5.5": "https://www.w3.org/WAI/WCAG21/Understanding/target-size.html",
        "2.5.6": "https://www.w3.org/WAI/WCAG21/Understanding/concurrent-input-mechanisms.html",
        "3.1.1": "https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html",
        "3.1.2": "https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html",
        "3.1.3": "https://www.w3.org/WAI/WCAG21/Understanding/unusual-words.html",
        "3.1.4": "https://www.w3.org/WAI/WCAG21/Understanding/abbreviations.html",
        "3.1.5": "https://www.w3.org/WAI/WCAG21/Understanding/reading-level.html",
        "3.1.6": "https://www.w3.org/WAI/WCAG21/Understanding/pronunciation.html",
        "3.2.1": "https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html",
        "3.2.2": "https://www.w3.org/WAI/WCAG21/Understanding/on-input.html",
        "3.2.3": "https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation.html",
        "3.2.4": "https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification.html",
        "3.2.5": "https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html",
        "3.3.1": "https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html",
        "3.3.2": "https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html",
        "3.3.3": "https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html",
        "3.3.4": "https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-legal-financial-data.html",
        "3.3.5": "https://www.w3.org/WAI/WCAG21/Understanding/help.html",
        "3.3.6": "https://www.w3.org/WAI/WCAG21/Understanding/error-prevention-all.html",
        "4.1.1": "https://www.w3.org/WAI/WCAG21/Understanding/parsing.html",
        "4.1.2": "https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html",
        "4.1.3": "https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html"
    };

    var state = {
        deck: [],
        queue: [],
        current: null,
        currentPrompt: "",
        currentChoices: [],
        correct: 0,
        incorrect: 0,
        questionNumber: 0,
        targetQuestions: 20,
        wrongCards: [],
        wrongCounts: {},
        reviewItems: [],
        reviewChallenges: [],
        awaitingAnswer: false,
        reviewingWrong: false
    };

    var els = {};

    function byId(id) {
        return document.getElementById(id);
    }

    function setupElements() {
        els.difficultyLevel = byId("difficulty-level");
        els.levelCheckboxes = document.querySelectorAll("input[name='level-filter']");
        els.principleFilter = byId("principle-filter");
        els.practiceLength = byId("practice-length");
        els.startButton = byId("start-button");
        els.newQuestionButton = byId("new-question-button");
        els.repeatWrongButton = byId("repeat-wrong-button");
        els.continueButton = byId("continue-button");
        els.counter = byId("counter");
        els.questionText = byId("question-text");
        els.choices = byId("choices");
        els.feedback = byId("feedback");
        els.advanceStatus = byId("advance-status");
        els.cardDetails = byId("card-details");
        els.sessionSummary = byId("session-summary");
        els.weakAreas = byId("weak-areas");
        els.reviewIntro = byId("review-intro");
        els.reviewList = byId("review-list");
        els.reviewChallengeStatus = byId("review-challenge-status");
        els.exportChallengesBtn = byId("export-challenges-btn");

        if (els.sessionSummary) {
            els.sessionSummary.setAttribute("tabindex", "-1");
        }
    }

    function getMode() {
        var checked = document.querySelector("input[name='mode']:checked");

        return checked ? checked.value : "definition-to-sc";
    }

    function getDifficulty() {
        return els.difficultyLevel ? els.difficultyLevel.value : "beginner";
    }

    function getW3cUrl(card) {
        if (!card || !card.scNumber) {
            return "";
        }

        return W3C_LINKS[card.scNumber] || "";
    }

    function createW3cLink(card) {
        var link = document.createElement("a");

        link.href = getW3cUrl(card);
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "Read W3C Understanding document for " + card.sc;

        return link;
    }

    function getScenarioEntry(card) {
        if (!card || !card.scNumber) {
            return null;
        }

        return SCENARIO_BANK[card.scNumber] || null;
    }

    function hasScenario(card) {
        return Boolean(getScenarioEntry(card));
    }

    function getScenario(card) {
        var entry = getScenarioEntry(card);
        var difficulty = getDifficulty();

        if (!entry) {
            return "";
        }

        if (difficulty === "beginner") {
            return entry.basicScenario || entry.auditScenario || entry.challengeScenario || "";
        }

        if (difficulty === "intermediate") {
            return entry.auditScenario || entry.basicScenario || entry.challengeScenario || "";
        }

        if (difficulty === "advanced") {
            return entry.auditScenario || entry.challengeScenario || entry.basicScenario || "";
        }

        return entry.challengeScenario || entry.auditScenario || entry.basicScenario || "";
    }

    function uniqueValues(items, key) {
        var seen = {};
        var values = [];

        items.forEach(function (item) {
            var value = item[key];

            if (value && !seen[value]) {
                seen[value] = true;
                values.push(value);
            }
        });

        return values.sort();
    }

    function populateFilters() {
        uniqueValues(window.WCAG_DATA, "principle").forEach(function (principle) {
            var option = document.createElement("option");

            option.value = principle;
            option.textContent = principle;
            els.principleFilter.appendChild(option);
        });
    }

    function getSelectedLevels() {
        var selected = [];

        els.levelCheckboxes.forEach(function (checkbox) {
            if (checkbox.checked) {
                selected.push(checkbox.value);
            }
        });

        return selected;
    }

    function buildDeck() {
        var selectedLevels = getSelectedLevels();
        var principle = els.principleFilter.value;
        var mode = getMode();

        state.deck = window.WCAG_DATA.filter(function (card) {
            var levelMatch = selectedLevels.indexOf(card.level) !== -1;
            var principleMatch = principle === "all" || card.principle === principle;
            var scenarioMatch = mode !== "scenario-to-sc" || hasScenario(card);

            return levelMatch && principleMatch && scenarioMatch;
        });
    }

    function getPracticeLength() {
        var value = els.practiceLength.value;

        if (value === "all") {
            return state.deck.length;
        }

        return Number(value);
    }

    function shuffle(items) {
        var copy = items.slice();
        var index = copy.length;

        while (index > 0) {
            var randomIndex = Math.floor(Math.random() * index);
            index -= 1;
            var temp = copy[index];
            copy[index] = copy[randomIndex];
            copy[randomIndex] = temp;
        }

        return copy;
    }

    function getShortHint(card) {
        return card.shortDescription || "";
    }

    function getQuestionPrompt(card) {
        var mode = getMode();
        var difficulty = getDifficulty();

        if (mode === "scenario-to-sc") {
            return getScenario(card);
        }

        if (mode === "sc-to-definition") {
            if (difficulty === "beginner") {
                return "Which definition matches " + card.sc + "?";
            }

            if (difficulty === "intermediate") {
                return "Which short explanation best matches " + card.sc + "?";
            }

            if (difficulty === "advanced") {
                return "A tester is reviewing " + card.principle + " content. Which definition best matches " + card.sc + "?";
            }

            return "Expert review. Which answer most accurately describes " + card.sc + "?";
        }

        if (difficulty === "beginner") {
            return "Which Success Criterion matches this definition? " + card.shortDescription;
        }

        if (difficulty === "intermediate") {
            return "Which Success Criterion matches this clue? " + getShortHint(card);
        }

        if (difficulty === "advanced") {
            return "A tester finds an issue related to " + card.principle + " content. The issue involves this requirement. " + card.shortDescription + " Which Success Criterion applies?";
        }

        return "Expert review. Choose the closest Success Criterion. " + getShortHint(card);
    }

    function getDistractorPool(correctCard) {
        var difficulty = getDifficulty();
        var mode = getMode();
        var pool = state.deck.filter(function (card) {
            return card.sc !== correctCard.sc;
        });

        if (mode === "scenario-to-sc") {
            return pool.filter(function (card) {
                return card.principle === correctCard.principle || card.level === correctCard.level;
            });
        }

        if (difficulty === "beginner") {
            return pool;
        }

        if (difficulty === "intermediate") {
            return pool.filter(function (card) {
                return card.principle === correctCard.principle;
            });
        }

        if (difficulty === "advanced") {
            return pool.filter(function (card) {
                return card.principle === correctCard.principle || card.level === correctCard.level;
            });
        }

        return pool.filter(function (card) {
            return card.principle === correctCard.principle && card.level === correctCard.level;
        });
    }

    function makeChoices(correctCard) {
        var preferred = getDistractorPool(correctCard);
        var fallback = state.deck.filter(function (card) {
            return card.sc !== correctCard.sc;
        });
        var distractors = shuffle(preferred).slice(0, 3);

        if (distractors.length < 3) {
            shuffle(fallback).forEach(function (card) {
                var alreadyUsed = distractors.some(function (item) {
                    return item.sc === card.sc;
                });

                if (!alreadyUsed && distractors.length < 3) {
                    distractors.push(card);
                }
            });
        }

        return shuffle([correctCard].concat(distractors));
    }

    function formatChoice(card) {
        var mode = getMode();

        if (mode === "definition-to-sc" || mode === "scenario-to-sc") {
            return card.sc;
        }

        if (getDifficulty() === "beginner") {
            return card.shortDescription;
        }

        return getShortHint(card);
    }

    function clearChoiceButtons() {
        var buttons = els.choices.querySelectorAll("button");

        buttons.forEach(function (button) {
            button.setAttribute("aria-disabled", "true");
        });
    }

    function enableChoiceButtons() {
        var buttons = els.choices.querySelectorAll("button");

        buttons.forEach(function (button) {
            button.setAttribute("aria-disabled", "false");
        });
    }



    function moveToAnswerHeading() {
        window.setTimeout(function () {
            var heading = document.getElementById("answers-heading");

            if (heading) {
                heading.focus();
            }
        }, 80);
    }

    function moveBrowseStartToQuestionText() {
        window.setTimeout(function () {
            if (els.questionText) {
                els.questionText.focus();
            }
        }, 125);
    }

    function moveFocusToQuestion() {
        window.setTimeout(function () {
            els.questionText.focus();
        }, 50);
    }

    function updateCounter() {
        els.counter.textContent = "Question " + state.questionNumber + " of " + state.targetQuestions + ". Score " + state.correct + " correct and " + state.incorrect + " incorrect.";
    }

    function updateDetails(card) {
        els.cardDetails.textContent = card.sc + ". Principle " + card.principle + ". Guideline " + card.guideline + ". Level " + card.level + ". Screen reader detectable " + card.screenReaderDetectable + ". Difficulty " + getDifficulty() + ". ";

        if (hasScenario(card)) {
            els.cardDetails.appendChild(document.createTextNode("Scenario available for this card. "));
        }

        if (getW3cUrl(card)) {
            els.cardDetails.appendChild(createW3cLink(card));
        }
    }

    function setQuestion(card) {
        var choices = makeChoices(card);

        state.current = card;
        state.currentPrompt = getQuestionPrompt(card);
        state.currentChoices = choices;
        state.awaitingAnswer = true;
        state.questionNumber += 1;

        els.feedback.textContent = "";
        els.advanceStatus.textContent = "";
        els.continueButton.setAttribute("aria-disabled", "true");
        els.continueButton.textContent = "Continue unavailable until answer is selected";
        els.choices.innerHTML = "";
        els.questionText.textContent = state.currentPrompt;

        choices.forEach(function (choice, index) {
            var li = document.createElement("li");
            var button = document.createElement("button");

            button.type = "button";
            button.className = "choice-button";
            button.textContent = String(index + 1) + ". " + formatChoice(choice);
            button.setAttribute("data-sc", choice.sc);

            button.addEventListener("click", function () {
                answer(choice);
            });

            li.appendChild(button);
            els.choices.appendChild(li);
        });

        enableChoiceButtons();
        updateCounter();
        updateDetails(card);

        window.setTimeout(function () {
            els.advanceStatus.textContent =
                "Question " +
                state.questionNumber +
                ". " +
                state.currentPrompt +
                " Answer choices follow. Shortcut users can press A to hear answer choices.";

            moveBrowseStartToQuestionText();
        }, 50);
    }

    function findWrongCardByNumber(scNumber) {
        var found = null;

        state.wrongCards.forEach(function (card) {
            if (!found && card.scNumber === scNumber) {
                found = card;
            }
        });

        state.deck.forEach(function (card) {
            if (!found && card.scNumber === scNumber) {
                found = card;
            }
        });

        return found;
    }

    function renderWeakAreas() {
        var keys = Object.keys(state.wrongCounts);

        els.weakAreas.innerHTML = "";

        if (keys.length === 0) {
            var noMisses = document.createElement("li");
            noMisses.textContent = "No weak areas detected yet.";
            els.weakAreas.appendChild(noMisses);
            return;
        }

        keys.sort(function (a, b) {
            return state.wrongCounts[b] - state.wrongCounts[a];
        });

        keys.forEach(function (key) {
            var card = findWrongCardByNumber(key);
            var li = document.createElement("li");
            var text = card ? card.sc : key;

            li.appendChild(document.createTextNode(text + ". Missed " + state.wrongCounts[key] + " time(s). "));

            if (card && getW3cUrl(card)) {
                li.appendChild(createW3cLink(card));
            }

            els.weakAreas.appendChild(li);
        });
    }

    function setReviewChallengeStatus(message) {
        if (els.reviewChallengeStatus) {
            els.reviewChallengeStatus.textContent = message;
        }

        els.advanceStatus.textContent = message;
    }

    function saveChallenge(index) {
        var item = state.reviewItems[index];
        var proposed = byId("challenge-proposed-" + String(index));
        var notes = byId("challenge-notes-" + String(index));
        var saved = null;

        if (!item) {
            setReviewChallengeStatus("Challenge could not be saved.");
            return;
        }

        saved = {
            question: item.prompt,
            userAnswer: item.selectedCard.sc,
            expectedAnswer: item.correctCard.sc,
            proposedAnswer: proposed ? proposed.value.trim() : "",
            reasoning: notes ? notes.value.trim() : "",
            createdAt: new Date().toLocaleString()
        };

        state.reviewChallenges.push(saved);
        setReviewChallengeStatus("Challenge saved for instructor review. Saved challenges " + state.reviewChallenges.length + ".");
    }

    function exportChallenges() {
        var lines = [];
        var blob = null;
        var link = null;

        if (!state.reviewChallenges.length) {
            setReviewChallengeStatus("No challenges have been saved yet.");
            return;
        }

        lines.push("Open Door Accessibility Lab - Instructor Challenge Review");
        lines.push("");
        lines.push("Total saved challenges: " + String(state.reviewChallenges.length));
        lines.push("");

        state.reviewChallenges.forEach(function (item, index) {
            lines.push("Challenge " + String(index + 1));
            lines.push("Date saved: " + item.createdAt);
            lines.push("Question: " + item.question);
            lines.push("User answer: " + item.userAnswer);
            lines.push("App expected answer: " + item.expectedAnswer);
            lines.push("User proposed answer: " + item.proposedAnswer);
            lines.push("Reasoning for instructor review: " + item.reasoning);
            lines.push("");
        });

        blob = new Blob([lines.join("\n")], { type: "text/plain" });
        link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "OpenDoorAccessibilityLabChallenges.txt";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setReviewChallengeStatus("Challenge export created.");
    }

    function renderReviewLab() {
        els.reviewList.innerHTML = "";

        if (state.reviewItems.length === 0) {
            els.reviewIntro.textContent = "No missed questions in this session. Challenge review is available after missed questions.";
            return;
        }

        els.reviewIntro.textContent = "Review missed questions below. Each item shows the question, your answer, the expected answer, and a W3C link when available. Open a missed question to challenge the app answer or save reasoning for instructor review.";

        state.reviewItems.forEach(function (item, index) {
            var details = document.createElement("details");
            var summary = document.createElement("summary");
            var question = document.createElement("p");
            var userAnswer = document.createElement("p");
            var correctAnswer = document.createElement("p");
            var challengeWrap = document.createElement("div");
            var challengeHeading = document.createElement("h4");
            var challengeIntro = document.createElement("p");
            var proposedLabel = document.createElement("label");
            var proposedInput = document.createElement("input");
            var notesLabel = document.createElement("label");
            var notesInput = document.createElement("textarea");
            var saveButton = document.createElement("button");

            details.className = "review-item";
            summary.textContent = "Missed question " + String(index + 1) + ". Expected answer " + item.correctCard.sc + ".";
            question.textContent = "Question. " + item.prompt;
            userAnswer.textContent = "Your answer. " + item.selectedCard.sc + ".";
            correctAnswer.textContent = "Expected answer. " + item.correctCard.sc + ". " + item.correctCard.shortDescription;

            details.appendChild(summary);
            details.appendChild(question);
            details.appendChild(userAnswer);
            details.appendChild(correctAnswer);

            if (getW3cUrl(item.correctCard)) {
                var linkParagraph = document.createElement("p");
                linkParagraph.appendChild(createW3cLink(item.correctCard));
                details.appendChild(linkParagraph);
            }

            challengeWrap.className = "review-challenge-tools";
            challengeHeading.textContent = "Challenge this answer";
            challengeIntro.textContent = "Use this section if you believe another Success Criterion may also apply, or if you want an instructor to review the app answer.";

            proposedInput.id = "challenge-proposed-" + String(index);
            proposedInput.type = "text";
            proposedLabel.setAttribute("for", proposedInput.id);
            proposedLabel.textContent = "Proposed answer";

            notesInput.id = "challenge-notes-" + String(index);
            notesInput.rows = 4;
            notesLabel.setAttribute("for", notesInput.id);
            notesLabel.textContent = "Reasoning for instructor review";

            saveButton.type = "button";
            saveButton.textContent = "Save challenge";
            saveButton.addEventListener("click", function () {
                saveChallenge(index);
            });

            challengeWrap.appendChild(challengeHeading);
            challengeWrap.appendChild(challengeIntro);
            challengeWrap.appendChild(proposedLabel);
            challengeWrap.appendChild(proposedInput);
            challengeWrap.appendChild(notesLabel);
            challengeWrap.appendChild(notesInput);
            challengeWrap.appendChild(saveButton);

            details.appendChild(challengeWrap);
            els.reviewList.appendChild(details);
        });
    }

    function showSessionComplete() {
        var total = state.correct + state.incorrect;
        var percent = 0;

        state.awaitingAnswer = false;
        state.current = null;
        state.currentPrompt = "";

        if (total > 0) {
            percent = Math.round((state.correct / total) * 100);
        }

        els.choices.innerHTML = "";
        els.continueButton.setAttribute("aria-disabled", "true");
        els.continueButton.textContent = "Continue unavailable until answer is selected";
        els.questionText.textContent = "Practice complete.";
        els.feedback.textContent = "Practice complete. Final score " + state.correct + " correct and " + state.incorrect + " incorrect out of " + state.targetQuestions + ".";
        els.advanceStatus.textContent = "Press Start practice to begin again, or Review incorrect answers to practice missed cards.";
        els.sessionSummary.textContent = "Difficulty " + getDifficulty() + ". Mode " + getMode() + ". Score " + percent + " percent. Correct " + state.correct + ". Incorrect " + state.incorrect + ". Weak areas with W3C links are listed below. Missed questions can be reviewed in the Review Lab.";

        renderWeakAreas();
        renderReviewLab();
        updateCounter();
        els.sessionSummary.focus();
    }

    function loadNextQuestion() {
        if (state.questionNumber >= state.targetQuestions || state.queue.length === 0) {
            showSessionComplete();
            return;
        }

        setQuestion(state.queue.shift());
    }

    function answer(choice) {
        var isCorrect = false;

        if (!state.awaitingAnswer || !state.current) {
            return;
        }

        state.awaitingAnswer = false;
        clearChoiceButtons();
        isCorrect = choice.sc === state.current.sc;

        if (isCorrect) {
            state.correct += 1;
            els.feedback.textContent = "Correct. " + state.current.sc + ".";
        } else {
            state.incorrect += 1;
            state.wrongCards.push(state.current);
            state.reviewItems.push({
                prompt: state.currentPrompt,
                selectedCard: choice,
                correctCard: state.current,
                mode: getMode(),
                difficulty: getDifficulty()
            });

            if (!state.wrongCounts[state.current.scNumber]) {
                state.wrongCounts[state.current.scNumber] = 0;
            }

            state.wrongCounts[state.current.scNumber] += 1;
            els.feedback.textContent = "Incorrect. The correct answer is " + state.current.sc + ". " + state.current.shortDescription;
        }

        updateCounter();
        els.advanceStatus.textContent = "Answer selected. Press C to continue, or activate the Continue button.";
        els.continueButton.setAttribute("aria-disabled", "false");
        els.continueButton.textContent = "Continue to next question";

        window.setTimeout(function () {
            els.continueButton.focus();
        }, 50);
    }

    function prepareQueue(cards) {
        var shuffled = shuffle(cards);

        state.targetQuestions = Math.min(getPracticeLength(), shuffled.length);
        state.queue = shuffled.slice(0, state.targetQuestions);
    }

    function startPractice() {
        buildDeck();

        if (state.deck.length < 4) {
            els.feedback.textContent = "Not enough cards are available for this mode and filter. Choose a broader filter or another mode.";
            return;
        }

        state.correct = 0;
        state.incorrect = 0;
        state.questionNumber = 0;
        state.wrongCards = [];
        state.wrongCounts = {};
        state.reviewItems = [];
        state.reviewChallenges = [];
        state.reviewingWrong = false;

        els.sessionSummary.textContent = "Session in progress.";
        els.weakAreas.innerHTML = "";
        els.reviewIntro.textContent = "Session in progress. Missed questions will appear here after the session.";
        els.reviewList.innerHTML = "";

        prepareQueue(state.deck);
        loadNextQuestion();
    }

    function skipQuestion() {
        loadNextQuestion();
    }

    function reviewWrong() {
        if (state.wrongCards.length === 0) {
            els.feedback.textContent = "There are no incorrect answers to review yet.";
            return;
        }

        state.deck = state.wrongCards.slice();
        state.correct = 0;
        state.incorrect = 0;
        state.questionNumber = 0;
        state.reviewingWrong = true;
        state.targetQuestions = state.deck.length;
        state.queue = shuffle(state.deck);
        loadNextQuestion();
    }

    function isFormControl(target) {
        var tagName = target.tagName.toLowerCase();

        return tagName === "input" || tagName === "select" || tagName === "textarea";
    }

    function announceQuestion() {
        if (!state.currentPrompt) {
            return;
        }

        els.advanceStatus.textContent = "Question. " + state.currentPrompt;
    }

    function announceAnswers() {
        var messages = [];

        state.currentChoices.forEach(function (card, index) {
            messages.push("Answer " + String(index + 1) + ". " + formatChoice(card));
        });

        els.advanceStatus.textContent = messages.join(" ");
    }

    function continueToNextQuestion() {
        if (els.continueButton.getAttribute("aria-disabled") === "true") {
            return;
        }

        loadNextQuestion();
    }

function handleKeyboard(event) {
    var key = event.key.toLowerCase();

    if (event.ctrlKey && key === "s") {
        event.preventDefault();
        startPractice();
        return;
    }

    if (isFormControl(event.target)) {
        return;
    }

    if (key >= "1" && key <= "4") {
        var buttons = els.choices.querySelectorAll("button");
        var index = Number(key) - 1;

        if (buttons[index]) {
            event.preventDefault();
            buttons[index].click();
        }
    } else if (key === "n") {
        event.preventDefault();
        skipQuestion();
    } else if (key === "s") {
        event.preventDefault();
        startPractice();
    } else if (key === "r") {
        event.preventDefault();
        announceQuestion();
    } else if (key === "a") {
        event.preventDefault();
        announceAnswers();
    } else if (key === "c") {
        event.preventDefault();
        continueToNextQuestion();
    }
}
    function bindEvents() {
        els.startButton.addEventListener("click", startPractice);
        els.newQuestionButton.addEventListener("click", skipQuestion);
        els.repeatWrongButton.addEventListener("click", reviewWrong);
        els.continueButton.addEventListener("click", continueToNextQuestion);
        document.addEventListener("keydown", handleKeyboard);

        if (els.exportChallengesBtn) {
            els.exportChallengesBtn.addEventListener("click", exportChallenges);
        }
    }

    function init() {
        setupElements();
        populateFilters();
        bindEvents();
        buildDeck();
        state.targetQuestions = getPracticeLength();
        els.feedback.textContent = "Trainer loaded with " + state.deck.length + " WCAG cards.";
    }

    document.addEventListener("DOMContentLoaded", init);
}());
/* END ANCHOR (OPEN_DOOR_ACCESSIBILITY_LAB_APP_V13) */
