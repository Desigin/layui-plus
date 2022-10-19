import './index.css'
import Theme from 'vitepress/dist/client/theme-default'
import LayUI from '../../../layui/layui-plus'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components.js'


export default {
    ...Theme,
    enhanceApp({ app }) {
    app.use(LayUI)
    registerComponents(app)
    }
}