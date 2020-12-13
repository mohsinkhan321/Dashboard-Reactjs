import React from "react";
//
import { Chart } from "react-charts";

export default function BarChart() {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          ["Jun", 70],
          ["July", 40],
          ["Aug", 70],
          ["Sep", 60],
          ["Oct", 55],
          ["Nov", 30],
          ["Dec", 75],
        ],
      },
    ],
    []
  );
  const series = React.useMemo(
    () => ({
      type: "bar",
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  return (
    <div
      style={{
        width: "100%",
        height: "377px",
      }}
    >
      <Chart data={data} series={series} axes={axes} />
    </div>
  );
}
