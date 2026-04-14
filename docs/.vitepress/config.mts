import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "hr 的极客笔记",
  description: "机器人与强化学习研究记录",
  
  // 开启数学公式渲染支持 (MathJax)
  markdown: {
    math: true
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '示例页面', link: '/markdown-examples' }
    ],

    // 侧边栏配置
    sidebar: [
      {
        text: '🤖 机器人RL研究',
        collapsed: false, // 默认展开
        items: [
          { 
            text: '轮足机器人 RL 综述 (2024-2026)', 
            link: '/RL_papers_notes/轮足机器人RL前沿研究综述_2024_2026' 
          },
          // 以后你在这文件夹下加了新笔记，就按这个格式往下面加行
        ]
      },
      {
        text: '基础示例',
        collapsed: true, // 默认折叠
        items: [
          { text: 'Markdown 语法参考', link: '/markdown-examples' },
          { text: '运行时 API 示例', link: '/api-examples' }
        ]
      }
    ],

    // 社交链接：已更新为你的 GitHub 账号
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AUSX626' }
    ],

    // 页脚配置
    footer: {
      message: '基于 VitePress 搭建',
      copyright: 'Copyright © 2026-present hr'
    }
  }
})