import React, { Component } from 'react';
import { ExternalItems } from './ExternalItems';
import './ExternalNavbar.css';

class ExternalNavBar extends Component {
	state = { clicked: false };

	handleClick = () => {
		this.setState({ clicked: !this.state.clicked });
	};

	render() {
		return (
			<nav className="NavbarItems">
				<div className="navbar-container">
					<div className="menu-icon" onClick={this.handleClick}>
						<i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
					</div>

					<ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
						{ExternalItems.map((item, index) => {
							return (
								<li key={index}>
									<a className={item.cName} href={item.url}>
										{item.title}
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
		);
	}
}

export default ExternalNavBar;
