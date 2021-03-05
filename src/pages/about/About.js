import React from 'react';
import './About.css';
import profile from '../../assets/images/profile-cropped2.jpg';

function About(props) {
	return (
		<div className="aboutContainer">
			<h1 className="aboutTitle">About</h1>
			<img className="image" src={profile} height="320px" width="220px" alt="" />

			<h4 className="content">
				I’ve recently graduated from SAIT’s Object Oriented Software Development Program in Calgary AB and I’ve
				been working freelance for my practicum employer for the past five months. I’m excited to further my
				career in this growing industry, I also bring 7 years of life experience in the oil and gas industry and
				took French Immersion up to Grade 12. I’m comfortable in the remote environment and could be useful if
				you need someone to debug, unit test, validate, set up some API’s or use
				Angular/Ionic/JSP/Bootstrap/AJAX to build/maintain a webpage. I’m a fast learner and have started
				learning React as well. On the backend, I have experience with ASP.NET Core EF, MongoDB, MySQL, RESTful
				Web Services, AWS and many others. Please see my resume for a more detailed list. To schedule an
				interview give me a call at (403) 671-6904 or send me an email at stephen.sander1@gmail.com.
			</h4>
		</div>
	);
}

export default About;
