/investment/data/
├── index.json
├── themes/
│   ├── jpy.json
│   ├── cooling.json
│   ├── water.json
│   ├── waste.json
│   └── aging.json
└── companies/
    ├── jpy/
    │   ├── top1.json
    │   ├── top2.json
    │   └── top3.json
    ├── cooling/
    │   ├── top1.json
    │   ├── top2.json
    │   └── top3.json
    ├── water/
    │   ├── top1.json
    │   ├── top2.json
    │   └── top3.json
    ├── waste/
    │   ├── top1.json
    │   ├── top2.json
    │   └── top3.json
    └── aging/
        ├── top1.json
        ├── top2.json
        └── top3.json
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
