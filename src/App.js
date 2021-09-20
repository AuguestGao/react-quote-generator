import React, { useState, useEffect } from "react";

function App() {
  const [allQuotes, setAllQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "React quote generator",
    author: "Auguest",
  });
  const [hideLoader, toggleHideLoader] = useState(true);

  useEffect(() => {
    (async () => {
      const quoteApiUrl = "https://type.fit/api/quotes";
      try {
        toggleHideLoader(false);
        const res = await fetch(quoteApiUrl);
        const data = await res.json();
        setAllQuotes(data);
        toggleHideLoader(true);
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);

  const getNewQuote = () => {
    const newQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
    setQuote(newQuote);
  };

  return hideLoader ? (
    <div className="quote-container">
      <div
        className="quote-text"
        id={`${quote.text.length > 50 ? "long-quote" : null}`}
      >
        {quote.text}
      </div>
      <div className="quote-author">
        {quote.author ? quote.author : "Unknown"}
      </div>
      <div className="button">
        <button onClick={getNewQuote}>New Quote</button>
      </div>
    </div>
  ) : (
    <div className="loader"></div>
  );
}

export default App;
