import truckCoast from "../assets/truck-coast.webp";
import designTable from "../assets/design-table.webp";
const columns = [
  {
    title: "Design",
    description:
      "Material palettes, joinery details, and finish samples are resolved before an order is placed.",
    image: designTable,
    alt: "Design team reviewing stone, fabric, and finish samples on a materials table",
    overlay: "from-stone-950/72 via-stone-900/20 to-transparent",
  },
  {
    title: "Logistics",
    description:
      "From factory pickup in Poland to delivery on the Costa Blanca, routing stays exact and quiet.",
    image: truckCoast,
    alt: "Truck driving along the Costa Blanca coastline",
    overlay: "from-stone-950/70 via-stone-950/12 to-transparent",
  },
];

export default function DesignLogisticsSplitSection() {
  return (
    <section id="design-logistics" className="relative grid scroll-mt-24 lg:grid-cols-2">
      {columns.map((column) => (
        <article key={column.title} className="relative min-h-[70dvh] overflow-hidden bg-stone-950">
          <img
            src={column.image}
            alt={column.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className={`absolute inset-0 bg-linear-to-t ${column.overlay}`} />

          <div className="relative flex min-h-[70dvh] items-end p-6 sm:p-8 lg:p-12">
            <div className="max-w-88">
              <h2 className="text-balance font-heading text-4xl leading-[0.92] font-medium text-white sm:text-5xl lg:text-6xl">
                {column.title}
              </h2>
              <p className="mt-4 max-w-md text-pretty text-sm leading-6 text-white/82 sm:text-base sm:leading-7">
                {column.description}
              </p>
            </div>
          </div>
        </article>
      ))}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 z-10 flex size-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:size-56"
      >
        <span className="absolute h-1 w-28 bg-white/90 lg:w-40" />
        <span className="absolute h-28 w-1 bg-white/90 lg:h-40" />
      </div>
    </section>
  );
}
