import { notFound } from "next/navigation";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

export default async function JobsPage({searchParams}) {
	try {
    const params = await searchParams;
    const query = params.q ?? "";
    const department = params.department ?? "";

		const storyblokApi = getStoryblokApi()

		const {data} = await storyblokApi.get("cdn/stories/jobs", {
			version: "draft"
		})

		return <StoryblokServerComponent
			blok={data.story.content}
			query={query}
			department={department}
		/>;
	} catch {
		notFound();
	}
}
