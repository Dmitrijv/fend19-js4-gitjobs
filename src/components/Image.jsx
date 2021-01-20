import React from "react";

export default function Image({ imgUrl }) {
  return (
    <div className="image-container">
      <img className="company-logo" src={imgUrl} alt="company url" />
    </div>
  );
}
