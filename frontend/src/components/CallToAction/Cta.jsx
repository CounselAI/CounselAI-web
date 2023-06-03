import { Heading,Button,Box } from '@chakra-ui/react'
import React from 'react'

export default function Cta({handleClick}) {
  return (
    <>
    
    <Heading color={"white"}>Unlock the Power of Counsel AI!
        Elevate Your Legal Practice with AI-Powered
        Insights!
    </Heading>
    <Box>
    <Button boxShadow={"md"} variant={"custom"} size={"lg"} fontSize={"24px"} onClick={handleClick}>Get Started</Button>
    </Box>
    </>
  )
}
