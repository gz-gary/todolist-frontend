'use client'

import Dashboard from '@/components/Dashboard'
import { sharedQueryClient } from '@/lib/query'
import { QueryClientProvider } from '@tanstack/react-query'

export default function Page() {
  return (
    <QueryClientProvider client={sharedQueryClient}>
      <Dashboard/>
    </QueryClientProvider>
  )
}
