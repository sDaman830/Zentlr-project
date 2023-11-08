
function Heading() {
    return (
        <div className="flex gap-16 p-2 w-screen bg-[#DDEBFF]">
            <div className="w-[24rem]">
                <p className="font-semibold">Consumer Name</p>
            </div>
            <div className="w-[30rem]">
                <p className="font-semibold">Assets</p>
                <div className="flex text-[0.5rem] items-center gap-2 justify-start">
                    <p className="text-[#0153C9] ">Total ~₹9M</p>
                    <p className="bg-blue-200 px-1 py-[0.5px] rounded-full font-semibold  text-[#866D1B] bg-gradient-to-b from-yellow-100 to-yellow-400">50.54g</p>
                    <p className=" bg-gradient-to-b from-white to-gray-300 px-1 py-[0.5px] rounded-full  text-[#ADADAD] font-semibold">30.2g</p>
                    <p className="bg-gradient-to-b from-blue-50 to-blue-300 px-1 py-[0.5px] rounded-full  text-blue-600 font-semibold">₹242.5</p>
                </div>
            </div>
            <div className="w-[30rem] font-semibold">
                <p className="">Revenue</p>
            </div>
            <div className="w-[30rem] font-semibold">
                <p className=" grow">KYC Status</p>
            </div>
            <div className="w-[30rem] font-semibold">
                <p className="">Facilitator</p>
            </div>
            <div className="w-[30rem] font-semibold">
                <p className="">Zone</p>
            </div>
            <div className="w-[30rem] font-semibold">
                <p className="">Account Type</p>
            </div>
            <div className="w-[30rem] font-semibold">
                <p className="">TPA</p>
            </div>
        </div>
    )
}

export default Heading