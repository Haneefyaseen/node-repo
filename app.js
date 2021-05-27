const {readFile} = require('fs').promises

const text = async () => {
    try {
        const text = await readFile('text.txt', 'utf8')
        console.log(text)
    } catch (err) {
        console.log(err)
    }
}

text()