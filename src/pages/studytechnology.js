import Vue from 'vue';
import EUI from 'element-ui';
import app from '@app';
import Router from 'vue-router';
import cssStudy from '@modules/studyTechnology/cssStudy.vue';
import htmlStudy from '@modules/studyTechnology/htmlStudy.vue';
import javascriptStudy from '@modules/studyTechnology/javascriptStudy.vue';
import '@element-ui-style';

Vue.config.productionTip = false;
Vue.use(EUI);

Vue.use(Router);
const router = new Router({
    routes: [
        {
            path: '/css',
            name: 'cssStudy',
            component: cssStudy,
            meta: {
                title: 'css'
            }
        },
        {
            path: '/html',
            name: 'htmlStudy',
            component: htmlStudy,
            meta: {
                title: 'html'
            }
        },
        {
            path: '/js',
            name: 'javascriptStudy',
            component: javascriptStudy,
            meta: {
                title: 'javascript'
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
