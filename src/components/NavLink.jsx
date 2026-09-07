import { storyblokEditable } from "@storyblok/react/rsc";

export default function NavLink({blok}){
  const url = blok.link?.url ? blok.link?.url : blok.link?.cached_url

  return(
    <li {...storyblokEditable(blok)} className="list-none">
      <a href={url} className="hover:text-black transition-colors">
        {blok.label}
      </a>
    </li>
  )
}