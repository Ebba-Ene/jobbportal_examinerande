import { storyblokEditable } from "@storyblok/react";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

export default function Toolbar({blok, ...rest}) {
  return(
    <div {...storyblokEditable(blok)} 
        className="flex flex-row items-center justify-center gap-4 border-b bg-gray-50">
      {blok.blocks?.map((nestedBlok) => (
        <StoryblokServerComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          {...rest}
        />
      ))}
    </div>
  )
}