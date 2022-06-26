import fetch from 'cross-fetch';

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export const fetchPosts = async (): Promise<Post> => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	return res.json();
};

// in-source testing
if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest;
	const { posts } = await import('../mocks/handlers');

	it('Test fetchPosts', async () => {
		const result = await fetchPosts();
		expect(result).toEqual(posts);
	});
}