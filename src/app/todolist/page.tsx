import Todolist from '@/components/Todolist'
import { Box, Divider } from '@mui/material'

export default function TodolistPage() {
  return (
    <>
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        {Todolist(false)}
        <Divider
          orientation="vertical"
          flexItem
        />
        {Todolist(true)}
      </Box>
    </>
  )
}