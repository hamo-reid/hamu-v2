import { loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'

// https://vitejs.dev/config/

export default () => {
  const envConfig = loadEnv('development', './'); // 读取开发时配置

  let config = {
    plugins: [vue()],
    server: {
      host: envConfig.VITE_HOST,  // 运行ip
      port: envConfig.VITE_PORT,  // 运行端口
      open: true,  // 是否自动在浏览器打开
      base: envConfig.VITE_BASE_URL,  // 项目根路径
      outDir: envConfig.VITE_OUTPUT_DIR,  // build输出路径
      proxy: {  // 开发时的代理
        '/api': {
          target: envConfig.VITE_BACKEND_API,
          changeOrigin: true,  // 允许跨域
          secure: false, // 验证 SSL 证书
          // rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
    },
    resolve: {
      // 配置别名
      alias: {
        '@/': `${resolve(__dirname, 'src')}/`
      }
    }
  }
  return config
}

