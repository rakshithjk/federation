import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

const exposedModules = require('./config/exposedModules');

// https://vitejs.dev/config/
export default defineConfig({
  server: {
      port: 3005,
    },
    preview: {
      port: 3005,
    },
  plugins: [
      react(),
      federation({
        name: 'vite-mf',
        filename: 'remoteEntry.js',
        exposes: exposedModules,
        remotes: {
          remote_app: "http://localhost:5001/remoteEntry.js",
        }
      }),
    ]
})
