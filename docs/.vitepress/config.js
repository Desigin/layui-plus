const config = require('./config/index.ts')
module.exports = config.default

// module.exports = {
//     title:'陈小浩同学',
//     description:"陈小浩同学",
//     lang: 'zh-CN',
//     base:'/',
//     markdown: {
//         lineNumbers: true, // .md 代码显示行号
//         config:(md)=>{
//             const { demoBlockPlugin } = require('vitepress-theme-demoblock')
//             md.use(demoBlockPlugin)
//         }
//     },
// }
