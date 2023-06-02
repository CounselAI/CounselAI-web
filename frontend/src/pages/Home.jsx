import React from 'react';
import Cta from '../components/CallToAction/Cta';
import { Box,Container,Center } from "@chakra-ui/react";
import SearchBar from '../components/SearchArea/SearchBar';

export default function Home() {
  return (
    <>
    <Box display={"flex"} flexDir={"column"} gap={"3em"} maxWidth={"600px"}>
    <Cta/>
    </Box>
    
      
    </>
  )
}
