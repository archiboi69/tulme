import { createFileRoute } from "@tanstack/react-router";

import ContactCtaSection from "@/components/ContactCtaSection";
import DesignLogisticsSplitSection from "@/components/DesignLogisticsSplitSection";
import HeroSection from "@/components/HeroSection";
import PartnerBrandsSection from "@/components/PartnerBrandsSection";
import ProcessTimelineSection from "@/components/ProcessTimelineSection";
import ProductCategoriesSection from "@/components/ProductCategoriesSection";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main>
      <HeroSection />
      <ProductCategoriesSection />
      <PartnerBrandsSection />
      <DesignLogisticsSplitSection />
      <ProcessTimelineSection />
      <ContactCtaSection />
    </main>
  );
}
