import React from "react";
import Chart from "react-apexcharts";
import useDarkMode from "@/hooks/useDarkMode";
import useWidth from "@/hooks/useWidth";

const RadialsChart = () => {
  const series = [ 46 ];

  const options = {
    chart: {
      height: 390,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: -20,
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 0,
          size: '45%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
          }
        }
      }
    },
  }

  return (
    <div >
      <Chart
        options={options}
        series={series}
        type="radialBar"
        height={190}
      />
    </div>
  );
};

export default RadialsChart;
