import React from "react";

function searchJobsByDescription(description) {
  description = description.replace(" ", "+");
  console.log(`searching for ${description}`);
}

export default function SearchForm() {
  return (
    <div>
      <form onSubmit={searchJobsByDescription}>
        <input type="text" name="jobdescription" />
        <button>Search</button>
      </form>
    </div>
  );
}
