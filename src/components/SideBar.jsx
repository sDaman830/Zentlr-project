import navLinks from "../constants/navlinks"
function SideBar() {
    return (
        <div className='md:w-[25vw] bg-[#F6FAFC] overflow-y-auto md:block hidden shrink-0'>
            <div className="flex flex-col gap-10 mt-10 px-6">
                <img src="/logo.svg" className="w-24 mx-auto" />
                <div className="flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                        <div key={index} className={`flex items-center gap-4 hover:bg-[#4DAEFF] hover:cursor-pointer rounded-full px-4 py-3 transition ${link.link === 'Consumers' ? "bg-primary" : ""} `}>
                            <div className="w-8">
                                <img src={link.icon} className="mr-1" />
                            </div>
                            <p className={`font-semibold text-gray-600 ${link.link === 'Consumers' ? "text-white" : ""}`}>{link.link}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default SideBar