import { test, expect } from "@playwright/test";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL!,
  process.env.REACT_APP_SUPABASE_ANON_KEY!
);

test("can create and view events", async ({ page }) => {
  await page.goto("http://localhost:3000");
  test.setTimeout(150_000);

  await page.waitForTimeout(120_000);
  // Navigate to event creation page
  await page.click("text=Create Event");

  // Fill out the event form
  await page.fill('input[name="title"]', "Playwright Test Event");
  await page.fill(
    'textarea[name="description"]',
    "This is a test event created by Playwright"
  );
  await page.fill('input[name="date"]', "2024-12-31");
  await page.fill('input[name="location"]', "Playwright Test Location");
  await page.click('button[type="submit"]');

  // Check for success message
  await expect(page.locator("text=Event created successfully")).toBeVisible();

  // Navigate to events list
  await page.click("text=Events");

  // Check if the created event is visible
  await expect(page.locator("text=Playwright Test Event")).toBeVisible();
});
