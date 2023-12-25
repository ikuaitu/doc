import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🚀 快图创意引擎",
  description: "设计编辑器文档",
  base: '/editorDoc',
  themeConfig: {
    search: {
      provider: 'local'
    },
    // logo: { src: '/public/logo.png', width: 24, height: 24 },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🔖 指南', link: '/guide/index' },
      { text: '💻 预览', link: 'https://nihaojob.github.io/vue-fabric-editor/#/' }
    ],

    sidebar: [
      {
        text: '🔖 指南',
        collapsed: false,
        items: [
          { text: '简介', link: '/guide/index' },
          { text: '功能介绍', link: '/guide/feature' },
          { text: '安装使用', link: '/guide/install' },
          { text: '项目起源', link: '/guide/origin' },
          // { text: '插件化架构', link: '/guide/plugin' },
          // { text: '贡献指南', link: '/guide/community' },
        ]
      },
      {
        text: '⚙️ 架构说明',
        collapsed: false,
        items: [
          { text: '插件化', link: '/guide/plugin' },
          // { text: '生命周期', link: '/guide/plugin' },
          // { text: '插件API', link: '/guide/plugin' },
          { text: '常见问题', link: '/guide/faq' },
          { text: '生态版本', link: '/guide/ecology' },
          // { text: '功能介绍', link: '/guide/feature' },
          // { text: '安装使用', link: '/guide/install' },
          // { text: '项目起源', link: '/guide/origin' },
          // { text: '常见问题', link: '/guide/faq' },
          // { text: '贡献指南', link: '/guide/community' },
        ]
      },
      {
        text: '🙌 贡献和社区',
        collapsed: false,
        items: [
          { text: '贡献指南', link: '/guide/community' },
          { text: '关于作者', link: 'https://juejin.cn/user/3843548383549214/posts' },
        ]
      },
      {
        text: '📦 付费版',
        collapsed: false,
        items: [
          { text: '简介', link: '/pro/index' },
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/nihaojob/editorDoc/tree/main/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nihaojob/vue-fabric-editor' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      // copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
