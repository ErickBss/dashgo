import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Header/index'
import { IsActive } from '../../components/IsActive'
import { Pagination } from '../../components/Pagination/index'
import { SideBar } from '../../components/Sidebar/index'

export default function UsersList() {
  return (
    <Box>
      <Header />

      <Flex w="100vw" maxW={1480} mx="auto" px={['4', '6']}>
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={['4', '6']}>
          <Flex mb={8} justify="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">
              Users
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
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Erick Souza Basso</Text>
                    <Text fontSize="sm" color="gray.300">
                      erickbasso22@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>March 15, 2022</Td>
              </Tr>
            </Tbody>

            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Erick Souza Basso</Text>
                    <Text fontSize="sm" color="gray.300">
                      erickbasso22@gmail.com
                    </Text>
                  </Box>
                </Td>

                <Td>March 15, 2022</Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
