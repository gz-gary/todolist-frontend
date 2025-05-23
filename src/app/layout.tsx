'use client'

import Frame from "@/components/Frame"
import "@fontsource/roboto/400.css"
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { Roboto } from 'next/font/google'
import React from 'react'
import getTheme from '../theme'

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
  const { theme, switchTheme } = getTheme()

  return (
    <html lang="en" className={roboto.variable}>
      <title>Todolist</title>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Frame onToggleThemeAction={switchTheme}>
              {children}
            </Frame>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}