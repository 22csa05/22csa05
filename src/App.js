import React, { useState } from "react";
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";

function App() {
  const [urls, setUrls] = useState([]);

  const addUrl = (urlObj) => {
    setUrls([urlObj, ...urls]);
  };

  const removeUrl = (shortcode) => {
    setUrls(urls.filter(u => u.shortcode !== shortcode));
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: 20 }}>
      <h1>URL Shortener</h1>
      <UrlForm addUrl={addUrl} />
      <UrlList urls={urls} removeUrl={removeUrl} />
    </div>
  );
}

export default App;

