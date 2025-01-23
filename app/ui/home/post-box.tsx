'use client'

import { Dispatch, SetStateAction, useActionState, useEffect, useState } from "react"
import { FaXmark } from "react-icons/fa6"
import Form from "../form"
import { createPost, State } from "@/app/libs/actions"
export default function PostBox(props: {
  onClose: Dispatch<SetStateAction<boolean>>
}) {
  const [contentIndex, setContentIndex] = useState<number>(0);
  const [toShowBreifContent, setTtoShowBreifContent] = useState<boolean>(true);
  const [formArray, setFormArray] = useState<any[]>([]);

  const [toShowBox, settoShowBox] = useState<boolean>(false);
  const initialState: State = { message: null, errors: {}, success: false };
  const [state, formAction, pending] = useActionState(createPost, initialState);
  const handelOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, indexNumber: number) => {

    const newContentArray = formArray.map((el, i) => {
      if (indexNumber === i) {
        return {
          ...el, [e.target.name]: e.target.value
        }
      } else {
        return el;
      }
    });
    setFormArray(newContentArray);
  }
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
      props.onClose(false);
    }
  }, [state?.success])

  return (
    <>
      {
        toShowBox && (<section className="bg-black/75 fixed top-0 bottom-0 left-0 right-0 z-30 overflow-hidden">
          <div className="max-w-screen-sm rounded-md p-6 mx-auto bg-white mt-32">
            <p className="my-2">Your content can not be more than 4</p>
            <button className="px-2 py-1 bg-blue-500 text-white rounded-md" onClick={() => { settoShowBox(false) }}>Ok</button>
          </div>
        </section>)
      }
      <section className="bg-black/75 fixed top-0 bottom-0 left-0 right-0 z-20 overflow-hidden">
        <div className="max-w-screen-sm rounded-md p-6 mx-auto overflow-y-scroll socrollabar scroll_content bg-white relative h-[80vh] mt-10">
          <FaXmark className="w-10 h-10 absolute top-2 right-2 p-2 hover:bg-slate-300 rounded-full cursor-pointer" onClick={() => { props.onClose(false) }} />
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
          </form>
        </div>
      </section>
    </>
  )
}