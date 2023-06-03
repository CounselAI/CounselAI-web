import React from "react";
import { Outlet } from "react-router-dom";
import { Button, Box, Container,Center } from "@chakra-ui/react";
import LogoIcon from "../components/Logo/LogoIcon";
import SearchArea from "../components/SearchArea/SearchArea";
import SearchBar from "../components/SearchArea/SearchBar";
import Credits from "../components/Credits/Credits";

export default function Results() {
  return (
    <>
    <Box  minheight={"100vh"}>
      <Box display={"flex"} alignItems={"center"} padding={"0 2em 0 2em"} gap={"4em"}>
        <LogoIcon height={"200px"} width={"200px"} />
        <Box marginLeft={"auto"}>
          <Credits />
        </Box>

        <Button variant={"custom"}>Susbcription</Button>
      </Box>

        
        <Outlet />
        </Box>
        
      
    </>
  );
}
