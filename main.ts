// Famous Last Words at 1 Percent — entry program.
// Writes one line: the phone's last words as its battery hits 1 percent.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Before I go: your screen time this week was 9 hours a day. I kept the receipts.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
