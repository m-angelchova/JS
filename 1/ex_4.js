function numPrint(start, end){
    const numbers = [];
    let sum = 0;
    for (let index = start; index <= end; index++) {
        sum += index;
        numbers.push(index);
    }
    console.log(numbers.join(" "))
    console.log("Sum: " + sum);
}

numPrint(5,10);