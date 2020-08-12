const { BasePage } = require("./base_page");
const { By } = require("selenium-webdriver")


const FIRST_LINK = By.xpath("//div[@id='search']//a/h3[1]")

class ResultPage extends BasePage {
    constructor(driver) {
        super(driver)
    }

    async getFirstLink() {
        let first_link = await this.getElementBy(FIRST_LINK)
        return await first_link.getText()
    }
}

module.exports = { ResultPage }