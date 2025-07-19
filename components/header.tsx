'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className='w-full px-4 py-8 flex items-center justify-center bg-neutral-900'>
      <Image src='/logo/dishfolio.webp' alt='Logo' width={150} height={50} className='' />
    </header>
  )
}
