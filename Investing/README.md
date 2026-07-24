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
