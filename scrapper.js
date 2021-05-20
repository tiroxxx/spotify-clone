const puppeteer = require('puppeteer');

async function getLyrics() {
    try {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto('https://www.musixmatch.com/')

        await page.mouse.click(200, 50)
        await page.keyboard.type('Diva, OKY, Luck Ra, Frijo');
        await page.waitForXPath(
            '/html/body/div[7]/div/div/div/div/div/div/div/div[2]/div[2]/div/ul',
            {
                timeout: 5000
            }
        );
        await page.mouse.click(200, 150)

        await page.waitForSelector('.lyrics__content__ok');
        const lyricsElement = await page.$$('.lyrics__content__ok')
        const lyricsArr = []

        async function processArray(array) {
            for (const obj of array) {
                await obj.getProperty('textContent').then(lyric => {
                    lyricsArr.push(lyric._remoteObject.value)
                })
            }
        }

        await processArray(lyricsElement)
        await browser.close()

        return lyricsArr.join(" ")
    }
    catch (err) {
        console.log(err);
        return
    }
}