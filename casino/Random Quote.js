document.getElementById("button").addEventListener("click", get_quote);

function get_quote() {
event.preventDefault();
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      }
    })
      .done(update);
  
}

function update(response) {
	var author = response.quoteAuthor;
	var quote = response.quoteText;
	document.getElementById("quote").innerHTML = quote;
	document.getElementById("author").innerHTML = author;
}

