function smallestNumber(num1, num2, num3){
    let numArr = [num1, num2, num3]
    let minNum = Number.MAX_SAFE_INTEGER;

    for (let index = 0; index < numArr.length; index++) {
       if (minNum > numArr[index]){
        minNum = numArr[index]
       }
        
    }
    console.log(minNum)
}


smallestNumber(2,5,3)
smallestNumber(600, 342, 31)