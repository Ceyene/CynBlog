import { Fragment } from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/Hero';

const DUMMY_POSTS = [
	{
		slug: 'first-post',
		title: 'My First Post',
		image: 'first-post.png',
		excerpt: 'This is the first post, but not really. This is a dummy post.',
		date: '2022-05-11',
	},
	{
		slug: 'second-post',
		title: 'My Second Post',
		image: 'second-post.png',
		excerpt: 'This is the second post, but not really. This is a dummy post.',
		date: '2022-05-11',
	},
	{
		slug: 'third-post',
		title: 'My Third Post',
		image: 'third-post.png',
		excerpt: 'This is the third post, but not really. This is a dummy post.',
		date: '2022-05-11',
	},
	{
		slug: 'fourth-post',
		title: 'My Fourth Post',
		image: 'fourth-post.png',
		excerpt: 'This is the fourth post, but not really. This is a dummy post.',
		date: '2022-05-11',
	},
	{
		slug: 'fifth-post',
		title: 'My Fifth Post',
		image: 'fifth-post.png',
		excerpt: 'This is the fifth post, but not really. This is a dummy post.',
		date: '2022-05-11',
	},
	{
		slug: 'sixth-post',
		title: 'My Sixth Post',
		image: 'sixth-post.png',
		excerpt: 'This is the sixth post, but not really. This is a dummy post.',
		date: '2022-05-11',
	},
];

function HomePage() {
	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</Fragment>
	);
}

export default HomePage;
