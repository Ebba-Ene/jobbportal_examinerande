import { storyblokEditable } from "@storyblok/react/rsc";

export default function Hero({ blok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-white py-20 border-b"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          {blok.title}
        </h1>

        {blok.subtitle && (
          <p className="text-lg text-gray-600">
            {blok.subtitle}
          </p>
        )}
      </div>
    </section>
  );
}