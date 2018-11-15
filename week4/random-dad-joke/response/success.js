// response/success.js
exports.buildResponse = (res) => {
    console.log(res);   // response log

    return ({
        statusCode: 200,
        body: JSON.stringify(res),
        headers: {"Content-Type":"application/json; utf-8"}
    })
}
