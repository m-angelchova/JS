function palindromeChecker(num){
    for (let index = 0; index < num.length; index++) {
        const numToCheck = num[index];
        console.log(isPalindrome(numToCheck))
    }

    function isPalindrome(number){
        let numberString = number.toString().split("");
        let backwardsNumber = '';
        for (let index = numberString.length - 1; index >= 0; index--) {
            backwardsNumber += numberString[index];
            
        }
        return number === Number(backwardsNumber);
    }
}

palindromeChecker([123,323,421,121]);
palindromeChecker( [32,2,232,1010]);
