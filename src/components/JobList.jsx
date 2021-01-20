import React from "react";

export default function JobList({ jobList }) {
  if (jobList === null) return <div></div>;
  if (jobList.length === 0) return <p>No jobs found</p>;
  return (
    <ol>
      {jobList.map(function (jobItem, index) {
        return <CustomerTableRow key={`jobitem-row-${index}`} jobItem={jobItem} />;
      })}
    </ol>
  );
}
