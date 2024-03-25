
const { createSideBarConfig } = require('./util')

const JAVASCRIPT_PATH = '/blogs/javascript'
const CSS_PATH = '/blogs/css'
const PERFORM_PATH = '/blogs/perform'
const ALGORITHM_PATH = '/blogs/vuecode'
const VUE3CORE_PATH = '/blogs/vue3core'
const KNOWLEDGE_PATH = '/blogs/knowledge'
const HTML_PATH = '/blogs/html'
const JQ_PATH = '/blogs/jq'
const OTHER_PATH = '/blogs/other'
const INTERVIEW_PATH = '/blogs/interview'
const PROJECT_PATH = '/blogs/project'
const WEBPACK__PATH = '/blogs/webpack'
// const WEBPACKHIGH__PATH = '/blogs/webpack-high'
// const WEBPACKTEOHY__PATH = '/blogs/webpack-theory'
module.exports = {
  [JAVASCRIPT_PATH]: [createSideBarConfig('js基础', JAVASCRIPT_PATH)],
  [CSS_PATH]: [createSideBarConfig('CSS基础', CSS_PATH)],
  [PERFORM_PATH]: [createSideBarConfig('前端性能相关', PERFORM_PATH)],
  [ALGORITHM_PATH]: [createSideBarConfig('Vue核心源码', ALGORITHM_PATH)],
  [VUE3CORE_PATH]: [createSideBarConfig('Vue3核心', VUE3CORE_PATH)],
  [KNOWLEDGE_PATH]: [createSideBarConfig('杂项', KNOWLEDGE_PATH)],
  [HTML_PATH]: [createSideBarConfig('HTML', HTML_PATH)],
  [JQ_PATH]: [createSideBarConfig('jq', JQ_PATH)],
  [OTHER_PATH]: [createSideBarConfig('工具', OTHER_PATH)],
  [INTERVIEW_PATH]: [createSideBarConfig('面试题', INTERVIEW_PATH)],
  [WEBPACK__PATH]: [createSideBarConfig('webpack', WEBPACK__PATH)],
  // [WEBPACKHIGH__PATH]: [createSideBarConfig('webpack', WEBPACKHIGH__PATH)],
  // [WEBPACKTEOHY__PATH]: [createSideBarConfig('webpack', WEBPACKTEOHY__PATH)],
  [PROJECT_PATH]: [createSideBarConfig('大屏适配', PROJECT_PATH)]
}
