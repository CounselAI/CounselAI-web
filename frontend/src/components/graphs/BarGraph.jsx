import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";



const crimeRateData = {
    2010: {
      "Violent Crime": 60,
      "Property Crime": 27,
      "Drug Offenses": 50,
    },
   
    2011: {
      "Violent Crime": 47,
      "Property Crime": 144,
      "Drug Offenses": 60,
    },
    2012: {
        "Violent Crime": 110,
        "Property Crime": 213,
        "Drug Offenses": 55,
      },
    2013: {
      "Violent Crime": 130,
      "Property Crime": 179,
      "Drug Offenses": 35,
    },
    2014: {
      "Violent Crime": 113,
      "Property Crime": 240,
      "Drug Offenses": 60,
    },
    2015: {
      "Violent Crime": 213,
      "Property Crime": 190,
      "Drug Offenses": 75,
    },
    2016: {
      "Violent Crime": 57,
      "Property Crime": 120,
      "Drug Offenses": 80,
    },
    2017: {
      "Violent Crime": 150,
      "Property Crime": 140,
      "Drug Offenses":72,
    },
    2018: {
      "Violent Crime": 124,
      "Property Crime": 70,
      "Drug Offenses": 34,
    },
    2019: {
      "Violent Crime": 190,
      "Property Crime": 182,
      "Drug Offenses": 124,
    },
    2020: {
      "Violent Crime": 101,
      "Property Crime": 201,
      "Drug Offenses": 46,
    },
  };
  
  const BarGraph = () => {
    const years = Object.keys(crimeRateData);
    const categories = Object.keys(crimeRateData[years[0]]);
    const chartData = {
      labels: years,
      datasets: categories.map((category) => ({
        label: category,
        data: years.map((year) => crimeRateData[year][category]),
        backgroundColor: getRandomColor(),
      })),
    };
  
    const chartOptions = {
      indexAxis: "x",
      scales: {
        y: {
          grid: {
            display: true,
          },
          title: {
            display: true,
            text: "Year",
          },
        },
        x: {
          grid: {
            display: false,
          },
          title: {
            display: true,
            text: "Crime Rate",
          },
        },
      },
      plugins: {
        legend: {
          position: "right",
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    };
  
    return (
      <div style={{ height: "500px", margin: "20px" }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    );
  };
  
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  export default BarGraph;
