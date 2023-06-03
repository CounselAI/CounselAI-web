import React from 'react'
import { Input,Heading,Box,Button } from '@chakra-ui/react';

export default function SearchBar({handleQuery,queryRef}) {
  return (
    <>
    
            <Heading color={"#ffdc25"}>Find Legal Data in an Instant</Heading>
            <Input ref = {queryRef}  fontSize={"18px"} color={"black"} type='search' placeholder='Search'  maxW={"600px"} padding={"20px"} borderRadius={"12px"} border={"none"} backgroundColor={"rgba(255 ,255, 255, 0.7)"} _placeholder={{color:"black",opacity:"1"}}/>
            <Button variant={"custom"} size={"lg"} onClick={handleQuery}>CounselQuery</Button>
    </>
  )
}
