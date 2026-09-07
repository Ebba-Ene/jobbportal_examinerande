import { storyblokEditable } from "@storyblok/react";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default function Header( {blok} ) {
  return(
    <header {...storyblokEditable(blok)} className="bg-white border-b">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-semibold">Jobbportalen</h1>

        <nav className="flex gap-6 text-gray-600">
          <ul className="flex gap-6 list-none text-gray-600">
            {blok.navigation?.map((navBlok) => (
              <StoryblokServerComponent blok={navBlok} key={navBlok._uid} />
            ))}
          </ul>
        </nav>
      </div>

    </header>
  )
}