import React from "react";
import ReactApexChart from "react-apexcharts";

class TimeGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Pierre",
          data: [3, 4, 5, 3, 7, 6, 5, 4, 6, 8, 7, 6],
          description: "Tace de Pierre",
        },
        {
          name: "Déborah",
          data: [6, 5, 7, 5, 8, 9, 8, 7, 8, 6, 5, 7],
        },
        {
          name: "Paul",
          data: [4, 5, 6, 4, 7, 6, 5, 6, 8, 7, 6, 5],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [5, 7, 5],
          curve: "straight",
          dashArray: [0, 0, 5],
        },
        title: {
          text: "Page Statistics",
          align: "left",
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              " - <strong>" +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              "</strong>"
            );
          },
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 10,
          },
        },
        xaxis: {
          categories: [
            "01 Jan",
            "02 Jan",
            "03 Jan",
            "04 Jan",
            "05 Jan",
            "06 Jan",
            "07 Jan",
            "08 Jan",
            "09 Jan",
            "10 Jan",
            "11 Jan",
            "12 Jan",
          ],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + " (heures)";
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val + " (heures)";
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val + " (heures)";
                },
              },
            },
          ],
        },
        grid: {
          borderColor: "#000",
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
          type="line"
          height={1100}
          width={2000}
        />
      </div>
    );
  }
}

export default TimeGraph;
