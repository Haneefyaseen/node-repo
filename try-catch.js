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

const showText = async() => {
    try {
        const text = await getText('text.txt');
        console.log(text)
    }
    catch (err) {
        console.log(err)
    }
}

showText()