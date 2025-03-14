import build from '@hono/vite-build/node'
import adapter from '@hono/vite-dev-server/node'
import tailwindcss from '@tailwindcss/vite'
import honox from 'honox/vite'
import { defineConfig } from 'vite'

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
    }
  }
  return {
    plugins: [
      honox({
        devServer: { adapter },
        client: { input: ['./app/style.css'] },
      }),
      tailwindcss(),
      build({}),
    ],

    ssr: {
      external: [
        'react',
        'react-dom',
        'dotenv',
        'prisma',
        'antd',
        '../../admin/render',
      ],
      // external: true,
    },
  }
})
