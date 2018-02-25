function negativePositiveNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let n = Number(arr[i]);

        if(n>=0){
            result.push(n);
        }else {
            result.unshift(n);
        }

    }
    console.log(result.join('\n'))
}