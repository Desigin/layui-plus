import { type ExtractPropTypes, type PropType } from 'vue';

export type IButtonType = 'button' | 'submit' | 'reset';
export type IButtonStyle = 'default' | 'primary' | 'normal' | 'warm' | 'danger' | 'info' | 'disabled';
export type IButtonPosition = 'left' | 'right' | 'default';
export type IButtonSize = 'lg' | 'md' | 'sm' | 'xs';

export const buttonProps = {
  // type: {
  //   type: String as PropType<IButtonType>,
  //   default: 'button'
  // },
  type: {
    type: String as PropType<IButtonStyle>,
    default: 'default'
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'md'
  },
  position: {
    type: String as PropType<IButtonPosition>,
    default: 'default'
  },
  plain: {
    type: Boolean,
    default: false
  },
  round:{
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  text: {
    type: Boolean,
    default: false
  },
  fluid: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default:''
  },
  icon: {
    type: String,
    default: ''
  },
  showLoading: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  onClick: {
    type: Function as PropType<(event: MouseEvent) => void>
  }
} as const;


export type ButtonProps = ExtractPropTypes<typeof buttonProps>;