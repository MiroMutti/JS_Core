function result() {

    let summary = []
    for (let i = 0; i < arguments.length; i++) {
        var obj = arguments[i]
        var type = typeof obj
        console.log(type + ': ' + obj)
        if (!summary[type]) {
            summary[type] = 1
        } else {
            summary[type]++
        }
    }
    Object.keys(summary).sort((a,b) => summary[b]-summary[a]).forEach(k => console.log(`${k} = ${summary[k]}`))
}
result('cat', 42, 43, function () { console.log('Hello world!'); });