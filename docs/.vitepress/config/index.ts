import sidebar from './sidebar'
import head from './head'
import nav from './nav'
import markdown from './markdown'
import lang from './lang'
const config = {
  title: "Vue LayPlus",
  description: "Vue LayPlus 组件库",
  head,
  markdown,
  themeConfig: {
    sidebar,
    nav,
    demoblock: lang,
    logo: '../../assets/logo.svg'
  },
};

export default config;
