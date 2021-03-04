import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';
import Container from 'react-bootstrap/Container';

function NavBar() {
	return (
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
		</Container>
	);
}

export default NavBar;
