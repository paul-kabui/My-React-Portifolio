import {Link} from 'react-router-dom'
import { Navbar, Nav,Container } from 'react-bootstrap';
import {useState} from 'react'
import './sideBar.css'

function SideNav(){

    const [expanded, setExpanded] = useState(false)
    return(
        <div>
        <Navbar expanded={expanded} expand="md" className='Navbar' variant="dark" fixed="top">
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="text-decoration-none text-light">
                        <div className='d-flex'>
                            <div className=''>
                                <span className='h4 fw-bold' style={{'color':'#f97f32'}}>P</span>
                                <span>ortifolio</span>
                            </div>
                        </div>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : 'expanded')}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="nav-link active" onClick={() => setExpanded(false)}>
                                Home
                            </Link>
                            <Link to="/contacts" className="nav-link"  onClick={() => setExpanded(false)}>
                                Contacts
                            </Link>
                        </Nav>
                        <Nav>
                            <Link to="/education" className="nav-link"  onClick={() => setExpanded(false)}>
                                Education
                            </Link>
                            <Link to="/skills" className="nav-link"  onClick={() => setExpanded(false)}>
                                Skills
                            </Link>
                            <Link to="/projects" className="nav-link"  onClick={() => setExpanded(false)}>
                                Projects
                            </Link>
                            <Link to="/about" className="nav-link"  onClick={() => setExpanded(false)}>
                                AboutMe
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    )
}

export default SideNav