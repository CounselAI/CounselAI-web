import { Bar,Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import React from "react";


export default function LineGraph() {
   

    const lawyerIncomeData = {
        2010: {
          "Violent Crime": 100000,
          "Property Crime": 80000,
          "Drug Offenses": 60000,
        },
        2011: {
          "Violent Crime": 105000,
          "Property Crime": 82000,
          "Drug Offenses": 62000,
        },
        2012: {
          "Violent Crime": 110000,
          "Property Crime": 84000,
          "Drug Offenses": 64000,
        },
        2013: {
          "Violent Crime": 115000,
          "Property Crime": 86000,
          "Drug Offenses": 66000,
        },
        2014: {
          "Violent Crime": 120000,
          "Property Crime": 88000,
          "Drug Offenses": 68000,
        },
        2015: {
          "Violent Crime": 125000,
          "Property Crime": 90000,
          "Drug Offenses": 70000,
        },
        2016: {
          "Violent Crime": 130000,
          "Property Crime": 92000,
          "Drug Offenses": 72000,
        },
        2017: {
          "Violent Crime": 135000,
          "Property Crime": 94000,
          "Drug Offenses": 74000,
        },
        2018: {
          "Violent Crime": 140000,
          "Property Crime": 96000,
          "Drug Offenses": 76000,
        },
        2019: {
          "Violent Crime": 145000,
          "Property Crime": 98000,
          "Drug Offenses": 78000,
        },
        2020: {
          "Violent Crime": 150000,
          "Property Crime": 100000,
          "Drug Offenses": 80000,
        },
      };
      const years = Object.keys(lawyerIncomeData);
      const categories = Object.keys(lawyerIncomeData[years[0]]);
    
      const chartOptions = {
        scales: {
          x: {
            title: {
              display: true,
              text: "Year",
            },
          },
          y: {
            title: {
              display: true,
              text: "Income",
            },
          },
        },
      };
      const chartData = {
        labels: years,
        datasets: categories.map((category) => ({
          label: category,
          data: years.map((year) => lawyerIncomeData[year][category]),
          fill: false,
          borderColor: ["red","pink","green"],
        })),
      };
    
      
  return (
    <>
            <Line data={chartData} options={chartOptions} />

    </>
  )
}
