import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I lost my $18 taxi receipt, so I took a $22 cab to the office to print a copy. Finance approved the $22 cab and rejected the $18 taxi.";
// One line, 134 characters: the proof costs more than the thing proved.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
