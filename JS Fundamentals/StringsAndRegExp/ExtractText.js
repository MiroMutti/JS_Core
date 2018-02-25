function extractText(str) {
    let result = [];
    while(true) {
        let start = str.indexOf(`(`);
        if(start<0)
            break;
        let end = str.indexOf(`)`, start);
        if (end<0)
            break;
        result.push(str.substring(start + 1, end));
        str = str.substring(end+1)
    }
    console.log(result.join(', '))
}