import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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
					<Navbar collapseOnSelect id="navbar" className="border-bottom" bg="light" expand="lg">
						<Navbar.Brand>Stephen Sander</Navbar.Brand>

						<Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="navbar-toggle">
							<Nav className="ml-auto">
								<Nav.Link className="nav-link text-success" href="/">
									Home
								</Nav.Link>

								<Nav.Link className="nav-link text-success" href="/about">
									About
								</Nav.Link>
								<Nav.Link className="nav-link text-success" href="/contact">
									Contact
								</Nav.Link>
							</Nav>
							<Nav className="ml-auto">
								<a className="nav-link" href="https://db-filesharing.web.app/">
									Pro DB Audio
								</a>
								<a className="nav-link" href="https://ninetofive-8e8cb.web.app/welcome">
									9ineTo5ive
								</a>
								<a className="nav-link" href="https://observerfilm.ca">
									Observer
								</a>
							</Nav>
						</Navbar.Collapse>
					</Navbar>

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
