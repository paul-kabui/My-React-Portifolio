import MediaHandles from "../contact/media"

function AboutMe(){
    return(
        <div className='container-md' style={{"marginTop":"5rem"}}>
            <MediaHandles/>
            <h4 className="mt-4 fw-bold" style={{'color':'#f97f32'}}>About Me</h4>
            <div className="row border bg-light m-3 p-4">
                <h4 className="text-decoration-underline display-4">Hobbies and Interest</h4>
                <ul>
                    <li>Gaming</li>
                    <li>Adventure</li>
                    <li>Biking</li>
                    <li>Listening to music</li>
                </ul>
            </div>
            <div className="row border bg-light p-4 m-3">
                <h4 className="text-decoration-underline display-4">My Personal Qualities</h4>
                <ul>
                    <li>Highly motivated and self driven individual</li>
                    <li>Team player</li>
                    <li>Ability to work under pressure</li>
                    <li>Ability to learn and adapt quickly</li>
                    <li>Ability to work under a strict timeline</li>
                </ul>
            </div>
        </div>
    )
}

export default AboutMe