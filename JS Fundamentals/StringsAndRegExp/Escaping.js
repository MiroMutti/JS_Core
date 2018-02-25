function escaping(arr) {
    let result ='\<ul>'

    for (let str of arr) {
        result += '  <li>' + escapeChars(str) + '</li>'
    }
    result += '</ul>\n'
    console.log(result)
    function escapeChars(str) {
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}