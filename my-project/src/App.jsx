import './App.css'
// Full React App Code for Crypto Dashboard Challenge
// Requirements: axios, chart.js, react-chartjs-2, tailwindcss (optional)

// Install dependencies first:
// npm install axios react-chartjs-2 chart.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const coins = ["bitcoin", "ethereum", "solana", "cardano", "dogecoin"];

export default function App() {
  const [prices, setPrices] = useState({});
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  // Fetch price list for 5 coins
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(",")}&vs_currencies=usd&include_24hr_change=true`;
        const res = await axios.get(url);
        setPrices(res.data);
      } catch (err) {
        console.error("Price fetch error:", err);
      }
    };
    fetchPrices();
  }, []);

  // Fetch 7-day chart for selected coin
  useEffect(() => {
    const fetchChart = async () => {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=7`
        );
        const labels = res.data.prices.map(p => new Date(p[0]).toLocaleDateString());
        const data = res.data.prices.map(p => p[1]);
        setChartData({
          labels,
          datasets: [
            {
              label: `${selectedCoin.toUpperCase()} Price (7 Days)`,
              data,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            }
          ]
        });
      } catch (err) {
        console.error("Chart fetch error:", err);
      }
    };
    fetchChart();
  }, [selectedCoin]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Crypto Dashboard</h1>

      {/* Price List */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {Object.entries(prices).slice(0, 5).map(([coin, data]) => (
          <div key={coin} className="border p-3 rounded shadow">
            <h2 className="text-lg font-semibold">{coin.toUpperCase()}</h2>
            <p>Price: ${data.usd}</p>
            <p>24h Change: {data.usd_24h_change?.toFixed(2)}%</p>
          </div>
        ))}
      </div>

      {/* Dropdown to Select Coin */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Select Coin:</label>
        <select
          className="border rounded p-1"
          value={selectedCoin}
          onChange={(e) => setSelectedCoin(e.target.value)}
        >
          {coins.map((coin) => (
            <option key={coin} value={coin}>{coin.toUpperCase()}</option>
          ))}
        </select>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 rounded shadow">
        <Line data={chartData} />
      </div>
    </div>
  );
}
