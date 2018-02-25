function binaryLogarithm(numbers) {
    numbers = numbers.map(Number);
    for (let digit of numbers) {
        if (digit != 0)
            console.log(Math.log2(digit))
    }
}