//---> /api/contact

import { MongoClient } from 'mongodb';

async function handler(req, res) {
	if (req.method === 'POST') {
		const { email, name, message } = req.body;
		let client;
		//creating mongo client
		try {
			//CONNECTING TO DB
			//creating mongo client
			client = await MongoClient.connect(
				`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.8lsrn.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
			);
		} catch (error) {
			res.status(500).json({ message: 'Connecting to the database failed!' });
			return;
		}

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

		let result;

		const db = client.db();
		//creating db and collection
		try {
			const result = await db.collection('messages').insertOne(newMessage);
			//adding mongoDB created id to the object of newMessage
			newMessage.id = result.insertedId;
			//sending json response to client
			res.status(201).json({ message: 'Sent message!' });
		} catch (error) {
			res
				.status(500)
				.json({ message: result.message || 'Inserting data failed!' });
			return;
		}
		//closing connection with DB
		client.close();
	}
}

export default handler;
