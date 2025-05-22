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
      <div className={styles.sidebar}>
        <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
        <Link href="/items" className={pathName == '/items' ? 'active' : ''}>
          Items
        </Link>
        <Link href="/about" className={pathName == '/about' ? 'active' : ''}>
          About
        </Link>
      </div>
      <main className={styles.content}>{children}</main>
    </div>
  )
}