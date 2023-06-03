import React from 'react'
import SearchArea from '../components/SearchArea/SearchArea'
import { Spacer,Container ,Center,Box,Button} from '@chakra-ui/react'
import ResultList from '../components/ResultCards/ResultList'
import { useRef,useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
export default function Search() {



  function getToken(){
    const data = (localStorage.getItem('userData'));
    const token = JSON.parse(data).data.access_token
    return token;
  }

  const navigate = useNavigate();
  const queryRef = useRef(null);
  const [list,setList]=useState([]);
  const [result,setResult]=useState([])
  const {abstract,setAbstract} = useAuth()

  function handleQuery(){
    const token = getToken()
    console.log(token)
    console.log(queryRef.current.value)
    const url = "http://localhost:8080/v1/ai/query";
    let data = { "query": queryRef.current.value }
    console.log(JSON.stringify(data))
    const res = fetch(url,{method: "POST",mode:'cors', headers: {"Content-Type": "application/json",Authorization:token},
    body: JSON.stringify(data)})
    .then((res)=>{
     
       return res.json(); 
    })
      .then((res => {
        console.log(typeof res.data.data)
        setResult(res.data.data.slice(0,10))
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

    const url = "http://127.0.0.1:8000/cases/compile/nlp";
    let data = { "ids": list }
    console.log(JSON.stringify(data))
    const res = fetch(url,{method: "POST",mode:'cors', headers: {"Content-Type": "application/json","Accept-Encoding":"gzip, deflate, br"},
    body: JSON.stringify(data)})
    .then((res)=>{
     
       return res.json(); 
    })
      .then((res => {
        navigate("/visual")
        console.log(res.data)
        setAbstract(res.data)
        
      }))
    .catch((e)=>{
      console.log(e)
    })

  


  }



  return (
    <>
    <Box >
    <SearchArea handleQuery={handleQuery} queryRef={queryRef}/>
    <Spacer height={"3em"}/>
    
    <Center><Button onClick={handleCompile} variant={"custom"}>Compile</Button></Center>
    <Spacer height={"3em"}/>
    
    <Center justifyContent={"center"} alignItems={"center"}>
    <ResultList handleClick={handleClick} setList={setList} data={result} />
    </Center>
    </Box>
    <Spacer height={"3em"}/>
    
    <Center><Button onClick={handleCompile} variant={"custom"}>Compile</Button></Center>
    <Spacer height={"3em"}/>
    
    </>
  )
}
