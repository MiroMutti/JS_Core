function decrypt(keyword, text) {
    let message = text.substring(text.indexOf(keyword)+ keyword.length,text.lastIndexOf(keyword))
    let locationPattern = /(north|east)\D*(\d{2})[^\,]*\D*(,{1})\D*(\d{6})/gi
    let match = locationPattern.exec(text)
    let latitude
    let longitude

    while(match){
        if (match[1].toLowerCase()=='north'){
            latitude = `${match[2]}.${match[4]} N`
        }else if (match[1].toLowerCase()=='east'){
            longitude = `${match[2]}.${match[4]} E`
        }
        match = locationPattern.exec(text)
    }
    console.log(latitude)
    console.log(longitude);
    console.log(`Message: ${message}`);
}