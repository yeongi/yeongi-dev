import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
	const posts = await getCollection("blog");
	return rss({
		title: "Yeongi's Dev | Blog",
		description: "This is Yeongi's Dev Blog",
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/posts/${post.id}/`,
		})),
		customData: "<language>en-us</language>",
	});
}
