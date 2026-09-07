import { notFound } from "next/navigation";
import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function JobsPage() {
	let story;

	try {
		const storyblokApi = getStoryblokApi();
		const { data } = await storyblokApi.get("cdn/stories/jobs", {
			version: "draft",
		});
		story = data.story;
	} catch {
		notFound();
	}

	return <StoryblokStory story={story} />;
}
