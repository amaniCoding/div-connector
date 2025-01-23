'use server'
import { sql } from '@vercel/postgres';
import { writeFile } from 'fs/promises';
import mime from "mime";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { join } from 'path';
import { z } from 'zod'


function mysql_real_escape_string(str: string) {
  return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
    switch (char) {
      case "\0":
        return "\\0";
      case "\x08":
        return "\\b";
      case "\x09":
        return "\\t";
      case "\x1a":
        return "\\z";
      case "\n":
        return "\\n";
      case "\r":
        return "\\r";
      case "\"":
      case "'":
      case "\\":
      case "%":
        return "\\" + char; // prepends a backslash to backslash, percent,
      // and double/single quotes
      default:
        return char;
    }
  });
}
const postSchema = z.object({

  breif_title: z.string({
    invalid_type_error: 'Please insert breif title.',
  }),

  breif_description: z.string({
    invalid_type_error: 'Please insert breif description.',
  }),


});
export type State = {
  errors?: {
    breif_title?: string[];
    breif_description?: string[];
  };
  message?: string | null;
  success: boolean;
};
export async function createPost(prevState: State | undefined, formData: FormData) {



  const validatedFields = postSchema.safeParse({
    breif_title: formData.get('breif_title'),
    breif_description: formData.get('breif_description'),
  });



  if (!validatedFields.success) {

    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create a Post.',
      success: false
    };
  }

  const { breif_title, breif_description } = validatedFields.data;

  const invalidateFields = {

    breif_photo: formData.get('breif_photo') as File || null,



    cont_title_0: formData.get('cont_title_0') as string || null,
    cont_desc_0: formData.get('cont_desc_0') as string || null,
    cont_codesnip_0: formData.get('cont_codesnip_0') as string || null,
    cont_photo_0: formData.get('cont_photo_0') as File || null,




    cont_title_1: formData.get('cont_title_1') as string || null,
    cont_desc_1: formData.get('cont_desc_1') as string || null,
    cont_codesnip_1: formData.get('cont_codesnip_1') as string || null,
    cont_photo_1: formData.get('cont_photo_1') as File || null,

    cont_title_2: formData.get('cont_title_2') as string || null,
    cont_desc_2: formData.get('cont_desc_2') as string || null,
    cont_codesnip_2: formData.get('cont_codesnip_2') as string || null,
    cont_photo_2: formData.get('cont_photo_2') as File || null,


    cont_title_3: formData.get('cont_title_3') as string || null,
    cont_desc_3: formData.get('cont_desc_3') as string || null,
    cont_codesnip_3: formData.get('cont_codesnip_3') as string || null,
    cont_photo_3: formData.get('cont_photo_3') as File || null,
  }

  const relativeUploadDir = '/uploads/posts';

  let breiffileUrl;
  let fileNameUrl0;
  let fileNameUrl1;
  let fileNameUrl2;
  let fileNameUrl3;
  const uploadDir = join(process.cwd(), "public", relativeUploadDir);

  if (invalidateFields.breif_photo) {
    try {
      const bufferBrief = Buffer.from(await invalidateFields.breif_photo.arrayBuffer());
    const breifFileName = Date.now() + invalidateFields.breif_photo
      .name.replaceAll(" ", "_");
    await writeFile(`${uploadDir}/${breifFileName}`, bufferBrief);
    breiffileUrl = `${relativeUploadDir}/${breifFileName}`;
    } catch(error) {
      console.log('unable to upload a photo')
    }

  }

  if(invalidateFields.cont_photo_0) {
    try {
      const buffer0 = Buffer.from(await invalidateFields.cont_photo_0.arrayBuffer());
    const fileName0 = Date.now() + invalidateFields.breif_photo
      .name.replaceAll(" ", "_");
    await writeFile(`${uploadDir}/${fileName0}`, buffer0);
    fileNameUrl0 = `${relativeUploadDir}/${fileName0}`;
    } catch(error) {
      console.log('unable to upload a photo')
    }
  }

  if(invalidateFields.cont_photo_1) {
    try {
      const buffer1 = Buffer.from(await invalidateFields.cont_photo_1.arrayBuffer());
    const fileName1 = Date.now() + invalidateFields.breif_photo
      .name.replaceAll(" ", "_");
    await writeFile(`${uploadDir}/${fileName1}`, buffer1);
    fileNameUrl1 = `${relativeUploadDir}/${fileName1}`;
    } catch(error) {
      console.log('unable to upload a photo')
    }
  }

  if(invalidateFields.cont_photo_2) {
    try {
      const buffer2 = Buffer.from(await invalidateFields.cont_photo_2.arrayBuffer());
    const fileName2 = Date.now() + invalidateFields.breif_photo
      .name.replaceAll(" ", "_");
    await writeFile(`${uploadDir}/${fileName2}`, buffer2);
    fileNameUrl2 = `${relativeUploadDir}/${fileName2}`;
    } catch(error) {
      console.log('unable to upload a photo')
    }
  }

  if(invalidateFields.cont_photo_3) {
    try {
      const buffer3 = Buffer.from(await invalidateFields.breif_photo.arrayBuffer());
    const fileName3 = Date.now() + invalidateFields.breif_photo
      .name.replaceAll(" ", "_");
    await writeFile(`${uploadDir}/${fileName3}`, buffer3);
    fileNameUrl3 = `${relativeUploadDir}/${fileName3}`;
    } catch(error) {
      console.log('unable to upload a photo')
    }
  }


 
  





  try {
      
    const post = {
      user_id: 'bb173bd3-cb40-47a5-8415-29655e71a334',
      breif_title: breif_title,
      breif_description: breif_description,
      photo: breiffileUrl,

      cont_0_title: invalidateFields.cont_title_0,
      cont_0_description: invalidateFields.cont_desc_0,
      cont_0_code_snippet: invalidateFields.cont_codesnip_0,
      cont_0_photo: fileNameUrl0,

      cont_1_title: invalidateFields.cont_title_1,
      cont_1_description: invalidateFields.cont_desc_1,
      cont_1_code_snippet: invalidateFields.cont_codesnip_1,
      cont_1_photo: fileNameUrl1,

      cont_2_title: invalidateFields.cont_title_2,
      cont_2_description: invalidateFields.cont_desc_2,
      cont_2_code_snippet: invalidateFields.cont_codesnip_2,
      cont_2_photo: fileNameUrl2,

      cont_3_title: invalidateFields.cont_title_3,
      cont_3_description: invalidateFields.cont_desc_3,
      cont_3_code_snippet: invalidateFields.cont_codesnip_3,
      cont_3_photo: fileNameUrl3,
      

      

    }
    console.log("not posted");

    await sql`INSERT INTO posts (user_id, breif_title, breif_description, photo, cont_0_title, cont_0_description, cont_0_code_snippet, cont_0_photo, cont_1_title, cont_1_description, cont_1_code_snippet, cont_1_photo, cont_2_title, cont_2_description, cont_2_code_snippet, cont_2_photo, cont_3_title, cont_3_description, cont_3_code_snippet, cont_3_photo) VALUES (${post.user_id}, ${post.breif_title}, ${post.breif_description}, ${post.photo}, ${post.cont_0_title}, ${post.cont_0_description}, ${post.cont_0_code_snippet}, ${post.cont_0_photo}, ${post.cont_1_title}, ${post.cont_1_description}, ${post.cont_1_code_snippet}, ${post.cont_1_photo}, ${post.cont_2_title}, ${post.cont_2_description}, ${post.cont_2_code_snippet}, ${post.cont_2_photo}, ${post.cont_3_title}, ${post.cont_3_description}, ${post.cont_3_code_snippet}, ${post.cont_3_photo} ) ON CONFLICT (id) DO NOTHING;
      `;
    console.log("not posted");
    revalidatePath('/home');
    return {
      errors: {},
      message: '',
      success: true
    };

  } catch (error) {
    console.error("Error while trying to upload a file\n", error);
  }
}

