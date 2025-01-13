'use client'
import { pepleYouMayKnow } from "@/app/libs/place-holder"
import Image from "next/image"
export default function PeopleYouMayKnow() {
  return (
    <>
      {
        pepleYouMayKnow.map((people, i) => {
          return (
            <div className="mb-2 md:pl-14 rounded-l-md w-full" key={i}>
              <div className="flex items-center justify-between hover:bg-gray-200 p-2 rounded-b-md cursor-pointer">
                <div className="flex space-x-2">
                  <Image
                    alt="Amanuel Ferede"
                    src={`${people.photo}`}
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-7 h-7 object-center rounded-full ring-2 ring-offset-2 ring-blue-400"
                  />
                  <span>{people.name}</span>
                </div>
              </div>
            </div>

          )
        })
      }
    </>
  )
}