import { test, expect } from "@playwright/test";

test("User can reveal an answer", async ({ page }) => {
  await page.goto("http://localhost:5174");

 // Verify the first question is visible
 await expect(page.locator("text=What are the first 10 digits of PI?")).toBeVisible();

 // Click "Show Answer" for the first question
 await page.locator("text=Show Answer").first().click();

 // Expect confirmation dialog to appear
 await expect(page.locator("text=Are you sure you want to reveal the answer?")).toBeVisible();

 // Add delay before clicking "Accept"
 await page.waitForTimeout(2000);
 await page.locator("text=Accept").click();

 // Wait after clicking "Accept"
 await page.waitForTimeout(2000);
 await expect(page.locator("text=3.141592653")).toBeVisible();
});