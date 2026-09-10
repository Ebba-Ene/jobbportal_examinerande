import { storyblokEditable } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import Link from "next/link";

export default async function JobList({ blok, query = "", department="" }) {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.getStories({
    version: "draft",
    starts_with: "jobs/",
    content_type: "job-post",
    sort_by: "content.publishedDate:desc",
    ...(query && {
         "filter_query[title][like]": `*${query}*`
        }),
    ...(department && {
          "filter_query[department][in]": department
        })
  });

  const stories = data.stories ?? [];

  return (
    <section 
      {...storyblokEditable(blok)} 
      className="max-w-5xl mx-auto px-6 py-16"
    >
      {blok.heading && (
        <h2 className="text-2xl font-bold mb-8">{blok.heading}</h2>
      )}

      {stories.length === 0 ? (
        <p>{blok.empty_text || "Inga lediga tjänster."}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stories.map((story) => (
            <Link
              href={`/${story.full_slug}`}
              key={story.uuid}
              className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition"
            >
              <article>
                <h3 className="text-xl font-semibold mb-2">
                  {story.content.title}
                </h3>

                <p className="text-sm text-gray-500 mb-1">
                  {story.content.department} – {story.content.location}
                </p>

                <p className="text-gray-600 mb-4">
                  {story.content.summary}
                </p>

                <span className="text-blue-600 font-medium">Läs mer →</span>
              </article>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
