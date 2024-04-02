import { Logo } from "../assets/logo";

export function  Header(){
  return (
    <div className="flex items-center gap-5 py-2">
      <Logo />
      <nav className="flex items-center gap-5">
        <a href="" className="font-medium text-sm text-zinc-400"> Eventos</a>
        <a href="" className="font-medium text-sm"> Participantes </a>
      </nav>
    </div>
  )
}