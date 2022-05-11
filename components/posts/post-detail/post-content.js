import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POST = {
	slug: 'first-post',
	title: 'My First Post',
	image: 'first-post.png',
	excerpt: 'This is the first post, but not really. This is a dummy post.',
	date: '2022-05-11',
	content: '# This is my first post',
};

function PostContent() {
	const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

	return (
		<article className={classes.content}>
			<PostHeader title={DUMMY_POST.title} image={imagePath} />
			{DUMMY_POST.content}
		</article>
	);
}

export default PostContent;
