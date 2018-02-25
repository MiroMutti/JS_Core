function expedition(primaryMatrix, secondaryMatrix, targetCoordinates, startCoordinate) {
    let steps = 0;
    //map matrix
    for (let coordinate of targetCoordinates) {
        modifyPrimaryMatrix(coordinate)
    }

    //iter over the only path - up, down, left, right
    let previosDirection
    let currentRow = startCoordinate[0]
    let currentCol = startCoordinate[1]
    while(true){

        //down
        if(currentRow+1<primaryMatrix.length && primaryMatrix[currentRow+1][currentCol]==0 && previosDirection !='up'){
            previosDirection='down'
            currentRow++
        }
        //right
       else if(currentCow+1<primaryMatrix[0].length && primaryMatrix[currentRow][currentCol+1]==0 && previosDirection!='left'){
            previosDirection='right'
            currentCol++
        }
        //up
       else if(currentRow-1 >=0 && primaryMatrix[currentRow-1][currentCol]==0 && previosDirection !='down'){
            previosDirection='up'
            currentRow--
        }
        //left
        else if(currentCow-1>= 0 && primaryMatrix[currentRow][currentCol-1]==0 && previosDirection!='right'){
            previosDirection='left'
            currentCol--
        } else break

        steps++
    }
    //where we reached

    console.log(steps)
    definePosition(currentRow, currentCol)
    
    function modifyPrimaryMatrix([targetRow, targetCol]) {
        for (let row = 0; row < secondaryMatrix.length; row++) {
            let secondaryMatrixRow =  secondaryMatrix[row]
            if(primaryMatrix[targetRow + row][targetCol]!=undefined && primaryMatrix[targetRow + row][targetCol]){
                for (let col = 0; col < secondaryMatrix[0].length; col++) {
                    if(secondaryMatrix[row][col]== 1){
                       primaryMatrix[targetRow+row][targetCol + col] =
                           primaryMatrix[targetRow+row][targetCol + col]==1? 0 : 1
                    }
                }
            }
        }
    }

    function definePosition(endRow, endCol){
        let output = ''
        //top
        if(endRow == 0){
            output = 'Top'
        }
        //right
        else if(endCol ==0){
            output == 'Left'
        }
        //bottom
        else if(endRow==primaryMatrix.length-1){
            output =='Bottom'
        }
        //right
        else if (endCol == primaryMatrix[0].length-1){
            output == 'Right'
        }
        //deadEnd
        else if(endRow<primaryMatrix.length/2 && endCol > primaryMatrix[0].length /2){
            output = 'Dead end 1'
        }
        else if(endRow<primaryMatrix.length/2 && endCol <= primaryMatrix[0].length /2){
            output = 'Dead end 2'
        }
        else if(endRow>primaryMatrix.length/2 && endCol <= primaryMatrix[0].length /2){
            output = 'Dead end 3'
        }
        else if(endRow>primaryMatrix.length/2 && endCol > primaryMatrix[0].length /2){
            output = 'Dead end 4'
        }
        console.log(output);

    }
}