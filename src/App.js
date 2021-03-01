import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import ExternalNavBar from './components/Navbar/ExternalNavbar';

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<ExternalNavBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={About} />
					<Route path="/contact" exact component={Contact} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
