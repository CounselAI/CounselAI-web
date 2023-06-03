import React from "react";
import { useAuth } from "../Context/AuthContext";
import { Container, Heading, Spacer, Center, Text } from "@chakra-ui/react";
import { Bar,Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import BarGraph from "../components/graphs/BarGraph";
import LineGraph from "../components/graphs/LineGraph";
export default function DataVisual() {
  const { abstract, setAbstract } = useAuth();
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const crime_rate_data = {
    2010: {
      "Violent Crime": 100,
      "Property Crime": 200,
      "Drug Offenses": 50,
    },
    2011: {
      "Violent Crime": 110,
      "Property Crime": 210,
      "Drug Offenses": 55,
    },
    2012: {
      "Violent Crime": 120,
      "Property Crime": 220,
      "Drug Offenses": 60,
    },
    2013: {
      "Violent Crime": 130,
      "Property Crime": 230,
      "Drug Offenses": 65,
    },
    2014: {
      "Violent Crime": 140,
      "Property Crime": 240,
      "Drug Offenses": 70,
    },
    2015: {
      "Violent Crime": 150,
      "Property Crime": 250,
      "Drug Offenses": 75,
    },
    2016: {
      "Violent Crime": 160,
      "Property Crime": 260,
      "Drug Offenses": 80,
    },
    2017: {
      "Violent Crime": 170,
      "Property Crime": 270,
      "Drug Offenses": 85,
    },
    2018: {
      "Violent Crime": 180,
      "Property Crime": 280,
      "Drug Offenses": 90,
    },
    2019: {
      "Violent Crime": 190,
      "Property Crime": 290,
      "Drug Offenses": 95,
    },
    2020: {
      "Violent Crime": 200,
      "Property Crime": 300,
      "Drug Offenses": 100,
    },
  };
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
      borderColor: getRandomColor(),
    })),
  };

  const data = {
    labels: ["Low Priority", "Medium Priority", "High Priority"],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: "No of bugs on the basis of priority",
        data: [55, 23, 96],
        // you can set indiviual colors for each bar
        backgroundColor: ["lightpink", "lightgreen", "lightblue"],

        borderWidth: 3,
        borderColor: "black",
        borderRadius: 5,
      },
    ],
  };
  return (
    <>
      {console.log(abstract)}
      <Container maxW={"2xl"} bgColor={"#ffffff"}>
        <Center>
          <Heading>Analysis</Heading>
        </Center>
        <Spacer height={"100px"} />
        <Text>{abstract}</Text>
        <Spacer height={"100px"} />

        <BarGraph/>

        <LineGraph/>
      </Container>
    </>
  );
}
