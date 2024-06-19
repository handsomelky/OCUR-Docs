import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/get-started/",
  {
    text: "Guide",
    icon: "book",
    prefix: "/guide/",
    children: [
      "ui.md",
      "function.md",
    ],
  },
  {
    text: "Author",
    icon: "user-group",
    prefix: "/author/",
    children: [
      "R1ck.md",
      "A39.md"
    ],
  },
]);
