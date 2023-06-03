import React from 'react'
import Result from './Result'
import { useState } from 'react';
import { Box,FormControl,FormLabel} from '@chakra-ui/react'

export default function ResultList({data,handleClick}) {
    

   
  return (
   <>
        <Box width={"100%"} backgroundColor={"#282828"} >

          

          {data.map((item)=>{
            return  <Result key={item.Id} title = {item.Name}
            id = {item.Id}
            term = {item.Term}
            prosecutor = {item.First_party}
            defendent ={item.Second_party}
            facts = {item.Facts}
            issuearea = {item.Issue_area} 
            handleClick={handleClick}/> 

          })}
          
            
            
          
          
          
          
       
        </Box>
   </>
  )
}
