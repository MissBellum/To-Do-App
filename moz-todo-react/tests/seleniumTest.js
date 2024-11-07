import { Browser, Builder, By, until } from 'selenium-webdriver';

const driver = await new Builder().forBrowser(Browser.CHROME).build();


try {
    await driver.manage().setTimeouts({implicit: 5000});

    const response = await driver.get('http://localhost:3000/');
    console.log(response);

    let title = await driver.getTitle();
    console.log(title);

    let textBox = await driver.wait(until.elementLocated(By.className('input'), 3000));
    let submitBtn = await driver.wait(until.elementLocated(By.id('testButton'), 3000));
    
    try {
        await textBox.sendKeys('Work');
        await submitBtn.click();
        console.log("Button clicked successfully!");

    } catch(error) {
        console.error('button no work ' + error);

    } finally {
        console.log(`Page loaded and ${textBox} found!`);
    }
    

} catch(error) {
    console.log(error);
} finally {
    await driver.sleep(10000);
    await driver.quit();
}