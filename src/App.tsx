import './style.css'
import { defineComponent } from 'vue'
import { ButtonGroup as LayButtonGroup } from '../layui/button-group'
import { Button as LayButton } from '../layui/button'
import '../layui/style/layui.scss'

export default defineComponent({
    name: 'App',
    setup() {
        return () => {
            return <>
                {/* 按钮主题 */}
                <LayButtonGroup>
                    <LayButton type="primary">默认按钮</LayButton>
                    <LayButton type="normal">百塔按钮</LayButton>
                    <LayButton type="warning">暖色按钮</LayButton>
                    <LayButton type="danger">警告按钮</LayButton>
                    <LayButton type="success">原始按钮</LayButton>
                    <LayButton type="default">警告按钮</LayButton>
                </LayButtonGroup>

                <LayButtonGroup>
                    <LayButton type="primary" disabled>默认按钮</LayButton>
                    <LayButton type="normal" disabled>百塔按钮</LayButton>
                    <LayButton type="warning" disabled>暖色按钮</LayButton>
                    <LayButton type="danger" disabled>警告按钮</LayButton>
                    <LayButton type="success" disabled>成功按钮</LayButton>
                    <LayButton type="default" disabled>原始按钮</LayButton>
                </LayButtonGroup>

                <LayButtonGroup>
                    <LayButton type="primary" plain>默认按钮</LayButton>
                    <LayButton type="normal" plain>百塔按钮</LayButton>
                    <LayButton type="warning" plain>暖色按钮</LayButton>
                    <LayButton type="danger" plain>警告按钮</LayButton>
                    <LayButton type="success" plain>成功按钮</LayButton>
                    <LayButton type="default" plain>原始按钮</LayButton>
                </LayButtonGroup>

                {/* 圆角 */}
                <LayButtonGroup>
                    <LayButton type="primary" round>默认按钮</LayButton>
                    <LayButton type="normal" round>百塔按钮</LayButton>
                    <LayButton type="warning" round>暖色按钮</LayButton>
                    <LayButton type="danger" round>警告按钮</LayButton>
                    <LayButton type="success" round>成功按钮</LayButton>
                    <LayButton type="default" round>原始按钮</LayButton>
                </LayButtonGroup>

                <LayButtonGroup>
                    <LayButton type="primary" circle>1</LayButton>
                    <LayButton type="normal" circle>2</LayButton>
                    <LayButton type="warning" circle>3</LayButton>
                    <LayButton type="danger" circle>4</LayButton>
                    <LayButton type="success" circle>5</LayButton>
                    <LayButton type="default" circle>6</LayButton>
                </LayButtonGroup>

                <LayButtonGroup>
                    <LayButton type="primary" round fluid>流体按钮（即宽度最大化适应）</LayButton>
                </LayButtonGroup>

            </>
        }

    },
})

// const App = () => {
//     return <>
//        <div>Vue LayUI</div>
//     </>
// }
// export default App;