import comp from "/home/ubuntu/website/OCUR/src/.vuepress/.temp/pages/guide/bar/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/bar/\",\"title\":\"Bar feature\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Bar feature\",\"icon\":\"lightbulb\",\"description\":\"Introduction We support bar feature, ... Details ...\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"http://ocur.fun/guide/bar/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"OCUR\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Bar feature\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Introduction We support bar feature, ... Details ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"R1ck\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Bar feature\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"R1ck\\\",\\\"url\\\":\\\"https://rickliu.com/\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Introduction\",\"slug\":\"introduction\",\"link\":\"#introduction\",\"children\":[]},{\"level\":2,\"title\":\"Details\",\"slug\":\"details\",\"link\":\"#details\",\"children\":[]}],\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"guide/bar/README.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
