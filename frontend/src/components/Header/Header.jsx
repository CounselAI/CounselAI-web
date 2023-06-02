import { Box } from "@chakra-ui/react";
import React from "react";

import LogoIcon from "../LogoIcon";

export default function Header() {
  return (
    <>
      <nav>
        <Box>
        <LogoIcon height={"100%"} width={"300px"}/>
        </Box>
      </nav>
    </>
  );
}
