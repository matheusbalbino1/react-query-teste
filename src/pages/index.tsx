
import {
  Flex,
  ListItem,
  Text, UnorderedList
} from '@chakra-ui/react'
import { useEffect } from 'react'

export default function Home() {

  useEffect(()=>{
    fetch("http://localhost:3000/api/users")
    .then(resposta => resposta.json())
    .then(dados => console.log(dados))
  },[])

  return (
    <Flex
      justify="center"
      align="center"
      height="100vh"
      direction="column"
      width="100%">
      <Flex direction="column">
        <Text as="h1" mb={4} textTransform="uppercase">
          Lista para aprender <Text as="strong" color="pink">"React Query"</Text> com  Chakra-UI
        </Text>
        <UnorderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
      </Flex>
    </Flex>
  )
}
