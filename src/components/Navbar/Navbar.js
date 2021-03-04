import React from 'react';

import { Link } from 'react-router-dom';
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
}

export default NavBar


