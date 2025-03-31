
import PeopleYouMayKnow from "../ui/home/people-youmay-know";
import AddPost from "../ui/home/add-post";
import NavBar from "../ui/home/nav-bar";
import { Suspense } from "react";
import FeedItemSkeleton from "../ui/skeletons/feed_item";
import Feeds from "../ui/home/feed-items";
import SideBar from "../ui/home/sidebar";
export default async function Page() {

  return (
    <div className="bg-slate-50 md:pt-[80px] pt-[70px]">
      <NavBar />
      <section className="">
        <div className="max-w-[1320px] mx-auto">
          <div className="flex">
            <SideBar/>
            <div className="md:w-[40%] md:ml-[30%] w-full">
              <AddPost />
              <Suspense fallback={<FeedItemSkeleton />}>
                <Feeds />
              </Suspense>
            </div>
            <div className="md:w-[30%] bg-slate-50 opacity-50 md:pl-10 w-full md:block hidden pb-32 h-screen sticky top-24 scroll_content socrollabar">
              <PeopleYouMayKnow />
              <p className="underline md:ml-24 cursor-pointer">See All</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}