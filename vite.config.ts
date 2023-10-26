import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import postCssPxToRem from 'postcss-pxtorem'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // mkcert(),
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5,
          propList: ['*']
        })
      ]
    }
  },
  server: {
		host: '0.0.0.0',
		port: 8000,
		// https: true,
		proxy: {
			'/apis': {
				target: 'http://api.fgshyi.com/api/',
				changeOrigin: true,
				rewrite: (path) => {
					return path.replace(/^\/apis/, '')
				}
			}
		}
	}
})
