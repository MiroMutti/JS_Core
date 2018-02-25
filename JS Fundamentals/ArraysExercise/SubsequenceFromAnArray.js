function extractIncreaseElementsOfArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>=arr[i-1]){
            console.log(arr[i])
        }
    }
}