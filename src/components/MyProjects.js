import Photo from '../images/projectmaintance.png'
import ReactLogo from '../images/react.png'

function Myprojects(){
   return(
       <div className="align-item-center">
           <h4 className="mt-4 fw-bold text-muted">My Projects</h4>
           <div className="row">
                <h4 style={{'color': '#db3d44'}}>Working progress</h4>
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
   ) 
}

export default Myprojects