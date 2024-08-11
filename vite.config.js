import { defineConfig } from 'vite';

let ghRepo = "/music_visualizer/"
export default defineConfig({
  base: ghRepo,  

  build: {
    outDir: 'dist',   
    define:{
        __ghRepo: ghRepo
      },
  },
});