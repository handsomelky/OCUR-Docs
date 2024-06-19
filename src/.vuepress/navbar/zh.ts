import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/get-started/",
  {
    text: "指南",
    icon: "book",
    prefix: "/zh/guide/",
    children: [
      "ui.md",
      "function.md",
    ],
  },
  {
    text: "作者",
    icon: "user-group",
    prefix: "/zh/author/",
    children: [
      "R1ck.md",
      "A39.md"
    ],
  },
]);
