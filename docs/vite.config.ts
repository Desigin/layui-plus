import path from 'path'
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  resolve: {
    alias: [
      { find: '@layui', replacement: path.resolve(__dirname, '../layui') },
    ]
  },
  plugins: [
    vueJsx({}),
    svgLoader(),
  ],
})
