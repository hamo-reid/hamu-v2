import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';

import './style.css';

const app = createApp(App);
app.use(createPinia());  // 加载store
app.use(router);  // 加载router
app.mount('#app');  // 挂载至app标签
