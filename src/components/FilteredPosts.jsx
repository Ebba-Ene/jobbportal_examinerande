import { getStoryblokApi } from "@/lib/storyblok";
import { storyblokEditable } from "@storyblok/react/rsc";

export default async function FilteredPosts({blok, department = ""}) {
  const storyblokApi = getStoryblokApi()
  
  const {data: datasourceData} = await storyblokApi.get(
    "cdn/datasource_entries",
    {
      datasource: "job-departments",
      version: "draft",
      per_page: 100
    }
  )

  const departments = datasourceData.datasource_entries ?? []

  return(
    <form 
      action="/jobs"
      method="get" 
      {...storyblokEditable(blok)}
      className="max-w-none mx-0 flex flex-row items-end gap-3 px-6 py-4"
    >
      <div className="flex flex-col gap-1">
        <label 
          htmlFor="department"
          className="text-sm font-medium text-gray-700"
        >
          {blok.heading}
        </label>

        <select 
          name="department" 
          id="department"
          defaultValue={department}
          className="rounded-md border border-gray-300 bg-white px-3 py-2"
        >
          <option value="">{blok.empty_text}</option>
          {departments.map((department) => (
            <option key={department.value} value={department.value}>
              {department.name}
            </option>
          ))}

        </select>
      </div>

      <button
        type="submit"
        className="rounded-md bg-gray-900 px-4 py-2 text-white"
      >
        Filtrera
      </button>
      
    </form>
  )
}