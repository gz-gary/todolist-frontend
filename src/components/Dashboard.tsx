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
        .then(response => response.json() as Promise<TodolistItem[]>)
  })
  const content = isPending ? (<p>...Loading</p>) : (
    error ? (<p>Error while fetching data</p>) : (
      <p>{'Number of to-dos: ' + data.filter(({finished}) => !finished).length}</p>
    )
  )
  return (
    <Box sx={{ p: 5 }}>
      <h1>Dashboard</h1>
      {content}
    </Box>
  )
}