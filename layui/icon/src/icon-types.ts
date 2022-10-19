import type { ExtractPropTypes } from "vue";

export const iconProps = {
    type:{
        type: String,
        required:true
    },
    color:{
        type: String,
        default:'#333333'
    },
    size:{
        type: String,
        default:'16px'
    },
} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>