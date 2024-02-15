import React from "react";
import TimeGrahp from "../components/TimeGraph";

function Dashboard() {
  return (
    <div className="flex bg-fff h-screen justify-center pt-10 flex-col items-center">
      <h1 className="text-black text-5xl uppercase">Graph TACE / MOIS</h1>
      <TimeGrahp />
    </div>
  );
}

export default Dashboard;
