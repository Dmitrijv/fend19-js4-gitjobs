import React from "react";
import JobList from "./../components/JobList";

export default function StartPage() {
  const jobList;

  function searchJobsByDescription(description) {
    description = description.replace(" ", "+");
    console.log(`searching for ${description}`);
  }

  return (
    <div>
      <form onSubmit={searchJobsByDescription}>
        <input type="text" name="jobdescription" />
        <button>Search</button>
      </form>
      <JobList jobList={jobList} />
    </div>
  );
}
