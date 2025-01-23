import { MyFormData } from "../libs/types";
export default function Form(props: { formContent: MyFormData, index: number }) {
  return (
    <div className="mb-3">
      <label htmlFor="customer" className="mb-2 block font-medium">
       Title
      </label>
      <input type="text" placeholder="Brief title that describe your section ..." className="p-3 focus:outline-none border-[2px] block w-full mb-5 border-gray-300 rounded-lg" name={`cont_title_${props.index}`}></input>
      <label htmlFor="customer" className="mb-2 block font-medium">
       Description
      </label>
      <textarea className="p-3 rounded-lg block w-full mb-5 focus:outline-none border-[2px] border-gray-300" rows={5} placeholder="detail description about your section ..." name={`cont_desc_${props.index}`}></textarea>
      <label htmlFor="customer" className="mb-2 block font-medium">
       Code Snippet
      </label>
      <textarea className="p-3 block w-full mb-5 rounded-lg focus:outline-none border-[2px] border-gray-300" rows={5} placeholder="Paste code snippet here which describes your description ..." name={`cont_codesnip_${props.index}`}></textarea>
      <label htmlFor="customer" className="mb-2 block font-medium">
       Upload file
      </label>
      <input type="file" className="p-3 w-full block file:border-0" name={`cont_photo_${props.index}`}></input>
    </div>
  )
}