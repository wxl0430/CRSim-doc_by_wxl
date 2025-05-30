
import { hopeTheme } from "vuepress-theme-hope";
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'CRSim 文档',
  description: '国铁信息显示模拟软件 CRSim 的使用和开发文档',

  bundler: viteBundler(),

  theme: hopeTheme({
    logo: './images/CRSimIcon.png',
    docsRepo: 'denglihong2007/CRSim-doc',
    docsDir: 'docs',
    docsBranch: 'master',
    changelog: false,
    favicon: './favicon.ico',
    navbar: [
      { text: '首页', icon: 'home', link: '/' },
      { text: '开始使用',icon: 'lightbulb', link: '/app/' },
      { text: '开发文档',icon: 'code', link: '/dev/' },
      { text: '社区群组',icon: 'fa-user-group', link: '/community.html' },
    ],
    sidebar: {
      '/app/': [
        {
          text: '使用教程',
          icon: 'lightbulb',
          children: [
            '/app/install',
            {
              text: '数据管理',
              collapsible: true,
              icon: 'database',
              children: [
                '/app/station',
              ],
            },
            '/app/simulation',
            '/app/key',
          ],
        },
      ],
      '/dev/': [
        {
          text: '开发文档',
          icon: 'code',
          children: [
            '/dev/api'
          ]
        }
      ]
    },
    plugins:
    {
      seo: {
        hostname: 'docs.crsim.tech',
      },
      sitemap: {
        hostname: 'docs.crsim.tech',
        devServer: true,
      },
      icon:
      {
        assets: "fontawesome-with-brands"
      }
    },
    markdown: {
      figure: true,
      imgLazyload: true,
    },
  }),
  head: [
    ['link', { rel: 'stylesheet', href: '/fontawesome/css/all.css' }],
  ],
})