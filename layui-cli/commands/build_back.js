// import { name } from "./package.json";
const path = require("path");
const fs = require("fs");
const { defineConfig, build } = require("vite");
const vue = require("@vitejs/plugin-vue");
const vueJsx = require("@vitejs/plugin-vue-jsx");

const entryDir = path.resolve(__dirname, '../../layui');
const outputyDir = path.resolve(__dirname, '../../build');

// 打包配置
const baseConfig = defineConfig({
    configFile:false,
    publicDir:false,
    plugins:[vue(),vueJsx()]
})

const rollupOptions = {
    external:["vue","vue-router"],
    output:{ //umd需要定义一个全局变量名称
        exports: "named",
        globals:{
            vue:"Vue"
        }
    }
}

const terserOptions = {
    compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"],
      },
      output: {
        comments: true,
      },
}

// 全量构建
const buildAll = async () => {
    await build(defineConfig({
        ...baseConfig,
        build:{
            rollupOptions,
            terserOptions,
            lib:{
                entry:path.resolve(entryDir,"vue-layui.ts"),
                formats:['es', 'umd'],
                name:"layui-plus",
                fileName:"layui-plus"
            },
            outDir:outputyDir
        }
    }))
}

const buildLib = async () => {
    await buildAll()
}

buildLib()