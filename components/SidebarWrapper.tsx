'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function SidebarWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: isOpen ? '200px' : '50px' }}>
        <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
        <nav>
          <Link href="/items" className={pathName == '/items' ? 'active' : ''}>
            Items
          </Link>
          <Link href="/about" className={pathName == '/about' ? 'active' : ''}>
            About
          </Link>
        </nav>
      </div>
      <main>{children}</main>
    </div>
  )
}