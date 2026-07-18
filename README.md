# WCAG Accessibility Lab

Reconstructed to follow the Open Door Design Lab structure used by the CPACC Accessibility Lab and governed by the DesignPhilosophyAndStandards repository.

## Open Door Design visual standard applied

This project uses the Open Door Design AAA-oriented visual standard. The interface avoids blue/green pairings, uses green as the single brand accent, uses dark neutral text for structure, and uses a high-visibility gold focus indicator. Returned project archives intentionally exclude the `.git` directory.

## Visual remediation

The WCAG principle selector now presents each checkbox, principle name, and description as a distinct readable option. The skip link also sizes to its text instead of wrapping into a narrow fixed-width control. These changes preserve native checkbox labeling, keyboard operation, focus visibility, and screen-reader output.

## Question Bank Expansion (This Session)

**Objective given:** expand the question bank toward roughly 1,200 to 1,500 total questions, adding professional-consultant-style scenario questions (Multi-Success-Criterion Analysis, User Impact, Remediation Planning, Severity Assessment, Prioritization, Audit Documentation, Best Next Action, Root Cause Analysis) across realistic industries, on top of the existing Recall/Recognition/Application questions, while changing nothing about the existing architecture, removing nothing, and reducing nothing.

**What was actually delivered, stated precisely rather than rounded up:** 108 new questions were added, bringing the total from 234 to **342** (a 46% increase). This falls well short of the 1,200-1,500 target range. That gap is being stated plainly here rather than implied to be closed, because generating over a thousand genuinely distinct, professionally accurate, non-repetitive questions - the explicit quality bar this task set - is not achievable with real per-question craftsmanship in a single working session. The alternative, mechanically padding toward the target number with templated or shallow filler, would have violated the task's own instruction to avoid repetitive, trivia-style questions. This session prioritized genuine quality and reasoning depth over raw count, and is delivered as a substantial first expansion phase, not a claim that the full target was reached.

### What was added

**9 Success Criteria that did not exist anywhere in this Lab's data were added first.** `WCAG_DATA` (the source-of-truth Success Criterion reference array) was missing 2.4.11, 2.4.12, 2.4.13, 2.5.7, 2.5.8, 3.2.6, 3.3.7, 3.3.8, and 3.3.9 - all real WCAG 2.2 criteria - entirely. These were added with accurate official criterion text, and each received the same baseline Recall/Recognition/Application coverage (3 questions each, 27 total) the other 78 criteria already had, bringing this Lab's criterion coverage to 87 and ensuring every criterion has *some* question coverage before any deeper scenario work began.

**41 realistic, independent scenario questions were written across the requested industries**, each scenario grounded in a specific, plausible situation (not a generic template) and producing multiple independent questions - identify the criterion, determine affected users, assign severity, recommend remediation, determine priority, identify root cause, recognize when multiple criteria are involved, write an audit finding, or choose the best next action - covering:

