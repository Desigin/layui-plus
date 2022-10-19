import { defineComponent, PropType } from "vue";
import './fieldset.scss'
const FieldsetProps = {
    title:{
        type:String as PropType<string>,
        default:''
    }
}

export default defineComponent({
    name:'Button',
    props:FieldsetProps,
    setup(props,ctx) {
        return () => {
            return (
                <fieldset class="layui-elem-field layui-field-title">
                    <legend>{props.title}</legend>
                </fieldset>
            )
        }
    }

})