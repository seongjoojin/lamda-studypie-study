const {buildResponse, buildError} = require("./response")
const {getHandler, postHandler} = require("./router")

exports.handler = async (event) => {
    switch (event.httpMethod) {
        case "GET" :
            return buildResponse(getHandler(event))
        case "POST" :
            return buildResponse(postHandler(event))
        default :
            return buildError(`Unsupported method ${event.httpMethod}`)
    }
}
