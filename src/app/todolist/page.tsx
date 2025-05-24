'use client'

import Todolist from '@/components/Todolist'
import { Box, Divider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function TodolistPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flex: 1,
          minHeight: 0,
          overflow: 'hidden',
        }}
      >
        <Todolist finished={false}/>
        <Divider
          orientation="vertical"
          flexItem
        />
        <Todolist finished={true}/>
      </Box>
    </QueryClientProvider>
  )
}