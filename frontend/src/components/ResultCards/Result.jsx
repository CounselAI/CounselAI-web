import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Center,
} from "@chakra-ui/react";

import { useState } from "react";

export default function Result({
  title = "yolo",
  id = 1,
  term = 1971,
  prosecutor = "yolo",
  defendent = "yolo",
  facts = "lorem lorem",
  issuearea = "civil rights",
  handleClick
})

{

  const [isClicked,setisClicked]=useState(false);
  const [color,setColor] = useState("#fcdc25")

  function click(){
    console.log(id)
    handleClick(id)
    if(isClicked==false){
      setColor("green")
      setisClicked(true)

    }
    else
    {
      setColor("#fcdc25")
      
      setisClicked(false)
    }
    

  }

  return (
    <>
      <Card  onClick={click}  padding={"0 2em"} color={"#FFDC25"} border={`2px solid ${color}`} fontWeight={"medium"} _hover={{boxShadow:"lg"}} backgroundColor={"#000000"} id = {id} >
        <CardHeader padding={" 1em 2em"}>
          <Text>Case ID:{id}</Text>

          <Text>Title: {title}</Text>
          <Text>Year: {term}</Text>
          <Text>Prosecutor: {prosecutor}</Text>
          <Text>Defendent: {defendent}</Text>
        </CardHeader>

        <CardBody paddingLeft={"3em"}>
          <Text>About:</Text><Text fontWeight={"medium"}>{facts}</Text>
        </CardBody>
        <CardFooter>Issue Area: {issuearea}</CardFooter>
      </Card>
    </>
  );
}
