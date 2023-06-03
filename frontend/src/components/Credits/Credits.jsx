import React from 'react'
import { Heading,Box,Text,Button } from '@chakra-ui/react'


export default function Credits({value=10}) {
  return (
    <>
        <Button variant={"custom"} isDisabled={true} >Credits:{value}</Button>  
    </>
  )
}
