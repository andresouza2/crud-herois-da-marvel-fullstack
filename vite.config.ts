import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	server: {
		port: 3000,
		host: '0.0.0.0'
	},
	resolve: {
		alias: [
			{
				find: '~',
				replacement: path.resolve(__dirname, './src/')
			},
			{
				find: '@pages',
				replacement: path.resolve(__dirname, './src/pages/')
			},
			{
				find: '@components',
				replacement: path.resolve(__dirname, './src/components/')
			},
			{
				find: '@assets',
				replacement: path.resolve(__dirname, './src/assets/')
			}
		]
	}
})
