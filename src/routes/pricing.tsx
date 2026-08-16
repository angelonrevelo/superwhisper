import { createFileRoute } from "@tanstack/react-router";
import { DownloadProvider } from "@/components/site/DownloadContext";
import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [{ title: "Pricing — Superwhisper" }],
  }),
});

function PricingPage() {
  return (
    <DownloadProvider>
      <LandingPage pinPricing />
    </DownloadProvider>
  );
}
