'use client'

import { useEffect, useState } from 'react'
import { menu } from '@/app/data/products'

export default function MenuBar() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // set sticky state based on scroll position
      const shouldStick = window.scrollY > 100
      setIsSticky(shouldStick)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`z-50 py-4 flex items-center gap-2 bg-neutral-900 mb-[1.5rem] overflow-auto transition-all duration-300 ${
        isSticky
          ? 'sticky top-0 left-0 right-0 shadow-md w-full lg:justify-center border-b-2 xl:max-w-[80rem]'
          : 'max-w-full'
      }`}
    >
      {Object.entries(menu).map(([categoryKey, category]) => (
        <a
          href={`#${category.slug}`}
          key={category.id}
          className='text-base/3 px-4 py-1.5 rounded-full hover:bg-neutral-500 cursor-pointer md:text-lg/4 lg:text-xl whitespace-nowrap'
        >
          {categoryKey}
        </a>
      ))}
    </nav>
  )
}
