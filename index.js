const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch({
    headless: false, 
    slowMo: 5,
    devtools: true
  });
  const page = await browser.newPage();
 
  
  await page.goto('https://badoo.com/signin/', {waitUntil: 'networkidle2'});

  await page.type('.js-signin-login', 'osetia-alania@mail.ru')
  await page.type('.js-signin-password', 'Kostia22!')

  await page.click('.new-form__actions .btn--block')
  
  await new Promise(_=> setTimeout(_, 5000));

  await page.evaluate(() => {
    // document.querySelector('.profile-action--color-yes').click();
  }); 
    while(true) {
      const stories = await page.$$eval('.profile-action--color-yes', e=>e);
      
      //const stories = await page.$$eval('a.storylink', anchors => { return anchors.map(anchor => anchor.textContent).slice(0, 10) })
      await page.evaluate(() => { debugger; }); // untrusted!

        window.document.querySelector('.profile-action--color-yes') && await page.click('.profile-action--color-yes')
        await new Promise(_=> setTimeout(_, 1000));
        ['.js-ovl-close','.js-chrome-pushes-deny'].forEach(async e => window.document.querySelector(e) && await page.click(e))
    }

  //await page.pdf({path: 'hn.pdf', format: 'A4'});

  await browser.close();
})();