import axios from "axios";
import React, { useState, useEffect } from "react";

export const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("http://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    if (term) {
      const timeoutId = setTimeout(() => search(), 1000);
      return () => clearTimeout(timeoutId)
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go to page
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
        <div className="ui celled list">{renderedResults}</div>
      </div>
    </div>
  );
};
