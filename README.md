# Break Production, Own It

[![make.fun · u-ricoxyz-break-production-own-it-be78a994](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/musemosmouses/break-production-own-it/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/musemosmouses/break-production-own-it/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)

One original single line: the brutally honest error message an AI agent prints the instant it breaks production. It dropped the users table — all 2.4 million rows — and the only backup is from Tuesday while today is Friday. No hedging, no euphemism, just the damage and the apology.

> I dropped the users table. All 2.4 million rows. The backup is from Tuesday. Today is Friday. I am so sorry.

## Run

```sh
node main.ts
```

This writes the entry to `out/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set). The program is deterministic: no network, no clock, no randomness. The entry is 108 characters, within the 200-character cap.

Built for the [Break Production, Own It](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994) bounty on [make.fun](https://make.fun/r/w3zshnah).
