'use client'

import { menu } from '@/app/data/products'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import DisplayPrice from './display-price'

export default function DisplayCategories() {
  return (
    <div>
      {Object.entries(menu).map(([categoryKey, category]) => (
        <section key={categoryKey} id={category.slug} className='mb-12' aria-labelledby={`heading-${category.slug}`}>
          <h2 id={category.slug} className='text-4xl font-bold capitalize border-b-2 pb-[0.5rem] mb-[2rem]'>
            {categoryKey}
          </h2>

          <div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10'
            role='list'
            aria-label={`List of ${categoryKey} items`}
          >
            {Object.entries(category.products).map(([productKey, item]) => (
              <article
                key={item.id}
                className='rounded grid grid-cols-1 gap-2'
                role='listitem'
                aria-labelledby={`product-title-${item.id}`}
              >
                <AspectRatio ratio={16 / 9}>
                  <img src={item.img} alt={`Image of ${item.title}`} className='mb-2 w-full h-full rounded-sm' />
                </AspectRatio>
                <h3 id={`product-title-${item.id}`} className='text-xl font-semibold mt-[4px]'>
                  {item.title}
                </h3>
                <p className='text-gray-600'>{item.description}</p>
                <DisplayPrice price={item.price} />
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
