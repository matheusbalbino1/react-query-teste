import { Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Dashboard(){
    return(
        <Flex>
            <h1>Pagina DashBoard</h1>
            <Link href="/"><a>Teste</a></Link>
        </Flex>
    )
}