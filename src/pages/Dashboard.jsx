import React, { useEffect, useState } from "react";
import TotalSalesChart from "../components/chart/TotalSalesChart";
import CustomerMap from "../components/chart/CustomMap";
import SalesGrowthChart from "../components/chart/SalesGrowthChart";
import NewCustomersChart from "../components/chart/NewCustomersChart";
import RepeatCustomersChart from "../components/chart/RepeatCustomersChart";
import LifetimeValueChart from "../components/chart/LifeTimeValueChart";
import Layout from "../components/Layout";
import GeographicalDistributionChart from "../components/chart/CustomMap";
import IntervalSelector from "../components/IntervalSelector";
import { filterDataByInterval } from "../utils/dataFilters";

const Dashboard = () => {
 

  const [interval, setInterval] = useState("all");
  const [filteredSalesData, setFilteredSalesData] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [geoData, setGeoData] = useState([]);
  const [filteredGrowthData, setFilteredGrowthData] = useState([]);
  const [growthData, setgrowthData] = useState([]);
  const [filteredNewCustomersData, setFilteredNewCustomersData] = useState([]);
  const [newCustomersData, setNewCustomersData] = useState([]);
  const [filteredRepeatCustomersData, setFilteredRepeatCustomersData] =
    useState([]);
  const [repeatCustomersData, setRepeatCustomersData] =
    useState([]);
  const [filteredLifetimeValueData, setFilteredLifetimeValueData] = useState(
    []
  );
  const [lifetimeValueData, setLifetimeValueData] = useState(
    []
  );

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/get-sales`)
      .then((res) => res.json())
      .then((data) => {
        setSalesData(data);
      }).catch((e)=>console.log(e));


    fetch(`${import.meta.env.VITE_BASE_URL}/api/get-sales-growth`)
      .then((res) => res.json())
      .then((data) => {
        setgrowthData(data);
      }).catch((e)=>console.log(e));

    fetch(`${import.meta.env.VITE_BASE_URL}/api/get-geographical-distribution`)
      .then((res) => res.json())
      .then((data) => {
        setGeoData(data);
      }).catch((e)=>console.log(e));

    fetch(`${import.meta.env.VITE_BASE_URL}/api/get-customers`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setNewCustomersData(data);
      }).catch((e)=>console.log(e));

    fetch(`${import.meta.env.VITE_BASE_URL}/api/get-repeated-customers`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setRepeatCustomersData(data);
      }).catch((e)=>console.log(e));

    fetch(`${import.meta.env.VITE_BASE_URL}/api/get-lifetime-value`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setLifetimeValueData(data);
      }).catch((e)=>console.log(e));
  }, []);

  useEffect(() => {
    setFilteredSalesData(filterDataByInterval(salesData, interval));
    setFilteredGrowthData(filterDataByInterval(growthData, interval));
    setFilteredNewCustomersData(
      filterDataByInterval(newCustomersData, interval)
    );
    setFilteredRepeatCustomersData(
      filterDataByInterval(repeatCustomersData, interval)
    );
    setFilteredLifetimeValueData(
      filterDataByInterval(lifetimeValueData, interval)
    );
  }, [
    interval,
    salesData,
    growthData,
    newCustomersData,
    repeatCustomersData,
    lifetimeValueData,
  ]);

  return (
    <div>
      <IntervalSelector interval={interval} setInterval={setInterval} />
        <TotalSalesChart data={filteredSalesData} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SalesGrowthChart data={filteredGrowthData} />
        <NewCustomersChart data={filteredNewCustomersData} />
        <RepeatCustomersChart data={filteredRepeatCustomersData} />
        <LifetimeValueChart data={filteredLifetimeValueData} />
      </div>
        <GeographicalDistributionChart data={geoData} />
    </div>
  );
};

export default Dashboard;
