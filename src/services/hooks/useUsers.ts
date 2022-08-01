import { useQuery } from "@tanstack/react-query"
import { api } from '../api'

type User = {
    id:string;
    name:string;
    email:string;
    createdAt:string;
  }
  

async function getUsers(): Promise<User[]> {
    const { data } = await api.get("users")
    let users = data.users.map((user) => {
        return {
            id: user.id,
            email: user.email,
            name: user.name,
            createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric"
            })
        }
    }
    )
    return users;
}

export function useUsers() {
    return useQuery(["users-list"], getUsers, {
        staleTime: 10000
    })
}