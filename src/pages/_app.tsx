import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme, ThemeComponentProps } from "@chakra-ui/react"
import { makeServer } from "../services/mirage"



const theme = extendTheme({
  colors: {
    blues: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    }
  },
  fonts: {
    body: "Roboto"
  },
  styles: {
    global: {
      body: {
        bg: "blues.900",
        color: "white",
        fontSize: 20
      }
    }
  }

})

function MyApp({ Component, pageProps }) {
  
  if (process.env.NODE_ENV === "development") {
    makeServer()
  }
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
