const {buildResponse, buildError} = require("./response")
const {getHandler, postHandler} = require("./router")

exports.handler = async (event) => {
    // request log
    console.log("event.httpMethod", event.httpMethod)
    console.log("event.path", event.path)
    console.log("event.body", event.body)

    switch (event.httpMethod) {
        case "GET" :
            return buildResponse(getHandler(event))
        case "POST" :
            return buildResponse(postHandler(event))
        default :
            return buildError(`Unsupported method ${event.httpMethod}`)
    }
}
