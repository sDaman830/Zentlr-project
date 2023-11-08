import Details from "./Details"
import TopBar from "./TopBar"
import Table from "./Table"

function Portfolio() {
    return (
        <div className='md:w-[75vw] mt-6 px-6 w-screen'>
            <TopBar />
            <Details />
            <Table />

        </div>
    )
}

export default Portfolio