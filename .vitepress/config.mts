import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vypracované otázky pro Kiki',
  description: 'Stránka ve Vitepressu',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Suroviny',
        link: '/suroviny',
      },
    ],

    sidebar: [
      {
        text: 'Suroviny',
        items: [
          { text: 'Máslo', link: '/suroviny/maslo' },
          { text: 'Vejce', link: 'suroviny/vejce' },
          {
            text: 'Surovinové směsi a přípravky',
            link: '/suroviny/surovinove-smesi-a-pripravky',
          },
        ],
      },
    ],

    footer: {
      // message:
      //   'Všechna práva vyhrazena. Studijní materiály poskytnuté pro vaši přípravu na zkoušky.',
      copyright: 'Copyright © 2025 David Pilný',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },

  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-frappe',
    },
  },
})
