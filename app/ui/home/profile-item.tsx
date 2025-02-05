'use client'
import { QueryResultRow } from "@vercel/postgres";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdMore } from "react-icons/io";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
export default function ProfileItem(props: { post: QueryResultRow }) {
  const [showMiniProfileBox, setshowMiniProfileBox] = useState<boolean>(false);

  const [mTimeOut, setMTimeOut] = useState<NodeJS.Timeout>();


  const handelshowMiniProfileBox = () => {
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
    <>
      <div className="relative w-full md:p-6 p-3">
        <div className={`absolute left-3 rounded-lg top-16 w-3/4 p-3 space-x-3 bg-white shadow-lg ${showMiniProfileBox ? 'md:flex hidden' : 'hidden'}`} onMouseMove={handelclearTimeOutForMiniProfileBox} onMouseLeave={handelOutMiniProfile}>
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
          <div className="flex space-x-3 p-2">
            <Link href={`/profile`} onMouseEnter={handelshowMiniProfileBox} onMouseLeave={handelhideMiniProfileBox}>
              <Image
                alt="Amanuel Ferede"
                src={`/uploads/c1.jpg`}
                width={0}
                height={0}
                sizes="100vh"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-offset-2 ring-blue-400"
              />
            </Link>
            <div className="flex flex-col space-y-0.5">
              <Link href={`/profile`} onMouseEnter={handelshowMiniProfileBox} onMouseLeave={handelhideMiniProfileBox} className="peer"><span className="font-semibold">{props.post.fname} {props.post.lname}</span></Link>
              <span className="text-gray-400 text-sm">2 Hours</span>
            </div>
          </div>
          <IoMdMore className="w-8 h-8" />
        </div>

        <div className="mb-2">
          <p className="font-bold mb-2">{props.post.breif_title}</p>
          <p className="leading-relaxed">{props.post.breif_description}</p>
        </div>

        <div className="mb-2">
          <p className="font-bold mb-2 leading-relaxed">{props.post?.cont_0_title}</p>
          <p className="mb-2 leading-relaxed whitespace-pre-wrap">{props.post?.cont_0_description}</p>
          {

            props.post?.cont_0_code_snippet && (<SyntaxHighlighter style={docco}>{props.post?.cont_0_code_snippet}</SyntaxHighlighter>)

          }
          {
            props.post?.cont_0_photo && (<Image
              alt="Amanuel Ferede"
              src={`${props.post?.cont_0_photo}`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-full object-cover"
            />)

          }
        </div>

        <div className="mb-2">
          <p className="font-bold mb-2 leading-relaxed">{props.post?.cont_1_title}</p>
          <p className="mb-2 leading-relaxed whitespace-pre-wrap">{props.post?.cont_1_description}</p>
          {

            props.post?.cont_1_code_snippet && (<SyntaxHighlighter style={docco}>{props.post?.cont_1_code_snippet}</SyntaxHighlighter>)

          }
          {
            props.post?.cont_1_photo && (<Image
              alt="Amanuel Ferede"
              src={`${props.post?.cont_1_photo}`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-full object-cover"
            />)

          }
        </div>

        <div className="mb-2">
          <p className="font-bold mb-2 leading-relaxed">{props.post?.cont_2_title}</p>
          <p className="mb-2 leading-relaxed whitespace-pre-wrap">{props.post?.cont_2_description}</p>
          {

            props.post?.cont_2_code_snippet && (<SyntaxHighlighter style={docco}>{props.post?.cont_2_code_snippet}</SyntaxHighlighter>)

          }
          {
            props.post?.cont_2_photo && (<Image
              alt="Amanuel Ferede"
              src={`${props.post?.cont_2_photo}`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-full object-cover"
            />)

          }
        </div>

        <div className="mb-2">
          <p className="font-bold mb-2 leading-relaxed">{props.post?.cont_3_title}</p>
          <p className="mb-2 leading-relaxed whitespace-pre-wrap">{props.post?.cont_3_description}</p>
          {

            props.post?.cont_3_code_snippet && (<SyntaxHighlighter style={docco}>{props.post?.cont_3_code_snippet}</SyntaxHighlighter>)

          }
          {
            props.post?.cont_3_photo && (<Image
              alt="Amanuel Ferede"
              src={`${props.post?.cont_3_photo}`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-full object-cover"
            />)

          }
        </div>
      </div>
    </>

  )
}