import AboutMeComp from '../components/AboutMe'
import  HorizontalNav from "../components/HorizNav"

function AboutMe(){
    return(
        <div className='container-md'>
            <HorizontalNav/>
            <AboutMeComp/>
        </div>
    )
}

export default AboutMe