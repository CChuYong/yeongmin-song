import {Building, Folder, GithubCircle, Instagram, LinkedIn, UserCircle} from "iconoir-react";
import useSideBarStore, {SideBarExternalLink} from "@/stores/SideBarStore";
import {ReactNode} from "react";
import {useRouter} from "next/router";

export default function Sidebar() {
  const router = useRouter();
  const { currentPage, updatePage, onExternalLink } = useSideBarStore();
  return <div className="h-screen w-20 bg-stone-900">
    <div className="flex flex-col justify-between items-center py-5 h-screen">
      <div className="flex flex-col items-center gap-5">
        <PageButton isCurrentPage={currentPage == 0} onTap={() => updatePage(router, 0)}>
          <UserCircle className="text-slate-50 w-10 h-10 hover:cursor-pointer hover:scale-90"/>
        </PageButton>

        <PageButton isCurrentPage={currentPage == 1} onTap={() => updatePage(router, 1)}>
          <Building className="text-slate-50 h-11 w-14 hover:cursor-pointer hover:scale-90"/>
        </PageButton>

        <PageButton isCurrentPage={currentPage == 2} onTap={() => updatePage(router, 2)}>
          <Folder className="text-slate-50 w-10 h-10 hover:cursor-pointer hover:scale-90"/>
        </PageButton>
      </div>
      <div className="flex flex-col items-center gap-5">
        <Instagram onClick={() => onExternalLink(SideBarExternalLink.INSTAGRAM)} className="text-slate-50 w-10 h-10 hover:cursor-pointer hover:scale-90"/>
        <LinkedIn onClick={() => onExternalLink(SideBarExternalLink.LINKEDIN)} className="text-slate-50 h-11 w-14 hover:cursor-pointer hover:scale-90"/>
        <GithubCircle onClick={() => onExternalLink(SideBarExternalLink.GITHUB)} className="text-slate-50 w-10 h-10 hover:cursor-pointer hover:scale-90"/>
      </div>
    </div>
  </div>
}

function PageButton({children, isCurrentPage, onTap}: {children: ReactNode, isCurrentPage: boolean, onTap?: () => void}) {
  return <div onClick={onTap}>
    <div className={`relative left-12 top-5 h-1 w-1${isCurrentPage ? " bg-slate-200" : ""}`}/>
    {children}
  </div>
}
