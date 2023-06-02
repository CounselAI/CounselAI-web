import React from "react";
import { Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import { Box } from "@chakra-ui/react";
import styles from './RootLayout.module.css';
export default function RootLayout( ) {
  return (
    <>
      <Box className={styles.background}>
        <Header />
        <Outlet />
      </Box>
    </>
  );
}
