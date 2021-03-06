function election(arr) {
    let result = {}

    for (let obj of arr) {
        let system = obj['system']
        let candidate = obj['candidate']
        let votes = obj['votes']
        if(result.hasOwnProperty(system)){
            if(result[system].hasOwnProperty(candidate)){
                result[system][candidate] += votes
            } else {
                result[system][candidate] = votes
            }
        }else {
            result[system] = {}
            result[system][candidate] = votes
        }
    }
    let totalSum = 0;
    for (let key in result) {
        let winner = Object.keys(result[key]).sort((a,b) => result[key][b]- result[key[a]])
        let sum =0
        for (let innerKey in result[key]) {
            sum += result[key][innerKey]
        }
        result[key] = {}
        result[key]['candidate']=winner
        result[key]['votes'] = sum
        totalSum += sum
    }
    let players = {}
    for (let key in result) {
        if(players.hasOwnProperty(result[key]['candidate'])){
            players[result[key]['candidate']] += result[key]['votes']
        } else {
            players[result[key]['candidate']] = result[key]['votes']
        }
    }
    let sortedPlayers = Object.keys(players).sort((a, b) => players[b] - players[a])
    let sortedPercent = Object.values(players).sort((a, b) => b-a).map(a => Math.floor(a /totalSum *100))
    let sortedSystems = Object.keys(result).sort((a,b ) => result[b]['votes'] - result[a]['votes'])

    if(sortedPercent[0] > 50){
        if (sortedPlayers.length >1 ){
            console.log(`${sortedPlayers[0]} wins with ${players[sortedPlayers[0]]} votes`)
            console.log(`Runner up: ${sortedPlayers[1]}`)
            for (let system of sortedSystems) {
                if(result[system]['candidate'] === sortedPlayers[1]){
                    console.log(system + ': ' + result[system]['votes'])
                }
            }
        }else{
            console.log(`${sortedPlayers[0]} wins with ${players[sortedPlayers[0]]} votes`)
            console.log(`${sortedPlayers[0]} wins unopposed`)
        }
    }else {
        console.log(`Runoff betweer ${sortedPlayers[0]} with ${sortedPercent[0]}%` +` and ${sortedPlayers[1]} with ${sortedPercent[1]}%`)
    }

}