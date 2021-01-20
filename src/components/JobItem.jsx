import React from "react";

import { Link } from "react-router-dom";

export default function JobItem({ item }) {
  return (
    <li>
      <Link to={`/job-description/${item.id}`} className="App-link">
        {item.title}
      </Link>
    </li>
  );
}
