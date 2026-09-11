import type { Page } from "playwright";
import type { ElementMetrics } from "../types/layout.ts";

export async function extractMetrics(
  page: Page,
  selectors: string[],
): Promise<ElementMetrics[]> {
  const metrics: ElementMetrics[] = [];
  for (const selector of selectors) {
    const locator = page.locator(selector);
    const count = await locator.count();

    for (let i = 0; i < count; i++) {
      const element = locator.nth(i);
      const box = await element.boundingBox();

      if (box) {
        const { id, tagName } = await element.evaluate((el: Element) => ({
          id: el.getAttribute("id"),
          tagName: el.tagName.toLowerCase(),
        }));
        metrics.push({
          id: `${id || ""}-${i}`,
          selector: selector,
          tagName: tagName,
          boundingBox: {
            x: Math.round(box.x),
            y: Math.round(box.y),
            width: Math.round(box.width),
            height: Math.round(box.height),
          },
        });
      }
    }
  }
  return metrics;
}
