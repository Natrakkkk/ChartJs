import React from "react";
import TimeGrahp from "../components/TimeGraph";
import StackedBar from "../components/StackedBar";

function Dashboard() {
  return (
    <div className="flex">
      <div className="bg-fff pt-10 mx-4 items-center w-full">
        <TimeGrahp />
      </div>
      <div className="bg-fff pt-10 mx-4 items-center w-full">
        <StackedBar />
      </div>
    </div>
  );
}

export default Dashboard;
