import React, { Component } from 'react';
import observer from '../assets/images/observer.jpg';
import db from '../assets/images/db.jpg';
import tfp from '../assets/images/tfp.jpg';
import ola from '../assets/images/ola.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../components/Card';

class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					id: 0,
					title: 'Observer',
					subTitle: 'Website built with React and hosted by Firebase',
					imgSrc: observer,
					link: 'https://observerfilm.ca',
					selected: false
				},
				{
					id: 1,
					title: 'Pro DB Audio',
					subTitle: 'File Sharing App',
					imgSrc: db,
					link: 'https://db-filesharing.web.app/',
					selected: false
				},
				{
					id: 2,
					title: 'TFP Weddings',
					subTitle: 'Calgary Videographers',
					imgSrc: tfp,
					link: 'http://www.tfpweddings.ca/',
					selected: false
				},
				{
					id: 3,
					title: "St Bernard's/OLA ",
					subTitle: 'Parish in Bowness Region',
					imgSrc: ola,
					link: 'https://www.stbernardsparish.ca/',
					selected: false
				}
			]
		};
	}

	handleCardClick = (id, card) => {
		let items = [ ...this.state.items ];

		items[id].selected = items[id].selected ? false : true;

		items.forEach((item) => {
			if (item.id !== id) {
				item.selected = false;
			}
		});

		this.setState({
			items
		});
	};

	makeItems = (items) => {
		return items.map((item) => {
			return <Card item={item} click={(e) => this.handleCardClick(item.id, e)} key={item.id} />;
		});
	};

	render() {
		return (
			<Container fluid={true}>
				<Row className="justify-content-around">{this.makeItems(this.state.items)}</Row>
			</Container>
		);
	}
}

export default Carousel;
