module.exports = {
  title: 'Samba Blog',
  theme: 'reco',
  description: '老桑巴的博客，跟随讶羽（不是我不想打对，是mac拼音里没有ya羽那个ya）大佬搭建',
  base: '/vuepress-starter/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '桑巴的博客',
        items: [
          { text: 'Github', link: 'https://github.com/zhanghuize-git' },
          { text: '掘金', link: 'https://juejin.cn/user/3702810895451783' }
        ]
      }
    ],
    sidebar: [
      {
        title: '欢迎学习',
        path: '/',
        collapsable: false,
        children: [
          { title: '进入必读', path: '/' }
        ],
      },
      {
        title: '基础学习',
        path: '/handbook/ConditionalTypes',
        collapsable: false,
        children: [
          { title: "个人简介", path: '/handbook/ConditionalTypes' },
          { title: "桑巴", path: '/handbook/Generics' }
        ],
      }
    ],
    subSidebar: true,
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  }
}

