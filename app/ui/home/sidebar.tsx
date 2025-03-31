'use client'
import { useState } from "react";
import { FaBusinessTime } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { MdEventNote, MdOutlineAppShortcut, MdOutlineLiveTv } from "react-icons/md";
export default function SideBar() {
    const [showScrollBar, setShowScrollBar] = useState(false);
    return (
        <div className="w-[30%] md:flex hidden pt-12 flex-col space-y-5  fixed left-0 bottom-0 top-0 ">

              <div className={`w-3/4 h-full overflow-y-scroll  pt-10 pl-3 ${showScrollBar ? 'socrollabar' : 'socrollabar-hidden'}`} onMouseOver={() => setShowScrollBar(true)} onMouseOut={() => setShowScrollBar(false)}>
                <div className="p-2 flex items-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                  <MdOutlineLiveTv className="w-6 h-6" />
                  <span>Vidoes</span>
                </div>
                <div className="p-2 flex items-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                  <FaBusinessTime className="w-6 h-6" />
                  <span>Jobs</span>
                </div>
                <div className="p-2 flex items-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                  <MdEventNote className="w-6 h-6" />
                  <span>Events</span>
                </div>
                <div className="p-2 flex items-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                  <GrTechnology className="w-6 h-6" />
                  <span>Tech Companies</span>
                </div>
                <div className="p-2 flex items-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                  <MdOutlineAppShortcut className="w-6 h-6" />
                  <span>Shorts</span>
                </div>

                <div className="p-2 flex items-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                  <MdOutlineLiveTv className="w-6 h-6" />
                  <span>Vidoes</span>
                </div>
                <div className="p-2 flex items-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                  <FaBusinessTime className="w-6 h-6" />
                  <span>Jobs</span>
                </div>
                <div className="p-2 flex items-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                  <MdEventNote className="w-6 h-6" />
                  <span>Events</span>
                </div>
                <div className="p-2 flex items-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                  <GrTechnology className="w-6 h-6" />
                  <span>Tech Companies</span>
                </div>
                <div className="p-2 flex items-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                  <MdOutlineAppShortcut className="w-6 h-6" />
                  <span>Shorts</span>
                </div>
                <div className="p-2 flex items-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                  <GrTechnology className="w-6 h-6" />
                  <span>Tech Companies</span>
                </div>
                <div className="p-2 flex items-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                  <MdOutlineAppShortcut className="w-6 h-6" />
                  <span>Shorts</span>
                </div>
                <div className="p-2 flex items-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                  <MdOutlineAppShortcut className="w-6 h-6" />
                  <span>Shorts</span>
                </div>
                <div className="p-2 flex items-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                  <GrTechnology className="w-6 h-6" />
                  <span>Tech Companies</span>
                </div>
                <div className="p-2 flex items-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                  <MdOutlineAppShortcut className="w-6 h-6" />
                  <span>Shorts</span>
                </div>
              </div>

            </div>
    )
}