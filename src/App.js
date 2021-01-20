import "./App.css";
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { JobContext } from "./contexts/JobContext";

import StartPage from "./pages/StartPage";
import JobDetailsPage from "./pages/JobDetailsPage";

function App() {
  const [jobList, setJobList] = useState(null);
  const [resultList, setResultList] = useState(null);

  function getJobList() {
    const url = "https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=javascript/";
    // const url = "https://swapi.dev/api/people/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJobList(data));
  }

  useEffect(() => {
    getJobList();
  }, []);

  return (
    <div>
      <JobContext.Provider value={{ jobList, resultList, setResultList, getJobList }}>
        <Switch>
          <Route path="/job-description/:jobId" render={(props) => <JobDetailsPage {...props} />} />
          <Route path="/jobs" exact component={StartPage} />
          <Route path="/" exact component={StartPage} />
          <Route path="*" exact component={StartPage} />
        </Switch>
      </JobContext.Provider>
    </div>
  );
}

export default App;
