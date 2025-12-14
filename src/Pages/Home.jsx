import EventsCategories from "../Componenets/EventsCategories";
import Hero from "../Componenets/Hero";


const Home = () => {
    return(
        <div className="pt-25">
            {/* poster */}
            <div className="">
                <Hero />
                <EventsCategories />
            </div>
        </div>
    )
}

export default Home;