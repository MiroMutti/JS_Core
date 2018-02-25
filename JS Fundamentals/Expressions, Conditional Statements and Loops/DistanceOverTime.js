function solution([speed1km, speed2km, seconds]) {
    let speed1 = speed1km*0.27777777777778;
    let speed2 = speed2km*0.27777777777778;
    let distance1 = speed1*seconds;
    let distance2 = speed2*seconds;
    console.log(Math.abs(distance1-distance2));
}