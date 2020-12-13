import React from "react";
//
import { Chart } from "react-google-charts";

export default function AttendenceBar() {
  return (
    <Chart
      width={"100%"}
      height={"330px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["Task", "Hours per Day"],
        ["Present", 70],
        ["Absent", 10],
        ["Leave", 20],
      ]}
      rootProps={{ "data-testid": "1" }}
    />
  );
}
