function moviePrice(input) {
    let movieTitle = input[0].toLowerCase();
    let day = input[1].toLowerCase();

    if (movieTitle=="the godfather"){
        switch (day){
           case "monday": console.log(12); return
           case "tuesday": console.log(10);return
            case "wednesday":
            case "friday":console.log(15); return
            case "thursday": console.log(12.50);return
            case "saturday": console.log(25);return
            case "sunday": console.log(30);return

            default: console.log('error');return
        }
    } else
    if (movieTitle=="schindler's list"){
        switch (day){
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                console.log(8.50);return
            case "saturday":
            case "sunday":
                console.log(15); return

            default: console.log('error') ;return
        }
    }else if (movieTitle== "casablanca"){
        switch (day){
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                console.log(8); return
            case "saturday":
            case "sunday":
                console.log(10); return

            default: console.log('error'); return
        }
    } else if (movieTitle=="the wizard of oz"){
        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                console.log(10); return
            case "saturday":
            case "sunday":
                console.log(15); return

            default:
                console.log('error')
        }
    } else console.log('error')
}