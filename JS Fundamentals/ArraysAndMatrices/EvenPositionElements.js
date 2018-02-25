function evenPosition(arr) {
    console.log(arr.filter((el, i) => {
      return  i%2===0
    }).join(' '))
}