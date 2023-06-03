import React from "react";
import { useRef, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  Box,
} from "@chakra-ui/react";
import { useAuth } from "../Context/AuthContext";
export default function Login() {
  const navigate = useNavigate();
  const { userpid, setuserpid } = useAuth();
  const emailRef = useRef(null);
  const otpRef = useRef(null);
  const [isLoading, setisLoading] = useState(false);
  const [otpLoading, setotpLoading] = useState(false);

  const [show, setShow] = useState("none");
  const [kill , setKill] = useState("block")
   
  function handleSubmit() {
    const url = "http://localhost:8080/v1/users/send-otp";
    const data = { email: emailRef.current.value };
    setisLoading(true);
    const res = fetch(url, { method: "POST",mode: "cors", headers: {"Content-Type": "application/json",},body: JSON.stringify(data)
  })
    .then((res) => {
      if (res.ok) {
        console.log(res);
        setShow("block")
        return res.json();

      }
    })
    .then((res) => {
      console.log(res.data);
      setuserpid(res.data.user_pid);
    })
    .catch((e) => {
      console.log(e);
      setisLoading(false);
    }); 
  }


  function handleOTP() {
    setotpLoading(true);
    const url = "http://localhost:8080/v1/users/verify-otp";
    const data = {"user_pid": userpid,"otp": otpRef.current.value,};

    const res = fetch(url, {method: "POST",mode: "cors", headers: {  "Content-Type": "application/json", },body: JSON.stringify(data),})
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        }
      })
      .then((res) => {
        localStorage.setItem("userData", JSON.stringify(res));
        console.log(res.data);
        navigate("/search");
      })
      .catch((e) => {
        console.log(e);
        setotpLoading(false);
        setKill("block");
        setShow("none");
      });
  }




  return (
    <>
      <Box height={"100vh"} >
        <Container  paddingTop={"100px"}>
          <Center margin={"0 0 5em 0"}>
            <Icon width={"200px"} height={"100px"} />
          </Center>
          <Card minW={"100%"} boxShadow={"2xl"} backgroundColor={"#282828"} >
            <CardHeader>
              <Heading
                as={"h2"}
                display={"flex"}
                justifyContent={"center"}
                color={"#ffdc25"}
              >
                Log In
              </Heading>
            </CardHeader>

            <CardBody display={"flex"} flexDir={"column"} gap={"16px"} color={"white"}>
              <FormControl isRequired >
                <FormLabel>Email Address</FormLabel>
                <Input type="email" ref={emailRef} />
                <FormHelperText color={"white"}>We' ll never share your email.</FormHelperText>
              </FormControl>
              <FormControl isRequired  display={!show}>
                <FormLabel>Enter the OTP</FormLabel>
                <Input type="text" ref={otpRef} />
                <FormHelperText color={"white"}>Check your Email</FormHelperText>
              </FormControl>
              <FormErrorMessage>{}</FormErrorMessage>
              <Box>
              <Box color={"black"}>
                <Button
                  type="submit"
                  display={kill}
                  variant={"custom"}
                  marginBottom={"20px"}
                  onClick={handleSubmit}
                  isLoading={isLoading}
                >
                  Submit Email
                </Button>

                <Button
                  display={show}
                  type="submit"
                  variant={"custom"}
                  marginBottom={"20px"}
                  onClick={handleOTP}
                  isLoading={otpLoading}
                  
                >
                  Submit OTP
                </Button>
                </Box>
              </Box>
            </CardBody>
          </Card>
        </Container>
      </Box>
    </>
  )

}
 

