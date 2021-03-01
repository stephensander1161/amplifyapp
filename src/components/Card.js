import React from 'react';
import Cardinfo from '../components/Cardinfo';

function Card(props) {
	return (
		<div className="d-inline-block s-card" onClick={() => props.click(props.item)}>
			<img className="s-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
			{props.item.selected && (
				<Cardinfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />
			)}
		</div>
	);
}

export default Card;
