function sumDigits(num){
    const digitString = num.toString();
    let sum = 0;
    for (let index = 0; index < digitString.length; index++) {
        sum += Number(digitString[index]);
    }

    console.log(sum);
}
sumDigits(245678);
