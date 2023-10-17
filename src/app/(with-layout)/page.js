import Image from 'next/image'
import image1 from "@/assest/image.jpeg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Image src={image1} alt='' placeholder='blur'/>
    </main>
  )
}
