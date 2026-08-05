WealthLanding Investing System — File Map and Handoff
1. System overview

The investing system has two separate parts:

ChatGPT Project
Stores research instructions, thesis logic, scenario models, catalysts, and scanner prompts.
Produces the weekly Markdown review and JSON output.
WealthLanding website
Stores the pages and published JSON files.
Reads the JSON and displays the current investment research.
ChatGPT Project research files
        ↓
Weekly scanner prompt
        ↓
Markdown review + JSON output
        ↓
Human review and approval
        ↓
WealthLanding /Investing/data/
        ↓
Website dashboard and thesis pages
2. ChatGPT Project files

These files belong in the ChatGPT Investment OS Project Sources.

They should not be uploaded to the public WealthLanding website.

A. Shared Investment OS files

These files apply to every investment theme.

00_CORE__01_analyst_instructions.md
00_CORE__02_investment_methodology.md
00_CORE__03_thesis_review_schema.json
00_CORE__04_decision_brief_template.md
00_CORE__05_scanner_execution_prompt.md
00_CORE__06_json_validation_rules.md
00_CORE__07_theme_registry.md
00_CORE__08_investment_os_specification.md
File purposes
00_CORE__01_analyst_instructions.md
Defines the analyst role.
Defines source priorities.
Defines material-change rules.
Defines writing standards.
00_CORE__02_investment_methodology.md
Defines the reasoning process.
Uses:
Evidence
Assumption
Scenario
Opportunity
Decision
Prevents price movement from being treated as evidence.
00_CORE__03_thesis_review_schema.json
Defines the required JSON structure.
Used for validation before publishing.
00_CORE__04_decision_brief_template.md
Defines the human-readable Markdown review.
00_CORE__05_scanner_execution_prompt.md
Runs the weekly scan.
Tells ChatGPT which files to load.
Requires a Markdown and JSON output.
00_CORE__06_json_validation_rules.md
Checks required fields.
Checks valid status values.
Checks scenario probabilities.
Checks source and date requirements.
00_CORE__07_theme_registry.md
Lists all active themes.
Lists the files associated with each theme.
Tracks review cadence and status.
00_CORE__08_investment_os_specification.md
Defines the complete operating system.
Defines lifecycle states:
Idea
Monitor
Deep dive
Valuation review
Watchlist
Portfolio candidate
Owned
Reduce
Exit

Your existing analyst instructions and methodology already provide the core reasoning and evidence rules.

B. Theme research files

Each theme should have its own file prefix.

Example:

AGING__
JPY__
COOLING__
WATER__
WASTE__
NINTENDO_JPY__
Standard theme package
THEME__01_thesis.md
THEME__02_assumption_map.md
THEME__03_scenario_model.md
THEME__04_catalyst_and_trigger_map.md
THEME__05_monitoring_indicators.md
THEME__06_pattern_recognition.md
THEME__07_opportunity_playbook.md
THEME__08_subtheme_deep_dives.md
THEME__09_valuation_framework.md
THEME__10_weekly_review_prompt.md
File purposes
01_thesis.md
Defines the investment thesis.
Defines the time horizon.
Defines success and failure conditions.
02_assumption_map.md
Lists the assumptions that must remain true.
Connects evidence to the thesis.
03_scenario_model.md
Defines:
Bull
Fair
Bear
Defines the triggers that move the thesis between scenarios.
04_catalyst_and_trigger_map.md
Lists positive and negative catalysts.
Defines which news events should be scanned.
05_monitoring_indicators.md
Lists indicators and their importance.
Defines which assumptions each indicator affects.
06_pattern_recognition.md
Identifies combinations of signals.
Helps distinguish a single event from a structural pattern.
07_opportunity_playbook.md
Identifies sectors, asset types, and company categories.
Defines screening criteria.
08_subtheme_deep_dives.md
Provides deeper analysis for each research area.
Prevents broad categories from becoming vague recommendations.
09_valuation_framework.md
Defines valuation measures.
Defines what would make an opportunity attractive or expensive.
10_weekly_review_prompt.md
Optional theme-specific instructions.
Used only when the universal scanner prompt needs theme-specific guidance.
C. Current JPY files

These belong in the ChatGPT Project.

JPY__01_thesis.md
JPY__02_assumption_map.md
JPY__03_monitoring_indicators.md
JPY__04_pattern_recognition.md
JPY__05_boj_policy_playbook.md
JPY__06_investment_opportunities.md

They currently define the JPY thesis, assumptions, BOJ policy logic, indicators, patterns, and opportunity areas.

Recommended JPY additions
JPY__07_scenario_model.md
JPY__08_catalyst_and_trigger_map.md
JPY__09_valuation_framework.md
JPY__10_weekly_review_prompt.md
D. Integrated opportunity files

