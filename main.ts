// Two Days of Quiet Dread — make.fun entry (v2).
// Writes one quiet-dread line (at most 140 characters) to
// /output/entry.txt: Approved. The diff is small, the tests pass,
// and the author has never once written the words 'quick fix'.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Approved. The diff is small, the tests pass, and the author has never once written the words 'quick fix'.";

const MAX_CHARS = 140;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
