import React from "react";

export default function SearchArea() {
  return (
    <>
      <Container maxW={"100%"} margin={"20em 0 5em 0"}>
        <Center flexDir={"column"} gap={"4em"}>
          <SearchBar />
        </Center>
      </Container>
    </>
  );
}
