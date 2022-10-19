import { computed, defineComponent } from "vue";
import { iconProps,IconProps } from "./icon-types";
import "./iconfont/iconfont.scss"

export default defineComponent({
    name:"LayIcon",
    props:iconProps,
    emits:[],
    setup(props:IconProps) {
        const { type,size,color } = props;

        const prefix = 'layui-icon'
        const styles = computed(() => {
            return {
              color: color,
              fontSize: size
            };
          });

        return () => {
            return <>
                <i class={[prefix,type]} style={styles.value}></i>
            </>
        }
    }
})