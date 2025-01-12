import{test , expect} from '@playwright/test'

test('ui_Automation_MVC', async ({ page }) => {
    // 1. Go to website page
    await page.goto('https://todomvc.com/examples/react/dist/');
    
    // 2. Confirm that you are in the correct URL
    const url = 'https://todomvc.com/examples/react/dist/';
    await expect(page).toHaveURL(url);// Asserts that the page's URL matches the expected URL
    
    // 3. Add a TODO item with the text “TODO 1 - ” concatenated with the current date.
    const inputField = page.locator('#todo-input');
    const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in ISO format (YYYY-MM-DD)

    await inputField.fill('TODO 1 - ' + currentDate);
    await inputField.press('Enter');

    // 4. Verify that the new to-do item appears in the list
    const todoItemLabel = page.locator('.todo-list li .view label');
    await expect(todoItemLabel).toHaveText('TODO 1 - ' + currentDate);

    //5. Add a TODO item with the text “TODO 2 - ” concatenated with the next day (tomorrow)
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1); // Get the next day's date
    const tomorrowDateString = tomorrowDate.toISOString().split('T')[0]; // Format the date as YYYY-MM-DD
    await inputField.fill('TODO 2 - ' + tomorrowDateString);
    await inputField.press('Enter');

    //6. Mark the current date TODO item as completed.
    const currentDateToDoCheckbox = page.locator('.todo-list li .view input.toggle');
    await currentDateToDoCheckbox.first().check(); // Check the first checkbox to mark the first to-do item as completed

    // 7. Verify that the item is displayed as completed (e.g., struck-through text)
    const completedToDoItem = page.locator('.todo-list li.completed .view label');
    await expect(completedToDoItem).toHaveText('TODO 1 - ' + currentDate);

    //8.Delete the TODO 2 item.
    const todo2 = page.locator('.todo-list li .view label').nth(1);
    await expect(todo2).toHaveText('TODO 2 - ' + tomorrowDateString);

    const todo2Checkbox = page.locator('.todo-list li .view input.toggle').nth(1);
    await todo2Checkbox.check(); // Check the second checkbox to mark the second to-do item as completed

    //9. Hover over the second to-do item to make the destroy button visible and click it
    const destroyButton = page.locator('.todo-list li .view button.destroy').nth(1);
    await destroyButton.hover();
    await destroyButton.click();

    //10. Verify that the second to-do item is removed from the list
    await expect(page.locator('.todo-list li .view label')).not.toHaveText('TODO 2 - ' + tomorrowDateString);
});