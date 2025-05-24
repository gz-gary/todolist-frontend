'use client'

import Frame from "@/components/Frame"
import "@fontsource/roboto/400.css"
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { Roboto } from 'next/font/google'
import React from 'react'
import getTheme, { DarkModeContext } from 'theme'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme, isDarkMode, setIsDarkMode } = getTheme()

  return (
    <html lang="en" className={roboto.variable}>
      <title>Todolist</title>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
      </head>
      <body style={{ height: '100vh' }}>
        <AppRouterCacheProvider>
          <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            <ThemeProvider theme={theme}>
              <CssBaseline enableColorScheme/>
              <Frame>
                {children}
              </Frame>
            </ThemeProvider>
          </DarkModeContext.Provider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}