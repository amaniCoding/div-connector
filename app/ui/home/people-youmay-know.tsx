import { fetchUsers } from "@/app/libs/data";
import Image from "next/image"
import { FaBirthdayCake } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdMore } from "react-icons/io";

export default async function PeopleYouMayKnow() {
  const users = await fetchUsers();

  return (
    <>
    <div>
      <p>BirthDays</p>
      <div className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-200">
        <FaBirthdayCake className="fill-blue-600 w-6 h-6"/>
        <p>Amanuel Feredes birthdate is today</p>
      </div>
    </div>
    <div className="flex items-center justify-between">
      <p>Contacts</p>
      <div className="flex items-center space-x-2">
        <HiMagnifyingGlass className="w-6 h-6"/>
        <IoMdMore className="w-6 h-7"/>
      </div>
    </div>
      {
        users.map((user) => {
          return (
            <div className="w-full" key={user.userid}>
              <div className="flex items-center space-x-2 py-2 px-2.5 rounded-md hover:bg-gray-100">
                <Image
                  alt="Amanuel Ferede"
                  src={user.basicinfom.profilePic}
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-8 h-8 object-cover rounded-full"
                />
                <p className="">{user.basicinfom.fName} {" "} {user.basicinfom.lastName}</p>
              </div>
            </div>
          )
        })
      }
    </>
  )
}