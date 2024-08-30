import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "sai_blog",
  description: "sai_blog",
  base: '/vite-blog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { 
        text: 'More', 
        items:[
          {
            text: 'Instagram',
            link: 'https://www.instagram.com/sai_osai' 
          },
        ]
      }
    ],

    sidebar: [
      {
        items: [
          { text: 'aaaaa', link: '/markdown-examples' },
          { text: 'Blog posts', link: '/posts/postList' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/sai_osai' }
    ],
    
    footer: {
      message: '© 2021 Sai',
    }
  }
})
