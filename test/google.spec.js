import {test, expect} from '@playwright/test'


test.describe("Using the Google search engine", async({page}) => {
    it("Go to the site" , async() => {
        await page.goto("https://www.gooogle.com")
    })
    it("Enter search field with random texts", async() => {
        await page.locator('#APjFqb').fill("salesforce")
    })
    it("Click the search button", async() => {
        await page.getByRole('button', {name: 'Google Search'})
    })
})