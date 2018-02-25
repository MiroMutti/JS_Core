function compoundInterest(data) {
    let sum = data[0];
    let interestRate = data[1]/100;
    let frequency = 12/data[2];
    let years = data[3];

    let f = sum * Math.pow(1 + interestRate/ frequency, frequency* years);

    console.log(Math.round(f*100)/100);
}