describe(`Google`, () => {
  beforeAll(async () => {
    await page.goto(`https://google.com`)
  })

  it(`should be titled "Google"`, async () => {
    await expect(page.title()).resolves.toMatch(`Google`)
  })

  it(`should be title in prompt`, async () => {
    let value
    await page.on(`dialog`, async dialog => {
      value = await dialog.defaultValue()
      await dialog.accept()
    })
    await page.addScriptTag({ path: './dist/sample.js' })
    expect(value).toMatch(`Google`)
  })
})
