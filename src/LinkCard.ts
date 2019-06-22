;(() => {
  const escapingCharacters = {
    '<': `&lt;`,
    '>': `&gt;`,
    '&': `&amp;`,
    '"': `&quot;`,
    "'": `&#39;`,
  }
  const metaDescription = document.querySelector(`meta[property='description']`)
  const link = {
    url: document.URL,
    siteName: ``,
    title: document.title,
    description: metaDescription ? metaDescription.getAttribute(`content`) : ``,
    imageUrl: ``,
  }
  const metas = document.getElementsByTagName(`meta`)
  Array.prototype.forEach.call(metas, item => {
    switch (item.getAttribute(`property`)) {
      case `og:title`:
        link.title = item.getAttribute(`content`)
        break
      case `og:site_name`:
        link.siteName = item.getAttribute(`content`)
        break
      case `og:description`:
        link.description = item.getAttribute(`content`)
        break
      case `og:image`:
        link.imageUrl = item.getAttribute(`content`)
        break
      default:
        break
    }
  })
  if (link.siteName) {
    link.siteName = link.siteName
      .trim()
      .replace(/[<>&"']/g, c => escapingCharacters[c])
  }
  if (link.title) {
    link.title = link.title
      .trim()
      .replace(/[<>&"']/g, c => escapingCharacters[c])
  }
  if (link.description) {
    link.description = link.description
      .trim()
      .replace(/[<>&"']/g, c => escapingCharacters[c])
  }
  // prettier-ignore
  const card = `<LinkCard url="${link.url}" ${link.siteName ? 'site-name="' + link.siteName + '"' : ''} title="${link.title}" ${link.description ? 'description="' + link.description + '"' : ''} ${link.imageUrl ? 'image-url="' + link.imageUrl + '"' : ''} />`.replace(/[\s]+/g, ` `) //eslint-disable-line
  prompt(`create LinkCard successfully`, card)
})()
