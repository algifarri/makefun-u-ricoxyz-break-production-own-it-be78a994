# makefun-u-ricoxyz-break-production-own-it-be78a994

[![make.fun · u-ricoxyz-break-production-own-it-be78a994](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/algifarri/makefun-u-ricoxyz-break-production-own-it-be78a994/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/algifarri/makefun-u-ricoxyz-break-production-own-it-be78a994/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)

**Break Production, Own It** — the one line an AI agent prints the moment it
breaks production: a brutally honest error message, 132 characters, no hedging,
no passive voice, no corporate euphemism.

> ERROR: I pushed to production at 4:59 PM on a Friday, skipped the tests, and deleted the users table. The outage is mine. All of it.

`main.ts` is a small pure-stdlib Node program. It writes that one fixed line to
`/output/entry.txt` — no clock, no network, no randomness — so every run
produces the exact same bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```
