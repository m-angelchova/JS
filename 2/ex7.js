function printMatrix(num){
    let numString = num.toString();
    let row = '';

    for (let k = 0; k < num; k++) {
        row += numString + ' '
    }

    for (let i = 0; i < num; i++) {
        console.log(row.trim())
    }
}

printMatrix(3)