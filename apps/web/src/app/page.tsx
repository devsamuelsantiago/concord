import Sidebar from "@/components/sidebar";
import Server from "@/types/server";

const servers: Server[] = [
  {
    id: 1,
    name: "Pedrao",
    hasNotification: true,
  },
  {
    id: 2,
    name: "Batata",
    hasNotification: false,
  },
  {
    id: 3,
    name: "Carne",
    hasNotification: true,
  },
];

export default function Home() {
  return (
    <main className="h-screen bg-hue3">
      <Sidebar servers={servers} />
    </main>
  );
}
