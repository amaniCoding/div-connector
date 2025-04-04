import { Suspense } from "react";
import AddPost from "./ui/home/feed/add-post";
import NavBar from "./ui/home/sections/nav-bar";
import Index from "./ui/home";


export default async function Page() {
  const isLoggedIn = false;
  return (
    <section className="bg-slate-50 md:pt-[80px] pt-[70px]">
      <NavBar />
      <Index/>
    </section>
  );
}
