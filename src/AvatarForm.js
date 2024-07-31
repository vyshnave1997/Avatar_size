// src/AvatarForm.js
import React, { useState } from "react";
import Avatar from "./Avatar";
import "./AvatarForm.css"; // Import CSS for form styling

const AvatarForm = () => {
  const [imageSrc, setImageSrc] = useState("");
  const [fallbackText, setFallbackText] = useState("");
  const [size, setSize] = useState(100);

  const handleImageSrcChange = (e) => setImageSrc(e.target.value);
  const handleFallbackTextChange = (e) => setFallbackText(e.target.value);
  const handleSizeChange = (e) => setSize(Number(e.target.value));

  return (
    <div className="form-container">
      <h1>Avatar Creator</h1>
      <form>
        <label>
          Image URL:
          <input
            type="text"
            value={imageSrc}
            onChange={handleImageSrcChange}
            placeholder="Enter image URL here"
          />
        </label>
        <label>
          Fallback Text:
          <input
            type="text"
            value={fallbackText}
            onChange={handleFallbackTextChange}
            placeholder="Enter fallback text here"
          />
        </label>
        <label>
          Size (px):
          <input
            type="number"
            value={size}
            onChange={handleSizeChange}
            min="30"
            max="200"
          />
        </label>
      </form>

      <h2>Preview</h2>
      <Avatar
        src={imageSrc}
        alt="User Avatar"
        fallbackText={fallbackText}
        size={size}
      />
    </div>
  );
};

export default AvatarForm;
