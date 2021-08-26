import Facebook from '../images/facebook1.svg'
import Github from '../images/github1.png'
import Twitter from '../images/twitter1.svg'
import Phone from '../images/contacts1.svg'
import EmailIcon from '../images/email.svg'

function ContactComponents(){
    function OnSubmitHandler(){
        window.confirm("Sorry! Address changed: Use the Email given below in the page")
    }
    return(
        <div className="m-5">
            <h4 className="mt-4 fw-bold text-muted">My Contacts</h4>
            <div className="login-box">
                <form>
                    <div className="col-md-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" placeholder="Email Address" required/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input type="text" placeholder="Subject" className="form-control" required />
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="message">Message</label><br/>
                        <textarea className="form-control" rows="5" cols="50" required></textarea>
                    </div>
                    <h4 type="button" onClick={OnSubmitHandler} className="btn">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </h4>
                </form>
            </div>
            <div className="text-center mt-5">
                <div className="d-flex justify-content-center">
                    <a href="//github.com/paul-phauz"><img src={Github} alt="not found"  height="35px"/></a>
                    <a href="//https://twitter.com/paulkabui01"><img src={Twitter} alt="not found" height="35px" className="px-5"/></a>
                    <a href="//facebook.com"><img src={Facebook} alt="not found" height="35px"/></a>
                </div>
                <div className="py-4">
                    <span><img src={EmailIcon} alt="not found" height="35px"/>paulm9931@gmail.com</span><br/>
                </div>
                <div>
                    <span><img src={Phone} alt="not found" height="35px"/>0790879541</span><br/>
                    <span><img src={Phone} alt="not found" height="35px"/>0731535249</span>
                </div>
            </div>
        </div>
    )
}

export default ContactComponents