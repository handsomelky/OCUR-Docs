import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/@vueuse/core/index.mjs";
import FontIcon from "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import VPBanner from "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/vuepress-plugin-components/lib/client/components/VPBanner.js";

import "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("VPBanner")) app.component("VPBanner", VPBanner);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
});
