import bgimage from '../assets/image.png';

const Background = () => {

    return(
        <div className="w-full h-full bg-cover bg-center fixed -z-50 top-0 bg-[url('./assets/image.png')]">
            {/* <img src={bgimage} alt="wallpapwer" /> */}
        </div>
    )
}

export default Background;