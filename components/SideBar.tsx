import {Building, Folder, GithubCircle, Instagram, LinkedIn, UserCircle} from "iconoir-react";
import useSideBarStore, {SideBarExternalLink} from "@/stores/SideBarStore";

export default function Sidebar() {
  const { onExternalLink } = useSideBarStore();
  return <div className="h-screen w-20 bg-stone-900">
    <div className="flex flex-col justify-between items-center py-5 h-screen">
      <div className="flex flex-col items-center gap-5">
        <UserCircle className="text-slate-50 w-10 h-10"/>
        <Building className="text-slate-50 h-11 w-14"/>
        <Folder className="text-slate-50 w-10 h-10"/>
      </div>
      <div className="flex flex-col items-center gap-5">
        <Instagram onClick={() => onExternalLink(SideBarExternalLink.INSTAGRAM)} className="text-slate-50 w-10 h-10 hover:cursor-pointer hover:scale-90"/>
        <LinkedIn onClick={() => onExternalLink(SideBarExternalLink.LINKEDIN)} className="text-slate-50 h-11 w-14 hover:cursor-pointer hover:scale-90"/>
        <GithubCircle onClick={() => onExternalLink(SideBarExternalLink.GITHUB)} className="text-slate-50 w-10 h-10 hover:cursor-pointer hover:scale-90"/>
      </div>
    </div>
  </div>
}
