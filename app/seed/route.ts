import { db } from "@vercel/postgres";
import bcrypt from 'bcrypt';
import { users } from "../libs/place-holder";
const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      fname VARCHAR(255) NOT NULL,
      lname VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      profile_pic TEXT,
      cover_pic TEXT,
      phone_number TEXT,
      skills JSONB,
      social_media_links JSONB,
      work_exp JSONB,
      current_city TEXT,
      current_position TEXT,
      about TEXT
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`INSERT INTO users (fname, lname, email, password, profile_pic, cover_pic, phone_number, skills, social_media_links, work_exp, current_city, current_position, about) VALUES (${user.fname}, ${user.lname}, ${user.email}, ${hashedPassword}, ${user.profile_pic}, ${user.cover_pic}, ${user.phone_number}, ${user.skills}, ${user.social_media_links}, ${user.work_exp}, ${user.current_city}, ${user.current_position}, ${user.about}) ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}


export async function GET() {
  try {
    await client.sql`BEGIN`;
    //await seedUsers();
    //await seedPost();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}