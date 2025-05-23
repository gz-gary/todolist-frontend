'use client'

import Frame from "@/components/Frame"
import "@fontsource/roboto/400.css"
import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode)
  const switchMode = () => { setIsDarkMode(!isDarkMode) }

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  })

  return (
    <html>
      <title>Todolist</title>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Frame handleSwitchTheme={switchMode}>
            {children}
          </Frame>
        </ThemeProvider>
      </body>
    </html>
  )
}