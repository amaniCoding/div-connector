export default function Loading() {
  return (
    <div className="relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent bg-slate-50 p-5 pt-[90px]">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-12 gap-14">
          <div className="md:col-span-7 col-span-12 bg-white p-6">
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
          <div className="md:col-span-5 col-span-12 bg-white p-6">
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
    </div>
  )
}