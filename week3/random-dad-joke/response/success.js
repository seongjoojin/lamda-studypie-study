// response/success.js
exports.buildResponse = (res) => ({
    statusCode: 200,
    body: JSON.stringify(res),
    headers: {"Content-Type":"application/json; utf-8"}
})
