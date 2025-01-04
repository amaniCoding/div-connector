import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <section className="bg-slate-200 h-screen md:flex md:items-center md:justify-center">
      <div className="max-w-screen-md md:flex md:flex-row flex-col md:space-x-5 bg-white rounded-md md:p-12 p-3 space-y-2">
        <div className="md:w-1/2 w-full md:flex md:items-center md:justify-center">
          <div>
            <Image
              alt="Amanuel Ferede"
              src={`/2.jpg`}
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-full object-cover"
            />
            <div className="md:mt-3 p-2">
              <p className="text-lg font-bold w-full">Dev Connector</p>
              <p className="text-sm w-full">A simple platform to connect devlopers across the world made using Next.js and Tailwindcss for styling </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div>
            <input type="text" className="py-3 px-4 block w-full border-2 border-gray/45 rounded-md" placeholder="Enter your email or username"></input>
            <input type="password" className="py-3 px-4 my-5 block w-full border-2 border-gray/45 rounded-md" placeholder="Enter your email or username"></input>
            <div className="flex md:flex-row flex-col md:items-center md:justify-between mb-5">
              <Link href={`/home`} type="submit" className="p-2 px-4 bg-blue-500 text-center text-white rounded-md block md:w-24 md:mb-0 mb-5 w-full ">Login</Link>
              <Link href={`/home`} type="submit" className="p-2 border-2 border-gray-800/35 text-center text-black rounded-md block md:w-24 w-full ">Reginster</Link>
            </div>
            <div className="text-sm">All rights reserved 2025</div>
          </div>
        </div>
      </div>
    </section>
  )
}