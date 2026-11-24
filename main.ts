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

// One fixed confession, 132 characters — inside the gate's 1–200 range: a specific
// act (Friday deploy, skipped tests, deleted users table), owned in active voice,
// landing on the last words.
const ENTRY =
  'ERROR: I pushed to production at 4:59 PM on a Friday, skipped the tests, and deleted the users table. The outage is mine. All of it.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
