function numberManipulation(num1, num2, num3){
    let summedNums = sum(num1, num2)

    console.log(substract(summedNums, num3))



function sum(num1, num2){
    return num1 + num2;
}

function substract(num1, num2){
    return num1 - num2;
}
}


numberManipulation(23, 6, 10)
