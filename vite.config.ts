import build from '@hono/vite-build/node'
import adapter from '@hono/vite-dev-server/node'
import tailwindcss from '@tailwindcss/vite'
import honox from 'honox/vite'
import { defineConfig } from 'vite'
import pkg from './package.json'
export default defineConfig(({ mode, command }) => {
  console.log('mode', mode)
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: ['./app/client.ts'],
          output: {
            entryFileNames: 'static/client.js',
            chunkFileNames: 'static/assets/[name]-[hash].js',
            assetFileNames: 'static/assets/[name].[ext]',
          },
        },
        emptyOutDir: false,
      },

  experimental: {
    enableNativePlugin: true,
  },
  esbuild: false,
    }
  }
const deps = Object.keys(pkg.dependencies)
  .concat(Object.keys(pkg.devDependencies))
  .filter((d) => !d.includes('hono'))


  return {
    plugins: [
      honox({
        devServer: { adapter },
        client: { input: ['./app/style.css'] },
        external: deps,
      }),
      tailwindcss(),
      build({
        minify: false,
        external: deps,

      }),
    ],


    define: {
      'import.meta.env.MODE': '"server"',
    },

  experimental: {
    enableNativePlugin: true,
  },
  esbuild: false,
    ssr: {
      // external: [
      //   'react',
      //   'react-dom',
      //   'dotenv',
      //   'prisma',
      //   'antd',
      //   '../../admin/render',
      // ],
      external: deps,
    },
  }
})
