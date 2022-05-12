import PostContent from '../../components/posts/post-detail/post-content';
import { getFeaturedPosts, getPostData } from '../../helpers/posts-util';

function PostDetailPage(props) {
	return <PostContent post={props.post} />;
}

//pre-generating props -> single post
export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;

	const postData = getPostData(slug);

	return {
		props: {
			post: postData,
		},
		revalidate: 600,
	};
}

//pre-generating dynamic paths: all available posts
export function getStaticPaths() {
	//getting only featured post paths and then with fallback blocking, rendering page after generating the rest
	const featuredPosts = getFeaturedPosts();

	const slugs = featuredPosts.map((post) => post.slug.replace(/\.md$/, ''));
	const paths = slugs.map((slug) => ({ params: { slug: slug } }));

	return {
		paths: paths,
		fallback: 'blocking',
	};
}

export default PostDetailPage;
