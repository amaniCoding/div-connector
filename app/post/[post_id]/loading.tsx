import NavBar from "@/app/ui/home/nav-bar";

export default function Loading() {
  return (

    <div className="relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent">
      <nav className="p-3 fixed top-0 left-0 right-0 z-10 bg-white w-full shadow-md">
        <div className="flex items-center justify-between space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          </div>
          <div className="md:block hidden p-6 grow bg-gray-200 rounded-md"></div>
          <div className="md:flex hidden items-center space-x-3 text-gray-500">
            <div className="rounded-md">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            </div>
            <div className="rounded-md">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            </div>
            <div className="rounded-md">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            </div>
            <div className="rounded-md">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            </div>
            <div className="rounded-md">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            </div>
            <div className="rounded-md">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </nav>
      <section className="bg-slate-50 md:pt-[80px] pt-[70px]">
        <div className="md:max-w-screen-xl w-full md:mx-auto">
          <div className="grid grid-cols-12 gap-5">
            <div className="md:col-span-8 col-span-12 bg-white md:p-6 p-3">
              <div className="flex space-x-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div className="flex flex-col space-y-4">
                  <div className="w-24 h-3 rounded-md bg-gray-200"></div>
                  <div className="w-14 h-3 rounded-md bg-gray-200"></div>
                </div>
              </div>
              <div className="w-full h-10 rounded-md bg-gray-200 mb-5"></div>
              <div className="w-full py-24 rounded-md bg-gray-200"></div>
              <div className="w-full py-5 bg-white"></div>
              <div className="flex items-center justify-between">
                <div className="w-14 h-3 rounded-md bg-gray-200"></div>
                <div className="w-14 h-3 rounded-md bg-gray-200"></div>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12 bg-white md:p-6 p-3">
              <div className="flex space-x-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-none"></div>
                <div className="flex flex-col space-y-4 grow">
                  <div className="w-24 h-3 rounded-md bg-gray-200"></div>
                  <div className="w-14 h-3 rounded-md bg-gray-200"></div>
                  <div className="w-full mt-3 rounded-md bg-gray-200 h-40"></div>
                </div>

              </div>
              <div className="flex space-x-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-none"></div>
                <div className="flex flex-col space-y-4 grow">
                  <div className="w-24 h-3 rounded-md bg-gray-200"></div>
                  <div className="w-14 h-3 rounded-md bg-gray-200"></div>
                  <div className="w-full mt-3 rounded-md bg-gray-200 h-40"></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}