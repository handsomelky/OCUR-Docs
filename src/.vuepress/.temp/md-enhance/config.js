import { defineClientConfig } from "vuepress/client";
import CodeTabs from "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHintContainers } from "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Tabs from "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "G:/文字识别课题/隐秘OCR/OCUR-Docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
