import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const email = "hello@tulme.com";
const year = new Date().getFullYear();
const subject = encodeURIComponent("Project inquiry for Tulme");
const body = encodeURIComponent(
  [
    "Hello Tulme,",
    "",
    "I would like help with:",
    "- project type:",
    "- location:",
    "- timeline:",
    "- scope:",
    "",
    "Best,",
    "",
  ].join("\n"),
);

const mailtoHref = `mailto:${email}?subject=${subject}&body=${body}`;

export default function ContactCtaSection() {
  return (
    <section
      id="contact"
      className="overflow-hidden bg-stone-950 px-4 py-16 text-stone-50 scroll-mt-24 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-350">
        <div className="grid gap-10 border-t border-white/14 pt-10 sm:pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-14">
          <div className="max-w-152">
            <p className="text-[0.7rem] font-medium uppercase text-stone-400">Ready to begin?</p>
            <h2 className="mt-3 max-w-[11ch] text-balance font-heading text-4xl leading-[0.94] font-medium text-white sm:text-5xl lg:text-6xl">
              Let's create your Mediterranean dream
            </h2>
            <p className="mt-4 max-w-136 text-pretty text-sm leading-6 text-stone-300 sm:text-base sm:leading-7">
              Open a prefilled email and send us your location, scope, and timeline.
            </p>
            <div className="mt-8">
              <Button
                variant="outline"
                size="lg"
                className="h-12 border-white/20 bg-white text-stone-950 hover:bg-stone-100 hover:text-stone-950"
                render={<a href={mailtoHref} />}
              >
                Send email
                <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[0.7rem] font-medium uppercase text-stone-500">Contact</p>
              <div className="mt-4 space-y-2 text-sm leading-6 text-stone-200 sm:text-base">
                <p>
                  <a href={`mailto:${email}`} className="transition hover:text-white">
                    {email}
                  </a>
                </p>
                <p>Calpe, Spain</p>
              </div>
            </div>
            <div>
              <p className="text-[0.7rem] font-medium uppercase text-stone-500">Navigate</p>
              <div className="mt-4 space-y-2 text-sm leading-6 text-stone-200 sm:text-base">
                <p>
                  <a href="/#collections" className="transition hover:text-white">
                    Collections
                  </a>
                </p>
                <p>
                  <a href="/#brands" className="transition hover:text-white">
                    Brands
                  </a>
                </p>
                <p>
                  <a href="/#process" className="transition hover:text-white">
                    Process
                  </a>
                </p>
              </div>
              <p className="text-[0.68rem] uppercase text-stone-500">© {year} Tulme Studio</p>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none relative left-1/2 mt-10 -mb-[0.16em] w-screen -translate-x-1/2 overflow-hidden px-0 text-center  text-[22vw] leading-none font-medium whitespace-nowrap text-white/7 sm:mt-14"
        >
          Tulme Studio
        </div>
      </div>
    </section>
  );
}
