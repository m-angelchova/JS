function passwordChecker(password){
    function lenghtCheck(passLenght){
        return passLenght >= 6 && passLenght <= 10;
    }

    function symbolCheck(pass){
        return /^[A-Za-z0-9]*$/.test(pass);
    }

    function contains2Digits(pass){
        return /(\D*\d){2,}/.test(pass)
    }

    let isValid = true;

    if(!lenghtCheck(password.length)){
        console.log("Password must be between 6 and 10 characters")
        isValid = false;
    }

    if(!symbolCheck(password)){
        console.log("Password must consist only of letters and digits")
        isValid = false;
    }

    if(!contains2Digits(password)){
        console.log("Password must have at least 2 digits")
        isValid = false;
    }

    if(isValid){
        console.log('Password is valid')
    }
    
}

passwordChecker('logIn');
passwordChecker('MyPass123');
passwordChecker('Pa$s$s');

