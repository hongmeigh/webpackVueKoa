import Vue from 'vue';
import EUI from 'element-ui';
import app from '@app';
import Router from 'vue-router';
import studyEnglish from '@modules/studyKnowledge/studyEnglish.vue';
import '@element-ui-style';

Vue.config.productionTip = false;
Vue.use(EUI);

Vue.use(Router);
const router = new Router({
    routes: [
        {
            path: '/',
            name: 'studyEnglish',
            component: studyEnglish,
            meta: {
                title: '英语'
            }
        }
    ]
});

new Vue({
    el: '#app',
    router,
    template: '<app />',
    components: {
        app
    }
});
