import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = ({ income, expense }) => {
  const chartRef = useRef();

  useEffect(() => {
    let myChart = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      // Destroy previous chart instance if exists
      if (myChart !== null) {
        myChart.destroy();
      }

      myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Income", "Expense"],
          datasets: [
            {
              data: [income, expense],
              backgroundColor: ["#446123", "#9BC34A"],
            },
          ],
        },
      });
    }

    // Cleanup on unmount
    return () => {
      if (myChart !== null) {
        myChart.destroy();
      }
    };
  }, [income, expense]);

  return (
    <div className="">
      <canvas ref={chartRef} />
    </div>
  );
};

export default PieChart;
