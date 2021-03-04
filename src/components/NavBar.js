import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<div>
			<Navbar id="navbar" className="border-bottom" bg="light" expand="lg">
				<Navbar.Brand>Stephen Sander</Navbar.Brand>

				<Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
				<Navbar.Collapse id="navbar-toggle">
					<Nav className="ml-auto">
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
	);
}

export default NavBar;
