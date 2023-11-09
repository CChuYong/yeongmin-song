import {create} from "zustand";
import {NextRouter, useRouter} from "next/router";

export enum SideBarExternalLink {
  INSTAGRAM = "https://www.instagram.com/fflowerggem__/",
  LINKEDIN = "https://www.linkedin.com/in/yeongminsong/",
  GITHUB = "https://github.com/cchuyong",
}

const pageRoutes: Record<number, String> = {
  0: '/me',
  1: '/career',
  2: '/project',
}

interface SideBarState {
  currentPage: number,
  updatePage: (router: NextRouter, page: number) => void,
  onExternalLink: (link: SideBarExternalLink) => void
}

const useSideBarStore = create<SideBarState>()((set) => ({
  currentPage: 0,
  updatePage: (router, page) => {
    router.push(pageRoutes[page]);
    set({currentPage: page});
  },
  onExternalLink: link => {
    window.location.href = link;
  }
}))
export default useSideBarStore;
