import React from 'react';
import Amplify from 'aws-amplify';
import Hero from '../../components/Hero';

import awsExports from '../../aws-exports';
import Carousel from '../../components/Carousel';
import './Home.css';

Amplify.configure(awsExports);

const Home = (props) => {

	return (
		<div>
			<Hero title={props.title} subTitle={props.subTitle} text={props.text} />
			<Carousel />

			
		</div>
	);
};

export default Home;
