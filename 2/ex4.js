function oddEvenSums(number){
    let oddSum = 0;
    let evenSum = 0;
    

    let digitsArr = number.toString().split('')

    for (let index = 0; index < digitsArr.length; index++) {
        const element = Number(digitsArr[index]);

        if(element % 2 === 0){
            evenSum += element
        }else{
            oddSum += element
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddEvenSums(1000435)
oddEvenSums(3495892137259234)
