import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import nodePolyfills from 'rollup-plugin-node-polyfills'
import commonjs from '@rollup/plugin-commonjs'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/zond-rpc/testnet': {
        target: 'http://95.170.68.91:8545',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api/zond-rpc/testnet', ''),
      },
      '/api/zond-rpc/dev': {
        target: 'http://localhost:8545',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api/zond-rpc/dev', ''),
      },
      '/api/zond-rpc/mainnet': {
        target: 'http://95.170.68.91:8545',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api/zond-rpc/mainnet', ''),
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'stream': 'rollup-plugin-node-polyfills/polyfills/stream',
      'buffer': 'rollup-plugin-node-polyfills/polyfills/buffer-es6',
      'events': 'rollup-plugin-node-polyfills/polyfills/events',
      'util': 'rollup-plugin-node-polyfills/polyfills/util',
      'process': 'rollup-plugin-node-polyfills/polyfills/process-es6',
    },
  },
  build: {
    rollupOptions: {
      plugins: [nodePolyfills(), commonjs()],
    },
    sourcemap: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
    include: ['buffer', 'process', 'events', 'util'],
  },
});
