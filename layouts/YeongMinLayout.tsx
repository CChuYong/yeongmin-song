import Sidebar from "@/components/SideBar";
import {ReactNode} from "react";

export default function YeongMinLayout({children}: {children: ReactNode}) {
  return <div className="flex flex-row">
    <Sidebar/>
    {children}
  </div>
}
