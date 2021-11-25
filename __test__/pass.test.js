const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let driver = null;

beforeAll(async () => {
    console.log('1 - beforeAll')

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

    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
});

afterAll(async () => {
    await driver.quit();
    console.log('1 - afterAll')
});


describe('Scoped / Nested block', () => {

    /**
     *  Пример теста без ошибок
     *  Тест открывает страницу ya.ru
     *  вводит слово сбербанк и отправляет нажатие на клавишу ENTER
     *  ждет открытия страницы 10 секунд и на ней тег с классом "logo_type_link" в котором находится логотип Яндекса
     *  данный логотип присутствует на странице и тест завершается без ошибок
     */
    test('yandex pass', async () => {

        await driver.get('https://ya.ru/');
        await driver.findElement(By.name('text')).sendKeys('сбербанк', Key.RETURN);
        await driver.wait(until.elementLocated(By.className("logo_type_link")), 10000);

        console.log('1 - test')
    });

    /**
     *  Пример теста с ошибкой
     *  Тест открывает страницу ya.ru
     *  вводит слово сбербанк и отправляет нажатие на клавишу ENTER
     *  ждет открытия страницы 10 секунд и на ней заголовок "webdriver - Google Search"
     *  данного заголовка не появляется и тест сваливается с ошибкой
     */
    test('google fail', async () => {
        await driver.get('https://ya.ru/');
        await driver.findElement(By.name('text')).sendKeys('сбербанк', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Google Search'), 10000);

        console.log('2 - test')
    });

});