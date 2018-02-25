function aggregateTable(arr) {
    let towns = [];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].split('|').filter(a =>a !== '')
        towns.push(token[0].trim())
        sum += Number(token[1].trim())
    }
    console.log(towns.join(', '))
    console.log(sum)
}