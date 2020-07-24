import React from "react";
import OverviewChart from "./OverviewChart";

function StudentDetail(props) {
  return (
    <div className="text">
      <h1>Student {props.Name} </h1>
      <OverviewChart />
    </div>
  );
}
export default StudentDetail;
