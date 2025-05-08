import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { runtimeErrorPlugin } from '@replit/vite-plugin-runtime-error-modal'
import { cartographerPlugin } from '@replit/vite-plugin-cartographer'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // This enables JSX in JS files
      include: /\.(jsx|js)$/,
    }),
    runtimeErrorPlugin(),
    cartographerPlugin()
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: {
      overlay: true
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@assets': path.resolve(__dirname, './attached_assets'),
      '@components': path.resolve(__dirname, './client/src/components'),
      '@lib': path.resolve(__dirname, './client/src/lib'),
      '@hooks': path.resolve(__dirname, './client/src/hooks'),
      '@pages': path.resolve(__dirname, './client/src/pages'),
      '@styles': path.resolve(__dirname, './client/src/styles'),
      '@ui': path.resolve(__dirname, './client/src/components/ui'),
    },
    extensions: ['.js', '.jsx', '.json']
  },
  esbuild: {
    loader: {
      '.js': 'jsx'
    }
  }
})