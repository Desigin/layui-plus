import { defineComponent, SetupContext } from "vue";

type HelloProps = {
    name:string;
}
// 函数式组件
const HelloWrold = (props:HelloProps,context:SetupContext) => {
     return <div>hello,world! { props.name }</div>
}

// defineComponent({
//     render() {
//      return <div>hello,world! </div>
//     },
//     setup(props,context) {
//         return () => {
//             return <div>hello,world! </div>
//         }
//     }
// })



export default HelloWrold; 