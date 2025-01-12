# TodoMVC Playwright Exercise

This repository contains an automated test script for **UI testing** of the TodoMVC application using **Playwright**.

## 📝 Challenge Overview

The goal of this exercise is to perform the following steps on the [TodoMVC](https://todomvc.com/examples/react/dist/) application:

1. Navigate to the TodoMVC page and confirm that the URL is correct.
2. Add a TODO item with the text:
   - `"TODO 1 - "` concatenated with the current date.
3. Verify that the TODO item appears in the list.
4. Add another TODO item with the text:
   - `"TODO 2 - "` concatenated with tomorrow's date.
5. Mark the current date TODO item (`TODO 1`) as **completed**.
6. Verify that the completed item is displayed as **struck-through**.
7. Delete the `TODO 2` item (tomorrow's date).
8. Verify that the deleted item is removed from the list.
9. Generate a **test report** summarizing the test results using **Allure**.

---

## 🚀 Features

- **Test Framework**: [Playwright](https://playwright.dev/)
- **Assertions**: Ensures correct functionality through robust checks.
- **Test Reporting**: Generates detailed test reports using [Allure](https://docs.qameta.io/allure/).
- **Dynamic Data**: Uses current and next day's dates to create unique TODO items.

---

## 📂 Project Structure

- **`tests/`**: Contains the Playwright test scripts.
- **`playwright.config.js`**: Playwright configuration file, specifying browser settings, test retries, reporting, and more.
- **`my-allure-results/`**: Folder for Allure test results.
- **`README.md`**: Project documentation (you are reading it now).

---

## 🛠 Setup and Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/Playwright_Exercises.git
   cd Playwright_Exercises
