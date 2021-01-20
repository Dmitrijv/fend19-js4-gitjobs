import React, { useContext, useState } from "react";
import JobList from "./../components/JobList";

import { JobContext } from "./../contexts/JobContext";

export default function StartPage() {
  const { resultList, setResultList, searchInProgress, getJobsByDescription } = useContext(JobContext);

  const [searchKeyword, setSearchKeyword] = useState("");

  async function handleJobSearch(event) {
    event.preventDefault();
    if (searchKeyword.length === 0) return;
    const keyword = searchKeyword.replace(" ", "+");
    await getJobsByDescription(keyword);
  }

  function handleKeywordUpdate(newKeyword) {
    if (!newKeyword || newKeyword.length === 0) {
      setResultList(null);
    }
    setSearchKeyword(newKeyword);
  }

  return (
    <div className="App">
      <h1>GitHub Jobs</h1>
      <form className="job-form" onSubmit={handleJobSearch}>
        <input
          type="text"
          minLength="1"
          onChange={(e) => handleKeywordUpdate(e.target.value)}
          placeholder="search by description"
        />
        {searchInProgress && (
          <button disabled type="submit">
            Search
          </button>
        )}
        {!searchInProgress && <button type="submit">Search</button>}
      </form>
      <JobList jobList={resultList} />
    </div>
  );
}
