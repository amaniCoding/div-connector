import { db } from "@vercel/postgres";
import bcrypt from 'bcryptjs';
import { userPosts, users } from "../libs/place-holder";
const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      userid UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      password VARCHAR(255) NOT NULL,
      basicInfom JSONB,
      contactInfo JSONB,
      profile JSONB
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`INSERT INTO users (password, basicInfom, contactInfo, profile) VALUES (${hashedPassword}, ${JSON.stringify(user.basicInfom)}, ${JSON.stringify(user.contactInfo)}, ${JSON.stringify(user.profile)}) ON CONFLICT (userId) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedUserPosts() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS userposts (
      userpostid UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      posttype TEXT NOT NULL,
      userid UUID NOT NULL,
      post TEXT NOT NULL,
      photos JSONB,
      video TEXT,
      date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const insertedUserPosts = await Promise.all(
    userPosts.map(async (post) => {
     
      return client.sql`INSERT INTO userposts (posttype, userid, post, photos) VALUES (${post.postType}, ${post.userId}, ${post.post}, ${JSON.stringify(post.photos)}) ON CONFLICT (userpostid) DO NOTHING;
      `;
    })
  );

  return insertedUserPosts;
}



export async function GET() {
  try {
    await client.sql`BEGIN`;
    //await seedUsers();
    await seedUserPosts();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}