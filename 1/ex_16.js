function sortNumbers(arr){
    const sortedArr = arr.sort((a, b) => a - b);
    const resultArr = [];
    const rotations = arr.length;


    for (let index = 0; index < rotations; index++) {
        if (index % 2 === 0){
            resultArr.push(sortedArr.shift())
        }else{
            resultArr.push(sortedArr.pop())
        }
    }

    return resultArr;
}


sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])