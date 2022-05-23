import { useState, useEffect } from 'react';
import classes from './contact-form.module.css';
import sendContactData from '../../helpers/contact-util';
import Notification from '../ui/notification';

function ContactForm() {
	const [enteredName, setEnteredName] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredMessage, setEnteredMessage] = useState('');
	const [requestStatus, setRequestStatus] = useState();
	const [requestError, setRequestError] = useState();

	//re-rendering component every time a request is made, after 3 seconds
	useEffect(() => {
		if (requestStatus === 'error' || requestStatus === 'success') {
			const timer = setTimeout(() => {
				setRequestStatus(null);
				setRequestError(null);
			}, 3000);
		}
		//clearing out timer
		return () => clearTimeout(timer);
	}, [requestStatus]);

	//sending message
	async function sendMessageHandler(event) {
		event.preventDefault();

		//adding client-side validation here if wanted

		//setting req status as pending
		setRequestStatus('pending');

		//sending contact form data
		try {
			await sendContactData({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage,
			});
			//setting req status as success
			setRequestStatus('success');
			//clearing up form
			setEnteredEmail('');
			setEnteredMessage('');
			setEnteredName('');
		} catch (error) {
			//setting req status as error
			setRequestError(error.message);
			setRequestStatus('error');
		}
	}

	//notification -> setting our notification objects
	let notification;

	if (requestStatus === 'pending') {
		notification = {
			status: 'pending',
			title: 'Sending message...',
			message: 'Your message is on its way',
		};
	}
	if (requestStatus === 'success') {
		notification = {
			status: 'success',
			title: 'Success!',
			message: 'Message sent successfully',
		};
	}
	if (requestStatus === 'error') {
		notification = {
			status: 'error',
			title: 'Error!',
			message: requestError,
		};
	}

	return (
		<section className={classes.contact}>
			<h1>Contact me</h1>
			<form className={classes.form} onSubmit={sendMessageHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							id="email"
							value={enteredEmail}
							onChange={(event) => setEnteredEmail(event.target.value)}
							required
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="name">Your Name</label>
						<input
							type="text"
							id="name"
							value={enteredName}
							onChange={(event) => setEnteredName(event.target.value)}
							required
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor="message">Your Message</label>
					<textarea
						id="message"
						rows="5"
						value={enteredMessage}
						onChange={(event) => setEnteredMessage(event.target.value)}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
		</section>
	);
}

export default ContactForm;
