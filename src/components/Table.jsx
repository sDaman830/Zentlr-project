import Heading from "./Heading"
import Row1 from "./Row1"
import Row2 from "./Row2"

function Table() {
    return (
        <div className="mt-10 overflow-scroll md:h-[20rem]">

            {/* Heading */}
            <Heading />

            {/* Row */}


            {Array(4).fill(null).map((_, index) => (
                <div key={index}>
                    <Row1 />
                    <Row2 />
                </div>
            ))}
        </div>

    )
}

export default Table