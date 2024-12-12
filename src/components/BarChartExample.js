import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [
  { name: 'January', Income: 2000, Expenses: 1500 },
  { name: 'February', Income: 2500, Expenses: 2000 },
  { name: 'March', Income: 3000, Expenses: 2500 },
];

export default function BarChartExample() {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Income" fill="#82ca9d" />
      <Bar dataKey="Expenses" fill="#8884d8" />
    </BarChart>
  );
}
