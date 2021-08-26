import {Route} from 'react-router-dom'
import Home from './pages/Home'
import MyContacts from './pages/Contact'
import MyEdu from './pages/Edu'
import MySkills from './pages/Skills'
import MyProjects from './pages/Projects'
import AboutMe from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';

import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from 'react';

import HomeIcon from './images/home.svg'
import ContactIcon from './images/contact.svg'
import EduIcon from './images/education.svg'
import SkillsIcon from './images/settings.png'
import ProjectIcon from './images/projecticon.svg'
import PersonIcon from './images/person.svg'


function App() {
  	return (
    	<div>
			<Route>
   				<Route render={({ location, history }) => (
        			<React.Fragment>
            			<SideNav
                			onSelect={(selected) => {
                    		const to = '/' + selected;
                    		if (location.pathname !== to) {
                    	    	history.push(to);
                    		}
                		}}
            			>
						
						<SideNav.Toggle />
							
                			<SideNav.Nav defaultSelected="/">
                    			<NavItem eventKey="Home">
                    	   			<NavIcon>
										<img src={HomeIcon} alt="H" height="25px"/>
                    	    		</NavIcon>
                    	    		<NavText>
                    	        		Home
                    	    		</NavText>
                    			</NavItem>
                    			<NavItem eventKey="Contact">
                    	    		<NavIcon>
										<img src={ContactIcon} alt="C" height="25px"/>
                    	    		</NavIcon>
                    	    		<NavText>
                    	        		Contact
                    	    		</NavText>
                    			</NavItem>
								<NavItem eventKey="Education">
                    	    		<NavIcon>
										<img src={EduIcon} alt="E" height="29px"/>
                    	    		</NavIcon>
                    	    		<NavText>
										Education
                    	    		</NavText>
                    			</NavItem>
								<NavItem eventKey="Skills">
                    	    		<NavIcon>
										<img src={SkillsIcon} alt="P" height="25px"/>
                    	    		</NavIcon>
                    	    		<NavText>
										Skills
                    	    		</NavText>
                    			</NavItem>
								<NavItem eventKey="Projects">
                    	    		<NavIcon>
										<img src={ProjectIcon} alt="P" height="25px"/>
                    	    		</NavIcon>
                    	    		<NavText>
										Projects
                    	    		</NavText>
                    			</NavItem>
								<NavItem eventKey="AboutMe">
                    	    		<NavIcon>
										<img src={PersonIcon} alt="A" height="25px"/>
                    	    		</NavIcon>
                    	    		<NavText>
										AboutMe
                    	    		</NavText>
                    			</NavItem>
                			</SideNav.Nav>
            			</SideNav>
            			<main>
							<Route path="/"  exact component={props => <Home />} />
                			<Route path="/Home" component={props => <Home />} />
                			<Route path="/Contact" component={props => <MyContacts />} />
							<Route path="/Education" exact component={props => <MyEdu />} />
							<Route path="/Skills" component={props => < MySkills />} />
							<Route path="/Projects" component={props => <MyProjects />} />
							<Route path="/AboutMe" component={props => <AboutMe />} />
            			</main>
        			</React.Fragment>
   				)}
    		/>
			</Route>
		</div>	
  	);
}

export default App;
