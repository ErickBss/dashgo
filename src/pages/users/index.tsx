import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Link,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { useState } from 'react'

import { RiAddLine } from 'react-icons/ri'
import { Header } from '../../components/Header/index'
import { IsActive } from '../../components/IsActive'
import { Pagination } from '../../components/Pagination/index'
import { SideBar } from '../../components/Sidebar/index'
import { api } from '../../services/api'
import { useUsers } from '../../services/hooks/useUsers'
import { queryClient } from '../../services/queryClient'

export default function UsersList() {
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching, error } = useUsers(page)

  async function handlePrefetchUser(userId: number) {
    await queryClient.prefetchQuery(
      ['user', userId],
      async () => {
        const { data } = await api.get(`/users/${userId}`)

        return data
      },
      {
        staleTime: 1000 * 60 * 10, // 10 minutes
      },
    )
  }

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
                  {data.users.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td px="6">
                          <Checkbox colorScheme="pink" />
                        </Td>

                        <Td>
                          <Box>
                            <Link
                              color="purple.400"
                              onMouseEnter={() => handlePrefetchUser(user.id)}
                            >
                              <Text fontWeight="bold">{user.name}</Text>
                            </Link>
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

              <Pagination
                totalCountOFRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}
