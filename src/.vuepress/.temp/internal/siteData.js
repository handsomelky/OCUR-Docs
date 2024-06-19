export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/OCUR.ico\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"OCUR\",\"description\":\"Innovative Image Privacy Text Protection Solution\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"OCUR\",\"description\":\"创新的图像隐私文本保护方案\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
