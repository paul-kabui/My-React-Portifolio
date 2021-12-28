import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from './pages/navbar/sideBar';

import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Education from './pages/education/education';
import AboutMe from './pages/about/about';
import Skills from './pages/skills/skills';
import Projects from './pages/project/projects';

function App() {
  	return (
    	<div>
			<SideNav/>
			<Switch>
				<Route path="/" exact>
					<Home/>
				</Route>
				<Route path="/contacts">
					<Contact/>
				</Route>
				<Route path="/skills">
					<Skills/>
				</Route>
				<Route path="/education">
					<Education/>
				</Route>
				<Route path="/projects">
					<Projects/>
				</Route>
				<Route path="/about">
					<AboutMe/>
				</Route>
			</Switch>
		</div>	
  	);
}

export default App;
