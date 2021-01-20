import React from "react";

export default function Image({ imgUrl, companyUrl }) {
  return (
    <a href={companyUrl}>
      <img className="company-logo" src={imgUrl} alt="company url" />
    </a>
  );
}
