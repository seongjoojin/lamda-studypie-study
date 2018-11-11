// router/get.js
const {DEFAULT_KEYBOARD} = require('../const')
exports.getHandler = ({path}) => {
    if (path === '/keyboard') return DEFAULT_KEYBOARD
    return `success get ${path}`
}
