'use client'

import styles from '@/components/styles.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function SidebarWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()

  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.open : ''}`}>
      <div>
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