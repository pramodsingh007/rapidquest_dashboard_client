// src/components/IntervalSelector.js
import React from 'react';

const IntervalSelector = ({ interval, setInterval }) => (
  <div className="flex justify-end mb-4">
    <select
      value={interval}
      onChange={(e) => setInterval(e.target.value)}
      className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded p-2"
    >
      <option value="all">All Time</option>
      <option value="daily">Daily</option>
      <option value="monthly">Monthly</option>
      <option value="quarterly">Quarterly</option>
      <option value="yearly">Yearly</option>
    </select>
  </div>
);

export default IntervalSelector;
