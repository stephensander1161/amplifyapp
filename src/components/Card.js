import React from 'react';
import Cardinfo from '../components/Cardinfo';

function Card(props) {
	return (
		<div>
			<img className="" src={props.item.imgSrc} alt={props.item.imgSrc} />
			{props.item.selected && (
				<Cardinfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} />
			)}
		</div>
	);
}

export default Card;
