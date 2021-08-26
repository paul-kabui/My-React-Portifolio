import EduComponent from '../components/education'
import  HorizontalNav from "../components/HorizNav"

function MyEdu(){
    return(
        <div className='container-md'>
            <HorizontalNav/>
            <EduComponent/>
        </div>
    )
}

export default MyEdu