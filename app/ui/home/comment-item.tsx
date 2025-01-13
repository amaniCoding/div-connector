'use client'
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import CommentBox from "./comment-box";

export default function CommentItem() {
  const [toShowCommentBox, setToShowCommentBox] = useState<boolean>(false);

  const handelShowCommentBox = () => {
    setToShowCommentBox(true);
  }

  return (
    <>
      {toShowCommentBox && <CommentBox onClose={setToShowCommentBox}/>}
      <div className="flex items-center justify-between mt-2 px-2">
        <div className="flex items-center space-x-3 hover:bg-slate-50 p-3 rounded-md cursor-pointer">
          <AiFillLike className="w-6 h-6" />
          <span>2736</span>
        </div>
        <div className="md:flex hidden items-center space-x-3 hover:bg-slate-50 p-3 rounded-md cursor-pointer" onClick={handelShowCommentBox}>
          <FaComment className="w-6 h-6" />
          <span>2736</span>
        </div>

        <div className="md:hidden flex items-center space-x-3 hover:bg-slate-50 p-3 rounded-md cursor-pointer">
          <FaComment className="w-6 h-6" />
          <span>2736</span>
        </div>
        <div className="flex items-center space-x-3 hover:bg-slate-50 p-3 rounded-md cursor-pointer">
          <IoShareSocial className="w-6 h-6" />
          <span>2</span>
        </div>
      </div>
    </>
  )
}