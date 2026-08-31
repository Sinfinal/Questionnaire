import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // 前端项目运行端口
    proxy: {
      // 匹配所有以 '/api' 开头的请求路径
      '/api': {
        target: 'http://localhost:3001', // 目标后端服务地址（如你的 Koa Mock 服务）
        changeOrigin: true,              // 修改请求头中的 host 为目标 target 地址（推荐开启）
        // 路径重写：如果后端真实接口路径中没有 '/api' 前缀，打开下面这行将 '/api' 剔除
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});