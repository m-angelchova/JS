function checkNumber(num){
    const digitString = num.toString();
    let sum = 0;
    let isTheSame = true;
    for (let index = 0; index < digitString.length; index++) {
        sum += Number(digitString[index]);
        if (index >= 1 && digitString[index] !== digitString[index - 1]){
            isTheSame = false;
        }
    }
    console.log(isTheSame);
    console.log(sum);
}
checkNumber(222222);
