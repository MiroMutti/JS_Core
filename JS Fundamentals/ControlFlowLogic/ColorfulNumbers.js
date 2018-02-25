function colorful(n) {
    let result = '<ul>\n';
    for (let i = 1; i <= n; i++) {

        if (i%2 ==0){
            result +=`<li><span style='color:blue'>${i}</span></li>\n`;
        } else {
            result +=`<li><span style='color:green'>${i}</span></li>\n`;
        }
    }
    result +=`</ul>`;
    return result;
}