These combine multiple theses into one investment opportunity.

Example:

NINTENDO_JPY__01_thesis.md
NINTENDO_JPY__02_assumption_map.md
NINTENDO_JPY__03_regime_model.md
NINTENDO_JPY__04_catalyst_map.md
NINTENDO_JPY__05_company_deep_dive.md
NINTENDO_JPY__06_valuation_framework.md
NINTENDO_JPY__07_invalidation_conditions.md
NINTENDO_JPY__08_weekly_review_prompt.md

These files should reference base themes instead of copying them.

JPY thesis
        +
Nintendo company thesis
        +
Japan governance thesis
        ↓
NINTENDO_JPY integrated opportunity
3. Weekly outputs from ChatGPT

These are generated during each scan.

They are not permanent project knowledge files.

Human review output
AGING__weekly_review_2026-08-05.md
JPY__weekly_review_2026-08-05.md
NINTENDO_JPY__weekly_review_2026-08-05.md

Purpose:

Review the reasoning.
Review the sources.
Approve the scenario.
Approve the CTA.
Edit before publication.
Website JSON output
aging.2026-08-05.json
jpy.2026-08-05.json
nintendo-jpy.2026-08-05.json

Purpose:

Preserve historical reviews.
Feed the WealthLanding page.
Support future API automation.
Latest JSON output
aging.json
jpy.json
nintendo-jpy.json

Purpose:

Powers the live WealthLanding page.
Contains only the latest approved review.
4. WealthLanding website files

These belong in the WealthLanding website repository.

The current structure is:

/Investing/
  index.html
  thesis_template.html
  README.md

  /data/
    index.json
    jpy.json

This matches the structure described in the current README.

A. /Investing/index.html

Purpose:

Main investment research hub.
Loads the thesis manifest.
Loads every published JSON file.
Displays:
active theses
thesis health
opportunities
risks
next decision points
recent reviews

The current page already loads ./data/index.json and then loads each thesis JSON file.

Keep
JSON-driven structure.
Thesis dashboard.
Opportunity dashboard.
Watch radar.
Latest reviews.
Search bar.
Google Analytics.
Future updates
Add scenario probabilities.
Add decision lifecycle state.
Add confluence or return-engine count.
Add catalyst status.
Rename opportunities if desired.
B. /Investing/thesis_template.html

Purpose:

Reusable thesis detail page.
Uses the ?thesis= parameter.
Loads the selected JSON file.

Example:

/Investing/thesis_template.html?thesis=jpy

The current template loads:

./data/{thesis}.json

and renders the thesis health, scorecard, opportunities, decision points, watch items, and avoid list.

Keep
One template for all theses.
Query-parameter loading.
Dynamic JSON rendering.
Error handling.
Reusable opportunity cards.
Future updates
Add scenario section.
Add catalyst timeline.
Add return engines.
Add decision state.
Add CTA and required next action.
Add source links.
Add review history.
C. /Investing/data/index.json

Purpose:

Manifest of all live thesis JSON files.
Tells the hub which files to load.

Current content:

{
  "schema_version": "1.0",
  "updated": "2026-07-24",
  "theses": [
    "jpy.json"
  ]
}

Add a theme

Example:

{
  "schema_version": "1.0",
  "updated": "2026-08-05",
  "theses": [
    "jpy.json",
    "aging.json",
    "cooling.json",
    "water.json",
    "waste.json",
    "nintendo-jpy.json"
  ]
}
D. /Investing/data/jpy.json

Purpose:

Current approved JPY review.
Powers the JPY thesis page.
Powers JPY cards on the main hub.

It currently includes:

thesis metadata
review dates
status
thesis health
decision
developments
scorecard
opportunities
risks
decision points
research questions
sources
publication status

Keep
thesis
review
status
thesis_health
material_change
scorecard
risks
next_decision_points
sources
publication
Update

Add:

scenario_model
catalysts
decision.state
decision.previous_state
decision.required_actions
developments.source_ids
opportunities.return_engines
opportunities.valuation
opportunities.next_action
opportunities.detail_url
E. Future website JSON files
/Investing/data/aging.json
/Investing/data/cooling.json
/Investing/data/water.json
/Investing/data/waste.json
/Investing/data/nintendo-jpy.json
/Investing/data/sk-hynix-korea.json

Each file should follow the same shared schema.

5. Recommended future website folders

These are not required immediately.

/Investing/
  index.html
  thesis_template.html
  opportunity_template.html
  pipeline.html
  README.md

  /data/
    index.json
    jpy.json
    aging.json
    cooling.json
    water.json
    waste.json
    nintendo-jpy.json

  /history/
    /jpy/
      jpy.2026-07-23.json
      jpy.2026-08-05.json

    /aging/
      aging.2026-08-05.json
