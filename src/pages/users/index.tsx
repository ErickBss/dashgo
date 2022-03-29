import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

import { RiAddLine } from 'react-icons/ri'
import { Header } from '../../components/Header/index'
import { IsActive } from '../../components/IsActive'
import { Pagination } from '../../components/Pagination/index'
import { SideBar } from '../../components/Sidebar/index'

import { useQuery } from 'react-query'

type UsersListData = {
  data: [
    {
      id: number
      name: string
      email: string
      createdAt: string
    },
  ]

  isFetching: boolean
  isLoading: boolean
  error: unknown
}

export default function UsersList() {
  const { data, isLoading, isFetching, error }: UsersListData = useQuery(
    'usersList',
    async () => {
      const response = await fetch('http://localhost:3000/api/users')

      const data = await response.json()

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
    },
    {
      staleTime: 1000 * 5, // 5 seconds
    },
  )

  return (
    <Box>
      <Header />

      <Flex w="100vw" maxW={1480} mx="auto" px={['4', '6']}>
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={['4', '6']}>
          <Flex mb={8} justify="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">
              Users
              {!isLoading && isFetching && (
                <Spinner fontSize="x-small" color="gray.500" ml="4" />
              )}
            </Heading>

            <IsActive href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize={20} />}
              >
                Create new
              </Button>
            </IsActive>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Fail getting the data user</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px="6" color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>User</Th>
                    <Th>Register data</Th>
                    <Th width={8}></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td px="6">
                          <Checkbox colorScheme="pink" />
                        </Td>

                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        <Td>{user.createdAt}</Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}
