import { BiChip } from "react-icons/bi";
import { BsDot } from "react-icons/bs";


const Hero = () => {

    return(
        <div className="min-h-screen flex flex-col">
            <div className="flex items-center justify-start text-orange-500">
                <p className="flex items-center justify-center text-gray-600 underline"><BsDot color="green" />online</p>
                <h2 className="px-7 p-2 border border-orange-500 w-fit rounded-3xl flex items-center justify-center gap-2 backdrop-blur-sm bg-orange-500/20 ml-auto mr-[40%]"> <BiChip width={50}/> Initializing Sequence</h2>
            </div>

            <div className="flex justify-center items-center text-center pt-20 text-9xl text-white font-extrabold">
                <h1 className="flex flex-col gap-4">
                    SPARK <br />
                    <span className="bg-linear-to-r from-orange-600 via-orange-200 to-orange-600 bg-clip-text text-transparent">
                        2026
                    </span>
                </h1>
            </div>
        </div>
    )
}

export default Hero;