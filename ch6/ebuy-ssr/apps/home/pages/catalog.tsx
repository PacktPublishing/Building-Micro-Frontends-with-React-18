import dynamic from "next/dynamic";

const Catalog = dynamic(() => import("catalog/Module"), {
  ssr: true,
});

export default function catalog() {
  return <Catalog />;
}
