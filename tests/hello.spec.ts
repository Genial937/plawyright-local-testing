import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const heading = page.getByRole('heading', { name: 'Hello world!' });
    await expect(heading).toHaveText('Hello world!');
});