function solution(grad) {
     grad = grad % 400;
    let degree = grad * 0.9;
    let degreeOutput = degree>0 ? degree : degree + 360;
    return degreeOutput;
}