
function Wrapper(props){
    return(
        <div className="col-md-4 shadow m-4 d-flex">
            <div className='row p-3'>
                <div className='col-md-4'>
                    <img src={props.image}  className="img-thumbnail" alt="not found"/>
                </div>
                <div className='col-md-8'>
                        <span className="text-decoration-underline">Area of Application</span>
                        <p>{props.txt}</p>
                        <span>Experience</span>
                        <div className="progress">
                            <div className='progress-bar bg-success' role="progressbar" aria-valuenow="75" 
                                aria-valuemin="0" aria-valuemax="100">
                                {props.value}
                            </div>
                        </div>
                </div>
            </div>
        </div> 
    )
}

export default Wrapper