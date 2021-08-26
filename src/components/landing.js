import Myphoto from '../images/paul.jpg'
import './landing.css'
import {Link} from 'react-router-dom'

function LandingPage(){
    return(
        <div className="landing-body h-100" >
            <main className="text-center mt-2"> 
                <img src={Myphoto} className="landing-img" alt="not found"/>
                <h3 className="name">Paul Kabui</h3>
                <h4>Welcome to my Portfolio</h4>
                <h5>I am an Engineering student</h5>
                <h5>Also a Developer and Web penetration tester</h5>
            </main>
            <div className="text-center">
                <div className="login-box">
                    <Link to="/Contact">
                        <h4 type="button" className="px-3 btn">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          Contact
                        </h4>
                    </Link>
                    <Link to="/Contact">
                        <h4 type="button" className="px-3 btn">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          Email Me
                        </h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage