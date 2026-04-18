import { CurrencyEurIcon, PencilLineIcon, TruckIcon } from "@phosphor-icons/react";

const processSteps = [
  {
    number: "01",
    icon: PencilLineIcon,
    title: "Design and craft",
    description:
      "Architectural design guidance, bespoke carpentry, and made-to-measure detailing shaped with some of the best craftsmen in Europe.",
  },
  {
    number: "02",
    icon: CurrencyEurIcon,
    title: "Sourcing",
    description:
      "Premium products sourced directly from factories, with manufacturer negotiation that brings pricing well below catalogue rates.",
  },
  {
    number: "03",
    icon: TruckIcon,
    title: "Logistics and delivery",
    description:
      "An in-house freight team and European network of trucks and warehouses coordinate safe, on-time delivery from leading manufacturers directly to Costa Blanca homes.",
  },
];

export default function ProcessTimelineSection() {
  return (
    <section
      id="process"
      className="bg-background px-4 py-16 scroll-mt-24 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="max-w-[44rem] animate-in fade-in slide-in-from-bottom-6 duration-700">
          <p className="text-muted-foreground text-[0.7rem] font-medium uppercase">
            from vision to reality
          </p>
          <h2 className="mt-3 max-w-[12ch] text-balance font-heading text-4xl leading-[0.95] font-medium text-foreground sm:text-5xl lg:text-6xl">
            How we work
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-16">
          <div className="absolute top-0 bottom-0 left-4 w-px bg-stone-300 lg:top-4 lg:right-0 lg:bottom-auto lg:left-0 lg:w-full lg:h-px" />

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            {processSteps.map((step) => (
              <article
                key={step.title}
                className="relative pl-12 animate-in fade-in slide-in-from-bottom-6 duration-700 lg:pl-0 lg:pt-12"
              >
                <div className="absolute top-1 left-0 flex size-8 items-center justify-center rounded-full border border-stone-300 bg-background text-[0.72rem] font-medium text-stone-500 lg:top-0 lg:left-0">
                  {step.number}
                </div>

                <div className="lg:max-w-[24rem]">
                  <div className="flex items-center gap-3">
                    <step.icon size={32} weight="regular" className="shrink-0 " />

                    <h3 className="text-balance font-heading text-2xl leading-[1] font-medium text-foreground sm:text-[2rem]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mt-4 max-w-[32rem] text-pretty text-sm leading-6 sm:text-base sm:leading-7">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
