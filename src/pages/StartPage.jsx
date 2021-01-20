import React, { useContext, useState } from "react";
import JobList from "./../components/JobList";

import { JobContext } from "./../contexts/JobContext";

export default function StartPage() {
  const { jobList } = useContext(JobContext);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [resultList, setResultList] = useState(null);

  function handleJobSearch(event) {
    event.preventDefault();
    const keyword = searchKeyword.replace(" ", "+");
    console.log(`searching for ${keyword}`);
    const filteredList = jobList.filter((item) => item.description.includes(keyword));
    setResultList(filteredList);
  }

  function handleKeywordUpdate(newKeyword) {
    if (!newKeyword || newKeyword.length === 0) {
      setResultList(null);
    }
    setSearchKeyword(newKeyword);
  }

  return (
    <div className="App">
      <h1>Github Jobs</h1>
      <form className="job-form" onSubmit={handleJobSearch}>
        <input type="text" onChange={(e) => handleKeywordUpdate(e.target.value)} placeholder="search by description" />
        {jobList && <button type="submit">Search</button>}
        {!jobList && <button disabled>Search</button>}
      </form>
      <JobList jobList={resultList} />
    </div>
  );
}
