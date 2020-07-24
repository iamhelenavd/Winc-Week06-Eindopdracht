import React from "react";
import StudentChart from "./StudentChart";

function StudentDetail(props) {
  console.log(props);
  return (
    <div className="text">
      <h2>Student {props.match.params.id} </h2>
      <p>Result {props.match.params.id} Yellow=Fun Blue=Difficulty</p>
      <StudentChart newNames={props.match.params.id} />
    </div>
  );
}
export default StudentDetail;
