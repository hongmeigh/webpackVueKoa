<template>
    <div class="nav-box-wrap">
        <ul class="top-nav">
            <li v-for="(item, index) in list" @click="hoverLi($event, item, index)">
                <span>{{item.name}}</span>
                <div :class="['angle-down', item.show ? 'angle-rotate-up' : 'angle-rotate-down']"></div>
                <div @click.stop="" :class="['sub-pop', item.show ? 'pop-show' : 'pop-hide']">
                    <div class="angle-up"></div>
                    <div class="subtit" v-for="sub in item.subList">
                        {{sub.name}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'topNav',
        props: ['navList'],
        data() {
            return {
                list: [...this.navList]
            }
        },
        mounted() {
            const self = this;
            document.addEventListener('click', function(event) {
                console.log(event.target);
                self.list = self.list.map((item) => {
                    return {
                        ...item,
                        show: false
                    }

                })
            })
        },
        methods: {
            hoverLi(event, item, index) {
                event.stopPropagation();
                this.list = this.list.map((item, i) => {
                    return {
                        ...item,
                        show: i === index ? !item.show : false
                    }

                });
                console.log(111, event)
            }

        },
    }
</script>
<style lang="less">
    .nav-box-wrap {
        .top-nav {
            width: 100%;
            height: 60px;
            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(0,0,0,0.1);
            display: flex;
            padding: 0 30px;
            li {
                padding: 0 30px;
                color: #fff;
                font-size: 20px;
                line-height: 60px;
                cursor: pointer;
                .angle-down {
                    display: inline-block;
                    margin-left: 6px;
                }
                position: relative;
            }
        }
        .angle-down {
            width: 0;
            height: 0;
            border-width: 10px 8px 0;
            border-style: solid;
            border-color: #fff transparent transparent;
            transition: transform 1s;
        }
        .angle-up {
            width: 0;
            height: 0;
            border-width: 0 8px 10px;
            border-style: solid;
            border-color: transparent transparent #fff;
        }
        .sub-pop {
            position: absolute;
            top: 100px;
            opacity: 0;
            left: 0;
            width: 160px;
            min-height: 100px;
            background-color: #fff;
            border-radius: 5px;
            transition: top 1s, opacity 1s;
            .angle-up {
                position: absolute;
                top: -10px;
                left: 50%;
            }
            .subtit {
                color: #333;
                text-align: center;
                padding: 10px;
                margin: 0 10px;
                line-height: normal;
                border-bottom: 1px dashed #999;
                font-size: 16px;
            }
        }
        .pop-show {
            top: 60px;
            opacity: 1;
        }
        .pop-hide {
            top: 100px;
            opacity: 0;
        }
        .angle-rotate-up {
            transform: rotate(180deg);
        }
        .angle-rotate-down {
            transform: rotate(0deg);
        }
    }
</style>
