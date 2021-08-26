import Myprojects from '../components/MyProjects'
import  HorizontalNav from "../components/HorizNav"

function MyProjects(){
    return(
        <div className='container-md'>
            <HorizontalNav/>
            <Myprojects/>
        </div>
    )
}

export default MyProjects