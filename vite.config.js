import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        '404': '404.html',
        'wire-edm-parts': 'wire-edm-parts/index.html',
        'pg-grinding': 'pg-grinding/index.html',
        'tungsten-carbide-parts': 'tungsten-carbide-parts/index.html',
        'ceramic-parts': 'ceramic-parts/index.html',
        'precision-mold-components': 'precision-mold-components/index.html',
        'blog': 'blog/index.html',
        'blog-wire-edm': 'blog/what-is-wire-edm/index.html',
        'blog-wire-edm-vs-cnc': 'blog/wire-edm-vs-cnc-machining/index.html',
        'blog-pg-grinding': 'blog/what-is-pg-grinding/index.html',
        'blog-tungsten': 'blog/advantages-of-tungsten-carbide-parts/index.html',
        'blog-ceramic': 'blog/ceramic-parts-for-precision-manufacturing/index.html',
      },
    },
  },
});
