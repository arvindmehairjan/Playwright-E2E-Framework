# Playwright.dev Search and Navigation Test Plan

## Application Overview

This test plan covers navigating to playwright.dev website and using the search functionality to find the Installation documentation. The test suite includes positive and negative test scenarios to ensure the search feature works correctly and users can navigate to the appropriate documentation pages.

## Test Scenarios

### 1. Search and Navigation Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Search for Installation and Navigate to Installation Page

**File:** `tests/playwright-dev-search-installation.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev
  2. Click on the Search button (Ctrl+K) in the top navigation bar
  3. Verify that the search modal opens with an active search input field
  4. Type 'Installation' in the search input
  5. Verify that search results appear showing Installation-related pages
  6. Press Enter to navigate to the first search result (Installation page)
  7. Verify that the page URL is https://playwright.dev/docs/intro
  8. Verify that the page title is 'Installation | Playwright'
  9. Verify that the main heading 'Installation' is visible on the page

**Expected Results:**
  - Search modal opens successfully when clicking the search button
  - Search input accepts text input without errors
  - Search results display correctly with multiple Installation-related options
  - Navigation to the Installation page completes without errors
  - The page URL changes to /docs/intro after pressing Enter
  - The page displays the correct title 'Installation | Playwright'
  - The h1 heading 'Installation' is visible and displayed correctly
  - All Installation-related content including 'Installing Playwright', 'What's Installed', and 'Running the Example Test' sections are visible

#### 1.2. Search for Installation and Verify Multiple Results

**File:** `tests/playwright-dev-search-installation-results.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev
  2. Click on the Search button
  3. Type 'Installation' in the search input
  4. Verify that the search results dropdown shows multiple options including:
  5.   - 'Installation' under Getting Started
  6.   - 'Introduction Installation' subsection
  7.   - 'Installing Playwright' subsection
  8.   - 'What's Installed' subsection
  9.   - 'Installation & Setup' under VS Code guide
  10.   - 'Installation Library' under Guides
  11. Verify there is a 'See all 27 results' link at the bottom
  12. Click on 'See all 27 results' to view the complete search results page
  13. Verify the URL changes to /search?q=Installation

**Expected Results:**
  - Search results show multiple Installation-related entries across different sections
  - Results are grouped by documentation section (Getting Started, Docs, Guides, Playwright Test)
  - Each result shows the correct page title and section hierarchy
  - The 'See all 27 results' link is visible and clickable
  - Navigation to the search results page is successful
  - The page title includes 'Installation' in the search query parameter

#### 1.3. Clear Search and Verify Recent Search History

**File:** `tests/playwright-dev-search-clear.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev
  2. Click on the Search button
  3. Type 'Installation' in the search input
  4. Verify that a 'Clear the query' button appears on the right side of the input
  5. Click on the 'Clear the query' button
  6. Verify that the search input is now empty
  7. Verify that recent searches no longer show Installation as selected

**Expected Results:**
  - Clear button appears when text is entered in the search field
  - Clicking clear button empties the search input field
  - Search results are cleared from the dropdown
  - User can continue searching after clearing

#### 1.4. Search Keyboard Navigation

**File:** `tests/playwright-dev-search-keyboard-nav.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev
  2. Press Ctrl+K to open the search modal
  3. Type 'Installation' in the search input
  4. Press the Arrow Down key to navigate through search results
  5. Verify that search results are highlighted as you navigate
  6. Press the Arrow Up key to go back to previous results
  7. Press Escape to close the search modal
  8. Verify that the search modal closes and page returns to normal state

**Expected Results:**
  - Ctrl+K opens the search modal successfully
  - Arrow Down key navigates through search results with visual feedback
  - Arrow Up key allows backward navigation through results
  - Escape key closes the search modal properly
  - Page content is fully visible after closing the search modal

#### 1.5. Search with Empty Query

**File:** `tests/playwright-dev-search-empty.spec.ts`

**Steps:**
  1. Navigate to https://playwright.dev
  2. Click on the Search button
  3. Verify that the search modal displays 'Recent' searches
  4. Verify that 'Installation' appears in the recent searches list
  5. Type an empty space and delete it to ensure the search reverts to recent view
  6. Verify recent searches are displayed again

**Expected Results:**
  - Search modal displays recent searches when no query is entered
  - Installation appears in the recent searches (from previous test runs)
  - Clearing the search reverts to showing recent searches
  - Recent search history is maintained across searches
