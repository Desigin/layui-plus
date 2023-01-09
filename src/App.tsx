import './style.css'
import { defineComponent } from 'vue'
import { Button as LayButton } from '../layui/button'
import '../layui/style/layui.scss'

export default defineComponent({
    name: 'App',
    setup() {
        return () => {
            return <>
                <LayButton type="default">原始按钮</LayButton>
                <LayButton type="primary">默认按钮</LayButton>
                <LayButton type="normal">百塔按钮</LayButton>
                <LayButton type="warm">暖色按钮</LayButton>
                <LayButton type="danger">警告按钮</LayButton>
                <LayButton type="disabled">禁用按钮</LayButton>
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