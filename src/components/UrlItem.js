import React from "react";

function UrlItem({ url, removeUrl }) {
  const { original, shortcode, createdAt, expiresAt } = url;
  const now = Date.now();
  const expired = expiresAt && now > expiresAt;
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
      <div>
        <b>Short URL:</b> <a href={original} target="_blank" rel="noopener noreferrer">{window.location.origin}/{shortcode}</a>
      </div>
      <div><b>Original:</b> <a href={original} target="_blank" rel="noopener noreferrer">{original}</a></div>
      <div><b>Created:</b> {new Date(createdAt).toLocaleString()}</div>
      {expiresAt && <div><b>Expires:</b> {new Date(expiresAt).toLocaleString()} {expired && <span style={{color:'red'}}> (Expired)</span>}</div>}
      <button onClick={() => removeUrl(shortcode)} disabled={expired}>Delete</button>
    </div>
  );
}

export default UrlItem;
