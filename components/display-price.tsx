'use client'

import { menu } from '@/app/data/products'

export default function DisplayPrice({ price }: { price: number }) {
  return (
    <p className='text-xl font-bold mt-[12px]'>
      <span className='sr-only'>Price: </span>
      {price}€
    </p>
  )
}
