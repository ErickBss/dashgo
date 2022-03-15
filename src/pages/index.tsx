import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/ input'

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        w="100%"
        maxW="360px"
        bg="gray.800"
        padding={8}
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing={4}>
          <Input name="email" type="email" label="E-mail" />

          <Input name="password" type="password" label="Password" />
        </Stack>

        <Button type="submit" marginTop={6} colorScheme="pink" size="lg">
          Login
        </Button>
      </Flex>
    </Flex>
  )
}
