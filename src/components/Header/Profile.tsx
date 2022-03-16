import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Erick Souza Basso</Text>
          <Text color="gray.300" fontSize="small">
            erickbasso22@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Erick Souza Basso"
        src="https://github.com/ErickBss.png"
      />
    </Flex>
  )
}
