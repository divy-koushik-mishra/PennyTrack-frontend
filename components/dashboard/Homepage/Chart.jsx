import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = ({ data }) => {
  const chartRef = useRef();
  const chartInstance = useRef(null); // Reference to the Chart.js instance
  // useEffect(() => {
  //   let myChart = null;

  //   if (chartRef.current && income > 0 && expense > 0) {
  //     const ctx = chartRef.current.getContext("2d");

  //     if (myChart !== null) {
  //       myChart.destroy();
  //     }

  //     myChart = new Chart(ctx, {
  //       type: "doughnut",
  //       data: {
  //         labels: ["Income", "Expense"],
  //         datasets: [
  //           {
  //             data: [income, expense],
  //             backgroundColor: ["#abd4b8", "#9BC34A"],
  //           },
  //         ],
  //       },
  //     });
  //   }

  //   // Cleanup on unmount
  //   return () => {
  //     if (myChart !== null) {
  //       myChart.destroy();
  //     }
  //   };
  // }, [income, expense]);

  // if (income <= 0 || expense <= 0) {
  //   return null;
  // }
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Check if previous Chart.js instance exists and destroy it
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }

      // Create new Chart.js instance
      chartInstance.current = new Chart(ctx, {
        type: "pie",
        data: {
          labels: Object.keys(data),
          datasets: [
            {
              data: Object.values(data),
              backgroundColor: [
                "#9BC34A",
                "#7CB342",
                "#689F38",
                "#558B2F",
                "#33691E",
              ],
            },
          ],
        },
      });
    }

    // Cleanup function to destroy the Chart.js instance on component unmount
    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="w-1/2 border-2 border-light-green-500 rounded-xl grid place-items-center">
      <canvas ref={chartRef} />
    </div>
  );
};

export default PieChart;
