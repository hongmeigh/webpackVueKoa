<template>
    <div class="english-box">
        <div class="top-banner">
            English
        </div>
        <div class="content-english">
            <div class="english-item">
                <div v-for="(item, index) in fruitList" class="list-item">
                    <div v-if="!item.isModify" class="word">{{index + 1}}.{{item.word}}</div>
                    <div v-if="!item.isModify" class="translation">{{item.translation}}</div>
                    <input v-if="item.isModify" v-model="item.word" class="word"/>
                    <input v-if="item.isModify" v-model="item.translation" class="translation"/>
                    <div @click="modify(item, index)" v-if="!item.isModify" class="modify">修改</div>
                    <div @click="deleteItem(item)" v-if="!item.isModify" class="delete">删除</div>
                    <div @click="save(item, index)" v-if="item.isModify" class="save">保存</div>
                </div>
                <div @click="addData" class="add-word">添加</div>

            </div>
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
    import {addEngWord, queryWord, homeAjax, modifyWord, deleteWord} from '@api/api-home';
    export default {
        name: 'Home',
        data() {
            return {
                fruitList: [],
                isEdit: false
            }
        },
        components: {
        },
        mounted() {
            queryWord().then((res) => {
                console.log(res);
                this.fruitList = res.data.map((item) => {
                    return {
                        ...item,
                        word: item.word_name,
                        translation: item.word_translation
                    }
                });
            }).catch((error) => {
                console.log('error', error)
            })
            /*homeAjax().then((res) => {
                console.log(res)
            })*/
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
            add(data, index) {
                addEngWord(data).then((res) => {
                    console.log(res);
                    if (res.code === 200) {
                        this.fruitList.splice(index, 1, {...data, isModify: false})
                    }
                }).catch((error) => {
                    console.log(error)
                })
            },
            deleteItem(item) {
                deleteWord({...item}).then((res) => {
                    console.log(res);
                    if (res.code === 200) {
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000)
                    }
                }).catch((error) => {
                    console.log(error)
                })
            },
            modify(item, index) {
                this.fruitList.splice(index, 1, {...item, isModify: true});
            },
            updateData(item, index) {
                modifyWord({...item}).then((res) => {
                    console.log(res);
                    if (res.code === 200) {
                        this.fruitList.splice(index, 1, {...item, isModify: false});
                    }
                }).catch((error) => {
                    console.log(error)
                })
            },
            addData() {
                this.fruitList.push({
                    word: '',
                    translation: '',
                    type: 1,
                    isModify: true
                })
            },
            save(item, index) {
                if (item.id) {
                    this.updateData(item, index);
                } else {
                    this.add(item, index);
                }
            }
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
            margin: 50px 10%;
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
            overflow: auto;
            padding-bottom: 30px;
            .list-item {
                display: flex;
                line-height: 2;
                margin: 10px;
                input {
                    border: 1px solid #ccc;
                    height: 36px;
                    border-radius: 5px;
                    padding-left: 5px;
                }
                .word {
                    width: 30%;
                    word-break: break-all;
                    margin-right: 10px;
                }
                .translation {
                    width: 40%;
                    margin-right: 10px;
                }
                .modify {
                    font-size: 12px;
                    color: #FFC125;
                    margin-right: 10px;
                    cursor: pointer;
                }
                .delete {
                    font-size: 12px;
                    color: red;
                    cursor: pointer;
                }
                .save {
                    font-size: 12px;
                    color: #32CD32;
                    line-height: 36px;
                    cursor: pointer;
                }
            }
            .add-word {
                width: 60px;
                height: 30px;
                text-align: center;
                line-height: 30px;
                color: #00BFFF;
                border: 1px solid #00BFFF;
                border-radius: 10px;
                margin: 20px auto 0;
            }
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