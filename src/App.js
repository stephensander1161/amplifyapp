import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';

import Footer from './components/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Stephen Sander Portfolio',
			headerLinks: [
				{ title: 'Home', path: '/' },
				{ title: 'About', path: '/about' },
				{ title: 'Contact', path: '/contact' }
			],
			home: {
				title: 'Full Stack',
				subTitle: 'Projects by Stephen Sander',
				text: 'Check out my projects below'
			},
			about: {
				title: 'About Me'
			},
			contact: {
				title: "Let's Talk"
			}
		};
	}

	render() {
		return (
			<Router>
				<Container className="p-0" fluid={true}>
<<<<<<< HEAD

			
    
					
					<NavBar />
				
=======
					<Navbar id="navbar" className="border-bottom" bg="light" expand="lg">
						<Navbar.Brand>Created by Stephen Sander</Navbar.Brand>

						<Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
						<Navbar.Collapse id="navbar-toggle">
							<Nav className="ml-auto">
								<Link className="nav-link" to="/">
									Home
								</Link>
								<Link className="nav-link" to="/about">
									About
								</Link>
								<Link className="nav-link" to="/contact">
									Contact
								</Link>
							</Nav>
							<Nav className="ml-auto">
								<a className="nav-link" href="https://observerfilm.ca">
									Observer 
								</a>
								<a className="nav-link" href="https://db-filesharing.web.app/">
									Pro DB Audio 
								</a>
								<a className="nav-link" href="http://tfpweddings.ca">
									TFP Weddings 
								</a>
								<a className="nav-link" href="https://www.stbernardsparish.ca/">
									OLA/St Bernard's Parish
								</a>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
>>>>>>> parent of 37d55ac6 (added border to cards and making navbar more animated)

					<Route
						path="/"
						exact
						render={() => (
							<Home
								title={this.state.home.title}
								subTitle={this.state.home.subTitle}
								text={this.state.home.text}
							/>
						)}
					/>
					<Route path="/about" render={() => <About title={this.state.about.title} />} />
					<Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />

					<Footer />
				</Container>
			</Router>
		);
	}
}

export default App;
