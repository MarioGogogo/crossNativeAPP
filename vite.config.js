// vite.config.js
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

export default defineConfig({
  plugins: [
    uni({
      vueOptions: {
        template: {
          compilerOptions: {
            // 告诉编译器这些标签是原生自定义元素
            isCustomElement: (tag) => ['UniWebView','X5WebView'].includes(tag)
          }
        }
      }
    })
  ],
});
