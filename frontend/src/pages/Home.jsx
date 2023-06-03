import React from 'react';
import Cta from '../components/CallToAction/Cta';
import { Box,Container,Center } from "@chakra-ui/react";
import SearchBar from '../components/SearchArea/SearchBar';
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate();
    

  function handleClick(){

    navigate("/login")

  }
  return (
    <>
    <Box display={"flex"} flexDir={"column"} gap={"3em"} maxWidth={"600px"}>
    <Cta handleClick={handleClick}/>
    </Box>
    
      
    </>
  )
}
