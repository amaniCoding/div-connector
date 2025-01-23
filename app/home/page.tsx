import Image from "next/image";
import { FaBusinessTime } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { MdEventNote, MdOutlineAppShortcut, MdOutlineLiveTv } from "react-icons/md";
import FeedItem from "../ui/home/feed-items";
import PeopleYouMayKnow from "../ui/home/people-youmay-know";
import AddPost from "../ui/home/add-post";
import NavBar from "../ui/home/nav-bar";
import { fetchPosts } from "../libs/data";
import { Suspense } from "react";
import FeedItemSkeleton from "../ui/skeletons/feed_item";
export default async function Page() {
  
  return (
    <div className="bg-slate-50 pt-[90px]">
      <NavBar />
      <section className="">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex">
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
              <AddPost />
              <Suspense fallback={<FeedItemSkeleton/>}>
                <FeedItem />
              </Suspense>
            </div>
            <div className="md:w-[30%] w-full md:block hidden pb-32 h-screen sticky top-24 scroll_content socrollabar">
              <PeopleYouMayKnow />
              <p className="underline md:ml-24 cursor-pointer">See All</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}