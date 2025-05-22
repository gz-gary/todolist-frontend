import SidebarWrapper from '@/components/SidebarWrapper';
import React from 'react';

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