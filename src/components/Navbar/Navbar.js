import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';


function NavBar() {

	const [navBar, setNavbar] = useState(false);

	const shrinkNav = () => {
		console.log(window.scrollY)
	}

	window.addEventListener('scroll', shrinkNav)
	return (
		<div>

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
			
		</div>
	)
}

export default NavBar


