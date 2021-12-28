import MediaHandles from "../contact/media"
import './skills.css'

function Skills(){
    return(
        <div className='container-md' style={{'marginTop':"5rem"}}>
            <MediaHandles/>
            <h4 className="mt-4 fw-bold" style={{'color':'#f97f32'}}>My Skills</h4>
            <div className="container-fluid">
                <div className="row py-4 border my-2 bg-light rounded-1 shadow">
                    <h3 className="text-muted text-decoration-underline">Electronic Engineering</h3>
                    <p>
                        Electronic Engineer by profession<br/>
                        Interested in <strong>Internet Of Things(IOT)</strong>
                    </p>
                </div>
                <div className="row border bg-light p-3 shadow">
                    <h3 className="text-muted text-decoration-underline">
                        Programming languages and level of expirience
                    </h3>
                    <div className="row">
                        <div className="pie-wrapper progress-python set-size">
                            <span className="label">96<span className="smaller">%</span></span>
                            <span style={{'fontSize':'1.5rem'}}>Python</span>
                            <div className="pie">
                                <div className="left-side half-circle"></div>
                                <div className="right-side half-circle"></div>
                            </div>
                        </div>

                        <div class="pie-wrapper progress-node  set-size">
                            <span class="label">87<span class="smaller">%</span></span>
                            <span style={{'fontSize':'1.5rem'}}>Nodejs</span>
                            <div class="pie">
                                <div class="left-side half-circle"></div>
                                <div class="right-side half-circle"></div>
                            </div>
                        </div>

                        <div className="pie-wrapper progress-react set-size">
                            <span className="label">88<span className="smaller">%</span></span>
                            <span style={{'fontSize':'1.5rem'}}>ReactJs</span>
                            <div className="pie">
                                <div className="left-side half-circle"></div>
                                <div className="right-side half-circle"></div>
                            </div>
                        </div>

                        <div className="pie-wrapper progress-cpp set-size">
                            <span className="label">75<span className="smaller">%</span></span>
                            <span style={{'fontSize':'1.5rem'}}>C++</span>
                            <div className="pie">
                                <div className="left-side half-circle"></div>
                                <div className="right-side half-circle"></div>
                            </div>
                        </div>
                            
                        <div className="pie-wrapper progress-bash set-size">
                            <span className="label">79<span className="smaller">%</span></span>
                            <span style={{'fontSize':'1.5rem'}}>Bash</span>
                            <div class="pie">
                                <div className="left-side half-circle"></div>
                                <div className="right-side half-circle"></div>
                            </div>
                        </div>         
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-4'>
                            <h5 className='text-muted fw-bold text-decoration-underline'>CSS Frameworks</h5>
                            <ul>
                                <li>Material UI(favorite)</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                        <div className='col-md-4'>
                            <h5 className='text-muted text-decoration-underline fw-bold'>Databases</h5>
                            <ul>
                                <li>MySQL</li>
                                <li>Mongo DB</li>
                                <li>PostgreSql DB</li>
                                <li>SqLite DB </li>
                            </ul>
                        </div>
                        <div className='col-md-4'>
                            <h5 className='text-muted text-decoration-underline fw-bold'>API`s</h5>
                            <ul>
                                <li>GraphQl</li>
                                <li>Fast API</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row border m-2 p-3 bg-light rounded-1 shadow">
                    <h3 className="text-muted text-decoration-underline">Web Pentesting & Networking</h3>
                    <p>Very Very passionate in this field.<br/>
                        Enrolled in various Ethical Hacking Platforms like:
                    </p>
                     <ul className='ps-5'>
                        <li>HackerOne</li>
                        <li>Bugcrowd</li>
                        <li>Hack the box e.t.c</li>
                    </ul>
                    <span> Competed in many CTF</span>
                </div>
            </div>
        </div>
    )
}

export default Skills