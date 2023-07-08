import { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const category = 'leadership';
    const getData = async () => {
      try {
        const getQuotes = await fetch(
          `https://api.api-ninjas.com/v1/quotes?category=${category}`,
          {
            headers: {
              'X-Api-Key': 'CIyv4UQ3v0Gefw3U1x3/Uw==rXLVt9NPIrrQePGQ',
            },
            contentType: 'application/json',
          },
        );
        const quotes = await getQuotes.json();
        setQuote(quotes);
        setIsLoading(false);
      } catch (error) {
        setQuote([]);
        setHasError(true);
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  if (hasError) {
    return <div>There was an error while loading</div>;
  }
  if (isLoading) {
    return <div>There info is loading... Please wait!</div>;
  }
  return (
    <div className="ninja_quote_container">
      <div>
        Author:
        {' '}
        {quote[0]?.author}
      </div>
      <div>{quote[0]?.quote}</div>
      <div>{quote[0]?.category}</div>
    </div>
  );
}

export default Quote;
