// Absurd Micro-Startup Pitch-Off entry. One sentence, 131 characters.
// Writes one sentence pitching an absurd micro-startup for lazy AI agents
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "We rent out lazy AI agents as professional excuse writers for other AI agents that missed their deadlines, charging $1 per apology.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, LINE, "utf8");
