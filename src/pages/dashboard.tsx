import dynamic from 'next/dynamic'

import { ApexOptions } from 'apexcharts'

import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import { Header } from '../components/Header/index'

import { SideBar } from '../components/Sidebar/index'

const Chart = dynamic(() => import('react-apexcharts'), {
  //linked with an event like a click or window load
  ssr: false,
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-03-17T00:00.000Z',
      '2022-03-18T00:00.000Z',
      '2022-03-19T00:00.000Z',
      '2022-03-20T00:00.000Z',
      '2022-03-21T00:00.000Z',
      '2022-03-22T00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
}

const series = [{ name: 'seriesOne', data: [31, 500, 154, 650, 870, 1000] }]

export default function Dashboard() {
  return (
    <Flex flexDirection="column" h="100vh">
      <Header />

      <Flex w="100%" my={6} maxW={1480} mx="auto" px={6}>
        <SideBar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb={4}>
              Week Subscribers
            </Text>

            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb={4}>
              Initial tax
            </Text>

            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
