import './style.css'
import { defineComponent } from 'vue'

export default defineComponent({
    name:'App',
    setup() {
        return () => {
            return <>
            <Lay-button-group>
                <lay-button type="default">按钮</lay-button>
                <lay-button type="primary">按钮</lay-button>
                <lay-button type="normal">按钮</lay-button>
                <lay-button type="warm">按钮</lay-button>
                <lay-button type="danger">按钮</lay-button>
                <lay-button type="info">按钮</lay-button>
                <lay-button type="disabled">按钮</lay-button>
            </Lay-button-group>
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