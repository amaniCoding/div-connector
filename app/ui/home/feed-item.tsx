'use client'
import { QueryResultRow } from "@vercel/postgres"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import { IoMdMore } from "react-icons/io";
import CommentItem from "./comment-item";

export default function FeedItem(props: { post: QueryResultRow }) {

  const [showMiniProfileBox, setshowMiniProfileBox] = useState<boolean>(false);

  const [mTimeOut, setMTimeOut] = useState<NodeJS.Timeout>();


  const handelshowMiniProfileBox = () => {
    setshowMiniProfileBox(true);
  }


  const handelhideMiniProfileBox = () => {
    const returnedTimeOut = setTimeout(() => { setshowMiniProfileBox(false) }, 200);
    setMTimeOut(returnedTimeOut);


  }

  const handelclearTimeOutForMiniProfileBox = () => {
    clearTimeout(mTimeOut);
  }

  const handelOutMiniProfile = () => {
    setshowMiniProfileBox(false);
  }
  return (
    <div className="py-2 bg-white rounded-md mb-4 relative">
      <div className={`absolute -left-32 rounded-lg top-16 w-auto p-3 space-x-3 bg-white shadow-lg ${showMiniProfileBox ? 'md:flex hidden' : 'hidden'}`} onMouseMove={handelclearTimeOutForMiniProfileBox} onMouseLeave={handelOutMiniProfile}>
        <Image
          className="w-14 h-14 rounded-full object-center"
          alt="Amanuel Ferede"
          src={props.post.profile_pic}
          width={0}
          height={0}
          sizes="100vh"
        />
        <div className=" flex-col space-y-2">
          <p className="text-lg font-bold">{props.post.fname} {props.post.lname}</p>
          <p className="">{props.post.current_position} at {props.post.current_city} </p>
          <p>Lives in {props.post.current_city}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex space-x-3 px-6 pt-2">
          <Link href={`/profile`} onMouseEnter={handelshowMiniProfileBox} onMouseLeave={handelhideMiniProfileBox}>
            <Image
              alt="Amanuel Ferede"
              src={props.post.profile_pic}
              width={0}
              height={0}
              sizes="100vh"
              className="w-10 h-10 object-cover rounded-full ring-2 ring-offset-2 ring-blue-400"
            />
          </Link>
          <div className="flex flex-col space-y-0.5">
            <Link href={`/profile`} onMouseEnter={handelshowMiniProfileBox} onMouseLeave={handelhideMiniProfileBox} className="peer"><span>{props.post.fname} {props.post.lname}</span></Link>
            <span className="text-gray-400 text-sm">2 Hours</span>
          </div>
        </div>
        <IoMdMore className="w-8 h-8" />
      </div>

      <div className="my-1 p-2">
        <p className="text-xl font-bold px-3">{props.post.breif_title}</p>
        <p className="text-justify px-3 whitespace-pre-wrap">{props.post.breif_description} . . . {props.post.cont_0_description ? <Link href={`/post/${props.post.post_id}/`}>Read More</Link> : ""}</p>

         

      </div>
      <div className="">

        <Image
          alt="Amanuel Ferede"
          src={`${props.post.photo}`}
          width={0}
          height={0}
          unoptimized
          sizes="100vh"
          className="object-cover w-full"
        />
      </div>
      <CommentItem />
    </div>
  )
}