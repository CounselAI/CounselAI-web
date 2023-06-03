import React from 'react'
import SearchArea from '../components/SearchArea/SearchArea'
import { Spacer,Container ,Center,Box,Button} from '@chakra-ui/react'
import ResultList from '../components/ResultCards/ResultList'
import { useRef,useState } from 'react';


export default function Search() {

  const queryRef = useRef(null);
  const [list,setList]=useState([]);

  function handleQuery(){
    console.log(queryRef.current.value)
    const url = "http://127.0.0.1:8000/cases/query";
    let data = { "query": queryRef.current.value }
    console.log(JSON.stringify(data))
    const res = fetch(url,{method: "POST",mode:'cors', headers: {"Content-Type": "application/json","Accept-Encoding":"gzip, deflate, br"},
    body: JSON.stringify(data)})
    .then((res)=>{
     
       return res.json(); 
    })
      .then((res => {
        console.log(res)
      }))
    .catch((e)=>{
      console.log(e)
    })

  }

  function handleClick(id){
    console.log(id)
    if(list.includes(id)){
      setList(list.filter((item)=>{
          item !==id
      }))

    }
    else
    {
      setList(prevstate =>[...prevstate,id])


    }
    console.log(list)
  }

  function handleCompile(){

  }


  return (
    <>
    <Box >
    <SearchArea handleQuery={handleQuery} queryRef={queryRef}/>
    <Spacer height={"3em"}/>
    
    <Center><Button onClick={handleCompile} variant={"custom"}>Compile</Button></Center>
    <Spacer height={"3em"}/>
    
    <Center justifyContent={"center"} alignItems={"center"}>
    <ResultList handleClick={handleClick} setList={setList}/>
    </Center>
    </Box>
    <Spacer height={"3em"}/>
    
    <Center><Button onClick={handleCompile} variant={"custom"}>Compile</Button></Center>
    <Spacer height={"3em"}/>
    
    </>
  )
}
