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
          { text: ' 宝顺饭店', link: '/宝顺饭店' },
          { text: ' 盈丰小张石磨肠粉', link: '/盈丰小张石磨肠粉' },
          { text: ' 正宗隆江猪脚饭', link: '/正宗隆江猪脚饭' },
          { text: ' 正宗潮汕汤粉世家', link: '/正宗潮汕汤粉世家' },
          { text: ' 佳佳土猪汤粉金牌烧腊', link: '/佳佳土猪汤粉金牌烧腊' },
          { text: ' 农家木桶饭', link: '/农家木桶饭' },
          { text: ' 沙县小吃', link: '/沙县小吃' },
          { text: ' 老上海馄饨铺', link: '/老上海馄饨铺' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
