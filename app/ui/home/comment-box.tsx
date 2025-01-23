'use client'
import { IoMdMore } from "react-icons/io";
import Image from "next/image";
import { FaComment, FaXmark } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";
import Comment from "./comment";
import CommentModal from "../comment-modal";

export default function CommentBox(props: {
  onClose: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <section className="bg-black/75 fixed top-0 bottom-0 left-0 right-0 z-10 overflow-hidden flex items-center justify-center">
      <div className="max-w-screen-md h-4/5 rounded-md  overflow-y-scroll socrollabar scroll_content bg-white z ">

        <div className="fixed flex space-x-2 bottom-14 left-0 right-0 p-2 z-30 bg-white max-w-screen-md mx-auto">

            <Image
              alt="Amanuel Ferede"
              src={`/feeds/4.jpg`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-10 h-10 object-cover rounded-full block flex-none"
            />
            <input type="text" className="p-3 block grow focus:outline-none bg-slate-50 rounded-xl" placeholder="Write a comment ..."></input>

        </div>
        <div className="flex items-center justify-between mb-2 border-b-2 border-b-slate-200 p-2 sticky z-50 w-full left-0 right-0 bg-white top-0">
          <span></span>
          <span>Amanuel Ferede's Post</span>
          <FaXmark className="w-10 h-10 rounded-full hover:bg-slate-300 p-2 cursor-pointer" onClick={() => { props.onClose(false) }} />
        </div>

        <div className="flex justify-between">
          <div className="flex space-x-3 p-2">
            <Image
              alt="Amanuel Ferede"
              src={`/feeds/4.jpg`}
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
        <div className="p-2">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit harum libero tempore numquam soluta obcaecati dolores. Dolores ducimus facere vero temporibus, tempore placeat provident dignissimos atque nihil dicta esse perspiciatis.</p>
        </div>

        <div>
          <Image
            alt="Amanuel Ferede"
            src={`/feeds/5.jpg`}
            width={0}
            height={0}
            sizes="100vh"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="flex items-center justify-between mt-2 px-2">
          <div className="flex items-center space-x-3 hover:bg-slate-50 p-3 rounded-md cursor-pointer">
            <AiFillLike className="w-6 h-6" />
            <span>2736</span>
          </div>
          <div className="flex items-center space-x-3 hover:bg-slate-50 p-3 rounded-md cursor-pointer">
            <FaComment className="w-6 h-6" />
            <span>2736</span>
          </div>
          <div className="flex items-center space-x-3 hover:bg-slate-50 p-3 rounded-md cursor-pointer">
            <IoShareSocial className="w-6 h-6" />
            <span>2</span>
          </div>
        </div>

       <div className="p-2 pb-14">
        <CommentModal/>
       </div>


      </div>
    </section>
  )
}