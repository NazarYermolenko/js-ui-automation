const { WebDriverProvider } = require("../utils/web_driver_provider")
const { SearchPage } = require("../pages/search_page");


const { expect } = require('chai')


describe('Google search test', async () => {
    const item = "Google"
    let driver;

    before(() => {
        driver = new WebDriverProvider().getChromeDriver();
    });

    it(`should search for "${item}"`, async () => {
        let search_page = await new SearchPage(driver).open();
        let result_page = await search_page.searchFor(item);

        let link = await result_page.getFirstLink()

        expect(link.toLowerCase()).to.contain(item.toLowerCase())
    });

    after(async function () {
        await driver.quit()
    });
});