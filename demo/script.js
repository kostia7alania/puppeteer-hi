document.querySelector('.human').onclick = () => 
document.querySelector('.res').innerText = "isTrusted = "+event.isTrusted

document.querySelector('.fake').onclick = () =>
document.querySelector('.human').click()


// подробней https://googlechrome.github.io/samples/event-istrusted/index.html

/*
Как сфабриковать клик робота под человека так, чтобы event.isTrusted был true?
DEMO => https://codepen.io/kostia7alania/pen/BaaOEbr
WebDriver же тоже "стукачит" браузеру, что клик "деревянный", т.е. без 3х фаз распространения события (погружение, всплытие, регистрация).

Вопрос: какие есть инструменты e2e тестирования с этими особенностями фаз ?

event.isTrusted - readonly, нужно что-то надбраузерное

--> Они тут пишут, что клики получаются не надежные:
The event emitted by JavaScript .click() is not reliable , and the default action cannot be called: 
https://geek-cook.github.io/questions/67160/index.html


=> и даже геолокацию можно подделать:
await context.overridePermissions('https://html5demos.com', ['geolocation']);

и даже косить под айфон:
const iPhone = puppeteer.devices['iPhone 6']; 

https://github.com/GoogleChrome/puppeteer/blob/v2.0.0/docs/api.md#browserwaitfortargetpredicate-options

ВЕСЬ ФУНКЦИОНАЛ ТУТ - https://github.com/checkly/puppeteer-examples#set-cookie
b
*/