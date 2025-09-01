import React, { useState } from "react";
import generateShortcode from "../utils/shortener";

function UrlForm({ addUrl }) {
  const [original, setOriginal] = useState("");
  const [validity, setValidity] = useState("");
  const [shortcode, setShortcode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!original) {
      setError("Please enter a URL");
      return;
    }
    let code = shortcode || generateShortcode();
    const now = Date.now();
    let expiresAt = validity ? now + parseInt(validity) * 60000 : null;
    addUrl({
      original,
      shortcode: code,
      createdAt: now,
      expiresAt,
    });
    setOriginal("");
    setValidity("");
    setShortcode("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="url"
        placeholder="Enter long URL"
        value={original}
        onChange={e => setOriginal(e.target.value)}
        required
        style={{ width: "60%", marginRight: 10 }}
      />
      <input
        type="number"
        placeholder="Validity (min)"
        value={validity}
        onChange={e => setValidity(e.target.value)}
        min="1"
        style={{ width: 120, marginRight: 10 }}
      />
      <input
        type="text"
        placeholder="Preferred shortcode"
        value={shortcode}
        onChange={e => setShortcode(e.target.value)}
        style={{ width: 150, marginRight: 10 }}
      />
      <button type="submit">Shorten</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
}

export default UrlForm;
