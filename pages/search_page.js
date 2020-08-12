const { BasePage} =require("./base_page")
const { ResultPage } =require("./result_page")
const { By, Key } = require("selenium-webdriver")


const GOOGLE_URL = "https://google.com";

const SEARCH_FIELD = By.xpath("//input[@name='q']")


class SearchPage extends BasePage {
    constructor(driver) {
        super(driver);
    }

    async open() {
        super.open(GOOGLE_URL);
        return this;
    }

    async searchFor(text){
        let searchField = await this.getElementBy(SEARCH_FIELD);
        await searchField.sendKeys(text, Key.ENTER)
        return new ResultPage(this.driver);
    }
}

module.exports = { SearchPage }