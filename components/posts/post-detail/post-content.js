import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import classes from './post-content.module.css';

//creating image path

function PostContent(props) {
	const { post } = props;
	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	//creating image element to render in JSX
	const customRenderers = {
		img(image) {
			return (
				<Image
					src={`/images/posts/${post.slug}/${image.src}`}
					alt={image.alt}
					width={600}
					height={400}
				/>
			);
		},
	};

	return (
		<article className={classes.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
		</article>
	);
}

export default PostContent;
