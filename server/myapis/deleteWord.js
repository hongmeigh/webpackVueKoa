module.exports = deleteWord;
const { deleteEnglishData } = require('../mysql.js');

async function deleteWord (ctx) {
    console.log(ctx.request.body);
    const data = ctx.request.body;
    await deleteEnglishData(data.word).then((data) => {
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
