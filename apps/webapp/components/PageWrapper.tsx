'use client'

import { cn } from '@/lib/utils'
import { useMenu } from '@/context/MenuContext'

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  const { isMenuOpen, isAwardsOpen } = useMenu()

  return (
    <main 
      className={cn(
        "min-h-screen relative bg-[#070B1D] transition-all duration-300 ease-in-out",
        isMenuOpen ? (
          isAwardsOpen ? "pt-[400px]" : "pt-[280px]"
        ) : "pt-20",
        className
      )}
    >
      {children}
    </main>
  )
} 