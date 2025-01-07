'use client'
import Image from "next/image"
import { IoMdMore } from "react-icons/io"
import CommentItem from "./comment-item"
import Link from "next/link"
export default function FeeItem() {
  return (
    <>
      {
        Array.from(Array(18).keys()).map((_, i) => {
          return (
            <div className="pb-3 pt-2 bg-white rounded-md mb-4" key={i}>
              <Link href={`/profile`}>
                <div className="flex justify-between">
                  <div className="flex space-x-3 p-2">
                    <Image
                      alt="Amanuel Ferede"
                      src={`/feeds/${i + 1}.jpg`}
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-10 h-10 object-cover rounded-full ring-2 ring-offset-2 ring-blue-400"
                    />
                    <div className="flex flex-col space-y-0.5">
                      <span>Amanuel Ferede</span>
                      <span className="text-gray-400 text-sm">2 Hours</span>
                    </div>
                  </div>
                  <IoMdMore className="w-8 h-8" />
                </div>
              </Link>
              <div className="my-1">
                <p className="text-justify px-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo eius libero consectetur nulla rem at quam debitis quisquam asperiores vel, veritatis id expedita placeat aliquid incidunt omnis a? Tempora, quo!</p>
              </div>
              <div className="">
                <Image
                  alt="Amanuel Ferede"
                  src={`/feeds/${i + 1}.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="object-cover w-full"
                />
              </div>
              <CommentItem />
            </div>
          )
        })
      }
    </>
  )
}