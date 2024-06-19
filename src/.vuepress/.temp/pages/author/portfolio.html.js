import comp from "/home/ubuntu/website/OCUR/src/.vuepress/.temp/pages/author/portfolio.html.vue"
const data = JSON.parse("{\"path\":\"/author/portfolio.html\",\"title\":\"Author\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"portfolio\":true,\"title\":\"Author\",\"icon\":\"user\",\"name\":\"R1ck\",\"avatar\":\"/assets/image/R1ck.png\",\"titles\":[\"Genius young detective\",\"Lan’s childhood sweetheart\",\"The biggest rival of the black organization\"],\"footer\":false,\"description\":\"Description This is a portfolio home page demo. To use this layout, you should set home: true and portfolio: true in the page front matter. For related configuration docs, pleas...\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Description\",\"slug\":\"description\",\"link\":\"#description\",\"children\":[]}],\"readingTime\":{\"minutes\":0.23,\"words\":69},\"filePathRelative\":\"author/portfolio.md\",\"autoDesc\":true}")
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
