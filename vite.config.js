import { defineConfig } from 'vite';

let ghRepo = "/music_visualizer/"
export default defineConfig({
  base: ghRepo,  
  define:{
    __ghRepo: ghRepo
  },
  build: {
    outDir: 'dist',   
  },
});