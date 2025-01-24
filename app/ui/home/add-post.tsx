'use client'
import Image from "next/image"
import PostBox from "./post-box"
import { useState } from "react"
import Link from "next/link";
export default function AddPost() {
  const [isPostBoxShow, setIsPostBoxShown] = useState<boolean>(false);


  const showPostBox = () => {
    setIsPostBoxShown(true);
  }
  return (
    <>
    
      <div className="p-3 mb-4 bg-white rounded-lg">
        <div className="w-full flex md:items-center space-x-3">
          <Image
            alt="Amanuel Ferede"
            src={`/7.png`}
            width={0}
            height={0}
            sizes="100vh"
            className="w-10 h-10 object-cover rounded-full border-2 border-black/40"
          />
          <button type="button" className="md:w-3/4 md:block hidden w-full outline-none focus:outline-none p-2 bg-blue-500 rounded-3xl placeholder:font-sans pl-5 text-white" onFocus={showPostBox}>Creat Your Post</button>

          <Link href={`/create-post`} className="md:w-3/4 md:hidden block w-full outline-none focus:outline-none p-2 bg-blue-500 text-center rounded-3xl placeholder:font-sans pl-5 text-white">Creat Your Post</Link>

        </div>
      </div>
      {isPostBoxShow && <PostBox onClose={setIsPostBoxShown} />}
    </>
  )
}