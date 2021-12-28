import Facebook from '../../images/facebook1.svg'
import Github from '../../images/github1.png'
import Twitter from '../../images/twitter1.svg'
import LinkedIn from '../../images/linkedin.png'

function MediaHandles(){
    return(
        <div className="dropstart">
                <button className="contact-btn btn" style={{'backgroundColor':'#f97f32'}} 
                type="button" id="dropstartMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Contact
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropstartMenuButton">
                    <li><a href="//github.com/paul-phauz"><img src={Github} alt="not found"  height="30px"/>Github </a></li><br/>
                    <li><a href="//twitter.com/paulkabui01"><img src={Twitter} alt="not found"  height="30px"/>Twitter</a></li><br/>
                    <li><a href="//www.Linkedin.com/in/paul-kabui"><img src={LinkedIn} alt="not found"  height="25px"/>LinkedIn</a></li><br/>
                    <li><a href="//www.facebook.com/profile.php?id=100023012163596"><img src={Facebook} alt="not found"  height="25px"/>Facebook</a></li><br/>
                </ul>
            </div>
    )
}
export default MediaHandles