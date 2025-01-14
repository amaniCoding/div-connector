'use client'
import Image from "next/image"
import Link from "next/link";
import { FaBusinessTime } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { IoNotifications } from "react-icons/io5";
import { MdEventNote, MdMessage, MdOutlineAppShortcut, MdOutlineLiveTv, MdPeopleAlt } from "react-icons/md";
export default function NavBar() {
  return (
    <nav className="p-3 fixed top-0 left-0 right-0 z-10 bg-white w-full shadow-md">
      <div className="flex items-center justify-between space-x-3">
        <div className="flex items-center space-x-2">
          <Link href={`/home`}>
            <Image
              alt="Amanuel Ferede"
              src={`/2.jpg`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-10 h-10 object-center rounded-full border-2 border-blue-700"
            />
          </Link>
        </div>
        <input className="md:block hidden p-2 grow border-2 border-gray-300 rounded-md" placeholder="Search Developers ..."></input>
        <div className="md:flex hidden items-center space-x-3 text-gray-500">
          <div className="rounded-md transition duration-300 ease-in-out hover:bg-slate-50 py-3 px-6 cursor-pointer">
            <MdOutlineLiveTv className="w-6 h-6" />
          </div>
          <div className="rounded-md transition duration-300 ease-in-out hover:bg-slate-50 py-3 px-6 cursor-pointer">
            <FaBusinessTime className="w-6 h-6" />
          </div>
          <div className="rounded-md transition duration-300 ease-in-out hover:bg-slate-50 py-3 px-6 cursor-pointer">
            <MdEventNote className="w-6 h-6" />
          </div>
          <div className="rounded-md transition duration-300 ease-in-out hover:bg-slate-50 py-3 px-6 cursor-pointer">
            <GrTechnology className="w-6 h-6" />
          </div>
          <div className="rounded-md transition duration-300 ease-in-out hover:bg-slate-50 py-3 px-6 cursor-pointer">
            <MdOutlineAppShortcut className="w-6 h-6 rounded-md transition duration-300 ease-in-out flex hover:bg-slate-50 cursor-pointer" />
          </div>
          <div className="rounded-md transition duration-300 ease-in-out hover:bg-slate-50 py-3 px-6 cursor-pointer">
            <MdPeopleAlt className="w-6 h-6 rounded-md transition duration-300 ease-in-out flex hover:bg-slate-50 cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <MdMessage className="w-6 h-6" />
          <IoNotifications className="w-6 h-6" />
          <Image
            alt="Amanuel Ferede"
            src={`/7.png`}
            width={0}
            height={0}
            sizes="100vh"
            className="w-7 h-7 object-contain rounded-full"
          />
        </div>
      </div>
    </nav>
  )
}