import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { extractMetrics } from "./capture/extractMetrics.ts";
import type { PageBaseline } from "./types/layout.ts";

async function generateBaseline() {
  const targetUrl = "https://google.com"; // Replace with the target URL for baseline capture
  const viewport = { width: 1280, height: 800 };

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.setViewportSize(viewport);
  await page.goto(targetUrl, { waitUntil: "networkidle" });

  // key selectors to monitor for structural changes
  const targetSelectors = [
    "h2",
    "p",
    "a",
    "img",
    "div",
    "span",
    "header",
    "footer",
    "nav",
    "section",
    "article",
    "aside",
    "main",
    "form",
    "input",
    "button",
  ];
  const metrics = await extractMetrics(page, targetSelectors);

  const baselineData: PageBaseline = {
    url: targetUrl,
    timestamp: new Date().toISOString(),
    viewport: viewport,
    elements: metrics,
  };

  const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
  const outlineDir = path.join(currentDirectory, "../baselines");
  if (!fs.existsSync(outlineDir)) {
    fs.mkdirSync(outlineDir, { recursive: true });
  }
  const filePath = path.join(outlineDir, "baseline.json");
  fs.writeFileSync(filePath, JSON.stringify(baselineData, null, 2));

  console.log(
    `Baseline captured successfully! Saved ${baselineData.elements.length} element`,
  );
  await browser.close();
}
generateBaseline().catch(console.error);
