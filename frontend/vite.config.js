import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  //base: "/static/",

  build: {
    
    manifest: true,
  
    outDir: 'dist',
    assetsDir: 'static',
  },
  plugins: [react(),
    
   
  ],
  server:{
   
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,      
        ws: true,
       //rewrite: (path) => path.replace(/^\/api/, ''),
       // agent:new http.Agent()
      },
      '/images':{
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
  
      }
    }

  }
})
