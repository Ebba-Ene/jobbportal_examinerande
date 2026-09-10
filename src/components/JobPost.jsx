import { renderRichText, storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";
import Link from "next/link";


export default function JobPost({ blok }) {
  const renderedContent = renderRichText(blok.content)

  return (
    <article className="max-w-5xl mx-auto px-6 py-16" {...storyblokEditable(blok)}>

      <p>
        <Link href="/jobs"
              // className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
        >← Tillbaka till Jobbannonser</Link>
      </p>

      <h1 className="text-xl font-semibold mb-2">{blok.title}</h1>

      <p className="text-gray-600 mb-4">{blok.summary}</p>

      <div>
        {blok.department && (
          <p className="text-sm text-gray-500 mb-1 uppercase">
            {blok.department}
          </p>
        )}

        {blok.location && (
          <p className="text-sm text-gray-500 mb-1">
            {blok.location}
          </p>
        )}
      </div>


      <div 
        className="rich-text mb-8"
        dangerouslySetInnerHTML={{__html: renderedContent}}
      />

      <p className="date">{blok.publishedAt}</p>
    </article>
  );
}