import Photo from '../../images/projectmaintance.png'
import ReactLogo from '../../images/react.png'
import MediaHandles from '../contact/media'

function Projects(){
    return(
        <div className="align-item-center" style={{"marginTop":'5rem'}}>
            <MediaHandles/>
            <div className='m-5'>
                <h4 className="mt-4 fw-bold" style={{'color':'#f97f32'}}>My Projects</h4>
                <div className="row">
                     <div className="col-md-7 d-flex justify-content-center align-content-center">
                         <img src={Photo} alt="not found" className="img-fluid"/>
                     </div>
                     <span className="text-muted fw-bold text-center">visit my Github Account to see my  <a href="////github.com/paul-phauz">Public repos</a>
                     </span>
                </div>
                <div className="row">
                    <span className="text-center"><i>we keep on learning, Gaining expirience and never giving up</i></span><br/>
                    <span className="text-center text-muted"><i>This project is made with</i>
                        <img src={ReactLogo} alt="not found" height="25px"/>
                     </span>
                </div>
            </div>
        </div>
    )
}

export default Projects