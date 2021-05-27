const {readFile} = require('fs')
const { result } = require('lodash')

const getText = path => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

getText('text.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))