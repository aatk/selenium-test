const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const screen = {
    width: 1920,
    height: 1080
};

let options = new chrome.Options();
//Below arguments are critical for Heroku deployment
//options.addArguments("--headless");
options.addArguments("--disable-gpu");
options.addArguments("--no-sandbox");
options.addArguments('--remote-debugging-port=9224');
options.windowSize(screen);

(async () => {

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        await driver.get('https://ya.ru/');
        await driver.findElement(By.name('text')).sendKeys('сбербанк', Key.RETURN);
        //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);

        await driver.wait(until.elementLocated(By.className("logo_type_link")), 10000); //titleIs('webdriver - Google Search')
        console.log("try");
    }
    catch (e) {
        console.log("catch");
        console.log(e);
    }
    finally {
        console.log("finally");
        await driver.quit();
    }
})();