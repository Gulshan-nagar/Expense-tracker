import React, { useEffect, useState } from 'react';
import { LuPlus } from 'react-icons/lu';
import CustomPieChart from '../Charts/CustomPieChart';
import { prepareIncomeBarChartData } from '../../utils/helper';
import CustomBarChart from '../Charts/CustomBarChart';

const COLORS = ["#875CF5", "#FA2C37", "#FF6900", "#4f39f6"];

const IncomeOverview = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeBarChartData(transactions);
    setChartData(result);
  }, [transactions]);

  return (
    <div className="card">
      <div className="flex justify-between items-center">
        <h5 className="text-lg">Income Overview</h5>
        <button className="btn btn-primary" onClick={onAddIncome}>
          Add Income
        </button>
      </div>
      <div className="mt-10">
        <CustomBarChart data={chartData}/>
      </div>
    </div>
  );
};

export default IncomeOverview;
