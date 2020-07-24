import React, { useState } from "react";
import allData from "../dataMock/allData";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLine,
  VictoryLabel,
} from "victory";

function OverviewChart(props) {
  const [data, setData] = useState(allData);
  /*   const [uniqueAssignment, setStateUniqueAssignment] = useState([]);
   */
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

  // 3. Functie scoren moeilijkheid en functie bepalen
  const getAverageResult = (Assignment, typeOfResult) => {
    const filterData = objectStateData
      .filter((item) => item.Assignment === Assignment)
      .map((result) => result[typeOfResult]);
    // Gemiddelde berekenen
    const averageResult =
      filterData.reduce((a, b) => a + b, 0) / filterData.length; // voorbeeld const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
    return averageResult;
  };

  //4. Data with Average score
  const allStudentsRatingAverage = allUniqueAssignments.map((Assignment) => ({
    Assignment: Assignment,
    Difficulty: getAverageResult(Assignment, "Difficulty"),
    Fun: getAverageResult(Assignment, "Fun"),
  }));

  console.log(allStudentsRatingAverage);

  return (
    <div>
      <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={{ x: 5 }}
      >
        <VictoryGroup offset={5}>
          <VictoryBar
            data={objectStateData}
            x="Assignment"
            y="Difficulty"
            style={{ data: { fill: "#4768B8" } }}
          />
          <VictoryBar
            data={objectStateData}
            x="Assignment"
            y="Fun"
            style={{ data: { fill: "#B84768" } }}
          />
        </VictoryGroup>
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={props.Assignment}
          style={{
            tickLabels: {
              fontSize: 5,
              padding: 40,
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
    </div>
  );
}

export default OverviewChart;

/*<div>
<VictoryChart>
  <VictoryScatter
    y={(data) => Math.sin(2 * Math.PI * data.x)}
    samples={25}
    size={5}
    style={{ data: { fill: "tomato" }}}
  />
  <VictoryLine
    style={{ data: { stroke: "orange" }}}
    y={(data) => Math.sin(2 * Math.PI * data.x)}
  />
  <VictoryAxis/>
  <VictoryAxis dependentAxis/>
</VictoryChart>

<VictoryChart>
  <VictoryAxis/>
  <VictoryAxis dependentAxis/>
  <VictoryLine
    style={{ data: { stroke: "orange" }}}
    y={(data) => Math.sin(2 * Math.PI * data.x)}
  />
  <VictoryScatter
    y={(data) => Math.sin(2 * Math.PI * data.x)}
    samples={25}
    size={5}
    style={{ data: { fill: "tomato" }}}
  />
</VictoryChart>
</div>*/
