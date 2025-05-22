import SidebarWrapper from '@/components/SidebarWrapper';
import React from 'react';
import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <title>Todolist</title>
      <body><SidebarWrapper>{children}</SidebarWrapper></body>
    </html>
  )
}