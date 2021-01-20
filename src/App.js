import "./App.css";
import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import { JobContext } from "./contexts/JobContext";

import StartPage from "./pages/StartPage";
import JobDetailsPage from "./pages/JobDetailsPage";

function App() {
  const [searchInProgress, setSearchInProgress] = useState(false);
  const [resultList, setResultList] = useState(null);
  const [searchCache, setSearchCache] = useState({});

  async function getJobsByDescription(keyword) {
    if (searchCache[keyword]) {
      console.log(`getting cached results for "${keyword}"`);
      setResultList(searchCache[keyword]);
    } else {
      console.log(`making network request for "${keyword}"`);
      setSearchInProgress(true);
      const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${keyword}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setResultList(data);
          searchCache[keyword] = data;
          setSearchCache(searchCache);
          setSearchInProgress(false);
        });
    }
  }

  return (
    <div>
      <JobContext.Provider value={{ resultList, setResultList, searchInProgress, getJobsByDescription }}>
        <Switch>
          <Route path="/job-description/:jobId" render={(props) => <JobDetailsPage {...props} />} />
          <Route path="*" exact component={StartPage} />
        </Switch>
      </JobContext.Provider>
    </div>
  );
}

export default App;
