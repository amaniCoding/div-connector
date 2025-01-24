

'use client'

import { Dispatch, SetStateAction, useActionState, useEffect, useState } from "react"
import { FaXmark } from "react-icons/fa6"
import Form from "./form"
import { createPost, State } from "@/app/libs/actions"
import { redirect } from "next/navigation"
export default function MobilePostBox() {
  const [contentIndex, setContentIndex] = useState<number>(0);
  const [toShowBreifContent, setTtoShowBreifContent] = useState<boolean>(true);
  const [formArray, setFormArray] = useState<any[]>([]);

  const [toShowBox, settoShowBox] = useState<boolean>(false);
  const initialState: State = { message: null, errors: {}, success: false };
  const [state, formAction, pending] = useActionState(createPost, initialState);

  const handelContent = () => {
    if (formArray.length >= 4) {
      settoShowBox(true);
    } else {
      const newFormObject = {
        [`cont_title_${contentIndex}}`]: `cont_title_${contentIndex}`,
        [`cont_desc_${contentIndex}`]: `cont_desc_${contentIndex}`,
        [`cont_codesnip_${contentIndex}`]: `cont_codesnip_${contentIndex}`,
        [`cont_photo_${contentIndex}`]: `cont_photo_${contentIndex}`
      }

      const newFormArray = [...formArray, <Form formContent={newFormObject} key={contentIndex} index={contentIndex} />]
      setFormArray(newFormArray);
      const newContentIndex = contentIndex + 1;
      setContentIndex(newContentIndex);
      setTtoShowBreifContent(false);
    }
  }

  useEffect(() => {
    if (state?.success) {
      redirect('/home');
    }
  }, [state?.success])
  return (
    <>

      <section className="md:pt-[80px] pt-[70px]">
        <div className="w-full rounded-md p-3">

          <p className="font-bold my-1">Your content count {contentIndex === 0 ? "" : contentIndex}</p>
          <form className="flex flex-col space-y-3" action={formAction}>
            <div className={`flex-col space-y-6 border-b-2 border-b-gray-100 pb-3 mb-3 ${toShowBreifContent ? 'flex' : 'hidden'}`}>
              <div>

                <p className="text-sm">Add breif content for your post, these are the contents which are shown to the feed.</p>
              </div>
              <input type="text" placeholder="Title ..." className="p-3 focus:outline-none border-[2px] border-gray-300 rounded-lg" name="breif_title"></input>
              <textarea className="p-3 rounded-lg focus:outline-none border-[2px] border-gray-300" rows={5} placeholder="Description ..." name="breif_description"></textarea>
              <input type="file" className="p-3 file:border-0" name="breif_photo"></input>

            </div>

            <div>
              {
                !toShowBreifContent && (<div>

                  <p className="text-sm">Add sections for your content for your post, these are the full article which a user read when clicking read more</p>
                </div>)
              }
              {
                !toShowBreifContent && formArray.map((form, i) => {
                  return (<div key={i}>{form}</div>)
                })
              }
            </div>
            <div className="flex items-center justify-between">
              <button type="button" onClick={handelContent} className="px-3 py-2 bg-blue-500 text-white rounded-md text-center w-36">Add Section</button>

              {!toShowBreifContent && <button type="submit" className="px-3 py-2 bg-blue-500 text-white rounded-md text-center w-36">{pending ? "Posting..." : "Post"}</button>}
            </div>
            {
              toShowBox && (<section className="">
                <div className="w-full rounded-md p-3 bg-red-50">
                  <p className="my-2 font-bold text-red-500">Your content can not be more than 4</p>
                  <button className="px-2 py-1 bg-blue-500 text-white rounded-md" onClick={() => { settoShowBox(false) }}>Ok</button>
                </div>
              </section>)
            }
          </form>
        </div>
      </section>
    </>
  )
}