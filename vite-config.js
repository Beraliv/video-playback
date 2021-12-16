const { resolve } = require('path')
const { defineConfig } = require('vite')

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                tizen: resolve(__dirname, 'src/tizen/index.html')
            }
        }
    }
})
