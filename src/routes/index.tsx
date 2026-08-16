import { createFileRoute } from "@tanstack/react-router";
import { DownloadProvider } from "@/components/site/DownloadContext";
import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Superwhisper — AI Voice to Text for macOS, Windows & iOS" },
    ],
  }),
});

function Home() {
  return (
    <DownloadProvider>
      <LandingPage />
    </DownloadProvider>
  );
}
