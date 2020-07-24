import React, { useState } from "react";
import allData from "../dataMock/allData";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryZoomContainer,
  VictoryLine,
} from "victory";

function StudentChart(props) {
  const [data, setData] = useState(allData);
  // 1. All Assignments in Array
  const allAssignments = data.map((data) => data.Assignment);
  const allUniqueAssignments = [...new Set(allAssignments)];
  // console.log(allUniqueAssignments);

  // 2. Object of items
  const objectStateData = data.map((object) => ({
    Name: object.Name,
    Assignment: object.Assignment,
    Difficulty: parseInt(object.Difficulty), // The parseInt() function parses a string argument and returns an integer of the specified radix
    Fun: parseInt(object.Fun),
  }));
  //console.log(objectStateData);

  // Students Individual for function StudentDetail.jsx
  const DataIndividualStudent = objectStateData.filter(
    (item) => item.Name === props.newNames
  );
  //console.log(DataIndividualStudent);

  // 3. Function result FUN and Difficulty
  const getAverageResult = (Assignment, typeOfResult) => {
    const filterData = objectStateData
      .filter((item) => item.Assignment === Assignment)
      .map((result) => result[typeOfResult]);
    // Average
    const averageResult =
      filterData.reduce((a, b) => a + b, 0) / filterData.length; // ex. const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
    return averageResult;
  };

  //4. Data with Average result
  const allStudentsRatingAverage = allUniqueAssignments.map((Assignment) => ({
    Assignment: Assignment,
    Difficulty: getAverageResult(Assignment, "Difficulty"),
    Fun: getAverageResult(Assignment, "Fun"),
  }));

  //   console.log(allStudentsRatingAverage);

  return (
    <div>
      <VictoryChart
        domainPadding={{ y: 10 }}
        containerComponent={
          <VictoryZoomContainer
            allowPan={true}
            allowZoom={true}
            zoomDomain={{ x: [0, 55] }}
            zoomDimension="x"
          />
        }
      >
        <VictoryGroup offset={5}>
          <VictoryBar
            data={DataIndividualStudent}
            x="Assignment"
            y="Difficulty"
            style={{ data: { fill: "#4768B8" } }}
          />
          <VictoryBar
            data={DataIndividualStudent}
            x="Assignment"
            y="Fun"
            style={{ data: { fill: "#f5ba13" } }}
          />
        </VictoryGroup>
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={props.Assignment}
          style={{
            tickLabels: {
              fontSize: 5,
              padding: 10,
              writingMode: "vertical-lr",
            },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[1, 2, 3, 4, 5]}
          style={{
            tickLabels: {
              fontSize: 15,
              padding: 10,
            },
          }}
        />
      </VictoryChart>
      <h2>Overview Line Chart</h2>
      <p> Average all Students Yellow=Fun Red=Difficulty</p>
      <VictoryChart
        domainPadding={{ y: 10 }}
        containerComponent={
          <VictoryZoomContainer
            allowPan={true}
            allowZoom={true}
            zoomDomain={{ x: [0, 55] }}
            zoomDimension="x"
          />
        }
      >
        <VictoryLine
          data={allStudentsRatingAverage}
          x="Assignment"
          y="Difficulty"
          style={{
            data: {
              stroke: "#f7082e",
            },
          }}
        />
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={props.Assignment}
          style={{
            tickLabels: {
              fontSize: 5,
              padding: 10,
              writingMode: "vertical-lr",
            },
          }}
        />
        <VictoryLine
          data={allStudentsRatingAverage}
          x="Assignment"
          y="Fun"
          style={{
            data: {
              stroke: "#f5ba13",
            },
          }}
        />

        <VictoryAxis
          dependentAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={[1, 2, 3, 4, 5]}
          style={{
            tickLabels: {
              fontSize: 15,
              padding: 10,
            },
          }}
        />
      </VictoryChart>
    </div>
  );
}

export default StudentChart;
