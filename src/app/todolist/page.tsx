'use client'

import Todolist from '@/components/Todolist'
import { sharedQueryClient } from '@/lib/query'
import { Box, Divider } from '@mui/material'
import { QueryClientProvider } from '@tanstack/react-query'

export default function TodolistPage() {
  return (
    <QueryClientProvider client={sharedQueryClient}>
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