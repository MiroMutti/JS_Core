function compareAge(minAge, name1, age1, name2, age2){
    let object1 = {name: name1, age: age1};
    let object2 = {name: name2, age: age2};
    if (object1.age >= minAge){
        console.log(object1);
    }
    if (object2.age>= minAge){
        console.log(object2);
    }
}