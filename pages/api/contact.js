//---> /api/contact

function handler(req, res) {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;

		//Validating data (always from server-side, even if it's a client-side validation too)
		if (
			!email ||
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {
			res.status(422).json({ message: 'Invalid input' });
			return;
		}

		//Storing data in a DB
		const newMessage = {
			email,
			name,
			message,
		};

		console.log(newMessage);

		res
			.status(201)
			.json({ message: 'Successfully stored message', newMessage: newMessage });
	}
}

export default handler;
