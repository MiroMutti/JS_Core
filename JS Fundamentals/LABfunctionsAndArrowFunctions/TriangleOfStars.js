function triangleOfStars(count) {
    function printStars(n) {
        console.log("*".repeat(n).trim())
    }

    for (let i = 1; i <= count; i++) {
        printStars(i)
    }
    for (let i = count -1 ; i >0; i--) {
        printStars(i)
    }
}