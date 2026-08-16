import { createFileRoute } from "@tanstack/react-router";
import { DocsShell } from "@/components/docs/DocsShell";
import { getDocsPage } from "@/data/docs";

export const Route = createFileRoute("/docs/$slug")({
  component: DocsPageRoute,
  head: ({ params }) => {
    const page = getDocsPage(params.slug);
    return {
      meta: [{ title: `${page.title} - Superwhisper` }],
    };
  },
});

function DocsPageRoute() {
  const { slug } = Route.useParams();
  const page = getDocsPage(slug);
  return <DocsShell page={page} />;
}
