import { useQuery } from 'react-query'
import { NumberSchema } from 'yup'
import { api } from '../api'

type UsersListData = {
  id: number
  name: string
  email: string
  createdAt: string
}

type GetUserResponse = {
  totalCount: number
  users: UsersListData[]
}

async function getUsers(page: number): Promise<GetUserResponse> {
  const { data, headers } = await api('/users', {
    params: {
      page,
    },
  })

  const totalCount = Number(headers['x-total-count'])

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

  return { users, totalCount }
}

export function useUsers(page: number) {
  return useQuery(['usersList', page], () => getUsers(page), {
    staleTime: 1000 * 5, // 5 seconds
  })
}
