import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';
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
					<NavBar />
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
