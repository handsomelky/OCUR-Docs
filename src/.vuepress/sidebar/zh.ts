import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "快速上手",
      icon: "signs-post",
      prefix: "get-started/",
      link: "get-started/",
      children: "structure",
    },
    {
      text: "用户指南",
      icon: "book",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
  ],
});
