import Image from "next/image";
import { FaBusinessTime } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { MdEventNote, MdOutlineAppShortcut, MdOutlineLiveTv } from "react-icons/md";
import FeedItem from "../ui/home/feed-item";
import PeopleYouMayKnow from "../ui/home/people-youmay-know";
export default async function Page() {
  return (
    <section className="bg-slate-50 mt-[81px]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex md:flex-row flex-col space-x-4 space-y-3">
          <div className="w-[30%] md:block hidden h-screen sticky top-20">
            <div className="w-full h-36 flex items-center justify-center">
              <div className="w-1/2 flex flex-col items-center justify-center">
                <Image
                  alt="Amanuel Ferede"
                  src={`/7.png`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-20 h-20 rounded-full object-contain p-1 border-2 border-black"
                />
                <p className="text-center my-1">Amanuel Ferede</p>
              </div>
            </div>
            <div className="grow">
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
            </div>
          </div>
          <div className="md:w-[40%] w-full">
            <div className="p-3 mb-4 bg-white rounded-md">
              <div className="w-full flex items-center space-x-3">
                <Image
                  alt="Amanuel Ferede"
                  src={`/7.png`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-12 h-12 object-cover rounded-full border-2 border-black/40"
                />
                <input className="md:w-3/4 w-full border-2 border-gray-200 focus:outline-none p-2 bg-gray-100 rounded-3xl placeholder:font-sans pl-5" placeholder="What is in your mind ..., Amanuel"></input>
              </div>
            </div>
            <FeedItem />
          </div>
          <div className="md:w-[30%] w-full pb-32 h-screen sticky top-24 scroll_content socrollabar">
            <PeopleYouMayKnow />
            <p className="underline md:ml-24 cursor-pointer">See All</p>
          </div>
        </div>
      </div>
    </section>
  )
}