// router/post.js
const {DEFAULT_KEYBOARD, jokeList} = require('../const')

exports.postHandler = ({path, body}) => {
    const {type, content} = JSON.parse(body)
    const defaultButton = DEFAULT_KEYBOARD.buttons[0]
    const randomJoke = jokeList[Math.floor(Math.random() * jokeList.length)]

    if (path !== '/message' || type !== 'text') {
        return ({
            message: '음...?', keyboard: DEFAULT_KEYBOARD
        })
    }

    if (content === defaultButton) {
        return ({
            message: {text: randomJoke.question},
            keyboard: { type : 'buttons', buttons : randomJoke.guesses }
        })
    }

    const foundJoke = jokeList.find(j => j.guesses.includes(content))

    if (foundJoke) {
        return ({
            message: {text: foundJoke.anwser}, keyboard: DEFAULT_KEYBOARD
        })
    }

    return ({message: '음...?', keyboard: DEFAULT_KEYBOARD})
}
