function settleCouples(roomsArr, coupleArr) {
    let rooms = extractRooms(roomsArr)

    for (let couple of coupleArr){
        if (couple.first.gender != couple.second.gender){
            settleDifferentGender(couple)
        }else {
            settleSameGender(couple)
        }
        if
    }
    function extractRooms(rooms) {
        let roomsMap = new Map
        for (let room of rooms) {
            let emptyBeds = room.Type==`double-bedded` ? 2 : 3
            roomsMap.set(room.Number, {[room.Type]: emptyBeds})
        }
        return rooms
    }
}