import React from "react";
import DataDetailData from "./DataDetailData";

function StudentDetail(props) {
  console.log(props); // let op altijd console.log kijken wat component
  return (
    <div className="text">
      <h2>Student {props.match.params.id} </h2>
      <p>Average of {props.match.params.id} Yellow=Fun Blue=Difficulty</p>
      <DataDetailData newNames={props.match.params.id} />
    </div>
  );
}
export default StudentDetail;
