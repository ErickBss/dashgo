import { HStack, Button, Box, Stack } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export function Pagination() {
  return (
    <Stack
      mt={8}
      direction={['column', 'row']}
      justify="space-between"
      alignItems="center"
      spacing={6}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing={4}>
        <PaginationItem isCurrent pageNumber={1} />

        <PaginationItem pageNumber={2} />

        <PaginationItem pageNumber={3} />

        <PaginationItem pageNumber={4} />
      </HStack>
    </Stack>
  )
}
