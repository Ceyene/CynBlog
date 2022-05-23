import Layout from '../components/layout/layout';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
