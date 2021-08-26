import Card from '../components/card'
import PythonImg from '../images/pythonicon1.png'
import NodeLogo from '../images/nodeicon1.png'
import ReactLogo from '../images/react.png'
import BashLogo from '../images/bash.png'
import CppLogo from '../images/cpp.png'
import React from 'react'

function SkillContent(){
    return(
        <div>
            <h4 className="mt-4 fw-bold text-muted">My Skills</h4>
            <div className="container-fluid">
                <div className="row py-4 border my-2 bg-light rounded-1">
                    <h3 className="text-muted text-decoration-underline"><i>Electronic Engineering</i></h3>
                    <p>Studied Bachelor in Computer Technology and Electronic System at Mount Kenya University.
                        <br/>Interested in Internet of Things(IOT) and Computer Handware(Microcontroller)<br/>
                        Language used <b>C++</b>
                    </p>
                </div>
                <div className="row border bg-light rounded-1">
                    <h3 className="text-muted text-decoration-underline"><i>Computer Programming(Web and Software development)</i></h3>
                    <h5>Languages that i Know</h5>
                    <div className="row">
                            <Card image={PythonImg} exp="Expert" txt="web Backend(Django) development and software development"/>
                            <Card image={NodeLogo} exp='Intermidiate' txt="Backend Web development "/>
                            <Card image={ReactLogo} exp="Expert" txt="UI development(FrontEnd)"/>
                            <Card image={BashLogo} exp="Intermidiate" txt="Linux Scripting"/>
                            <Card image={CppLogo} exp="Intermidiate" txt="for IOT programming"/>
                        </div>
                </div>
                <div className="row border m-2 p-3 bg-light rounded-1">
                    <h3 className="text-muted text-decoration-underline"><i>Web Pentesting</i></h3>
                    <p>Very Very passionate in this field.<br/>
                        Enrolled in various Ethical Hacking Platforms like
                        <ul>
                            <li>HackerOne</li>
                            <li>Bugcrowd</li>
                            <li>Hack the box e.t.c</li>
                        </ul>
                        Competed in many CTF
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SkillContent