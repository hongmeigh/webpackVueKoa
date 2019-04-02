module.exports = addWord;
const { addEnglishData } = require('../mysql.js');

async function addWord (ctx) {
    console.log(ctx.request.body);
    const data = ctx.request.body;
    await addEnglishData([data.word, data.translation, data.type]).then((data) => {
        return data;
    }).catch((error) => {
        console.error(error)
    });

    console.log('aaa');
    ctx.body = {
        code: 200,
        success: true,
        message: ''
    }
}
