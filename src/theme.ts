'use client';

import { useMediaQuery } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { createContext, useState } from 'react'

export const DarkModeContext = createContext({
  isDarkMode: false,
  setIsDarkMode: (_arg0: boolean) => {}
})

export default function GetTheme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode)

  const theme = createTheme({
    typography: {
      fontFamily: 'var(--font-roboto)',
    },
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  })

  return { theme, isDarkMode, setIsDarkMode }
}
