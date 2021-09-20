import React, { useState, useEffect } from "react";

function App() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "React quote generator",
    author: "Auguest",
  });

  useEffect(() => {
    (async () => {
      try {
        const quoteApiUrl = "https://type.fit/api/quotes";
        const res = await fetch(quoteApiUrl);
        const data = await res.json();
        setAllQuotes(data);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);

  const getNewQuote = () => {
    const newQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
    setQuote(newQuote);
  };

  return (
    <div className="quote-container">
      <div id="quote-text"> {quote.text}</div>
      <div id="quote-author">{quote.author}</div>
      <div className="button">
        <button onClick={getNewQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
