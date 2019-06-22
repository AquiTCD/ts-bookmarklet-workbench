describe(`LinkCard`, () => {
  beforeAll(async () => {
    await page.goto(`https://developer.mozilla.org/ja/`)
  })
  it(`generate tag from meta data`, async () => {
    let msg
    await page.on(`dialog`, async dialog => {
      msg = await dialog.defaultValue()
      await dialog.accept()
    })
    await page.addScriptTag({ path: './dist/LinkCard.js' })
    expect(msg).toMatch(`<LinkCard url="https://developer.mozilla.org/ja/" site-name="MDN Web Docs" title="MDN Web Docs" description="MDN Web Docs サイトは、ウェブサイトやプログレッシブウェブアプリのための HTML、CSS、API を含むオープンウェブ技術に関する情報を提供しています。また、Firefox 開発ツールのような Mozilla 製品に関する開発者向けドキュメントもあります。" image-url="https://developer.mozilla.org/static/img/opengraph-logo.72382e605ce3.png" />`)
  })
})