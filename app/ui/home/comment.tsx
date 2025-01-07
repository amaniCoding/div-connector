'use client'
import Image from "next/image"
export default function Comment() {
  return (
    <>
      {
        Array.from(Array(7).keys()).map((_, i) => {
          return (
            <div className="flex space-x-3 p-2" key={i}>
              <Image
                alt="Amanuel Ferede"
                src={`/feeds/${i+1}.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                className="w-10 h-10 object-cover rounded-full block flex-none"
              />


              <div className="flex flex-col space-y-0.5 grow">
                <span>Amanuel Ferede</span>
                <span className="text-gray-400 text-sm">2 Hours</span>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, officiis molestias! Consequatur sit nesciunt numquam ipsum perferendis illum velit quod blanditiis eaque. Adipisci expedita vel omnis inventore pariatur, commodi vitae.</span>
              </div>
            </div>
          )
        })
      }
    </>
  )
}