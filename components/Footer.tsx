'use client'

export default function Footer() {
  return (
    <footer className='w-full px-4 py-8 flex items-center justify-center bg-neutral-900'>
      copyright &copy; {new Date().getFullYear()} Dishfolio
    </footer>
  )
}
