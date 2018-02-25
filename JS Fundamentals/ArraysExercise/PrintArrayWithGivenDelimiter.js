function printArray(arr) {
    let delimiter = arr.pop(arr.length);
    console.log(arr.join(delimiter));
}