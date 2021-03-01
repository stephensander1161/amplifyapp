import React, { Component } from 'react';
import { MenuItems } from './MenuItems';

import { Button } from '../Button';
import { Link } from 'react-router-dom';

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
}

export default NavBar;
