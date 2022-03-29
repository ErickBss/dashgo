import { useQuery } from 'react-query'
import { api } from '../api'

type UsersListData = {
  id: number
  name: string
  email: string
  createdAt: string
}

async function getUsers(): Promise<UsersListData[]> {
  const { data } = await api('/users')

  const users = data.users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }))

  return users
}

export function useUsers() {
  return useQuery('usersList', getUsers, {
    staleTime: 1000 * 5, // 5 seconds
  })
}
