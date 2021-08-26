import ContactComponent from '../components/contactComp'
import  HorizontalNav from "../components/HorizNav"

function MyContacts(){
    return(
        <div className='container-md'>
            <HorizontalNav/>
            <ContactComponent/>
        </div>
    )
}

export default MyContacts