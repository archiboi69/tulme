import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="hero-surface relative min-h-svh overflow-hidden">
      <div className="hero-media absolute inset-0" />
      <div className="hero-overlay absolute inset-0" />
      <div className="hero-glow absolute inset-0" />

      <div className="relative flex min-h-svh flex-col px-4 pb-10 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pt-36">
        <div className="mx-auto flex w-full max-w-350 flex-1 flex-col justify-between">
          <div className="flex flex-1 items-center justify-center">
            <div className="max-w-176 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
              <p className="hero-eyebrow mb-5 text-[0.68rem] font-medium tracking-[0.38em] uppercase sm:mb-6">
                Tulme Studio
              </p>
              <h1 className="mx-auto max-w-[8ch] text-5xl leading-[0.92] font-medium tracking-[-0.06em] text-hero-foreground sm:text-6xl md:text-7xl lg:text-[6.5rem]">
                Design. Source. Deliver.
              </h1>
              <p className="hero-copy mx-auto mt-5 max-w-2xl text-sm leading-6 font-normal sm:mt-6 sm:text-base sm:leading-7">
                We will design your dream home and give you direct access to Europe's finest
                manufacturers. Hard-to-find or overpriced in Spain? No problem. We source
                best-in-class doors, windows, fixtures and furniture at below-market prices. We
                deliver everything directly via our in-house logistics network.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10">
                <Button
                  variant="outline"
                  size="lg"
                  className="hero-cta h-12 px-7 text-[0.72rem] tracking-[0.24em]"
                  render={<a href="#contact" />}
                >
                  Demand perfection
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
/* We combine an architect’s eye for detail with a
robust export network, to bridge the gap between premium European manufacturing and
your property in Spain. We source, advise, and export top-tier windows, doors, and
furniture directly to the Costa Blanca. You get flawless European aesthetics,
delivered and executed seamlessly under one studio.

Our architects will design your dream home. We will source the finest European
products directly from the factory and deliver them right to your door. Tulme is
your one-stop studio for premium interiors on the Costa Blanca.


*/
