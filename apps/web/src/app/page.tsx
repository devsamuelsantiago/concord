import ProfileFooter from "@/components/profile-footer";
import ServersBar from "@/components/serversbar";
import Server from "@/types/server";
import { BadgeInfo, ChevronDown, Hash } from "lucide-react";

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
    <div className="flex h-screen bg-hue3">
      <ServersBar servers={servers} />
      <nav className="flex flex-col justify-stretch bg-hue2 w-60 h-full">
        <header className="flex items-center justify-between hover:bg-[#404249] bg-hue2 py-3 px-4 h-12 w-60 cursor-pointer text-white border-b border-[#00000050] transition-all duration-200">
          <div className="flex items-center gap-1">
            <BadgeInfo size={20} />
            <h1 className="text-md font-semibold">Pedrao</h1>
          </div>

          <ChevronDown />
        </header>

        <div className="w-full h-full pr-1 bg-hue2 text-[#b5bac1]">
          <ul className="p-2 w-full">
            <li className="flex justify-between items-center mt-1 bg-[#404249] rounded-md">
              <div className="flex gap-1 items-center">
                <Hash size={20}/>
                <span className="font-semibold">Canal 1</span>
              </div>
            </li>
          </ul>
        </div>

        <ProfileFooter />
      </nav>
      
    </div>
  );
}
