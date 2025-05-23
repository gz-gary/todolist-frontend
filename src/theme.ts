'use client';

import { useMediaQuery } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { useState } from 'react'

export default function getTheme() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode)
  const switchMode = () => { setIsDarkMode(!isDarkMode) }

  const theme = createTheme({
    typography: {
      fontFamily: 'var(--font-roboto)',
    },
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  })

  const switchTheme = switchMode

  return { theme, switchTheme }
}
