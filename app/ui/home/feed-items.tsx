
import { fetchPosts } from "@/app/libs/data"
import FeedItem from "./feed-item"


export default async function FeeItem() {
  const posts = await fetchPosts();

  
  return (
    <>
      {
        posts.map((post) => {
          return ( 
            <FeedItem post={post} key={post.post_id}/>
          )
        })
      }
    </>
  )
}