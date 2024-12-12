import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const data = [
  { name: 'Food', value: 300 },
  { name: 'Rent', value: 700 },
  { name: 'Entertainment', value: 200 },
  { name: 'Savings', value: 500 },
];

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'];

export default function App() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
