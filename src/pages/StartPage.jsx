import React, { useContext, useState } from "react";
import JobList from "./../components/JobList";

import { JobContext } from "./../contexts/JobContext";

export default function StartPage() {
  const { jobList, resultList, setResultList } = useContext(JobContext);

  const [searchParam, setSearchParam] = useState("");

  function handleJobSearch(event) {
    const filter = searchParam.replace(" ", "+");
    console.log(`searching for ${filter}`);
    event.preventDefault();
  }

  return (
    <div className="App">
      {jobList && <p>{jobList.length} jobs available</p>}
      <form onSubmit={handleJobSearch}>
        <input type="text" onChange={(e) => setSearchParam(e.target.value)} placeholder="search by description" />
        <button>Search</button>
      </form>
      <JobList jobList={jobList} />
    </div>
  );
}
