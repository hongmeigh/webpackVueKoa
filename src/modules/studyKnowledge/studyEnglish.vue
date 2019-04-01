<template>
    <div class="english-box">
        <div class="top-banner">
            English
        </div>
        <div class="content-english">
            <div class="english-item"></div>
            <div class="english-item"></div>
            <div class="english-item-high"></div>
            <div class="english-item"></div>
            <div class="english-item"></div>
            <div class="english-item-width"></div>
            <div class="english-item"></div>
            <div class="english-item"></div>
        </div>
    </div>
</template>
<script>
    import {addEngWord, queryWord, homeAjax} from '@api/api-home';
    export default {
        name: 'Home',
        data() {
            return {
            }
        },
        components: {
        },
        mounted() {
            queryWord().then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log('error', error)
            })
            homeAjax().then((res) => {
                console.log(res)
            })
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
    .english-box {
        .top-banner {
            width: 100%;
            height: 200px;
            background-color: #FFC125;
            color: #fff;
            font-size: 60px;
            text-align: center;
            line-height: 200px;
            box-shadow: 0 0 20px #999;
        }
        .content-english {
            display: grid;
            margin: 50px 200px;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(4, 600px);
            grid-gap: 20px 10px;
            align-items: start;
            justify-items: center;
        }
        .english-item {
            width: 100%;
            height: 100%;
            border: 1px solid #eee;
            border-radius: 10px;
            box-shadow: 0 0 10px #eee;
            align-self: start;
            justify-self: center;
        }
        .english-item-high {
            width: 100%;
            height: 100%;
            grid-column-start: 3;
            grid-column-end: 4;
            grid-row-start: 1;
            grid-row-end: 3;
            border: 1px solid #eee;
            border-radius: 10px;
            box-shadow: 0 0 10px #eee;
        }
        .english-item-width {
            width: 100%;
            height: 100%;
            grid-column-start: 1;
            grid-column-end: 4;
            grid-row-start: 3;
            grid-row-end: 4;
            border: 1px solid #eee;
            border-radius: 10px;
            box-shadow: 0 0 10px #eee;
        }
    }
</style>