'use client'

import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import LenisWrapper from '@/components/LenisWrapper'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <LenisWrapper>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          {children}
        </div>
      </AnimatePresence>
    </LenisWrapper>
  )
}
