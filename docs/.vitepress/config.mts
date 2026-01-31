import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TYmenu",
  description: "a menu",
  base: '/TYmenu/',
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
          { text: ' 邻家烤肉饭', link: '/邻家烤肉饭' },
          { text: ' 五谷杂粮渔粉', link: '/五谷杂粮渔粉' },
          { text: ' 一品香烧烤餐厅', link: '/一品香烧烤餐厅' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
