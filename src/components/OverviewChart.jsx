import React from "react";
/* import allData from "./dataMock/allData"; */
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

function OverviewChart(props) {
  return (
    <div>
      <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
      >
        <VictoryGroup offset={4} colorScale={"qualitative"}>
          <VictoryBar
            data={[
              { x: 1, y: 1 },
              { x: 2, y: 2 },
              { x: 3, y: 5 },
              { x: 4, y: 3 },
            ]} //data{props.resultDifficulty}
            //  x="assignment"
            //   y="resultDifficulty"
            style={{ data: { fill: "#FFFF" } }}
          />
        </VictoryGroup>
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          ticketValues={[1, 2, 3, 4, 5]}
          // tickFormat specifies how ticks should be displayed
          tickFormat={[1, 2, 3, 4, 5]}
          style={{
            ticketLabels: {
              fontSize: 10,
            },
          }}
        />
        <VictoryBar />
      </VictoryChart>
    </div>
  );
}

export default OverviewChart;
