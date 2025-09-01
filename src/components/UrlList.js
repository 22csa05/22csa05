import React from "react";
import UrlItem from "./UrlItem";

function UrlList({ urls, removeUrl }) {
  if (urls.length === 0) return <p>No URLs shortened yet.</p>;
  return (
    <div>
      {urls.map(url => (
        <UrlItem key={url.shortcode} url={url} removeUrl={removeUrl} />
      ))}
    </div>
  );
}

export default UrlList;