- Banking (mobile check deposit dragging interaction)
- Healthcare (patient portal redundant data entry, traced to a shared root-cause component across four separate flows)
- Government (a scanned, textless benefits-eligibility PDF)
- Education (a rigid LMS quiz timer with accommodation implications)
- E-commerce (color-only sale/stock badges; a shopping cart quantity stepper with no accessible name or state)
- Social media (an infinite-scroll feed with no bypass mechanism, compounded by autoplaying audio)
- Travel (a keyboard-inaccessible flight date picker)
- Streaming media (incomplete captions and missing audio description, prioritized against production cost)
- Enterprise dashboards (a multi-line chart failing contrast, color-only distinction, and keyboard data access together)
- Restaurant ordering (a silently-failing Add to Cart button traced to a code regression)
- Authentication (a drag-puzzle CAPTCHA with no accessible alternative, including a worked negotiation with a security team's objection)
- Documents (an insurance PDF with no heading structure, no table headers, and meaningless title metadata)
- Mobile applications (pinch-to-zoom with no single-pointer alternative, including a worked negotiation with a design team's minimalism concern)
- Enterprise HR software (a performance-review form's session timeout losing 40 minutes of written feedback, spanning three related timing criteria)
- Shopping cart checkout (a worked example of correctly recognizing when a criterion is *not* violated, alongside a real violation on the same page)
- Direct messaging (typing indicators and read receipts with no live-region announcement, including a worked example of choosing polite over assertive urgency)

A further batch of shorter, targeted scenario questions specifically filled in coverage gaps for Success Criteria the main scenarios above had not yet touched (1.3.2, 1.3.3, 1.3.4, 1.2.4, 2.4.5, 3.2.4, 1.4.10, 2.1.4), rather than leaving them with only their original baseline questions.

**Difficulty progression:** the new questions span the existing easy/medium/hard schema (this Lab's actual difficulty filter only supports three tiers, not the four - Beginner/Intermediate/Advanced/Expert - that were requested; see Architecture Note below), weighted toward medium and hard given the reasoning-heavy nature of scenario analysis, with the most complex multi-criterion and root-cause questions authored at "hard."

### Coverage

- **All 87 Success Criteria now have at least one question** (previously 9 had zero, since they were missing from the data entirely).
- **35 of 87 Success Criteria received deeper, scenario-based reasoning coverage** beyond their baseline three questions, spanning all four WCAG Principles.
- **11 distinct question types are now represented**: the original Recall, Recognition, and Application, plus the newly added User Impact, Severity Assessment, Remediation Planning, Prioritization, Audit Documentation, Multi-Success-Criterion Analysis, Root Cause Analysis, and Best Next Action.

### Architecture note: one real conflict found and resolved

The task asked for a Beginner/Intermediate/Advanced/Expert difficulty progression. This Lab's actual filtering logic and UI (`app.js`, `index.html`) only define three difficulty values: easy, medium, hard - there is no fourth tier anywhere in the existing dropdown or filter code. Per this task's explicit instruction not to change the existing architecture, a fourth UI-level tier was not added. The initial draft of this expansion mistakenly tagged its hardest questions "expert" anyway; this was caught by a schema-validation pass run against the actual question array before packaging (a real mistake, not a hypothetical one - 16 questions were affected) and corrected by remapping those questions to "hard," the existing top tier, before delivery.

### Integration approach

All new content lives in a new file, `wcag-lab-expansion.js`, loaded via a new `<script>` tag in `index.html` between `wcag-data.js` and `app.js`. It appends its questions to the existing `window.WCAG_LAB_DATA.questions` array at load time and does not modify, reorder, or remove a single existing question. The 9 new Success Criteria were added to the end of the existing `WCAG_DATA` array in `wcag-data.js` itself, since that array is the shared source of truth the Lab's UI reads criterion metadata from, and adding them there (rather than only in the new file) keeps that metadata available Lab-wide, consistent with how the other 78 criteria are defined.

### Verification performed before packaging

- All three JavaScript files (`wcag-data.js`, `wcag-lab-expansion.js`, `app.js`) pass Node's syntax check.
- Every one of the 342 questions was validated against the existing schema: valid domain, valid mode, valid difficulty, exactly 4 choices, an in-bounds answer index, non-empty question and explanation text, and a `scNumber` that resolves to a real entry in `WCAG_DATA`. Zero failures after the difficulty-tier fix above.
- Zero duplicate question IDs across all 342 questions (108 new IDs checked against the 234 existing ones).
- Zero exact-duplicate question text anywhere in the bank.
- The actual filtering logic used by the running app (`getAvailableQuestions()`) was simulated directly against the full, integrated question array: every domain/mode combination returns a non-zero question count, and Sprint mode correctly pulls from all 342 questions regardless of mode tag.
- The correct-answer-index convention already used by all 234 pre-existing questions (correct answer always authored at index 0, shuffled at runtime by the existing `randomizeChoiceOrder()` function before display) was confirmed and matched exactly by all 108 new questions, rather than introducing an inconsistent authoring pattern.

### Remaining work toward the 1,200-1,500 target

This is real, substantial, unfinished work, not a rounding error:

1. **Roughly 850-1,150 more questions** would be needed to reach the requested range at the same quality bar. Realistically, this means several more sessions of the same kind of work done here: real scenarios, not templates.
2. **52 of 87 Success Criteria still have only their baseline 3 questions** and have not yet received scenario-based, multi-category coverage. A prioritized list would start with the highest-impact criteria not yet touched: 1.4.3, 1.4.4, 1.4.5, 2.3.1, 2.4.3, 2.4.4, 2.4.6, 2.4.7, 2.5.2, 2.5.3, 2.5.5, 2.5.6, 3.1.1 through 3.1.6, 3.2.1, 3.2.3, 3.2.5, 3.3.2, 3.3.3, 3.3.5, 3.3.6.
3. **Industries named in the task but not yet represented in a scenario**: none were skipped entirely, but Enterprise Applications, Dashboards, and Forms were covered lightly (folded into other industry scenarios) rather than given their own dedicated scenario the way Banking, Healthcare, and Government were.
4. **A true four-tier difficulty system** was not implemented, since it would require changing the existing filter UI and filtering logic - a deliberate architecture change this task's own instructions said not to make without being asked for explicitly. If a four-tier system is wanted, that should be raised as its own explicit request, since it touches `app.js` and `index.html`, not just the question data.


## Scenario Family Expansion (This Session)

Following feedback that the first expansion's scenarios (typically 4-6 questions each) were a good direction but not yet the depth wanted, this session built full **scenario families**: connected, multi-page products where each page contributes several independent questions, functioning together as a miniature accessibility audit of one realistic product rather than a single isolated situation.

**4 scenario families were added, totaling 66 new questions** (bringing the running total from 342 to **408**):

- **Banking Portal** (20 questions) - Login, Account Dashboard, Transfer Funds, Statements, Chat Support. Includes a worked example of tracing four related timing/data findings on the Transfer Funds page back to one coordinated remediation, and a Chat Support finding correctly redirected toward a third-party vendor relationship rather than assumed to be fixable in-house.
- **Hospital Portal** (17 questions) - Appointment Scheduling, Medical Records, Prescription Refill, Telehealth Video Visit, Billing. Includes a worked example distinguishing 3.3.1 from 3.3.3 on the same error message, and a Level AAA reading-level finding applied deliberately to one high-stakes page (a billing dispute) rather than assumed irrelevant just because it's AAA.
- **University Registration Portal** (14 questions) - Course Search, Registration Cart, Financial Aid, Degree Audit, Campus Map. Includes two consecutive questions on the same progress-ring component, one correctly identifying that a criterion does *not* clearly apply, the next identifying a genuine, different violation on that same component - deliberately testing the discipline of not over-flagging.
- **Shopping Platform** (15 questions) - Product Browse, Product Detail, Cart, Checkout, Order Tracking. Includes a pair of consecutive cart questions testing the same criterion (3.2.2 On Input) against two similar-looking but differently-resolved interactions on the same page - one a non-violation, one a real violation - specifically to build the judgment skill of not treating every dynamic update as automatically suspect.

Each family spans multiple WCAG Principles and multiple question categories (not just Application questions repeated five times), and several families include deliberately paired questions that test recognizing when a criterion does *not* apply, not only when it does - since real audit judgment requires both skills.

**A mistake repeated from the first expansion, caught the same way:** the same "expert" difficulty-tier error from the first session's Architecture Note below happened again in this session's family files (11 instances this time). It was caught the same way, by running the schema validation pass before packaging, not before writing the content. On the first fix attempt, a plain string replace missed all 11 instances because these newer files were authored with slightly different JSON spacing (`"difficulty":"expert"` with no space after the colon, versus `"difficulty": "expert"` with a space in the first expansion file) - inconsistent formatting between the two expansion files that a naive search missed. The fix was redone with a spacing-tolerant pattern and re-verified at zero errors before packaging. This is recorded here because catching a mistake on the second pass, after already documenting the same mistake once, is worth being honest about rather than quietly re-fixing and moving on.

### Updated totals

- **Total questions: 408** (234 original + 108 first-session scenarios + 66 this session's families).
- **39 of 87 Success Criteria now have deep, scenario-based coverage** beyond baseline (up from 35), with all 4 families deliberately touching a mix of previously-covered and previously-baseline-only criteria.
- **11 question types represented**, same set as the first expansion, with Application, Remediation Planning, Recall, and Recognition now the largest categories given the family structure's page-by-page identify-then-fix rhythm.

### Verification performed before packaging

Identical discipline to the first expansion, re-run against the fully combined three-file dataset (`wcag-data.js` + `wcag-lab-expansion.js` + `wcag-lab-expansion-2.js`): all files pass syntax check; all 408 questions validated against the schema (valid domain, mode, difficulty, 4 choices, in-bounds answer, non-empty question/explanation, resolvable scNumber); zero duplicate IDs across all 408; zero duplicate question text; zero Success Criteria with no coverage; the actual `getAvailableQuestions()` filtering logic simulated against the full integrated array confirms every domain/mode combination returns questions and Sprint mode correctly pulls all 408.

### Still not the final destination

This session added depth (families) rather than raw breadth toward 1,200-1,500. Honestly stated, still remaining:

1. **48 of 87 Success Criteria** still have only their baseline 3 questions and no family or scenario coverage.
2. **Named industries not yet given their own family**: Social Media, Travel, Streaming Media, Restaurant Ordering, Authentication (as a dedicated family beyond the shorter scenario from the first expansion), Documents, Mobile Applications, Enterprise Applications/Dashboards, Forms (as their own family rather than folded into other families).
3. At 66 questions per session for a 5-page family, reaching the 1,200-1,500 range through this same family structure implies roughly 12-15 more families of similar depth - a realistic, multi-session roadmap, not a next-session finish line.

