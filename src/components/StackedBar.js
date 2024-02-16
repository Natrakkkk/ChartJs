import React from "react";
import ReactApexChart from "react-apexcharts";

class StackedBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Production",
          data: [44, 55, 41, 37, 22, 43, 21],
        },
        {
          name: "Gestion de projet",
          data: [53, 32, 33, 52, 13, 43, 32],
        },
        {
          name: "Marketing",
          data: [12, 17, 11, 9, 15, 11, 20],
        },
        {
          name: "TMA",
          data: [9, 7, 5, 8, 6, 9, 4],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 700,
          stacked: true,
          stackType: "100%",
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },
        title: {
          text: "Graph renta/projets",
        },
        xaxis: {
          categories: ["Capency", "Accor", "MBA", "First Finance", "", 2013, 2014],
          labels: {
            rotate: -45,
            style: {
              fontSize: '12px',
            },
            trim: true,
            maxWidth: 100,
            offsetX: 0,
            offsetY: 0,
            padding: 5,
          }
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K €";
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: 40,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={700}
          width="100%"
        />
      </div>
    );
  }
}

export default StackedBar;
