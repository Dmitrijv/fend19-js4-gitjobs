import React from "react";

import JobItem from "./JobItem";

export default function JobList({ jobList }) {
  if (!jobList) return <div></div>;
  if (jobList.length === 0) return <p>No results found</p>;
  return (
    <ol>
      {jobList.map(function (item, index) {
        return <JobItem key={`jobitem-row-${index}`} item={item} />;
      })}
    </ol>
  );
}
