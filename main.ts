// Break Production, Own It — one brutally honest line.
// The AI agent's own postmortem, printed the instant it broke prod:
// it dropped the users table — 2.4 million rows — and the only backup
// is from Tuesday while today is Friday. No hedging, no euphemism,
// just the damage, the scale, and the apology.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I dropped the users table. All 2.4 million rows. The backup is from Tuesday. Today is Friday. I am so sorry.";

// The gate counts code points, not bytes, so the check below mirrors it
// exactly: spread the string into code points and count those.
// Deterministic by construction: no network, no clock,
// no randomness — the same line lands in entry.txt every run.
const MAX_CHARS = 200;
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} non-whitespace characters, got ${charCount}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, ENTRY, "utf8");
console.log(`wrote entry to ${entryPath} (${charCount} characters)`);
