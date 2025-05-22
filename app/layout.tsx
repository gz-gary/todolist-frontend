import "@fontsource/roboto/400.css"
import { Button } from '@mui/material'
import React from 'react'
import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <title>Todolist</title>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
      </head>
      <body><Button variant="contained">Hello world</Button></body>
    </html>
  )
}