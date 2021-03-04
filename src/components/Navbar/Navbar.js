<<<<<<< HEAD
import React from 'react';
=======
import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
>>>>>>> parent of 37d55ac6 (added border to cards and making navbar more animated)

import { Button } from '../Button';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';


function NavBar() {


	

	return (
		<div>

				<Navbar id="nav" className="border-bottom" bg="light" expand="lg">
					<Navbar.Brand>Stephen Sander</Navbar.Brand>
						<Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
						<Navbar.Collapse id="navbar-toggle">
							<Nav >
								<Link className="nav-link text-success" to="/">
									Home
								</Link>
								<Link className="nav-link text-success" to="/about">
									About
								</Link>
								<Link className="nav-link text-success" to="/contact">
									Contact
								</Link>
							</Nav>
							<Nav className="ml-auto">
								<a target="_blank" className="nav-link " href="https://observerfilm.ca">
									Observer 
								</a>
								<a target="_blank" className="nav-link " href="https://db-filesharing.web.app/">
									Pro DB Audio 
								</a>
								<a target="_blank" className="nav-link " href="http://tfpweddings.ca">
									TFP Weddings 
								</a>
								<a target="_blank" className="nav-link " href="https://www.stbernardsparish.ca/">
									OLA/St Bernard's Parish
								</a>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
			
		</div>
	)
=======

import './Navbar.css';

class NavBar extends Component {
	state = { clicked: false };

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};

	render() {
		return (
			<nav className="NavbarItems">
				<div className="navbar-container">
					<h1 className="navbar-logo">
						<i className="fab fa-react" /> &nbsp;Stephen Sander
					</h1>
					<h4 className="navbar-subtitle">Made front and back by me with React and AWS</h4>
					<div className="menu-icon" onClick={this.handleClick}>
						<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
						{MenuItems.map((item, index) => {
							return (
								<li key={index}>
									<Link to={item.url}>
										<a className={item.cName} href={item.url}>
											{item.title}
										</a>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<Button>Blog</Button>
			</nav>
		);
	}
>>>>>>> parent of 37d55ac6 (added border to cards and making navbar more animated)
}

export default NavBar;
