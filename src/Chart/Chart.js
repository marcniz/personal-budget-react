import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Eat out", "Rent", "Grocery", "Electricity", "TV", "Water", "Car Insurance"],
  datasets: [
    {
      data: [25, 375, 110, 80, 30, 100, 550],
      backgroundColor: [
        '#ffcd56',
        '#ff6384',
        '#36a2eb',
        '#fd6b19',
        '#00F1FF',
        '#EE00FF',
        '#99FF00'
    ]}
  ]};

function Chart() {
  return (
    <div class="container center">

        <div class="page-area">

            <div class="text-box">
        <h1>Chart</h1>
        <p>
      <Doughnut data={data}/>
      </p>
    </div>
    </div>
    </div>
  );
}

export default Chart;