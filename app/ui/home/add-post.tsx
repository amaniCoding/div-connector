'use client'
import Image from "next/image"
import PostBox from "./post-box"
import { useState } from "react"
export default function AddPost() {
  const [isPostBoxShow, setIsPostBoxShown] = useState<boolean>(false);
  

  const showPostBox = () => {
    setIsPostBoxShown(true);
  }
  return (
    <>
      <div className="p-3 mb-4 bg-white rounded-lg">
        <div className="w-full flex items-center space-x-3">
          <Image
            alt="Amanuel Ferede"
            src={`/7.png`}
            width={0}
            height={0}
            sizes="100vh"
            className="w-12 h-12 object-cover rounded-full border-2 border-black/40"
          />
          <input className="md:w-3/4 w-full border-2 border-gray-200 focus:outline-none p-2 bg-gray-100 rounded-3xl placeholder:font-sans pl-5" placeholder="What is in your mind ..., Amanuel" onFocus={showPostBox}></input>
        </div>
      </div>
      {isPostBoxShow && <PostBox onClose={setIsPostBoxShown}/>} 
    </>
  )
}