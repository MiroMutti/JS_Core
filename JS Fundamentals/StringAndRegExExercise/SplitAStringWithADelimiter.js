function splitAStringWithADelimiter(string, delimiter) {

    let str = string.split(delimiter);
    for (let w of str) {
        console.log(w)
    }
}
splitAStringWithADelimiter('One-Two-Three-Four-Five -')