import { createFileRoute, notFound } from "@tanstack/react-router";
import { findVehicleBySlug } from "@/data/vehicles";
import { VehicleDetailView, NotFoundVehicle } from "./estoque.$slug";
import { PageShell } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/veiculo/$slug")({
  loader: ({ params }) => {
    const vehicle = findVehicleBySlug(params.slug);
    if (!vehicle) throw notFound();
    return { vehicle };
  },
  head: ({ loaderData }) => {
    const v = loaderData?.vehicle;
    const title = v ? `${v.name} — Top Veículos` : "Veículo — Top Veículos";
    const description = v
      ? `${v.name} ${v.year} · ${v.km} · ${v.gear} · ${v.fuel}. ${v.price}.`
      : "Detalhes do veículo na Top Veículos.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(v ? [{ property: "og:image", content: v.img }] : []),
      ],
    };
  },
  notFoundComponent: NotFoundVehicle,
  errorComponent: ({ reset }) => (
    <PageShell>
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold">Não foi possível carregar o veículo.</h1>
        <Button className="mt-6" onClick={reset}>Tentar novamente</Button>
      </div>
    </PageShell>
  ),
  component: VehicleDetailRoute,
});

function VehicleDetailRoute() {
  const { vehicle } = Route.useLoaderData();
  return <VehicleDetailView vehicle={vehicle} />;
}
