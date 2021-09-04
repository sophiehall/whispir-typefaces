const quoteTag = document.querySelector("div.sample-text p.quote")
const authorTag = document.querySelector("div.sample-text p.author")
const randomTag = document.querySelector(".random")

const getQuote = function () {
  
   fetch("https://api.superhi.com/api/test/quotes/random")
//    fetch("quotes.json")
  .then(response => response.json())
  .then(jsonData => {
     quoteTag.innerHTML = "&ldquo;" + jsonData.quote + "&rdquo;"
     authorTag.innerHTML = "&mdash; " + jsonData.author
     
     if (jsonData.quote.length > 120) {
        quoteTag.classList.add("long")
     } else {
       quoteTag.classList.remove("long")
     }
  
       if (jsonData.quote.length < 30) {
        quoteTag.classList.add("short")
     } else {
       quoteTag.classList.remove("short")
     }
     
   })
}

// run getQuote on page load
getQuote()

// run getQuote on click of random icon
randomTag.addEventListener("click", function () {
  getQuote()
})