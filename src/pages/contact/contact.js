import './contact.css'
import Phone from '../../images/contacts1.svg'
import EmailIcon from '../../images/email.svg'
import MediaHandles from './media'
 import {useRef} from 'react'

function Contact(){

    const emailRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()

    function submitHandler(e){
        e.preventDefault()
        const emailField = emailRef.current.value
        const subjectField = subjectRef.current.value
        const messageField = messageRef.current.value
        console.log(emailField, subjectField, messageField)
    }
    return(
        <div>
            <MediaHandles/>
            <div className='m-5'>
                <div className="login-box" style={{'marginTop':'6rem'}}>
                <h4 className="mt-4 fw-bold" style={{'color':'#f97f32'}}>Contacts</h4>
                    <form onSubmit={submitHandler}>
                        <div className="col-md-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" placeholder="Email Address" required ref={emailRef}/>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" placeholder="Subject" className="form-control" required ref={subjectRef}/>
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="message">Message</label><br/>
                            <textarea className="form-control" rows="5" cols="50" required ref={messageRef}></textarea>
                        </div>
                        <button type='submit' className='btn mt-3 btn-sm custom-btn'>Submit</button>
                    </form>
                </div>
            </div>
            <div className='text-center'>
                <div className='row col-md-5 me-auto ms-auto'>
                    <div className='col-md-6'>
                        <span><img src={EmailIcon} alt="not found" height="35px"/>paulm9931@gmail.com</span>
                    </div>
                    <div className='col-md-6'>
                        <span><img src={EmailIcon} alt="not found" height="35px"/>paulphauz95@gmail.con</span>
                    </div>
                </div><br/>
                <span><img src={Phone} alt="not found" height="35px"/>0790879541</span><br/>
                <span><img src={Phone} alt="not found" height="35px"/>0731535249</span>
            </div>
        </div>
    )
}

export default Contact