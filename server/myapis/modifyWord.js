module.exports = modifyWord;
const { modifyEnglishData } = require('../mysql.js');

async function modifyWord (ctx) {
    console.log(ctx.request.body);
    const data = ctx.request.body;
    await modifyEnglishData([data.word, data.translation, data['word_type'], data.id]).then((data) => {
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
