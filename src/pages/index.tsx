
import { Flex, ListItem, Spinner, Text, UnorderedList } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useQuery } from "@tanstack/react-query"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import Link from 'next/link'
import { api } from '../services/api'
import { useUsers } from '../services/hooks/useUsers'


export default function Home() {

  const { isLoading, error, data } = useUsers()

  return (
    <Flex
      justify="center"
      align="center"
      height="100vh"
      direction="column"
      width="100%">
      <Link href="/dashboard"><a>Ir para DashBoard</a></Link>
      <Flex direction="column" align={"center"} justify="center">
        <Text as="h1" mb={4} textTransform="uppercase">

          Lista para aprender <Text as="strong" color="pink">"React Query"</Text> com  Chakra-UI
        </Text>
        {isLoading ? (
          <Flex justify={"center"} align="center" mt="4">
            <Spinner color="pink" size={"xl"} />
          </Flex>)
          : !error && !isLoading && (
            <UnorderedList display={"flex"} flexWrap="wrap">
              {data.map((user) => (<ListItem key={user.id} ml="10" w="50" bg="white" color="black" mt="10" p="4">
                <Text>{user.name}</Text>
                <Text>{user.email}</Text>
                <Text>{user.createdAt}</Text>
              </ListItem>)
              )}
            </UnorderedList>)}

      </Flex>
    </Flex>
  )
}
