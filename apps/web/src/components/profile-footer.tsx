import { User, Mic, Headphones, Settings } from "lucide-react";

export default function ProfileFooter() {
  return (
    <footer className="h-[53px]">
      <div className="flex justify-between items-center bg-profile h-full px-2">
        <div className="flex items-center gap-1 text-white">
          <div className="rounded-full bg-hue5 w-8 h-8">
            <span className="flex justify-center items-center h-full">
              <User size={22} />
            </span>
          </div>
          <div className="flex flex-col px-1">
            <span className="text-sm font-medium">Usuário</span>
            <span className="text-zinc-400 text-xs font-light">Disponível</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mr-1">
          <Mic color="#b5bac1" size={22} className="cursor-pointer" />
          <Headphones color="#b5bac1" size={22} className="cursor-pointer" />
          <Settings color="#b5bac1" size={22} className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
