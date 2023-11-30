require('./bootstrap');
import { createApp } from "vue";
import router from "./router";

import TareaHome from './components/TareaHome';

createApp({
    components: {
        TareaHome
    }
}).use(router).mount('#app')