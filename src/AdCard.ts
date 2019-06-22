;(() => {
  interface AdObj {
    title: any
    asin: any
    imageUrl: any
    date: string
    price: any
    publisher: any
    searchWords: any
  }
  const escapingCharacters = {
    '<': `&lt;`,
    '>': `&gt;`,
    '&': `&amp;`,
    '"': `&quot;`,
    "'": `&#39;`,
  }
  const productTitle = document.getElementById(`productTitle`)
  const title = productTitle ? productTitle.textContent : ``
  const searchWords = prompt(`Input search keywords`, title || ``)
  const ad: AdObj = {
    title: title,
    asin: document.getElementById(`ASIN`),
    imageUrl:
      document.getElementById(`landingImage`) ||
      document.getElementById(`imgBlkFront`),
    date: new Date().toISOString().substr(0, 10),
    price:
      document.getElementById(`price_inside_buybox`) ||
      document.getElementById(`priceblock_ourprice`),
    publisher: null,
    // publisher: document.getElementById(`bylineInfo`),
    searchWords: searchWords,
  }
  if (ad.asin) {
    ad.asin = ad.asin.value
  }
  if (ad.imageUrl) {
    ad.imageUrl = ad.imageUrl.getAttribute(`src`)
  }
  if (ad.price) {
    ad.price = ad.price.textContent.trim()
  }
  // if (ad.publisher) {
  //   const pubs = ad.publisher.getElementsByClassName(`a-link-normal`)
  //   let names
  //   Array.prototype.forEach.call(pubs, name => {
  //     names += name.textContent.trim()
  //   })
  //   ad.publisher = names
  // }
  if (ad.searchWords) {
    ad.searchWords = ad.searchWords
      .trim()
      .replace(/[<>&"']/g, c => escapingCharacters[c])
  }
  // prettier-ignore
  const card = `<AdCard asin="${ad.asin}" title="${ad.title}" image-url="${ad.imageUrl}" ${ad.price ? 'price="' + ad.price + '"' : ''} date="${ad.date}" ${ad.publisher ? 'publisher="' + ad.publisher + '"' : ''} searchWords="${ad.searchWords || ad.title}" />`.replace(/[\s]+/g, ` `) //eslint-disable-line
  prompt(`create AdCard successfully`, card)
})()
