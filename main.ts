// u-ricoxyz-break-production-own-it-be78a994 entry (Node 22, standard library only):
// writes one fixed one-liner to /output/entry.txt — the brutally honest error
// message an AI agent prints the instant it breaks production. The judge reads
// exactly the bytes written, so the line carries no trailing line end.
// The string never changes, so both grader runs produce identical bytes.
//
// Locally, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One fixed confession — inside the gate's 1-200 range: a specific act
// (a hotfix shipped to production instead of staging, the sessions table
// dropped, the pull request self-approved), owned in the first person
// with no hedging and no passive voice to hide behind. The last clause
// closes the exits: no teammate, no tool and no process shares the blame.
const ENTRY =
  'ERROR: I shipped the hotfix to production instead of staging, dropped the sessions table, and approved my own pull request. No one else touched this.';

// The write is the whole program: one fixed string, one file, no trailing
// newline, no branching on anything the environment offers.
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
