const showcaseItems = [
  {
    title: "Designer Furniture",
    description:
      "World-class sofas, beds, and seating with refined materials, deep comfort, and durability built for high-traffic homes and rentals.",
    image: "https://furninova.com/app/uploads/2024/08/Ava-armchair-908x1240-1.jpg",
    alt: "Designer armchair with premium upholstery",
    animationClass: "delay-0",
  },
  {
    title: "Bespoke Carpentry",
    description:
      "Custom kitchens, wardrobes, and built-ins crafted with the precision and finish quality expected from top-tier European makers.",
    image: "https://www.lempa.lt/wp-content/uploads/2023/07/My-project-1-4-3.jpg",
    alt: "Architectural interior detail with bespoke millwork",
    animationClass: "delay-100",
  },
  {
    title: "World-Class Windows",
    description:
      "High-performance window systems engineered for insulation, longevity, and a cleaner architectural finish in the Spanish climate.",
    image: "https://www.st-veit1130.at/images/home-twentyone-wohnzimmer-beispielfoto-02.webp",
    alt: "Minimal modern window system detail",
    animationClass: "delay-200",
  },
];

export default function ProductCategoriesSection() {
  return (
    <section
      id="collections"
      className="bg-background px-4 py-6 scroll-mt-24 sm:px-6 sm:py-8 lg:px-8 lg:py-10"
    >
      <div className="mx-auto w-full max-w-350">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {showcaseItems.map((item) => (
            <article
              key={item.title}
              className={`animate-in fade-in slide-in-from-bottom-6 space-y-3 duration-700 ${item.animationClass}`}
            >
              <div className="showcase-media bg-muted">
                <img src={item.image} alt={item.alt} className="h-full w-full object-cover" />
              </div>
              <div className="space-y-2 pr-4">
                <h2 className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                  {item.title}
                </h2>
                <p className="max-w-[30ch] text-sm leading-6 text-muted-foreground sm:text-[0.95rem]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
