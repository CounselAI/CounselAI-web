import React from "react";
import { Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import { Box } from "@chakra-ui/react";
import styles from './RootLayout.module.css';
import { useNavigate } from "react-router-dom";
export default function RootLayout( ) {

    const navigate = useNavigate();

    function handleClick(){
        navigate('/login')

    }

  return (
    <>
      <Box className={styles.background} padding={"2em"}>
        <Header handleClick={handleClick} />
        <Box margin={"20em 5em 5em 5em"}>
        <Outlet />
        </Box>
      </Box>
    </>
  );
}
