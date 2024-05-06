import { Plus, Compass, ArrowDownToLine } from "lucide-react";
import ServerCircle from "./server-circle";
import { Separator } from "./ui/separator";
import Server from "@/types/server";

export default function Sidebar({servers}: {servers: Server[]}) {
    return (
        <aside className="flex flex-col items-center h-screen w-[72px] bg-hue5 p-3 space-y-2">
        <div className="flex justify-center items-center rounded-full bg-hue1 w-12 h-12 hover:cursor-pointer active:scale-110 transition-all duration-200">
          <span className="text-xl text-white font-bold">C</span>
        </div>

        <Separator className="w-8 opacity-10 h-[2px]" />

        <div className="flex flex-col space-y-2">
          {servers.map((server) => (
            <div key={server.id}>
              <ServerCircle bgColor="bg-hue3" notification={server.hasNotification}>
                <span className="text-xl text-white font-bold">
                  {server.name[0]}
                </span>
              </ServerCircle>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-2">
          <ServerCircle bgColor="bg-hue3">
            <Plus color="#23a559" strokeWidth={2.5} width={30} height={30} />
          </ServerCircle>
          <ServerCircle bgColor="bg-hue3">
            <Compass color="#23a559" strokeWidth={2.5} />
          </ServerCircle>
        </div>

        <Separator className="w-7 opacity-20 h-[2px]" />

        <div className="flex justify-center items-center rounded-full bg-hue3 w-12 h-12 hover:cursor-pointer active:scale-110 transition-all duration-200">
          <span className="">
            <ArrowDownToLine color="#23a559" strokeWidth={2.5} />
          </span>
        </div>
      </aside>
    )
}