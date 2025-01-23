import { sql } from "@vercel/postgres";

export async function fetchPosts() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const data = await sql`SELECT * FROM posts JOIN users ON posts.user_id = users.user_id`;
    return data.rows
  } catch(error) {
    console.log("Database error", error)
    throw new Error("Faild to fetch dev data")
  }
}

export async function fetchAPost(postId: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const data = await sql`SELECT * FROM posts JOIN users ON posts.user_id = users.user_id WHERE post_id = ${postId}`;
    return data.rows[0]
  } catch(error) {
    console.log("Database error", error)
    throw new Error("Faild to fetch dev data")
  }
}