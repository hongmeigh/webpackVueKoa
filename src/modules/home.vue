<template>
    <div class="home-welcome-box">
        <topNav :nav-list="navList"></topNav>
        <div class="top-banner">
            welcome
        </div>
    </div>
</template>
<script>
    import {homeAjax} from '@api/api-home';
    import topNav from '@components/topNav.vue';
    const list = [
        {name: '小明', age: 26},
        {name: '小张', age: 22},
    ];
    export default {
        name: 'Home',
        data() {
            return {
                v: true,
                navList: [{
                    name: '文化课',
                    subList: [{
                        name: '英语',
                        path: ''
                    }, {
                        name: '数学',
                        path: ''
                    }]
                }, {
                    name: '技术'
                }, {
                    name: '其他'
                }],
                stuList: [...list]
            }
        },
        components: {
            'topNav': topNav
        },
        mounted() {
            /*this.promiseFun().then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            });
            homeAjax().then((res) => {
                console.log(res)
            })*/
        },
        methods: {
            /*promiseFun() {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve('hello')
                    }, 1000)
                })
            }*/
        },
    }
</script>
<style lang="less">
    .home-welcome-box {
        .top-banner {
            width: 100vw;
            height: 100vh;
            font-size: 100px;
            line-height: 100vh;
            text-align: center;
            color: #fff;
            text-shadow: 0 0 16px #fff;
            background-color: #00CD00;
        }
    }
</style>
