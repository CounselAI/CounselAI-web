import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./buttonTheme";

const theme = extendTheme({

    fonts: {
        heading: `Open Sans`,
        body: `Open Sans`
    },
    components: { Button: buttonTheme },
    styles: {
        global: {
            body: {
                fontFamily:'Open Sans',
                fontWeight:'800',
                letterSpacing:"2px"

            }
        }
    }

}
)




export default theme;