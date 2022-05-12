import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

//building posts path
const postDirectory = path.join(process.cwd(), 'posts');

//getting full post content
export function getPostData(postIdentifier) {
	const postSlug = postIdentifier.replace(/\.md$/, ''); //creating post slug by replacing its file extension with an empty string
	const filePath = path.join(postDirectory, `${postSlug}.md`);
	const fileContent = fs.readFileSync(filePath, 'utf-8');
	//extracting metadata and content separately
	const { data, content } = matter(fileContent);

	//creating post data and adding the slug in it
	const postData = {
		slug: postSlug,
		...data,
		content,
	};

	return postData;
}

//fetching all posts
export function getAllPosts() {
	//reading directory
	const postFiles = fs.readdirSync(postDirectory);

	const allPosts = postFiles.map((postFile) => {
		return getPostData(postFile);
	});

	//sorting by most recent posts
	const sortedPosts = allPosts.sort((postA, postB) =>
		postA.date > postB.date ? -1 : 1
	);

	return sortedPosts;
}

//fetching only featured posts
export function getFeaturedPosts() {
	const allPosts = getAllPosts();

	const featuredPosts = allPosts.filter((post) => post.isFeatured);

	return featuredPosts;
}

//fetching single posts
