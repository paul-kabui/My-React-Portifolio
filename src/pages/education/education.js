import MediaHandles from "../contact/media"

function Education(){
    return(
        <div className='container-md' style={{"marginTop":'5rem'}}>
            <MediaHandles/>
            <h4 className="mt-4 fw-bold" style={{'color':'#f97f32'}}>Education</h4>
            <div className="row py-4 shadow my-4 bg-light rounded-1">
                <h4 className='fw-bold'>2017 To 2021</h4>
                <p>Pursed Bachelor`s degree in Computer Technology and Electronic System </p>
                <p>At Mount Kenya University</p>
            </div>
             <div className="row py-4 shadow my-4 bg-light rounded-1">
                <h4 className='fw-bold'>2012 - 2016</h4>
                <p>Attended Kanjuku Secondary Student</p>
            </div>
            <div className="row py-4 shadow my-4 bg-light rounded-1">
                <h4 className='fw-bold'>2003 - 2012</h4>
                <p>Attendend Kamwangi Primary School</p>
            </div>
        </div>
    )
}

export default Education