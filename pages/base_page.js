const { until } = require('selenium-webdriver');

const DEFAULT_TIMEOUT = 10000;

class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async open(url) {
        await this.driver.get(url);
    }

    async getElementBy(locator, timeout = DEFAULT_TIMEOUT) {
        return await this.driver.wait(until.elementLocated(locator), timeout);
    }
}

module.exports = { BasePage }