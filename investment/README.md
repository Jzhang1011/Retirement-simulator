# WealthLanding Investment Fix Packet

Upload this folder structure under `/investment/`:

- `index.html`
- `theme.html`
- `thesis_template.html`
- `company.html`
- `data/index.json`
- `data/themes/jpy.json`
- `data/companies/` (place approved company JSON files here)

Important:
- Use lowercase `/investment/` consistently.
- The homepage reads `./data/index.json`.
- The theme page reads `./data/themes/jpy.json`.
- Company links are now generated from `company_review.company_slug`; Nintendo is not hard-coded.
- `data/index.json` must use `themes` and `companies`, not the older `theses` array.
