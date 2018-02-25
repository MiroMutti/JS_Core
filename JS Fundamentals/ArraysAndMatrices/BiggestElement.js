function biggestElement(matrix) {
    console.log(
        matrix.map(arr => arr.sort((a, b) => a<b)[0])
            .sort((a, b) => a<b)[0])
}


/**function biggestElement(matrix) {
let min = Number.negative_infinity;
for (let row= 0; row < matrix.length; row++){
    for (let i = 0; i < matrix[row].length; i++) {
        if (matrix[row][i] > min){
            min = matrix[row][i];
        }
    }
    console.log(min)
}

}*/