'use client'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Button } from './ui/button'
import DisplayPrice from './display-price'

type selectedProductType = {
  title: string
  description: string
  img: string
  price: number
}

type PropsType = {
  isDrawerOpen: boolean
  setIsDrawerOpen: (open: boolean) => void
  selectedProduct: selectedProductType
}

export default function ProductDrawer({ isDrawerOpen, setIsDrawerOpen, selectedProduct }: PropsType) {
  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{selectedProduct?.title}</DrawerTitle>
          <DrawerDescription>{selectedProduct?.description}</DrawerDescription>
          <div className='grid grid-cols-1 justify-items-center'>
            {selectedProduct && (
              <div className='px-4 w-full max-w-[500px]'>
                <AspectRatio ratio={16 / 9} className='mb-4'>
                  <img
                    src={selectedProduct.img}
                    alt={`Photo of ${selectedProduct.title}`}
                    className='w-full h-full object-cover rounded'
                  />
                </AspectRatio>
                <DisplayPrice price={selectedProduct.price} />
              </div>
            )}
          </div>
        </DrawerHeader>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant='ghost' className='bg-neutral-950 xl:max-w-[18.75rem]'>
              Κλείσιμο
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
