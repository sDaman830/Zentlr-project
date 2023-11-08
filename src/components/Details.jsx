import { MdPersonAddAlt1 } from "react-icons/md"
import { IoAlertCircle } from "react-icons/io5"


function Details() {
    return (
        <div className="md:mt-10 mx-2 mt-10">
            <div className="lg:grid-cols-5 md:grid-cols-3 grid-cols-1 grid gap-4">
                <div className=" bg-secondary flex md:col-span-2 items-center justify-between rounded-lg gap-5">
                    <div className="flex flex-col gap-1 p-4 items-start">
                        <h2 className="font-semibold  text-primary">Consumer &gt; Manager</h2>
                        <h1 className="font-semibold">Actions</h1>
                        <a href="#" className="flex items-center gap-2 px-4 py-2 bg-[#313945] justify-center rounded-lg">
                            <MdPersonAddAlt1 size={24} fill="white" />
                            <spna className="text-white font-semibold text-sm">Add Consumers</spna>
                        </a>
                    </div>
                    <img src="/person.svg" className="h-20 sm:block hidden" />

                </div>

                <div className="flex flex-col justify-center bg-[#F7EDE4]  p-4 rounded-lg">
                    <div className="flex gap-1">
                        <img src="/kyc.svg" />
                        <p className=" text-gray-600">
                            <span className="text-xl font-semibold">297</span>
                            <span className="text-sm">KYC</span>
                        </p>
                    </div>
                    <p className="text-gray-600">approval pending</p>

                    <a href="#" className="px-4 py-2 bg-[#313945] rounded-lg mt-4 text-center w-28">
                        <spna className="text-white font-semibold">View List</spna>
                    </a>
                </div>
                <div className="flex flex-col justify-center p-4 rounded-lg bg-[#F7EDE4] ">
                    <div className="flex gap-1 items-center">
                        <IoAlertCircle size={20} fill="#D84545" />
                        <p className=" text-gray-600">
                            <span className="text-xl font-semibold">182</span>
                            <span className="text-sm">high risk</span>
                        </p>
                    </div>
                    <p className="text-gray-600">consumers</p>

                    <a href="#" className="px-4 py-2 bg-[#313945] rounded-lg mt-4 text-center w-28">
                        <spna className="text-white font-semibold">View List</spna>
                    </a>
                </div>
                <div className="flex flex-col justify-center p-4 rounded-lg bg-blue-100/50" >
                    <div className="flex gap-1">
                        <img src="/kyc.svg" />
                        <p className=" text-gray-600">
                            <span className="text-xl font-semibold">32</span>
                            <span className="text-sm">tickets</span>
                        </p>
                    </div>
                    <p className="text-gray-600">open</p>

                    <a href="#" className="px-4 py-2 bg-[#313945] rounded-lg mt-4 text-center w-28">
                        <spna className="text-white font-semibold">View List</spna>
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Details