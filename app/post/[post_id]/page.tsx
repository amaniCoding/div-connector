import { fetchAPost } from "@/app/libs/data";
import Comment from "@/app/ui/home/comment";
import NavBar from "@/app/ui/home/nav-bar";
import ProfileItem from "@/app/ui/home/profile-item";

export default async function Page(props: { params: Promise<{ post_id: string }> }) {

  const params = await props.params;
  const id = params.post_id;
  const post = await fetchAPost(id);
  console.log(post);
  
  return (
    <>
      <NavBar />
      <section className="p-5 bg-slate-50 pt-[90px]">
        <div className="max-w-[1100px] mx-auto p-6">
          <div className="grid grid-cols-12 gap-14">
            <div className="md:col-span-7 col-span-12 bg-white">
              <ProfileItem post={post}/>
            </div>
            <div className="md:col-span-5 col-span-12 bg-white">
              <Comment/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}