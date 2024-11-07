import { Browser, Builder } from 'selenium-webdriver';

const driver = await new Builder().forBrowser(Browser.CHROME).build();
await driver.manage().setTimeouts({implicit: 2000});


const response = driver.get('http://localhost:3000/');
console.log(response);

let title = await driver.getTitle();
console.log(title)
