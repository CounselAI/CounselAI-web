import React from 'react'
import Result from './Result'
import { useState } from 'react';
import { Box,FormControl,FormLabel} from '@chakra-ui/react'

export default function ResultList({data,handleClick}) {
    

   
  return (
   <>
        <Box width={"100%"} backgroundColor={"#282828"} >


          
            <Result key={1} id={1} handleClick={handleClick} /> 
            
          
          
          
          
       
        </Box>
   </>
  )
}
