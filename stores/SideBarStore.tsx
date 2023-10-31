import {create} from "zustand";

export enum SideBarExternalLink {
  INSTAGRAM = "https://www.instagram.com/fflowerggem__/",
  LINKEDIN = "https://www.linkedin.com/in/yeongminsong/",
  GITHUB = "https://github.com/cchuyong",
}

interface SideBarState {
  onExternalLink: (link: SideBarExternalLink) => void
}

const useSideBarStore = create<SideBarState>()((set) => ({
  onExternalLink: link => {
    window.location.href = link;
  }
}))
export default useSideBarStore;
