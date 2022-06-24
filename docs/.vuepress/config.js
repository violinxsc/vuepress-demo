module.exports = {
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://baidu.com' },
          {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
              { text: '中文', link: '/language/zh/' },
              { text: 'ENG', link: '/language/en/' }
            ]
          }
        ],
        sidebar: {
          '/foo/': [
            '',     /* /foo/ */
            'one',  /* /foo/one.html */
            'two'   /* /foo/two.html */
          ],
    
          '/bar/': [
            '',      /* /bar/ */
            'three', /* /bar/three.html */
            'four'   /* /bar/four.html */
          ],
    
          // fallback
          '/': [
            '',        /* / */
            'contact', /* /contact.html */
            'about'    /* /about.html */
          ]
        },
        lastUpdated: 'Last Updated',
      }
  }