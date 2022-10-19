import './button-group.scss'
import { defineComponent, ExtractPropTypes, SetupContext } from "vue";

const buttonGroupProps = {

}

type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>

// const LayButtonGroup = (props:ButtonGroupProps,ctx:SetupContext) => <div class='lay-btn-group'>{ctx.slots.default?.()}</div>

// export default LayButtonGroup;


export default defineComponent({
    name:'LayButtonGroup',
    setup(props:ButtonGroupProps,{ slots }) {
        return () => {
            return <>
                <div 
                class='lay-btn-group'>
                    {slots.default?.()}
                </div>
            </>
        }
    }
})