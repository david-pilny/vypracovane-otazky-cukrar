import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Materiály pro cukráře',
  description: 'Zvládní výuční zkoušku levou zadní',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['html', { lang: 'cs' }],
  ],
  lang: 'cs-CZ',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Suroviny',
        link: '/suroviny',
      },
      { text: 'O projektu', link: '/o-projektu' },
    ],

    sidebar: [
      {
        text: 'Suroviny',
        collapsed: true,
        items: [
          {
            text: '❌ Alkoholické nápoje',
            link: '/suroviny/alkoholicke-napoje',
          },
          { text: '❌ Čokoláda', link: '/suroviny/cokolada' },
          { text: '❌ Droždí', link: '/suroviny/drozdi' },
          {
            text: '❌ Jádroviny a olejnatá semena',
            link: '/suroviny/jadroviny-a-olejnata-semena',
          },
          { text: '❌ Jakost potravin', link: '/suroviny/jakost-potravin' },
          { text: '❌ Kakao', link: '/suroviny/kakao' },
          {
            text: '❌ Konzervace potravin',
            link: '/suroviny/konzervace-potravin',
          },
          { text: 'Koření', link: '/suroviny/koreni' },
          {
            text: '❌ Kypřící prostředky',
            link: '/suroviny/kyprici-prostredky',
          },
          { text: 'Máslo', link: '/suroviny/maslo' },
          { text: '❌ Med', link: '/suroviny/med' },
          { text: '❌ Mléčné výrobky', link: '/suroviny/mlecne-vyrobky' },
          { text: '❌ Mléko', link: '/suroviny/mleko' },
          { text: '❌ Mouka', link: '/suroviny/mouka' },
          { text: '❌ Obiloviny', link: '/suroviny/obiloviny' },
          { text: '❌ Ovoce', link: '/suroviny/ovoce' },
          { text: '❌ Ovocné výrobky', link: '/suroviny/ovocne-vyrobky' },
          { text: '❌ Pochutiny', link: '/suroviny/pochutiny' },
          { text: '❌ Přídatné látky', link: '/suroviny/pridatne-latky' },
          { text: 'Vejce', link: '/suroviny/vejce' },
          { text: '❌ Řepný cukr', link: '/suroviny/repny-cukr' },
          { text: '❌ Sacharidy', link: '/suroviny/sacharidy' },
          { text: '❌ Škroby', link: '/suroviny/skroby' },
          { text: '❌ Sladidla', link: '/suroviny/sladidla' },
          {
            text: '❌ Surovinové směsi a přípravky',
            link: '/suroviny/surovinove-smesi-a-pripravky',
          },
          { text: '❌ Sýry', link: '/suroviny/syry' },
          { text: '❌ Tuky', link: '/suroviny/tuky' },
          { text: '❌ Vaječná hmota', link: '/suroviny/vajecna-hmota' },
          { text: 'Tvaroh', link: '/suroviny/tvaroh' },
          {
            text: '❌ Trávicí soustava člověka',
            link: '/suroviny/travici-soustava-cloveka',
          },
          {
            text: '❌ Zásady zdravé výživy',
            link: '/suroviny/zasady-zdrave-vyzivy',
          },
          {
            text: '❌ Želírující prostředky',
            link: '/suroviny/zelirujici-prostredky',
          },
        ],
      },
    ],

    footer: {
      copyright: 'Copyright © 2025 David Pilný',
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Hledat',
                buttonAriaLabel: 'Hledat',
              },
              modal: {
                displayDetails: 'Zobrazit podrobný seznam',
                resetButtonTitle: 'Resetovat hledání',
                backButtonTitle: 'Zavřít hledání',
                noResultsText: 'Žádné výsledky',
                footer: {
                  selectText: 'Vybrat',
                  selectKeyAriaLabel: 'Enter',
                  navigateText: 'Navigace',
                  navigateUpKeyAriaLabel: 'Šipka nahoru',
                  navigateDownKeyAriaLabel: 'Šipka dolů',
                  closeText: 'Zavřít',
                  closeKeyAriaLabel: 'Esc',
                },
              },
            },
          },
        },
      },
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/david-pilny/vypracovane-otazky-cukrar',
      },
    ],
  },

  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-frappe',
    },
  },

  locales: {
    root: {
      label: 'Czech',
      lang: 'cs',
    },
  },
})
