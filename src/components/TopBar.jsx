
function TopBar() {
    return (
        <div>
            <div className="relative justify-between items-center ">
                <div className="">
                    <input className="active:border-none bg-[#F6FAFC] py-2 px-6 rounded-full md:w-[16rem] text-base outline-none md:mt-5  mt-16 w-full"
                        type="text"
                        placeholder="Search (Eg: Rewards)" />
                </div>
                <div className="absolute top-0 right-0">
                    <img src="/top.svg" />
                </div>
            </div>
        </div>
    )
}

export default TopBar