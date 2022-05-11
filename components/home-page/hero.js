import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src="/images/site/logoCyn.png"
					alt="An image showing Cyn"
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I'm Cynthia</h1>
			<p>Web developer. React.js - Node.js</p>
		</section>
	);
}

export default Hero;
