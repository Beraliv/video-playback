const { resolve } = require('path')
const { defineConfig } = require('vite')

export default defineConfig({
    build: {
        watch: {},
        rollupOptions: {
            input: {
                tizen: resolve(__dirname, 'index.html')
            }
        }
    },
	preview: {
		host: true,
		open: '/tizen',
		port: 9000,
	},
})
