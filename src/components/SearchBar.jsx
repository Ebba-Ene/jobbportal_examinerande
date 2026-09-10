import { storyblokEditable } from "@storyblok/react";

export default function SearchBar({blok, query = ""}) {
  return(
    <form 
      action="/jobs" 
      method="get" {...storyblokEditable(blok)}
      // className="max-w-5xl mx-auto flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center"
      className="max-w-none mx-0 flex flex-row items-end gap-3 px-6 py-4"
    >

      <div className="flex flex-col gap-1">
        {blok.label && (
          <label
            htmlFor="search"
            className="text-sm font-medium text-gray-700"
          >
            {blok.label}
          </label>
        )}

        <input
          type="search"
          id="search"
          name="q"
          placeholder={blok.placeholder}
          defaultValue={query}
          className="rounded-md border border-gray-300 px-3 py-2"
        />
      </div>

      <button type="submit" className="rounded-md bg-gray-900 px-4 py-2 text-white">
        Sök
      </button>

    </form>
  )
}