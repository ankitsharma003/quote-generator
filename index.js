const author = document.querySelector(".authortext");
const quote = document.querySelector(".quotetext");
const apiUrl = "https://api.quotable.io/quotes/random";
async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  quote.innerHTML = data[0].content;
  author.innerHTML = data[0].author;
  console.log(data);
}
getQuote(apiUrl);
function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "--by" +
      author.innerHTML,
    "tweet window",
    "width= 500px",
    "heigth= 500px"
  );
}
