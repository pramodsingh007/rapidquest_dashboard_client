// src/components/RepeatCustomersChart.js
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

const RepeatCustomersChart = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const labelColor = theme == "dark" ? "#ffffff" : "#000000";
  return (
    <div className="bg-white dark:bg-gray-800 p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        Repeat Customers Over Time
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke="#ffffff" tick={{ fill: labelColor }} />
          <YAxis stroke="#ffffff" tick={{ fill: labelColor }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="repeatCustomers" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RepeatCustomersChart;
