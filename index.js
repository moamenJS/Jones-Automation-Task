const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 10,
    });
    const page = await browser.newPage();
    await page.goto('http://contractorsinsurancereview.com/ExampleForm/');

    await page.type("#name", "Moamen Medleg");
    await page.type("#email", "medlegmoamen@gmail.com");
    await page.type("#phone", "053-4305442");
    await page.type("#company", "Jones Software");

    await page.select("#employees", "11-50");
    await page.screenshot({ path: 'screenshot.png' });

    await page.click(".primary");
    console.log("reaching the thank you page.")

    await page.waitForTimeout(3000);
    await browser.close();
})();
