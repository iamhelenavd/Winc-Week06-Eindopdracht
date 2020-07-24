import React from "react";
import OverviewChart from "./components/OverviewChart";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Winc Academy Student Dashboard</h1>
        <br></br>
        <p> Average all Students Yellow=Fun Blue=Difficulty</p>
        <OverviewChart />
      </div>
    </div>
  );
};

export default Home;
