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
    const returnedTimeOut = setTimeout(() => { setshowMiniProfileBox(false) }, 2000);
    setMTimeOut(returnedTimeOut);


  }

  const handelclearTimeOutForMiniProfileBox = () => {
    clearTimeout(mTimeOut);
  }

  const handelOutMiniProfile = () => {
    setshowMiniProfileBox(false);
  }
  return (
    <div className="pb-36 md:sticky md:top-16 md:h-screen md:overflow-y-scroll md:socrollabar md:p-6 p-3">

      {
        Array.from(Array(5).keys()).map((_, i) => {
          return (
            <div className="relative mb-5" key={i}>
              <div className={`absolute left-3 rounded-lg top-11 w-3/4 p-3 space-x-3 bg-white shadow-lg z-20 ${currentIndex === i && showMiniProfileBox ? 'md:flex hidden' : 'hidden'}`} onMouseMove={handelclearTimeOutForMiniProfileBox} onMouseLeave={handelOutMiniProfile}>
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
              <div className="inline-flex space-x-3" key={i}>
                <Link href={`/profile`} onMouseEnter={() => {handelshowMiniProfileBox(i)}} onMouseLeave={handelhideMiniProfileBox} className="bg-red-300 h-10 w-10 block rounded-full flex-none">
                  <Image
                    alt="Amanuel Ferede"
                    src={`/feeds/${i + 1}.jpg`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-10 h-10 object-cover rounded-full "
                  />
                </Link>

                <div className="flex flex-col space-y-0.5 grow">
                  <Link href={`/profile`} onMouseEnter={() => {handelshowMiniProfileBox(i)}} onMouseLeave={handelhideMiniProfileBox} className="peer"><span className="font-semibold">Amanuel Ferede</span></Link>
                  <span className="text-gray-400 text-sm">2 Hours</span>
                  <span className="leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, officiis molestias! Consequatur sit nesciunt numquam ipsum perferendis illum velit quod blanditiis eaque. Adipisci expedita vel omnis inventore pariatur, commodi vitae.</span>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}