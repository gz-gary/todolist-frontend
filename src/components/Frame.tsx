import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import { Box } from '@mui/material'
import React, { useState } from 'react'

export default function Frame({
  children
}: {
  children: React.ReactNode,
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen)
  }

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Topbar
          handleMenuButtonClicked={
            () => {
              toggleSidebar(true)
            }
          }
        />
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