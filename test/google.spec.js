import {test, test as it, expect} from '@playwright/test'


test.describe("Using the Google search engine", () => {
    it("Go to the site" , async({page}) => {
        await page.goto("https://www.google.com")
    })
    it("Enter search field with random texts", async({page}) => {
        await page.locator('#APjFqb').fill("salesforce")
    })
    it("Click the search button", async({page}) => {
        await page.getByRole('button', {name: 'Google Search'})
    })
})