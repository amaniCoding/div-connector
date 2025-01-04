'use client'
import Image from "next/image"
import { FaBusinessTime } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { IoNotifications } from "react-icons/io5";
import { MdEventNote, MdMessage, MdOutlineAppShortcut, MdOutlineLiveTv, MdPeopleAlt } from "react-icons/md";
export default function NavBar() {
  return (
    <nav className="p-3 fixed top-0 left-0 right-0 z-10 bg-white w-full shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            alt="Amanuel Ferede"
            src={`/7.png`}
            width={0}
            height={0}
            sizes="100vh"
            className="w-12 h-12 object-contain rounded-full"
          />
          <span className="md:text-nowrap text-wrap">Amanuel Ferede</span>
        </div>
        <input className="md:block hidden p-2 w-96 border-2 border-gray-300 rounded-md" placeholder="Search Developers ..."></input>
        <div className="md:flex hidden items-center space-x-3 text-gray-500">
          <div className="rounded-md transition duration-300 ease-in-out hover:bg-slate-50 py-3 px-6 cursor-pointer">
            <MdOutlineLiveTv className="w-8 h-8" />
          </div>
          <div className="rounded-md transition duration-300 ease-in-out hover:bg-slate-50 py-3 px-6 cursor-pointer">
            <FaBusinessTime className="w-8 h-8" />
          </div>
          <div className="rounded-md transition duration-300 ease-in-out hover:bg-slate-50 py-3 px-6 cursor-pointer">
            <MdEventNote className="w-8 h-8" />
          </div>
          <div className="rounded-md transition duration-300 ease-in-out hover:bg-slate-50 py-3 px-6 cursor-pointer">
            <GrTechnology className="w-8 h-8" />
          </div>
          <div className="rounded-md transition duration-300 ease-in-out hover:bg-slate-50 py-3 px-6 cursor-pointer">
            <MdOutlineAppShortcut className="w-8 h-8 rounded-md transition duration-300 ease-in-out flex hover:bg-slate-50 cursor-pointer" />
          </div>
          <div className="rounded-md transition duration-300 ease-in-out hover:bg-slate-50 py-3 px-6 cursor-pointer">
          <MdPeopleAlt  className="w-8 h-8 rounded-md transition duration-300 ease-in-out flex hover:bg-slate-50 cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <MdMessage className="w-8 h-8" />
          <IoNotifications className="w-8 h-8" />
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