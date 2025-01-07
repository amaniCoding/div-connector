import NavBar from "@/app/ui/home/nav-bar";
import type { Metadata } from "next";
import Image from "next/image";
import { FaBusinessTime } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { MdEventNote, MdOutlineAppShortcut, MdOutlineLiveTv } from "react-icons/md";
import FeedItem from "../ui/home/feed-item";
import AddPost from "../ui/home/add-post";
export const metadata: Metadata = {
  title: "Amanuel Ferede",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <NavBar />
        <section className="bg-slate-100 mt-[73px]">
          <div className="max-w-screen-lg mx-auto">
            <div className="w-full h-[90vh] pb-1">
              <div className="h-[70vh] relative w-full">
                <Image
                  alt="Amanuel Ferede"
                  src={`/feeds/8.jpg`}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-full object-cover"
                />
                <div className="flex items-center justify-center absolute -bottom-28 left-6">
                  <div className="flex flex-col space-y-1">
                    <Image
                      alt="Amanuel Ferede"
                      src={`/feeds/9.jpg`}
                      width={0}
                      height={0}
                      sizes="100vh"
                      className="object-cover w-44 h-44 bg-red-100 rounded-full border-4 border-white"
                    />
                    <p className="text-xl font-bold">Amanuel Ferede</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center max-w-[900px] mx-auto space-x-3 border-t-2 border-t-slate-300 p-2">
              <div className="p-2 flex items-center justify-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                <MdOutlineLiveTv className="w-6 h-6" />
                <span>Vidoes</span>
              </div>
              <div className="p-2 flex items-center justify-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                <FaBusinessTime className="w-6 h-6" />
                <span>Jobs</span>
              </div>
              <div className="p-2 flex items-center justify-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                <MdEventNote className="w-6 h-6" />
                <span>Events</span>
              </div>
              <div className="p-2 flex items-center justify-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                <GrTechnology className="w-6 h-6" />
                <span>Tech Companies</span>
              </div>
              <div className="p-2 flex items-center justify-center mb-1 space-x-2 hover:bg-gray-200 rounded-l-md rounded-b-md cursor-pointer w-full">
                <MdOutlineAppShortcut className="w-6 h-6" />
                <span>Shorts</span>
              </div>
            </div>
            <div className="flex space-x-5 max-w-[900px] mx-auto">
              <div className="md:w-[40%] w-full p-3 bg-white rounded-lg sticky top-20 h-screen">
                <div>
                  <p className="p-1 bg-slate-100 my-1 text-sm">Full Stack Software Engineer at Andela</p>
                  <p>Knows React, Next.js, Tailwind.css, HTML, CSS, JAVASCRIPT and more</p>
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
              <div className="md:w-[60%] w-full rounded-lg">
                <AddPost />
                <FeedItem />
                {children}
              </div>
            </div>
          </div>
        </section>

      </body>
    </html>
  );
}