opportunity_template.html

Future purpose:

Displays company-level or subtheme deep dives.
Example:
Nintendo
Medical devices
Home-care technology
Water infrastructure
pipeline.html

Future purpose:

Displays the decision lifecycle.
Idea
Monitor
Deep dive
Valuation review
Watchlist
Portfolio candidate
Owned
Reduce
Exit
/history/

Future purpose:

Stores older approved JSON files.
Supports charts and decision history.
Does not replace the current live file.
6. File relationships
Research relationship
00_CORE__analyst_instructions.md
00_CORE__investment_methodology.md
00_CORE__scanner_execution_prompt.md
                    ↓
           Theme research files
                    ↓
          Weekly scanner execution
Output relationship
Weekly scanner execution
        ↓
THEME__weekly_review_DATE.md
THEME.DATE.json
        ↓
Human approval
        ↓
THEME.json
Website relationship
/Investing/data/index.json
        ↓
Lists all live thesis JSON files
        ↓
/Investing/index.html loads them
/Investing/thesis_template.html?thesis=jpy
        ↓
Loads /Investing/data/jpy.json
Opportunity relationship
Base theme JSON
        ↓
Opportunity records
        ↓
Hub opportunity dashboard
        ↓
Future opportunity detail page
7. What belongs where
File type	ChatGPT Project	WealthLanding
Analyst instructions	Yes	No
Investment methodology	Yes	No
Scanner prompts	Yes	No
Thesis knowledge files	Yes	No
Assumption maps	Yes	No
Scenario models	Yes	No
Catalyst maps	Yes	No
Monitoring indicators	Yes	No
Valuation frameworks	Yes	No
Weekly Markdown review	Temporary output	Optional archive
Approved latest JSON	Optional reference	Yes
Historical JSON	Optional reference	Yes
index.html	No	Yes
thesis_template.html	No	Yes
data/index.json	No	Yes
Website README	No	Yes
8. Manual publishing workflow
1. Run the theme scanner in ChatGPT.

2. Review the Markdown output.

3. Review and edit the JSON.

4. Validate the JSON against:
   00_CORE__03_thesis_review_schema.json

5. Change publication status to approved.

6. Save the latest file as:
   /Investing/data/theme.json

7. Save a historical copy as:
   /Investing/history/theme/theme.DATE.json

8. Add the theme filename to:
   /Investing/data/index.json

9. Upload or commit the files.

10. Open the page and verify:
    /Investing/thesis_template.html?thesis=theme
9. Future API workflow
Scheduled scan
        ↓
JSON generation
        ↓
Schema validation
        ↓
Human approval
        ↓
API upload
        ↓
Database or JSON storage
        ↓
WealthLanding page refresh

The website should remain a display layer.

The scanner and research logic should remain outside the website.


# WealthLanding Investing Platform v1.0

Upload this structure exactly:

```
/Investing/
  index.html
  thesis_template.html
  /data/
    index.json
    jpy.json
```

## URLs

- Hub: `/Investing/index.html`
- JPY: `/Investing/thesis_template.html?thesis=jpy`

## Add a thesis

1. Add `data/ai.json`.
2. Add `"ai.json"` to `data/index.json`.
3. Open `thesis_template.html?thesis=ai`.

The hub accepts either `"ai.json"` or `"./data/ai.json"` in the manifest. Simple filenames are recommended.

There is no `latest` subfolder and no embedded demo data. Missing or invalid JSON produces a visible production error.

Rank	Scanner	Primary engine	Second engine	Hedge characteristic
1	Japan asymmetric opportunities	Weak yen/export earnings	Governance, value realization, cash-rich companies	Yen reversal and defensive franchises
2	Nintendo	Switch 2 and software cycle	IP monetization and balance-sheet value	Consumer entertainment, cash, lower AI correlation
3	AI power and grid	AI electricity demand	Grid replacement and electrification	Essential infrastructure
4	Defense and security	Higher military spending	Production scarcity and export share gains	Government-funded, less economically sensitive
5	Nuclear and fuel cycle	Data-center power demand	Energy security and decarbonization	Long-duration contracted demand
6	Korea strategic industries	AI memory and advanced manufacturing	Korea discount/governance reform	Sector diversification, but weak recession protection
7	Critical minerals	AI, grids, electrification	National security and supply-chain reshoring	Scarcity hedge, but economically cyclical
8	China asymmetric recovery	Policy-supported recovery	Depressed valuations and shareholder returns	Valuation cushion, but high structural uncertainty
9	Pure AI compute	AI demand	Operating leverage and platform control	Little genuine hedge
10	Batteries and EV supply chain	EV and storage growth	Reshoring incentives	Weak pricing protection and strong China competition
