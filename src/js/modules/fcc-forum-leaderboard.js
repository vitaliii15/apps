const forumLatest = 'https://cdn.freecodecamp.org/curriculum/forum-latest.json';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const avatarUrl = 'https://seal.discourse-cdn.com/freecodecamp';
const postsContainer = document.getElementById('posts-container');
const fetchData = async () => {
	try {
		const res = await fetch(forumLatest);
		const data = await res.json();
		showLatestPosts(data);
		// console.log(data)
	} catch (err) {
		console.log(err);
	}
};
fetchData();

const showLatestPosts = (data) => {
	const { topic_list, users } = data;
	const { topics } = topic_list;
};