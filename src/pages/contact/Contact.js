import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from 'react-bootstrap/Button';
import './Contact.css';
import { init } from 'emailjs-com';
import Form from 'react-bootstrap/Form';


function Contact() {
	init('user_AcjqpwbLJL2GOQ6YpqZ9g');

	const [ messageData, setMessageData ] = useState({
		name: '',
		email: '',
		message: '',
		subject: '',
		disabled: false,
		emailSent: null
	});

	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('service_pvy8rmp', 'template_izipfw9', e.target, 'user_AcjqpwbLJL2GOQ6YpqZ9g').then(
			(result) => {
				console.log(result.text);
				alert('Message Sent!');
			},
			(error) => {
				console.log(error.text);
			}
		);

		setMessageData({
			name: '',
			email: '',
			subject: '',
			message: ''
		});
	}

	return (
		<>
		
			<div className="page_bg">
			<div className="contact-container">
				<section className="contact-subscription">
					<Form onSubmit={sendEmail}>
						<Form.Control value={messageData.name} type="text" name="name" placeholder="Your Name" className="contact-input" onChange={(e) => setMessageData({ ...messageData, name: e.target.value })} />
						<Form.Control value={messageData.email} type="email" name="email" placeholder="Your Email" className="contact-input" onChange={(e) => setMessageData({ ...messageData, email: e.target.value })} />
						<Form.Control value={messageData.subject} type="text" name="subject" placeholder="Subject" className="contact-input" onChange={(e) => setMessageData({ ...messageData, subject: e.target.value })} />

						<textarea
						value={messageData.message}
							cols="32"
							rows="5"
							type="text"
							name="message"
							placeholder="Your Message"
							className="contact-input"
							onChange={(e) => setMessageData({ ...messageData, message: e.target.value })}
						/>

						<Button className="button-primary"type="submit">Send Email</Button>
						{messageData.emailSent === true && <p>Email Sent</p>}
						{messageData.emailSent === false && <p>Email Not Sent</p>}

					</Form>
				</section>
			
			</div>
		</div>
			</>
		
	);
}

export default Contact;
