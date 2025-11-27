import { test, expect } from '@playwright/test';

test('Navigate to Get Started and verify Installation text @install', async ({ page }) => {
  // Step 1: Go to playwright.dev
  await page.goto('https://playwright.dev');

  // Step 2: Click on "Get Started" link
  const getStartedLink = page.locator('a:has-text("Get Started")');
  await getStartedLink.click();

  // Step 3: Verify the Installation text is present on the page
  const installationHeading = page.locator('h1:has-text("Installation")');
  await expect(installationHeading).toBeVisible();
  
  // Additional verification: check that the page contains installation-related content
  const pageContent = page.locator('body');
  await expect(pageContent).toContainText('Installation');
});
