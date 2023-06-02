import { Box,Button } from "@chakra-ui/react";
import React from "react";

import LogoIcon from "../LogoIcon";

export default function Header() {
  return (
    <>
      <nav>
        <Box display={"flex"} >
        <LogoIcon height={"100%"} width={"300px"}/>
        <Button variant={"custom"}  size={"lg"} marginLeft={"auto"}>Log In </Button>
        </Box>
      </nav>
    </>
  );
}
