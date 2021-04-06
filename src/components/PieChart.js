import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import Chart from "chart.js";
import { Pie } from "react-chartjs-2";

const PieChart = ({ chartData }) => {
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "My First Dataset",
        data: chartData.data,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <Box marginTop="60px">
      <Pie data={data} />
    </Box>
  );
};

export default PieChart;
