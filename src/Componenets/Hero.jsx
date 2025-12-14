import { BiChip } from "react-icons/bi";
import { BsDot } from "react-icons/bs";


const Hero = () => {

    return(
        <div className="min-h-screen">
            <div className="flex items-center justify-start text-orange-500">
                <p className="flex items-center justify-center text-gray-600 underline"><BsDot color="green" />online</p>
                <h2 className="px-7 p-2 border border-orange-500 w-fit rounded-3xl flex items-center justify-center gap-2 backdrop-blur-sm bg-orange-500/20 ml-auto mr-auto"> <BiChip width={50}/> Initializing Sequence</h2>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Hero;