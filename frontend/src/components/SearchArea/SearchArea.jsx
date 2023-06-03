import React from "react";
import { Container ,Center} from "@chakra-ui/react";
import SearchBar from "./SearchBar";
export default function SearchArea({handleQuery,queryRef}) {
  return (
    <>
      
        <Center flexDir={"column"} gap={"4em"} width={"100%"}>
          <SearchBar handleQuery={handleQuery} queryRef={queryRef}/>
        </Center>
     
    </>
  );
}
