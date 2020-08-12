const {Builder} = require("selenium-webdriver")

class WebDriverProvider{

    getChromeDriver(){
        return new Builder().forBrowser('chrome').build();
    }
}

module.exports = {WebDriverProvider}