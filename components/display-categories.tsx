'use client'

import { useState } from 'react'
import { menu } from '@/app/data/products'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import DisplayPrice from './display-price'

import { Button } from '@/components/ui/button'
import { title } from 'process'
import ProductDrawer from './drawer'

export default function DisplayCategories() {
  const [selectedProduct, setSelectedProduct] = useState({
    title: '',
    description: '',
    img: '',
    price: 0,
  })
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const openDrawer = (product: any) => {
    setSelectedProduct(product)
    setIsDrawerOpen(true)
  }

  return (
    <main className='max-w-7xl mx-auto'>
      {Object.entries(menu).map(([categoryKey, category]) => (
        <section key={categoryKey} id={category.slug} className='mb-12' aria-labelledby={`heading-${category.slug}`}>
          <header>
            <h2
              id={`heading-${category.slug}`}
              className='text-4xl font-bold capitalize border-b-2 pb-[0.5rem] mb-[2rem]'
            >
              {categoryKey} Menu
            </h2>
          </header>

          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 w-full'>
            {Object.entries(category.products).map(([productKey, item]) => (
              <li key={item.id} className='rounded grid grid-cols-1 gap-2 w-full '>
                <button onClick={() => openDrawer(item)} className='text-left cursor-pointer'>
                  <article aria-labelledby={`product-title-${item.id}`}>
                    <figure>
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={item.img}
                          alt={`Photo of ${item.title} - ${item.description}`}
                          className='mb-2 w-full h-full rounded-sm'
                          loading='lazy'
                        />
                      </AspectRatio>
                      <figcaption className='sr-only'>{item.title}</figcaption>
                    </figure>
                    <h3 id={`product-title-${item.id}`} className='text-xl font-semibold mt-[12px]'>
                      {item.title}
                    </h3>
                    <p className='text-gray-300 line-clamp-2 font-light min-h-[2lh]'>{item.description}</p>
                    <DisplayPrice price={item.price} />
                  </article>
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}
      <ProductDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} selectedProduct={selectedProduct} />
    </main>
  )
}
