// response/error.js
exports.buildError = (message, status = 400) => ({
    statusCode: status,
    body: JSON.stringify(message),
    headers: {"Content-Type":"application/json; utf-8"}
})
