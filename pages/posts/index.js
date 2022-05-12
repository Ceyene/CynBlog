import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../helpers/posts-util';

function AllPostsPage(props) {
	return <AllPosts posts={props.posts} />;
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
