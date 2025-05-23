import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'

export default function Frame({
  children, handleSwitchTheme
}: {
  children: React.ReactNode,
  handleSwitchTheme: () => void
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen)
  }

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Topbar
          handleMenuButtonClicked={
            () => {
              toggleSidebar(true)
            }
          }
        />

        <Button variant="contained" onClick={handleSwitchTheme}>
          SWITCH THEME
        </Button>
        {children}
      </Box>
      <Sidebar 
        open={isSidebarOpen}
        onClose={
          () => toggleSidebar(false)
        }
      />
    </>
  )
}