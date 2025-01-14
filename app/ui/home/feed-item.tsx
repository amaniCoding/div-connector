'use client'
import Image from "next/image"
import { IoMdMore } from "react-icons/io"
import CommentItem from "./comment-item"
import Link from "next/link"
import { useState } from "react"

export default function FeeItem() {
  

  const [showMiniProfileBox, setshowMiniProfileBox] = useState<boolean>(false);

  const [mTimeOut, setMTimeOut] = useState<NodeJS.Timeout>();


  const handelshowMiniProfileBox = () => {
    setshowMiniProfileBox(true);
  }
  

  const handelhideMiniProfileBox = () => {
   const returnedTimeOut =  setTimeout(() => {setshowMiniProfileBox(false)}, 2000);
   setMTimeOut(returnedTimeOut);
    
    
  }

  const handelclearTimeOutForMiniProfileBox = () => {
    clearTimeout(mTimeOut);
  }

  const handelOutMiniProfile = () => {
    setshowMiniProfileBox(false);
  }
  console.log(showMiniProfileBox);
  return (
    <>
      {
        Array.from(Array(18).keys()).map((_, i) => {
          return (
            <div className="pb-3 pt-2 bg-white rounded-md mb-4 relative" key={i}>
              <div className={`absolute -left-32 rounded-lg top-16 w-3/4 p-3 space-x-3 bg-white shadow-lg ${showMiniProfileBox ? 'md:flex hidden' : 'hidden'}`} onMouseMove={handelclearTimeOutForMiniProfileBox} onMouseLeave={handelOutMiniProfile}>
                <Image
                  className="w-14 h-14 rounded-full object-center"
                  alt="Amanuel Ferede"
                  src={`/feeds/${i + 1}.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                />
                <div className=" flex-col space-y-2">
                  <p className="text-lg font-bold">Amanuel Ferede</p>
                  <p className="">Full stack Web developer at Andela</p>
                  <p>Lives in California</p>
                  <p>From Injibara</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex space-x-3 p-2">
                  <Link href={`/profile`} onMouseEnter={handelshowMiniProfileBox} onMouseLeave={handelhideMiniProfileBox}>
                    <Image
                      alt="Amanuel Ferede"
                      src={`/feeds/${i + 1}.jpg`}
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-10 h-10 object-cover rounded-full ring-2 ring-offset-2 ring-blue-400"
                    />
                  </Link>
                  <div className="flex flex-col space-y-0.5">
                  <Link href={`/profile`} onMouseEnter={handelshowMiniProfileBox} onMouseLeave={handelhideMiniProfileBox}className="peer"><span>Amanuel Ferede</span></Link>
                    <span className="text-gray-400 text-sm">2 Hours</span>
                  </div>
                </div>
                <IoMdMore className="w-8 h-8" />
              </div>
              
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