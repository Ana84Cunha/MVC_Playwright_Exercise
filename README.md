# TodoMVC Playwright Exercise

A small UI automation exercise using Playwright and JavaScript to practise browser interactions, assertions and Allure reporting.

## Exercise flow

The test opens the TodoMVC React application and follows a task management journey:

- Check the application URL.
- Create a task using today's date and verify its text.
- Create a second task using tomorrow's date.
- Mark the first task as completed and check its completed state.
- Mark the second task as completed, then delete it.

## Tools

- Playwright Test
- JavaScript
- Allure Playwright reporter

The configuration includes Chromium and Firefox.

## Setup

You need Git, Node.js and npm installed.

Clone the repository:

```bash
git clone https://github.com/Ana84Cunha/MVC_Playwright_Exercise.git
cd MVC_Playwright_Exercise
```

Install the project dependencies:

```bash
npm ci
```

Install the browsers configured for the tests:

```bash
npx playwright install chromium firefox
```

## Run the test

```bash
npm test
```

To run with a visible browser:

```bash
npm test -- --headed
```

## Allure reporting

The configured reporter writes test results to `allure-results/`.

Generating and opening the HTML report requires Java and the Allure command-line tool to be installed and available in your PATH.

After running the test:

```bash
npm run allure:generate
npm run allure:open
```

## Project structure

- `tests/MVC_Exercise.spec.js` — the automated test.
- `playwright.config.js` — browser, retry and reporter configuration.
- `package.json` — dependencies and execution scripts.
- `allure-results/` — generated test results.
- `allure-report/` — generated HTML report.

## Scope and limitations

This is a learning exercise containing one UI test flow.

It depends on an externally hosted demo application, so changes to that application can affect execution.

Further improvements include a more precise deletion assertion, locators that rely less on item position, and additional independent test scenarios.
