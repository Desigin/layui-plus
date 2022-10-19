import type { App, Plugin } from "vue";

import ButtonInstall, { Button } from './button';
import ButtonGroupInstall ,{ ButtonGroup } from './button-group'
import IconInstall, {Icon} from './icon'

const installs: Plugin[] = [
    ButtonInstall,
    ButtonGroupInstall,
    IconInstall
]

export {
    Button,
    ButtonGroup,
    Icon
}

// const usePlugins = (app: App) => plugins.forEach(app.use, app);

export default {
    version:'0.0.1',
    // 实现vue3插件，需要实现一个install方法
    // 将来接收一个App实例，createApp()返回的实例
    install(app: App): void {
        installs.forEach(app.use, app);
    }
}