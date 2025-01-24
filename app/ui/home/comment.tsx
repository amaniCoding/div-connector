'use client'
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
export default function Comment() {
  const [showMiniProfileBox, setshowMiniProfileBox] = useState<boolean>(false);

  const [mTimeOut, setMTimeOut] = useState<NodeJS.Timeout>();
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  const handelshowMiniProfileBox = (index: number) => {
    setCurrentIndex(index);
    setshowMiniProfileBox(true);
  }


  const handelhideMiniProfileBox = () => {
    const returnedTimeOut = setTimeout(() => { setshowMiniProfileBox(false) }, 100);
    setMTimeOut(returnedTimeOut);


  }

  const handelclearTimeOutForMiniProfileBox = () => {
    clearTimeout(mTimeOut);
  }

  const handelOutMiniProfile = () => {
    setshowMiniProfileBox(false);
  }
  return (
    <div className="md:p-6 p-3 md:sticky md:top-4">

      {
        Array.from(Array(10).keys()).map((_, i) => {
          return (
            <div className="relative mb-3" key={i}>
              <div className={`absolute left-11 top-11 rounded-lg w-auto p-3 space-x-3 bg-white shadow-lg z-[9999] ${currentIndex === i && showMiniProfileBox ? 'md:flex hidden' : 'hidden'}`} onMouseOver={handelclearTimeOutForMiniProfileBox} onMouseLeave={handelOutMiniProfile}>
                <Image
                  alt="Amanuel Ferede"
                  src={`/feeds/${i + 1}.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                 className="w-10 h-10 object-cover rounded-full ring-2 ring-offset-2 ring-blue-400 flex-none"
                />
                <div className=" flex-col space-y-2">
                  <p className="text-lg font-bold">{"Amanuel Ferede"}</p>
                  <p className="">{"Software Engineer at Amazone"} </p>
                  <p>Lives in Newyork</p>
                </div>
              </div>
              <div className="flex space-x-3" key={i}>
                <Link href={`/profile`} onMouseMove={() => {handelshowMiniProfileBox(i)}} onMouseLeave={handelhideMiniProfileBox} className="bg-red-300 h-10 w-10 block rounded-full flex-none">
                  <Image
                    alt="Amanuel Ferede"
                    src={`/feeds/${i + 1}.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-10 h-10 object-cover rounded-full "
                  />
                </Link>

                <div className="">
                  <Link href={`/profile`} onMouseOver={() => {handelshowMiniProfileBox(i)}} onMouseLeave={handelhideMiniProfileBox} className="font-semibold">Amanuel Ferede</Link>
                  <p className="text-gray-400 text-sm">2 Hours</p>
                  <div className="w-auto rounded-xl bg-slate-50 p-3">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, officiis molestias! Consequatur sit nesciunt numquam ipsum perferendis illum velit quod blanditiis eaque. Adipisci expedita vel omnis inventore pariatur, commodi vitae.</p>
                  </div>
                </div>
                
              </div>
              
            </div>
          )
        })
      }
    </div>
  )
}