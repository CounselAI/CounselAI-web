import React from "react";
import { useRef } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import Icon from "../components/Logo/Icon";
import {
  Center,
  Text,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  FormErrorMessage,
  Link,
  Container,
  Box
} from "@chakra-ui/react";
import LogoIcon from "../components/Logo/LogoIcon";

export default function Login() {
    const navigate = useNavigate();
    const emailRef = useRef(null);


    function handleSubmit(){

    }
    

  return (
    <>
    <Box height={"100%"}>
      <Container marginTop={"300px"}>
        <Center margin={"0 0 5em 0"}>
        <Icon width={"200px"} height={"100px"}/>
        </Center>
        <Card minW={"100%"} boxShadow={"2xl"}>
          <CardHeader>
            <Heading as={"h2"} display={"flex"} justifyContent={"center"} color={"#ffdc25"}>
              Log In
            </Heading>
          </CardHeader>

          <CardBody display={"flex"} flexDir={"column"} gap={"16px"}>
            <FormControl isRequired ref={emailRef}>
              <FormLabel>Email Address</FormLabel>
              <Input type="email" />
              <FormHelperText>We' ll never share your email.</FormHelperText>
            </FormControl>

            <Button type="submit" variant={"custom"} marginBottom={"20px"} onClick={handleSubmit}>
              Submit
            </Button>
          </CardBody>
        </Card>
      </Container>
      </Box>
    </>
  );
}
