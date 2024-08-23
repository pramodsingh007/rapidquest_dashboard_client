// src/components/TotalSalesChart.js
import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../ThemeContext";

const TotalSalesChart = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const labelColor = theme =="dark" ? '#ffffff' : '#000000';
  return (
    <div className=" dark:bg-gray-800  text-black p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        Total Sales Over Time
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke="#ffffff" tick={{ fill: labelColor }} />
          <YAxis stroke="#ffffff" tick={{ fill: labelColor }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="totalSales" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalSalesChart;
