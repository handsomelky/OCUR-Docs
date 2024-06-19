import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Get Started",
      icon: "signs-post",
      prefix: "get-started/",
      link: "get-started/",
      children: "structure",
    },
    {
      text: "Guide",
      icon: "book",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
  ],
});
