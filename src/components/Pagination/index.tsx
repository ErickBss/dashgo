import { HStack, Box, Stack, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
  totalCountOFRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

const siblingsCount = 1 // how much pages will show before and after of the current ex: sibling | current | sibling

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      // from = 2, to = 5, return = array with 3 fields
      return from + index + 1 // 2 + index = 0 + 1 = 3
    })
    .filter((page) => page > 0)
}

export function Pagination({
  totalCountOFRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOFRegisters / registersPerPage) // 100 / 10 = 10 pages

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : []

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
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} pageNumber={1} />
            {currentPage > siblingsCount + 2 && (
              <Text color="gray.300" w={8} textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                pageNumber={page}
              />
            )
          })}

        <PaginationItem
          onPageChange={onPageChange}
          pageNumber={currentPage}
          isCurrent
        />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                pageNumber={page}
              />
            )
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" w={8} textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} pageNumber={lastPage} />
          </>
        )}
      </HStack>
    </Stack>
  )
}
