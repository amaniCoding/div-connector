'use client'

import { Dispatch, SetStateAction, useState } from "react"
import { FaXmark } from "react-icons/fa6"
import { Breif, Contnet } from "@/app/types/types"
import LoadDetailContentForm from "@/app/libs/contents"

export default function PostBox(props: {
  onClose: Dispatch<SetStateAction<boolean>>
}) {
  const [index, setIndex] = useState<number>(0);
  const [detailPostContentCount, setDetailPostContentCount] = useState<number>(0);
  const [showFirstPostBox, setShowFirstPostBox] = useState<boolean>(true);
  const [briefPostContent, setBreifPostContent] = useState<Breif>({
    title: "",
    description: "",
    photo: "",
  });
  const [detailPostContent, setDetailPostContent] = useState<Contnet[]>([]);
  const [toContinue, setToContinue] = useState<boolean>(true);
  const [showButton, setShowButton] = useState<boolean>(true);



  const handelOnChangeForBreifPostForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newBreifPostContent = {
      ...briefPostContent, [e.target.name]: e.target.value
    }
    setBreifPostContent(newBreifPostContent);
  }

  const handelChangeDetailPostForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, contentIndex: number) => {
    const newDetailPostContent = detailPostContent.map((el, i) => {
      if (contentIndex === i) {
        return { ...el, [e.target.name]: e.target.value };
      } else {
        return el;
      }
    });
    setDetailPostContent(newDetailPostContent);

  }


  const addContent = () => {
    setShowFirstPostBox(false);
    setShowButton(true);
    if (detailPostContentCount > 3) {
      setToContinue(false);
    } else {
      setDetailPostContentCount(detailPostContentCount + 1);

      const newDetailPostContent = [...detailPostContent,
      {
        title: "",
        description: "",
        codeSnippet: "",
        photo: "",
      }
      ]
      setIndex(index + 1);
      setDetailPostContent(newDetailPostContent);

    }

  }

  const backContent = () => {
    if (index <= 0) {
      return;
    }
    setIndex(index - 1);
    setShowFirstPostBox(false);
    setShowButton(true);
  }

  const nextContent = () => {

    if (index >= detailPostContent.length) {
      return;
    }
    setIndex(index + 1);
    setShowFirstPostBox(false);
  }

  const backToBriefPost = () => {
    setShowFirstPostBox(true);
    setShowButton(false);
  }





  return (
    <>
      {
        !toContinue && <section className="bg-black/75 fixed top-0 bottom-0 left-0 right-0 z-30 overflow-hidden">
          <div className="max-w-screen-sm rounded-md p-6 mx-auto bg-white mt-32">
            <p className="my-2">Your content can not be more than 4</p>
            <button className="px-2 py-1 bg-blue-500 text-white rounded-md" onClick={() => setToContinue(true)}>Ok</button>
          </div>
        </section>
      }
      <section className="bg-black/75 fixed top-0 bottom-0 left-0 right-0 z-20 overflow-hidden">
        <div className="max-w-screen-sm rounded-md p-6 mx-auto overflow-y-scroll socrollabar scroll_content bg-white mt-10 relative">
          <FaXmark className="w-10 h-10 absolute top-2 right-2 p-2 hover:bg-slate-300 rounded-full cursor-pointer" onClick={() => { props.onClose(false) }} />
          {
            detailPostContentCount > 0 && (
              <p>Your content count {detailPostContentCount}</p>
            )
          }
          {
            showFirstPostBox && (
              <div>

                <p className="text-slate-700 text-center font-semibold">Breif detials for your post </p>
                <p className="my-1 text-sm">Note: this post is shown to user first before it continues to read more !</p>
                <input type="text" className="p-2 pl-2 border-2 border-gray-400 block w-full focus:outline-none my-2 rounded-lg" placeholder="Title ..." name="title" onChange={handelOnChangeForBreifPostForm} value={briefPostContent?.title}></input>
                <textarea className="my-2 w-full focus:outline-none border-2 border-gray-400 pl-2 rounded-lg" cols={10} placeholder="Description ..." name="description" onChange={handelOnChangeForBreifPostForm} value={briefPostContent?.description}></textarea>
                <p className="text-sm my-2">Attach Photo (optional)</p>
                <input type="file" className="file:rounded-md file:outline-none file:my-2" name="photo"></input>
              </div>
            )
          }

          {
            !showFirstPostBox && (<LoadDetailContentForm detailPostContent={detailPostContent} handleOnChange={handelChangeDetailPostForm} index={index} />)
          }
          <div className="flex items-center justify-between">
            <button className="block p-2 mt-2 bg-blue-500 text-center text-white w-56 rounded-md" onClick={addContent}>Add Content</button>
            {
              index >= 2 && (<button className="block p-2 mt-2 bg-blue-500 text-center text-white  rounded-md" onClick={backContent}>Previous</button>)
            }

            {
              index === 1 && showButton === true && (<button className="block p-2 mt-2 bg-blue-500 text-center text-white rounded-md" onClick={backToBriefPost}>Back to brief post</button>)
            }

            {
              index >= 1 && (<button className="block p-2 mt-2 bg-blue-500 text-center text-white rounded-md" onClick={nextContent}>Next</button>)
            }
          </div>
        </div>
      </section>
    </>
  )
}