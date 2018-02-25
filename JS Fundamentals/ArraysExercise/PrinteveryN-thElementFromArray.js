function printNelement(input) {
    let step = input.pop(input.length);

    for (let i = 0; i < input.length; i++) {
        if (i%step ===0 )
            console.log(input[i]);
    }
}