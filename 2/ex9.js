function loadingBar(number){
    let percents = number / 10;
    let loadingString = "["

    for (let k = 0; k < percents; k++) {
        loadingString += '%'
            
    }

    for (let index = 0 + percents; index < 10; index++) {
        loadingString += '.'
    }

    loadingString += ']'

    
    if(percents < 10){
        console.log(`${number}% ` + loadingString)
        console.log("Still loading...")
    }else{
        console.log("100% Complete!")
        console.log(loadingString)
    }
}

loadingBar(10)

