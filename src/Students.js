import React, { useState } from "react";
import allData from "./dataMock/allData";
import { Link } from "react-router-dom";

function Students() {
  const [data, setData] = useState(allData);
  console.log(data);
  /*   setData(data[0].Name); */
  /*   console.log(data.Name); */

  // nieuwe array met enkelen namen en vervolgens map hieronder
  return (
    <div class="text">
      {data.map((props) => (
        <h1 key={props.id}>
          <Link to={`/Students/${props.Name}`}>{props.Name}</Link>
        </h1>
      ))}
    </div>
  );
}
export default Students;
