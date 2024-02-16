import React from "react";
import TimeGrahp from "../components/TimeGraph";
import StackedBar from "../components/StackedBar";

function Dashboard() {
  return (
    <div className="">
      <div className="flex bg-fff pt-10 flex-col items-center">
        <h1 className="text-black text-5xl uppercase">Graph TACE / MOIS</h1>
        <TimeGrahp />
      </div>
      <div className="flex bg-fff pt-10 flex-col items-center">
        <h1 className="text-black text-5xl uppercase">Graph Renta / Projets</h1>
        <StackedBar />
      </div>
    </div>
  );
}

export default Dashboard;
