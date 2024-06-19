import comp from "/home/ubuntu/website/OCUR/src/.vuepress/.temp/pages/zh/author/portfolio.html.vue"
const data = JSON.parse("{\"path\":\"/zh/author/portfolio.html\",\"title\":\"作者\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"portfolio\":true,\"title\":\"作者\",\"icon\":\"user\",\"welcome\":\"👋 你好，我是\",\"name\":\"R1ck\",\"avatar\":\"/assets/image/R1ck.png\",\"titles\":[\"天才少年侦探\",\"小兰的青梅竹马\",\"黑衣组织的最大对手\"],\"footer\":false,\"description\":\"介绍 这是一个档案主页的案例。 要使用此布局，你应该在页面 Frontmatter 中设置 home: true 和 portfolio: true。 相关配置文档请见 档案主页。\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]}],\"readingTime\":{\"minutes\":0.33,\"words\":98},\"filePathRelative\":\"zh/author/portfolio.md\",\"autoDesc\":true}")
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
