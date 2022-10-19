import './button.scss'

import { defineComponent, ref, computed } from 'vue';
import { buttonProps, ButtonProps } from "./button-types";

export default defineComponent({
    name:'LayButton',
    props:buttonProps,
    emits:[],
    setup(props:ButtonProps,{ slots }) {
        const buttonContent = ref<HTMLSpanElement | null>(null);
        const onClick = (e: MouseEvent) => {
            props.onClick?.(e);
        }

        const renderText = () => {
            let text;
            if (props.loading) {
              text = props.loadingText;
            } else {
              text = slots.default ? slots.default() : props.text;
            }
      
            if (text) {
              return <span>{text}</span>;
            }
          };

        const btnClass = computed(() => {
            const { type, plain, round, circle, size, fluid, loading, text } = props;
            const origin = `lay-btn lay-btn-${size}`;
            const isType = ` lay-btn-${type}`;
            const isPlain = plain ? ' is-plain' : '';
            const isRound = round ? ' is-round' : '';
            const isCircle = circle ? ' is-circle' : '';
            const isFluid = fluid ? ' fluid' : '';
            const isLoading = loading ? ' is-loading' : '';
            const isText = text ? ' is-text' : '';
            return `${origin}${isPlain}${isRound}${isCircle}${isFluid}${isLoading}${isText}${isType}`;
        })

        return () => {
            const { disabled } = props;
            return <>
              <button
                class={btnClass.value}
                disabled={disabled}
                onClick={onClick} 
                ref={buttonContent}>
                {renderText()}
                </button>
            </>
                
        }
    }
})