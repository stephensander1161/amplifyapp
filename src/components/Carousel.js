import React, { Component } from 'react';
import observer from '../assets/images/observer-cropped.jpg';
import db from '../assets/images/db.jpg';
import ninetofive1 from '../assets/images/ninetofive1.png';
import tfp2 from '../assets/images/tfp-cropped2.jpg';
import port from '../assets/images/port.png';
import ola from '../assets/images/ola.jpg';
import tiktok from '../assets/images/tiktok.png';
import tinder from '../assets/images/tinder.png';
import list from '../assets/images/list.png';
import './Carousel.css'

import jeo from '../assets/images/jeopardy.png';
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
					subTitle: 'React, EmailJS, Firebase, ',
					imgSrc: observer,
					link: 'https://observerfilm.ca',
					selected: false
				},
				{
					id: 1,
					title: 'Pro DB Audio',
					subTitle: 'React, Node.js, MongoDB, AWS S3, SendGrid ',
					imgSrc: db,
					link: 'https://db-filesharing.web.app/',
					selected: false
				},

					{
					id: 2,
					title: "St Bernard's/OLA ",
					subTitle: 'Wordpress',
					imgSrc: ola,
					link: 'https://www.stbernardsparish.ca/',
					selected: false
				},
				
				{
					id: 3,
					title: '9ineTo5ive',
					subTitle: 'Angular, Ionic, Node.js MongoDB',
					imgSrc: ninetofive1,
					link: 'https://ninetofive-8e8cb.web.app/welcome',
					selected: false
				},
				
				{
					id: 4,
					title: 'Jeopardy!',
					subTitle: 'React, Material-UI, Node.js & MongoDB',
					imgSrc: jeo,
					link: 'https://jeopardy-c8122.web.app/',
					selected: false
				},
				{
					id: 5,
					title: 'TFP Weddings',
					subTitle: 'Wordpress',
					imgSrc: tfp2,
					link: 'http://www.tfpweddings.ca/',
					selected: false
				},
				{
					id: 6,
					title: 'TikTok Feature',
					subTitle: 'React, Node.js, MongoDB',
					imgSrc: tiktok,
					link: 'https://tiktok-d3ae0.web.app/',
					selected: false
				},
				{
					id: 7,
					title: "Swipe Feature ",
					subTitle: 'React, Node.js, MongoDB',
					imgSrc: tinder,
					link: 'https://tinder-c69fd.web.app/',
					selected: false
				},
				{
					id: 8,
					title: "Shopping List",
					subTitle: 'Vue, AWS Cognito, graphQL, AWS Amplify',
					imgSrc: list,
					link: 'https://main.d2zkvhs8jxc39f.amplifyapp.com/',
					selected: false
				},
				{
					id: 9,
					title: "Portfolio Page ",
					subTitle: 'React, Bootstrap, AWS Amplify',
					imgSrc: port,
					link: 'https://stephensanderportfolio.ca',
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

		window.open(card.link, "_blank")
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
