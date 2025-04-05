import comp from "C:/Users/jjxjj/Desktop/repos/CRSim-doc/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroImage\":\".\\\\images\\\\CRSimIcon.png\",\"actions\":[{\"text\":\"开始使用\",\"link\":\"/app/\",\"type\":\"primary\"},{\"text\":\"开始开发\",\"link\":\"/dev/\",\"type\":\"secondary\"},{\"text\":\"官方网站\",\"link\":\"https://crsim.tech/\",\"type\":\"secondary\"},{\"text\":\"Github 仓库\",\"link\":\"https://github.com/denglihong2007/CRSim\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"引导屏模拟\",\"details\":\"支持模拟铁路车站内的引导屏显示，显示内容高度仿真。\"},{\"title\":\"售票网站模拟\",\"details\":\"支持本地模拟铁路售票网站（需要用户密钥）。\"},{\"title\":\"灵活的数据支持\",\"details\":\"支持从网络、Excel、路路通、模拟广播系统、pyETRC/qETRC等来源导入数据。\"},{\"title\":\"优雅的用户界面\",\"details\":\"采用Fluent Design进行开发，契合Windows 11整体风格，美观优雅。\"}],\"footer\":\"文档以 CC BY-NC-SA 4.0 许可协议授权 | Copyright © 2025 CRSim 社区\"},\"readingTime\":{\"minutes\":0.62,\"words\":185},\"filePathRelative\":\"README.md\"}")
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
