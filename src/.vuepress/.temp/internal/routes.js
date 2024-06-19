export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Project home","i":"home"} }],
  ["/author/A39.html", { loader: () => import(/* webpackChunkName: "author_A39.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/author/A39.html.js"), meta: {"t":"A39","i":"user"} }],
  ["/author/R1ck.html", { loader: () => import(/* webpackChunkName: "author_R1ck.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/author/R1ck.html.js"), meta: {"t":"R1ck","i":"face-grin-tongue-squint"} }],
  ["/get-started/client.html", { loader: () => import(/* webpackChunkName: "get-started_client.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/get-started/client.html.js"), meta: {"t":"Client Deployment","i":"laptop-code","O":2} }],
  ["/get-started/", { loader: () => import(/* webpackChunkName: "get-started_index.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/get-started/index.html.js"), meta: {"t":"Get Started","i":"signs-post"} }],
  ["/get-started/server.html", { loader: () => import(/* webpackChunkName: "get-started_server.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/get-started/server.html.js"), meta: {"t":"Server Deployment","i":"server","O":3} }],
  ["/guide/function.html", { loader: () => import(/* webpackChunkName: "guide_function.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/guide/function.html.js"), meta: {"t":"Feature Implementation","i":"splotch","O":2} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"t":"Guide","i":"book"} }],
  ["/guide/ui.html", { loader: () => import(/* webpackChunkName: "guide_ui.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/guide/ui.html.js"), meta: {"t":"UI Introduction","i":"object-group","O":1} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/zh/index.html.js"), meta: {"t":"项目主页","i":"home"} }],
  ["/zh/author/A39.html", { loader: () => import(/* webpackChunkName: "zh_author_A39.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/zh/author/A39.html.js"), meta: {"t":"A39","i":"user"} }],
  ["/zh/author/R1ck.html", { loader: () => import(/* webpackChunkName: "zh_author_R1ck.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/zh/author/R1ck.html.js"), meta: {"t":"R1ck","i":"face-grin-tongue-squint"} }],
  ["/zh/get-started/client.html", { loader: () => import(/* webpackChunkName: "zh_get-started_client.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/zh/get-started/client.html.js"), meta: {"t":"客户端部署","i":"laptop-code","O":2} }],
  ["/zh/get-started/", { loader: () => import(/* webpackChunkName: "zh_get-started_index.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/zh/get-started/index.html.js"), meta: {"t":"快速上手","i":"signs-post"} }],
  ["/zh/get-started/server.html", { loader: () => import(/* webpackChunkName: "zh_get-started_server.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/zh/get-started/server.html.js"), meta: {"t":"服务端部署","i":"server","O":3} }],
  ["/zh/guide/function.html", { loader: () => import(/* webpackChunkName: "zh_guide_function.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/zh/guide/function.html.js"), meta: {"t":"功能实现","i":"splotch","O":2} }],
  ["/zh/guide/", { loader: () => import(/* webpackChunkName: "zh_guide_index.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/zh/guide/index.html.js"), meta: {"t":"用户指南","i":"book"} }],
  ["/zh/guide/ui.html", { loader: () => import(/* webpackChunkName: "zh_guide_ui.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/zh/guide/ui.html.js"), meta: {"t":"UI介绍","i":"object-group","O":1} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/author/", { loader: () => import(/* webpackChunkName: "author_index.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/author/index.html.js"), meta: {"t":"Author"} }],
  ["/zh/author/", { loader: () => import(/* webpackChunkName: "zh_author_index.html" */"G:/文字识别课题/隐秘OCR/OCUR-Docs/src/.vuepress/.temp/pages/zh/author/index.html.js"), meta: {"t":"Author"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
