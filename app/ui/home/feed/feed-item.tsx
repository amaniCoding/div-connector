import { QueryResultRow } from "@vercel/postgres"
import Image from "next/image"
import Link from "next/link";
import { IoIosMore, IoMdMore } from "react-icons/io";
import { FaFacebookMessenger, FaUserFriends } from "react-icons/fa";
import { fetchPhotos } from "@/app/libs/data/user";
import CommentItem from "./comment/comment-item";

export default async function FeedItem(props: { post: QueryResultRow }) {

  const photos = await fetchPhotos(props.post.postid);


  return (
    <div className="py-2 bg-white rounded-md mb-4">

      <div className="flex justify-between">
        <div className="flex space-x-3 px-6 pt-2">
          <div className="flex-col space-y-0.5 relative group">
            <Link href={`/profile`}>
              <Image
                alt="Amanuel Ferede"
                src={props.post.profilepic}
                width={0}
                height={0}
                sizes="100vh"
                className="w-10 h-10 object-cover rounded-full ring-2 ring-offset-2 ring-blue-400"
              />
            </Link>

            <div className={`absolute group-hover:block hidden w-96 z-10  -left-32 rounded-lg  p-4  bg-white shadow-lg`}>
              <div className="flex space-x-3">
                <Image
                  className="w-20 h-20 rounded-full  object-cover"
                  alt="Amanuel Ferede"
                  src={props.post.profilepic}
                  width={0}
                  height={0}
                  sizes="100vh"

                />

                <div className=" flex-col space-y-2 flex-1 mt-3">
                  <p className="text-lg font-bold">{props.post.fname} {props.post.lname}</p>
                  <p className="">Lives in AddisAbaba Ethiopia </p>
                  <p>Studid Vivil Engineering at BahirDar University</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-3">
                <button className="px-3 grow py-1.5 bg-gray-400 text-white flex space-x-2 items-center justify-center rounded-md"><FaUserFriends className="w-4 h-4" /><span>Friends</span></button>
                <button className="px-3 grow py-1.5 bg-blue-600 text-white flex space-x-2 items-center justify-center rounded-md"><FaFacebookMessenger className="fill-white w-4 h-4" /><span>Message</span></button>
                <button className="p-3 bg-gray-400 text-white flex space-x-2 items-center rounded-md"><IoIosMore className="w-4 h-4" /></button>
              </div>

            </div>
          </div>
          <div>
            <div className="flex-col space-y-0.5 relative group">

              <Link href={`/profile`} className="peer block"><span className="font-semibold">{props.post.fname} {props.post.lname}</span></Link>
              <div className={`absolute group-hover:block hidden w-96 z-10  -left-32 rounded-lg  p-4  bg-white shadow-lg`}>
                <div className="flex space-x-3">
                  <Image
                    className="w-20 h-20 rounded-full  object-cover"
                    alt="Amanuel Ferede"
                    src={props.post.profilepic}
                    width={0}
                    height={0}
                    sizes="100vh"

                  />

                  <div className=" flex-col space-y-2 flex-1 mt-3">
                    <p className="text-lg font-bold">{props.post.fname} {props.post.lname}</p>
                    <p className="">Lives in AddisAbaba Ethiopia </p>
                    <p>Studid Vivil Engineering at BahirDar University</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-3">
                  <button className="px-3 grow py-1.5 bg-gray-400 text-white flex space-x-2 items-center justify-center rounded-md"><FaUserFriends className="w-4 h-4" /><span>Friends</span></button>
                  <button className="px-3 grow py-1.5 bg-blue-600 text-white flex space-x-2 items-center justify-center rounded-md"><FaFacebookMessenger className="fill-white w-4 h-4" /><span>Message</span></button>
                  <button className="p-3 bg-gray-400 text-white flex space-x-2 items-center rounded-md"><IoIosMore className="w-4 h-4" /></button>
                </div>

              </div>

            </div>
            <span className="text-gray-400 text-sm">2 Hours</span>
          </div>

        </div>
        <IoMdMore className="w-8 h-8" />
      </div>
      <p className="px-5 mb-3 mt-2">{props.post.post.length > 170 ? `${props.post.post.substring(0, 170)}... See more` : props.post.post}</p>
      <div className="">
        {
          photos.length === 1 && (
            <Link href={`/photo/${props.post.postid}/${photos[0].photoid}`}>
              <Image
                className="w-full"
                alt="Amanuel Ferede"
                src={photos[0].photo}
                width={0}
                height={0}
                sizes="100vh"

              />
            </Link>

          )
        }

        {
          photos.length === 2 && (
            <div className="grid grid-cols-2">
              {
                photos.map(photo => {
                  return (
                    <div key={photo.photoid}>
                      <Link href={`/photo/${props.post.postid}/${photo.photoid}`}>
                        <Image
                          className="w-full h-full"
                          alt="Amanuel Ferede"
                          src={photo.photo}
                          width={0}
                          height={0}
                          sizes="100vh"

                        />
                      </Link>

                    </div>
                  )
                })
              }
            </div>
          )
        }


        {
          photos.length === 3 && (
            <div>
              <div>
                <Link href={`/photo/${props.post.postid}/${photos[0].photoid}`}>
                  <Image
                    className="w-full h-full"
                    alt="Amanuel Ferede"
                    src={photos[0].photo}
                    width={0}
                    height={0}
                    sizes="100vh"

                  />
                </Link>
              </div>
              <div className="grid grid-cols-2">
                {
                  photos.slice(1, 3).map(photo => {
                    return (
                      <div key={photo.photoid}>
                        <Link href={`/photo/${props.post.postid}/${photo.photoid}`}>
                          <Image
                            className="w-full h-full"
                            alt="Amanuel Ferede"
                            src={photo.photo}
                            width={0}
                            height={0}
                            sizes="100vh"

                          />
                        </Link>

                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        }

        {
          photos.length === 4 && (


            <div className="grid grid-cols-2 gap-[0.3rem]">
              <div className="grid grid-cols-12 gap-[0.3rem]">

                {
                  photos.slice(0, 2).map(photo => {
                    return (
                      <div className="col-span-12" key={photo.photoid}>
                        <Link href={`/photo/${props.post.postid}/${photo.photoid}`}>
                          <Image
                            className="w-full h-auto max-h-full"
                            alt="Amanuel Ferede"
                            src={photo.photo}
                            width={0}
                            height={0}
                            sizes="100vh"

                          />
                        </Link>

                      </div>
                    )
                  })
                }

              </div>
              <div className="grid grid-cols-12 gap-[0.3rem]">

                {
                  photos.slice(2, 4).map(photo => {
                    return (
                      <div className="col-span-12" key={photo.photoid}>
                        <Link href={`/photo/${props.post.postid}/${photo.photoid}`}>
                          <Image
                            className="w-full object-cover"
                            alt="Amanuel Ferede"
                            src={photo.photo}
                            width={0}
                            height={0}
                            sizes="100vh"

                          />
                        </Link>

                      </div>
                    )
                  })
                }

              </div>

            </div>

          )
        }

        {
          photos.length > 4 && (


            <div className="grid grid-cols-2">
              {
                photos.slice(0, 3).map(photo => {
                  return (
                    <div key={photo.photoid}>
                      <Link href={`/photo/${props.post.postid}/${photo.photoid}`}>
                        <Image
                          className="w-full h-full"
                          alt="Amanuel Ferede"
                          src={photo.photo}
                          width={0}
                          height={0}
                          sizes="100vh"

                        />
                      </Link>

                    </div>
                  )
                })
              }

              <div className="relative">
                <div className="absolute flex items-center justify-center top-0 left-0 bottom-0 right-0 bg-black/65">
                  <span className="text-white">
                    {photos.length - 4} More
                  </span>
                </div>
                <Link href={`/photo/${props.post.postid}/${photos[3].photoid}`}>
                  <Image
                    className="w-full h-full"
                    alt="Amanuel Ferede"
                    src={photos[3].photo}
                    width={0}
                    height={0}
                    sizes="100vh"

                  />
                </Link>

              </div>
            </div>

          )
        }
      </div>

      <CommentItem />
    </div>
  )
}