describe(`LinkCard`, () => {
  beforeAll(async () => {
    await page.goto(`http://amazon.jp/dp/487311621X`)
  })
  it(`generate tag from meta data`, async () => {
    let value
    await page.on(`dialog`, async dialog => {
      await dialog.accept()
      value = await dialog.defaultValue()
    })

    await page.addScriptTag({ path: './dist/AdCard.js' })
    expect(value).toMatch(`<AdCard asin="487311621X" title="開眼! JavaScript ―言語仕様から学ぶJavaScriptの本質" image-url="https://images-na.ssl-images-amazon.com/images/I/51jMq3%2BDklL._SX352_BO1,204,203,200_.jpg" date="2019-06-22" searchWords="開眼! JavaScript ―言語仕様から学ぶJavaScriptの本質" />`)
  })
})
