import MenuBar from '@/components/menu-bar'
import { menu } from './data/products'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import DisplayCategories from '@/components/display-categories'

export default function Home() {
  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] bg-neutral-900 items-center justify-items-center min-h-screen p-8 pb-20 gap-5 sm:p-20'>
      <MenuBar />
      <DisplayCategories />
    </div>
  )
}
