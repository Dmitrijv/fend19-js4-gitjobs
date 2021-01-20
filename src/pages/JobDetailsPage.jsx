import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Image from "./../components/Image";

import { JobContext } from "./../contexts/JobContext";

export default function JobDetailsPage() {
  const { jobList } = useContext(JobContext);
  const [jobItem, setJobItem] = useState(null);
  const { jobId } = useParams();

  useEffect(() => {
    const item = jobList.find((job) => job.id === jobId);
    setJobItem(item);
  }, []);

  function createMarkup() {
    return { __html: jobItem.description };
  }

  return (
    <div className="job-container">
      {jobItem && (
        <div>
          <h2>
            {jobItem.title} - <strong>{jobItem.type}</strong>
          </h2>
          <Image imgUrl={jobItem.company_logo} companyUrl={jobItem.url} />
          <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
      )}

      <Link className="App-link" to={"/search"}>
        <p>Back to search</p>
      </Link>
    </div>
  );
}
