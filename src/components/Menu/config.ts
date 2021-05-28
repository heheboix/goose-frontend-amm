import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://jovial-almeida-d8d825.netlify.app/',
      },
      {
        label: 'Liquidity',
        href: 'https://jovial-almeida-d8d825.netlify.app/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Bowls',
    icon: 'PoolIcon',
    href: '/bowls',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      //  {
      //    label: 'PancakeSwap',
      //    href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      //  },
      //  {
      //    label: 'CoinGecko',
      //    href: 'https://www.coingecko.com/en/coins/goose-finance',
      //  },
      //  {
      //    label: 'CoinMarketCap',
      //    href: 'https://coinmarketcap.com/currencies/goose-finance/',
      //  },
      //  {
      //    label: 'AstroTools',
      //    href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      //  },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/peachdefi/',
      },
      {
        label: 'Docs',
        href: 'https://peachdefi.gitbook.io/peach-finance/',
      },
      //  {
      //    label: 'Blog',
      //    href: 'https://goosefinance.medium.com/',
      //  },
    ],
  },
  {
    label: 'Partnerships/IFO',
    icon: 'GooseIcon',
    href: 'https://forms.gle/Y9B6xEAQe4asakiM8',
  },
  //  {
  //    label: 'Audit by Hacken',
  //    icon: 'AuditIcon',
  //    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  //  },
  //  {
  //    label: 'Audit by CertiK',
  //    icon: 'AuditIcon',
  //    href: 'https://certik.org/projects/goose-finance',
  //  },
]

export default config
