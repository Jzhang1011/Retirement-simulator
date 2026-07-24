# WealthLanding Thesis Template

## Recommended structure

```
investing/
├── thesis_template.html
└── data/
    └── latest/
        ├── jpy.json
        ├── ai.json
        ├── luxury.json
        └── housing.json
```

## Three ways to select a thesis

### 1. Change one HTML value

At the opening `<body>` tag:

```html
<body data-thesis="jpy">
```

Change only `jpy` to `ai`, `luxury`, or another JSON filename.

### 2. Reuse the same HTML with a URL parameter

```
thesis_template.html?thesis=jpy
thesis_template.html?thesis=ai
thesis_template.html?thesis=luxury
```

This requires no HTML changes.

### 3. Pass a complete JSON path

```
thesis_template.html?data=/InvestmentReports/theses/latest/jpy.json
```

The `data` parameter overrides the default folder and thesis slug.

## Default configuration

Near the bottom of the HTML:

```javascript
const THESIS_CONFIG = {
  defaultThesis: document.body.dataset.thesis || 'jpy',
  dataBasePath: './data/latest',
  fileExtension: '.json'
};
```

Change `dataBasePath` once if the JSON files are hosted elsewhere.

## Important

Serve the page from a web server. Browser security commonly blocks `fetch()` when opening an HTML file directly with `file://`.
