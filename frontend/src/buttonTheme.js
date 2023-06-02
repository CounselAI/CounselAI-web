import {defineStyle,defineStyleConfig} from '@chakra-ui/react'

const custom = defineStyle({
    baseStyle:{
        textShadow:'2px 2px 2px'
    },
    border:'none',
    borderRadius:"12",
    fontWeight:"bold",
    backgroundColor:"#FFDC25",
    _hover: {backgroundColor: "#e0c222"},
   
    underline:{
        _hover:{
            textDecor:"underline"
        }
    }
    
    

})


export const buttonTheme = defineStyleConfig({
    variants:{custom},
})
