'use client'
import { pepleYouMayKnow } from "@/app/libs/place-holder"
import Image from "next/image"
import { SlUserFollow } from "react-icons/sl"
export default function PeopleYouMayKnow() {
  return (
    <>
      <p className="text-lg font-bold md:ml-24">Developers you may know</p>
      {
        pepleYouMayKnow.map((people, i) => {
          return (
            <>
              <div className="mb-2 md:ml-24 rounded-l-md w-full" key={i}>
                <div className="flex items-center justify-between hover:bg-gray-200 p-2 rounded-b-md cursor-pointer">
                  <div className="flex space-x-2">
                    <Image
                      alt="Amanuel Ferede"
                      src={`${people.photo}`}
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="w-9 h-9 object-cover rounded-full ring-2 ring-offset-2 ring-blue-400"
                    />
                    <span>{people.name}</span>
                  </div>
                  
                    <div className="rounded-full p-2 hover:bg-slate-100 cursor-pointer">
                    <SlUserFollow size={18} style={{margin: '5px'}}/>
                    </div>
               
                </div>
              </div>
            </>
          )
        })
      }
    </>




  )
}