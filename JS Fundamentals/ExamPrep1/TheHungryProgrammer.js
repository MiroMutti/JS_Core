function snatchMeals(meals, commands) {
    let mealsEaten = 0;
    let actions = {
        Serve : () => {
            if(meals.length>0)
                console.log(`${meals.pop()} served!`)
            },
        Add: ([meal]) => {
            if (meal != '')
        meals.unshift(meal)},
        Shift: ([startIdx, endIdx]) => {
            if (startIdx && endIdx && startIdx>=0 && endIdx<meals.length && startIdx<endIdx){
                let temp = meals [startIdx]
                meals [startIdx] = meals[endIdx]
                meals[endIdx] = temp
            }
        },
        Eat: () =>{
            if(meals.length>0){
                console.log(`${meals.shift()} eaten`)
                mealsEaten ++
            }
        },
        Consume: ([startIdx, endIdx])=> {
            if (startIdx && endIdx && startIdx>=0 && endIdx<meals.length && startIdx<endIdx){
                let portionsCount = endIdx -startIdx +1
                mealsEaten+=portionsCount;
                meals.splice(startIdx, portionsCount)
                console.log("Burp!");
            }
    },
        End: () => {
            if(meals.length>0){
                console.log(`Meals left: ${meals.join(', ')}`)
            } else {
                console.log("The food is gone")
            }
            console.log(`Meals eaten: ${mealsEaten}`)
        }

    }
    for (let commandArgs of commands) {
        let commandParams = commandArgs.split(' ')
        let action = commandParams.shift()

        if(actions[action]){
            actions[action](commandParams)
            if(action =='End'){
                break
            }
        }
    }
}