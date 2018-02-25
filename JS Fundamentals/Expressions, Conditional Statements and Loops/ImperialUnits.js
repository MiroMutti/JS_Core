function imperialUnits(inputInches) {
    let foot = 0;
    let inches = 0;

    for (let i = 1; i <= inputInches; i++) {
        if (inches<12){
            inches++;
        }
        if(inches>=12){
            foot +=1;
            inches = 0;
        }
    }
    console.log(`${foot}'`+'-'+`${inches}"`)
}