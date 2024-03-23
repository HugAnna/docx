const sidebar = require('./siderbar.js');
console.log("🚀 ~ sidebar:", sidebar)
module.exports = {
  "title": "唐小二博客",
  "description": "唐小二的博客",
  "dest": "public",
  "base": "/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/logo.jpg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "plugins": [
    // ["@vssue/vuepress-plugin-vssue", {
    // platform: 'github-v4',
    // owner: 'HugAnna', // 仓库的拥有者的名称
    // locale: 'zh', // 语言设置
    // repo: 'docx', // 存储 Issue 和评论的仓库的名称
    // clientId: '03fb5ab756e7442817c0', // 刚保存下来的  Client ID
    // clientSecret: 'aeab5bbe27a915080ae5f507f3bed5c2d0e3f332', //  刚才保存下来的 Client secrets

    // }],
    ["vuepress-plugin-meting"]],
  "theme": "reco",
  "themeConfig": {
    "mode": 'light',
    "subSidebar": 'auto',
    // "vssueConfig": {
   
    // },
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "项目",
        "link": "/blogs/project/",
        "icon": "reco-date"
      },
      // {
      //   "text": "时间线",
      //   "link": "/timeline/",
      //   "icon": "reco-date"
      // },
      // { "text": '留言板', "link": '/blogs/views/messageBoard.html', "icon": 'reco-suggestion' },


    ],
    sidebar,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "目录索引"
      },
      // "tag": {
      //   "location": 3,
      //   "text": "标签索引"
      // }
    },
    "friendLink": [
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true, 
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "tangxiaoer",
    "authorAvatar": "/head.png",
    "record": "首页",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  }
}
