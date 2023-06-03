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

  function click(){
    console.log(id)
    handleClick(id)

  }

  return (
    <>
      <Card  onClick={click}  padding={"0 2em"} color={"#FFDC25"} border={"2px solid #FFDC25"} fontWeight={"medium"} _hover={{boxShadow:"lg"}} backgroundColor={"#000000"} id = {id} >
        <CardHeader padding={" 1em 2em"}>
          <Text>Case ID:{id}</Text>

          <Text>Title: {title}</Text>
          <Text>Year: {term}</Text>
          <Text>Prosecutor: {prosecutor}</Text>
          <Text>Defendent: {defendent}</Text>
        </CardHeader>

        <CardBody paddingLeft={"3em"}>
          <Text>About:</Text><Text fontWeight={"medium"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ex molestias recusandae veritatis sunt corrupti eveniet quaerat beatae numquam itaque, doloribus minus consequatur corporis ad neque expedita earum nostrum suscipit.</Text>
        </CardBody>
        <CardFooter>Issue Area: {issuearea}</CardFooter>
      </Card>
    </>
  );
}
