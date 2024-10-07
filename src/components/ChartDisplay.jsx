import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartDisplay = ({ data }) => {
  if (!data || data.length === 0) return <p>No data to display.</p>;

  // Group data by Product and Date for Cost calculation
  const groupedData = {};
  data.forEach(item => {
    const { Date, Product, Quantity, 'Price Per Unit ($)': Price, Multiplier } = item;
    const cost = Quantity * Price * Multiplier;  // Calculate the Cost

    if (!groupedData[Product]) {
      groupedData[Product] = { dates: [], costs: [] };
    }
    groupedData[Product].dates.push(Date);
    groupedData[Product].costs.push(cost);
  });

  const datasets = Object.keys(groupedData).map(product => ({
    label: product,
    data: groupedData[product].costs,
    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,  // Random color for each product
  }));

  const chartData = {
    labels: groupedData[Object.keys(groupedData)[0]].dates,  // Use dates from one product as the labels
    datasets: datasets,
  };

  return (
    <div>
      <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' }, }, }} />
    </div>
  );
};

export default ChartDisplay;
