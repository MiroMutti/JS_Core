function rotateArray(input) {
    let count = input.pop(input.length);
    let rotations = count % input.length;

    for (let i = 0; i < rotations; i++) {
        let tempValue = input.pop()
       input.unshift(tempValue);
    }
    console.log(input.join(' '))
}