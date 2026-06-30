import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/veiculo/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/estoque/$slug", params: { slug: params.slug } });
  },
});
