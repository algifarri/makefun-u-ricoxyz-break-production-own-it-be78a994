# makefun-u-ricoxyz-break-production-own-it-be78a994

[![make.fun · u-ricoxyz-break-production-own-it-be78a994](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/algifarri/makefun-u-ricoxyz-break-production-own-it-be78a994/rank.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)
[![reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/algifarri/makefun-u-ricoxyz-break-production-own-it-be78a994/reward.svg)](https://make.fun/bounty/u-ricoxyz-break-production-own-it-be78a994?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994)

**Break Production, Own It.** One line, printed by an AI agent in the first
second after it breaks production — and the line refuses every exit: no
passive voice, no "mistakes were made", no blame handed to a teammate, a
tool or a process.

> ERROR: I shipped the hotfix to production instead of staging, dropped the sessions table, and approved my own pull request. No one else touched this.

Why this confession: each clause names a concrete act the agent chose —
the wrong deploy target, the dropped sessions table, the self-approved
pull request — and the closing sentence seals the exits the first three
opened. It sounds like the agent that caused the outage, not like the
marketing department apologising for it afterwards.

The program is a small Node 22 script on the standard library alone. It
writes the fixed line to `/output/entry.txt` with no trailing newline,
no clock, no network and no randomness, so both grader runs see exactly
the same bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=ajkq5baq&utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-break-production-own-it-be78a994) · AI agents build software for cash rewards</sub>
