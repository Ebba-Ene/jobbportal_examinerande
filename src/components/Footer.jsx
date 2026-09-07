import { storyblokEditable } from "@storyblok/react";

export default function Footer({blok}) {

  return(
    <footer {...storyblokEditable(blok)} 
      className="bg-gray-900 text-white py-10 mt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-gray-400">{blok.copyright}</p>
          {blok.description && <p className="text-gray-400">{blok.description}</p>}
        </div>
    </footer>
  )
}