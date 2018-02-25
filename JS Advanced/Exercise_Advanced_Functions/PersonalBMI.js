function personalBMI(name, age, weight, height) {
    let patient ={
        name: name,
        personalInfo:{
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(weight /(height * height / 10000))
    }
    patient.status = patient.BMI < 18.5 ? 'underweight' : patient.BMI < 25 ? 'normal' : patient.BMI < 30 ? 'overweight' : 'obese'

    if (patient.status == 'obese'){
        patient.recommendation = 'admission required'
    }
    return patient
}