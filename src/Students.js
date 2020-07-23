import React, { useState } from "react";

import allData from "./dataMock/allData";
import StudentList from "./components/StudentList";

// import studentChart

function Student() {}

function Students() {
  const [data, setData] = useState(allData); // leeg array
  const studentNames = allData.map((id) => id.Name);
  console.log(studentNames);

  // handle onchange

  return (
    <div class="text">
      <h1>Students</h1>
      <p>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </p>
      <StudentList onChange={data} />
    </div>
  );
}
export default Students;
