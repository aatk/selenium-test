# Установка

Клонируем репозитарий:
`git clone https://github.com/aatk/selenium-test.git`

Устанавливаем все библиотеки
`npm i`

Скачиваем нужный chrome драйвер, если он не скачался автоматически из: https://npmmirror.com/mirrors/chromedriver/
или из https://chromedriver.chromium.org/downloads

# Запускаем проверку 

`npm start`

Если:
1. браузер открылся 
2. в браузере открылась страница ya.ru 
3. ввелось в поиске слово "сбербанк" 
4. нажалась кнопка "найти"
5. открылась страница яндекса с найденными вариантами
6. закрылся браузер

В консоли при этом появился вывод:

```
...npm start

> selenium.test@1.0.0 start ...
> node index.js


DevTools listening on ws://127.0.0.1:9224/devtools/browser/288bb13b-5715-4626-bf54-97b75c9f0de5
try
finally
```
Говорит о том, что Селениум подключился и вебдрайверы установились корректно.

# Запуск тестов

Тесты хранятся в папке "__test__" их запуск осуществляется командой `npm test`

# Документация для разработчиков

https://www.selenium.dev/selenium/docs/api/javascript/index.html

https://www.selenium.dev/documentation/overview/

