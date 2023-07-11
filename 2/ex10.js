function factorialDivision(num1, num2){
    function factorialOf(number){
        if(number === 1 || number === 0){
            return 1;
        }

        let result = 1;
        for (let index = number; index > 1; index--) {
            result *= index;
        }
        return result;
    }


    let division = factorialOf(num1) / factorialOf(num2);
    console.log(division.toFixed(2))
}

factorialDivision(6, 2)