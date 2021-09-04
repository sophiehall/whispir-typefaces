const quoteTag = document.querySelector('div.sample-text p.quote')
const authorTag = document.querySelector('div.sample-text p.author')
const randomTag = document.querySelector('.random')

let data = []

const getQuote = function() {
//      fetch("https://api.superhi.com/api/test/quotes/random")
  fetch('quotes.json')
    .then(response => response.json())
    .then(jsonData => {
      const quote = jsonData[Math.floor(Math.random()*jsonData.length)]
      // use `quote.quote` and `quote.author` here
      quoteTag.innerHTML = '&ldquo;' + quote.quote + '&rdquo;'
      authorTag.innerHTML = '&mdash; ' + quote.author

      if (quote.quote.length > 120) {
        quoteTag.classList.add('long')
      } else {
        quoteTag.classList.remove('long')
      }

      if (quote.quote.length < 30) {
        quoteTag.classList.add('short')
      } else {
        quoteTag.classList.remove('short')
      }
    })
}

// run getQuote on page load
getQuote()

// run getQuote on click of randomizer
randomTag.addEventListener('click', function() {
  getQuote()
})
