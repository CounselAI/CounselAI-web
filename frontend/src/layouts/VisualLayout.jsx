import React from "react";
import {Box} from "@chakra-ui/react";
import LogoIcon from "../components/Logo/LogoIcon";

export default function VisualLayout() {
  return (
    <>
      <Box minH={"100vh"} padding={"0 2em"}>
        <LogoIcon height={"200px"} width={"200px"} />
      </Box>
    </>
  );
}
