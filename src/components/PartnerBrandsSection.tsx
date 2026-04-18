import aluplast from "../assets/aluplast.png";
import grohe from "../assets/grohe.png";
import ledsC4 from "../assets/leds-c4.png";
import mtiFurninova from "../assets/mti-furninova.png";
import rehau from "../assets/rehau.png";
import sanSwiss from "../assets/san-swiss.png";

const logos = [aluplast, grohe, ledsC4, mtiFurninova, rehau, sanSwiss];

function MarqueeRow({ items }: { items: string[] }) {
  const repeatedItems = [...items, ...items, ...items, ...items]; // Repeat more times for smooth loop

  return (
    <div className="logo-marquee-shell">
      <div className="logo-marquee-track">
        {repeatedItems.map((item, index) => (
          <div key={`${item}-${index}`} className="logo-marquee-item">
            <img src={item} alt="" className="logo-marquee-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PartnerBrandsSection() {
  return (
    <section
      id="brands"
      className="bg-background px-4 py-8 scroll-mt-24 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mx-auto max-w-[40rem] text-center">
          <h2 className="text-muted-foreground text-balance text-[0.7rem] font-medium uppercase">
            We work with Europe's top brands
          </h2>
        </div>

        <div className="mt-10 sm:mt-12">
          <MarqueeRow items={logos} />
        </div>
      </div>
    </section>
  );
}
