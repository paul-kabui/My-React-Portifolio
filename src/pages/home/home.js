import './home.css'
import paul from '../../images/paul.jpg'
import deco from '../../images/blob.svg'
import deco1 from '../../images/blob1.svg'
import MediaHandles from '../contact/media'
import {Link} from 'react-router-dom'

function Home(){
    return (
        <div>
            <MediaHandles/>
            <div className='mt-5  ms-auto me-auto col-md-6 p-4'>
                <div className='row border border-radius  shadow p-2'>
                    <div className='col-md-6'>
                        <img className="img-size img-radius shadow" src={paul} alt="paul"/>
                    </div>
                    <div className='col-md-6 background-img mt-3'>
                        <p style={{'color':'#f98231'}} className='fw-bold'><span>Name</span>: <span>Paul Kabui</span></p>
                        <p>Am a Developer specializing in <br/><span className='text-decoration-underline'>MERN</span>
                        <span> and   </span>       
                        <span className='text-decoration-underline'>  Django Stack </span></p>
                        <div className='btn-span'>
                            <Link to='/skills'>
                                <p>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Skills
                                </p>
                            </Link> 
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <img src={deco1} alt='' height='250px'/>
                </div>
                <div className='col-md-3'></div>
                <div className='col-md-5'>
                    <img src={deco} alt='' height='200px'/>
                </div>
            </div>
        </div>
    )
}

export default Home
