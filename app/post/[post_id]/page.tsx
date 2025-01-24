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
      <section className="bg-slate-50 md:pt-[80px] pt-[70px]">
        <div className="md:max-w-screen-xl w-full md:mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="md:col-span-8 col-span-12 bg-white">
              <ProfileItem post={post}/>
            </div>
            <div className="md:col-span-4 col-span-12 bg-white">
              <Comment/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}