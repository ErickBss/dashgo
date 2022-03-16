import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr={4} textAlign="right">
        <Text>Erick Souza Basso</Text>
        <Text color="gray.300" fontSize="small">
          erickbasso22@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Erick Souza Basso"
        src="https://github.com/ErickBss.png"
      />
    </Flex>
  )
}
