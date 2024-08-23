// src/components/LifetimeValueChart.js
import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../ThemeContext";

const LifetimeValueChart = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const labelColor = theme == "dark" ? "#ffffff" : "#000000";
  return (
    <div className="bg-white dark:bg-gray-800 p-4 shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        Customer Lifetime Value by Cohorts
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="cohort"
            stroke="#ffffff"
            tick={{ fill: labelColor }}
          />
          <YAxis stroke="#ffffff" tick={{ fill: labelColor }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="lifetimeValue" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LifetimeValueChart;
