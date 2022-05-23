import { Fragment } from 'react';
import Head from 'next/head';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../helpers/posts-util';

function AllPostsPage(props) {
	return (
		<Fragment>
			<Head>
				<title>All Posts - Cyn's Blog</title>
				<meta name="description" content="See all posts in Cyn's Blog" />
			</Head>
			<AllPosts posts={props.posts} />
		</Fragment>
	);
}

//pre-generating props -> all posts
export function getStaticProps() {
	const allPosts = getAllPosts();

	return {
		props: {
			posts: allPosts,
		},
		revalidate: 600,
	};
}

export default AllPostsPage;
