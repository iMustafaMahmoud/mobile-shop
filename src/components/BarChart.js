import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import Chart from "chart.js";
import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData }) => {
  const chartTextColor = "rgb(176, 176, 176)";
  const chartBarColor = "rgb(83, 168, 226)";
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "tooltipppp",
        backgroundColor: chartBarColor,
        borderColor: "transparent",
        borderWidth: 1,
        hoverBackgroundColor: chartBarColor,
        hoverBorderColor: "transparent",
        data: chartData.data,
      },
    ],
  };
  const options = {
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            tickMarkLength: 0,
            zeroLineColor: "transparent",
            display: false,
          },
          ticks: {
            padding: 13,
            fontColor: chartTextColor,
            fontFamily: "Roboto",
            fontSize: 10,
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            padding: 26,
            fontColor: chartTextColor,
            fontSize: 10,
            fontFamily: "Roboto",
            beginAtZero: true,
            callback: function (value, index, values) {
              return value;
            },
          },
        },
      ],
    },
  };
  useEffect(() => {
    Chart.pluginService.register({
      beforeDraw: function (chart) {},
    });
  }, []);
  return (
    <Box
      width="100%"
      height="200px"
      display="flex"
      alignItems="center"
      position="relative"
    >
      <Bar data={data} options={options} />
    </Box>
  );
};

export default BarChart;
