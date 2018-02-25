function matchTheDates(str) {
    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2,2})-([0-9]{4,4})\b/gm
    let match = regex.exec(str)
    while (match) {
        console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`)
        match = regex.exec(str)
    }
}