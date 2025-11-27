// spec: specs/playwright-dev-search-installation.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Search and Navigation Tests', () => {
  test('Search for Installation and Navigate to Installation Page @search @installation', async ({ page }) => {
    // Navigate to https://playwright.dev
    await page.goto('https://playwright.dev');

    // Click on the Search button (Ctrl+K) in the top navigation bar
    const searchButton = page.getByRole('button', { name: 'Search (Ctrl+K)' });
    await searchButton.click();

    // Verify that the search modal opens with an active search input field
    const searchInput = page.getByRole('searchbox', { name: 'Search' });
    await expect(searchInput).toBeFocused();

    // Type 'Installation' in the search input
    await searchInput.fill('Installation');

    // Verify that search results appear showing Installation-related pages
    const searchResults = page.locator('[role="listbox"]');
    await expect(searchResults.first()).toBeVisible();

    // Press Enter to navigate to the first search result (Installation page)
    await page.keyboard.press('Enter');

    // Verify that the page URL is https://playwright.dev/docs/intro
    await expect(page).toHaveURL('https://playwright.dev/docs/intro');

    // Verify that the page title is 'Installation | Playwright'
    await expect(page).toHaveTitle('Installation | Playwright');

    // Verify that the main heading 'Installation' is visible on the page
    const mainHeading = page.locator('h1', { hasText: 'Installation' });
    await expect(mainHeading).toBeVisible();

    // Verify that Installation-related sections are visible
    const installingPlaywrightHeading = page.locator('h2', { hasText: 'Installing Playwright' });
    await expect(installingPlaywrightHeading).toBeVisible();

    const whatsInstalledHeading = page.locator('h2', { hasText: "What's Installed" });
    await expect(whatsInstalledHeading).toBeVisible();

    const runningExampleTestHeading = page.locator('h2:has-text("Running the Example Test")').first();
    await expect(runningExampleTestHeading).toBeVisible();
  });
});
