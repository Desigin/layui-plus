import type { App } from 'vue'
import ButtonGroup from './src/button-group'

ButtonGroup.install = function(app: App):void {
  app.component(ButtonGroup.name, ButtonGroup);
}

// 组件
 export { ButtonGroup }


// 插件  默认导出 主要方便用户在引入的时候可以直接app.use使用
 export default {
  title:'Button 组',
  category:'通用',
  status:undefined, //TODO: 组件若开发完成则填入"已完成"，
  install(app: App):void {
    app.use(ButtonGroup as any)
  }
 }