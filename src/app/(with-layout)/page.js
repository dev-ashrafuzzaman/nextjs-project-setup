import Image from 'next/image'
import image1 from "@/assest/image.jpeg"
import PopularProducts from '@/component/HomePage/PopularProduct'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={image1} height={200} alt='' placeholder='blur' />
      <Suspense fallback={<h1 className='text-center font-bold text-2xl'>Product is loading</h1>}>
        <PopularProducts></PopularProducts>
      </Suspense>
    </main>
  )
}
