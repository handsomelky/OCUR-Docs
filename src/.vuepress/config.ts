import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "OCUR",
      description: "Innovative Image Privacy Text Protection Solution",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "OCUR",
      description: "创新的图像隐私文本保护方案",
    },
  },


  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
