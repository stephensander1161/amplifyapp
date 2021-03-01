import React, { Component } from 'react';
import devgrub from '../assets/images/devgrub.png';
import youtube from '../assets/images/youtube.png';
import evverest from '../assets/images/evverest.png';
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
					title: 'Dev Grub',
					subTitle: 'The cookbook for developers',
					imgSrc: devgrub,
					link: 'https://devgrub.com',
					selected: false
				},
				{
					id: 1,
					title: 'Garrett Love',
					subTitle: 'YouTube channel',
					imgSrc: youtube,
					link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
					selected: false
				},
				{
					id: 2,
					title: 'Evverest',
					subTitle: 'A social network for developers',
					imgSrc: evverest,
					link: 'https://github.com/garrettlove8/evverest',
					selected: false
				}
			]
		};
	}
	render() {
		return (
			<div>
				<p>carousel works</p>
			</div>
		);
	}
}

export default Carousel;
