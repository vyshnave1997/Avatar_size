// src/Avatar.js
import React, { useState } from "react";
import "./Avatar.css"; // Import CSS for styling

const Avatar = ({ src, alt, fallbackText, size = 50 }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  const initials = fallbackText
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");

  return (
    <div
      className="avatar"
      style={{ width: size, height: size, fontSize: size / 2 }}
    >
      {hasError ? (
        <span className="avatar-fallback">{initials}</span>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={handleError}
          className="avatar-image"
        />
      )}
    </div>
  );
};

export default Avatar;
