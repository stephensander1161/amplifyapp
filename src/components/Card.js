import React from 'react';
import Cardinfo from '../components/Cardinfo';

function Card(props) {
	return (
		<div className="d-inline-block s-card" onClick={() => props.click(props.item)}>
			<Cardinfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />
			<img className="s-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
		</div>
	);
}

export default Card;
