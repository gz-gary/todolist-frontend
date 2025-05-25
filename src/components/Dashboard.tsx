'use client'

import { apiUrl } from '@/lib/constants'
import { TodolistItem } from '@/lib/types'
import { Box } from '@mui/material'
import { useQuery } from '@tanstack/react-query'

export default function Dashboard() {
  const { isPending, error, data } = useQuery({
    queryKey: ['todolistItems'],
    queryFn: () =>
      fetch(`${apiUrl}/items`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          return response.json()
        })
        .then(json => json as TodolistItem[])
  })
  const content = isPending ? (
    <p>...Loading</p>
  ) : error ? (
    <p>{`Error while fetching data: ${error.message}`}</p>
  ) : data ? (
    <p>{'Number of to-dos: ' + data.filter(({ finished }) => !finished).length}</p>
  ) : (
    <p>No data</p>
  )
  return (
    <Box sx={{ p: 5 }}>
      <h1>Dashboard</h1>
      {content}
    </Box>
  )
}