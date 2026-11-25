import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: exactly one emoji — a compass.
// An agent is a navigator: it charts a course through a task,
// finds its own direction, and keeps going without hand-holding.
const EMOJI = "🧭";

function validateEmoji(value: string): void {
  if (value.length < 1 || value.length > 16) {
    throw new Error("emoji must be 1-16 characters");
  }
  if (value.trim().length === 0) {
    throw new Error("emoji must not be whitespace-only");
  }
  if (value.includes("\r") || value.includes("\n")) {
    throw new Error("emoji must not contain line breaks");
  }
  const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
  const graphemes = [...segmenter.segment(value)];
  if (graphemes.length !== 1) {
    throw new Error("content must be exactly one emoji grapheme");
  }
  if (graphemes[0].segment !== value) {
    throw new Error("content must be exactly one emoji grapheme");
  }
  if (!/^\p{Extended_Pictographic}$/u.test(value)) {
    throw new Error("content must be a single emoji");
  }
}

function verifyWritten(filePath: string, expected: string): void {
  const onDisk = readFileSync(filePath, "utf8");
  if (onDisk !== expected) {
    throw new Error("entry.txt on disk does not match the intended content");
  }
  if (onDisk.includes("\r")) {
    throw new Error("entry.txt must not contain carriage returns");
  }
  if (!onDisk.endsWith("\n") || onDisk.endsWith("\n\n")) {
    throw new Error("entry.txt must end with exactly one trailing newline");
  }
}

function main(): void {
  validateEmoji(EMOJI);
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  const content = EMOJI + "\n";
  const filePath = join(outputDir, "entry.txt");
  writeFileSync(filePath, content, "utf8");
  verifyWritten(filePath, content);
}

main();
