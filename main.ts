import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review: a house cat files a one-star complaint about its human.
// The grievance is the food — cheap kibble for the cat, salmon for the
// human — and the sting lands in the last few words, where the cat's
// idea of justice is simply watching him sleep.
const ENTRY =
  "One star. He buys the cheap kibble, eats my salmon himself, and acts surprised when I watch him sleep.";

const MAX_CHARS = 200;

function main(): void {
  if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`,
    );
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (/[\r\n]/.test(ENTRY)) {
    throw new Error("entry must be a single line");
  }
  // The gate counts characters, and the leaderboard tie-break counts
  // bytes; ASCII here, so the two agree, but assert it anyway.
  if (Buffer.byteLength(ENTRY, "utf8") !== ENTRY.length) {
    throw new Error("entry must be plain ASCII so bytes equal characters");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");

  // Read the file back and verify what landed on disk is exactly the entry.
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY) {
    throw new Error(`read-back mismatch: ${outPath} differs from entry`);
  }
  console.log(ENTRY);
}

main();
