import type { App } from 'vue'
import Button from './src/button'
// import ButtonGroup from './src/button-group'

// 声明为插件，可以引入组件
Button.install = function(app: App):void {
  app.component(Button.name, Button);
}


// 类型
export * from './src/button-types'

// 组件
 export { Button }


// 单独引入插件，为后面按需做基础  默认导出 主要方便用户在引入的时候可以直接app.use使用
 export default {
  title:'Button 按钮',
  category:'通用',
  status:undefined, //TODO: 组件若开发完成则填入"已完成"，精度按照百分比填写
  install(app: App):void {
    app.use(Button as any)
  }
 }