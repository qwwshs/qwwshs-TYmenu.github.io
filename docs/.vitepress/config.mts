import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TYmenu",
  description: "a menu",
  base: '/qwwshs-TYmenu.github.io/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '菜单', link: '/菜单' }
    ],

    sidebar: [
      {
        text: '菜单',
        items: [
          { text: ' 一品湘木桶饭', link: '/一品湘木桶饭' },
          { text: ' 海歆寿司店', link: '/海歆寿司店' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
