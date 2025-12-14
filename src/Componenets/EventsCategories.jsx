import { Trophy, Users } from "lucide-react"
import { EventsCategoriesData } from "../data"



const EventsCategories = () =>{

    return (

        <div className="flex items-center justify-center text-white flex-col gap-y-5">
            <p className="flex gap-2 px-5 py-3 border border-teal-500 text-teal-500 rounded-full backdrop-blur-md bg-black/20"><Trophy /> WHAT'S HAPPENING</p>
            <h3 className="text-5xl text-teal-500 flex gap-5">Events <span className="text-orange-500">Lineup</span></h3>
            <p className="">Choose your arena. Multiple competitions across gaming, tech, arts, and academics.</p>
            <div className="pt-4 grid grid-cols-2 w-full gap-4">
                {EventsCategoriesData.map((category) => (
                    <div className="bg-black/20 p-7 flex flex-col gap-y-7 rounded-md bg-linear-to-r from-black/50 to-teal-500/20 backdrop-blur-lg from-80%">
                        <p className="flex items-center gap-3 font-bold"><span className="bg-teal-500 p-2 rounded-md">{category.img}</span>{category.name}</p>
                        <ul className="grid grid-cols-2 gap-3 text-xs">
                            {category.events.map((event) => (
                                <li className="border py-3 px-2 border-teal-500 rounded-md bg-teal-500/10 backdrop-blur-md">{event}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <button className="flex gap-3 items-center font-sans px-4 py-2 border rounded-full text-sm border-gray-500 bg-black/30 mt-5"><Users color="darkorange" width={16} /> Registrations Opens Soon</button>
        </div>
    )
}

export default EventsCategories;