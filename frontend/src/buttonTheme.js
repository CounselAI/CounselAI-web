import {defineStyle,defineStyleConfig} from '@chakra-ui/react'

const custom = defineStyle({
    border:'none',
    borderRadius:"12",
    fontWeight:"bold",
    backgroundColor:"#FFDC25",

})


export const buttonTheme = defineStyleConfig({
    variants:{custom},
})
