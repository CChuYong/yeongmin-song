import {create} from "zustand";

export enum SideBarExternalLink {
  INSTAGRAM = "https://www.instagram.com/fflowerggem__/",
  LINKEDIN = "https://www.linkedin.com/in/yeongminsong/",
  GITHUB = "https://github.com/cchuyong",
}

const pageRoutes = {
  0: '/me',
  1: '/career',
  2: '/projects',
}

interface SideBarState {
  currentPage: number,
  updatePage: (page: number) => void,
  onExternalLink: (link: SideBarExternalLink) => void
}

const useSideBarStore = create<SideBarState>()((set) => ({
  currentPage: 0,
  updatePage: page => {
    set({currentPage: page});
  },
  onExternalLink: link => {
    window.location.href = link;
  }
}))
export default useSideBarStore;
