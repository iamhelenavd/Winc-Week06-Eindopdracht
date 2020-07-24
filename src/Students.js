import React, { useState } from "react";
import allData from "./dataMock/allData";
import { Link } from "react-router-dom";

function Students(props) {
  const [data, setData] = useState(allData);
  // step 1 Array.from(new Set()) going to make a new set and I want to turn back in an array with Array.from
  // Step 2 new Set will only allow unique values in it
  // Step 3 .map(Name => [...]) run map function to return the actual data
  const newData = Array.from(new Set(data.map((item) => item.Name))).map(
    (Name) => {
      return data.find((item) => item.Name === Name);
    }
  );
  console.log(newData);
  return (
    <div className="text">
      {newData.map((props) => (
        <h1 key={props.id}>
          <Link to={`/Students/${props.Name}`}>{props.Name}</Link>
        </h1>
      ))}
    </div>
  );
}
export default Students;
