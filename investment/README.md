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
