// response/error.js
exports.buildError = (message, status = 400) => {
    console.log("error",message,status)

    return ({
        statusCode: status,
        body: JSON.stringify(message),
        headers: {"Content-Type":"application/json; utf-8"}
    })
} 
