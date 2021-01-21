import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Image from "./../components/Image";

import { JobContext } from "./../contexts/JobContext";

export default function JobDetailsPage() {
  const { resultList } = useContext(JobContext);
  const { jobId } = useParams();

  const [jobItem, setJobItem] = useState(null);

  useEffect(() => {
    if (resultList) {
      setJobItem(resultList.find((job) => job.id === jobId));
    } else {
      const url = `https://jobs.github.com/positions/${jobId}.json`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setJobItem(data);
        });
    }
  }, []);

  function createDescriptionMarkup() {
    return { __html: jobItem.description };
  }

  return (
    <div className="job-container">
      {jobItem && (
        <div>
          <h2>{jobItem.title}</h2>
          <p>
            <strong>{jobItem.type}</strong>
          </p>
          <Image imgUrl={jobItem.company_logo} />
          <a href={jobItem.url}>company url</a>
          <div dangerouslySetInnerHTML={createDescriptionMarkup()} />
        </div>
      )}

      <Link className="App-link" to={"/search"}>
        <p>Back to search</p>
      </Link>
    </div>
  );
}
