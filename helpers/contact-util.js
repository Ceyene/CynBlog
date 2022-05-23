async function sendContactData(contactDetails) {
	const response = await fetch('/api/contact', {
		method: 'POST',
		body: JSON.stringify(contactDetails),
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await response.json();
	if (!response.ok) {
		console.log(data.message);
		throw new Error(data.message || 'Something went wrong');
	}
}

export default sendContactData;
