function rotateArray(arr, rotations){
    for (let index = 0; index < rotations; index++) {
        const firstEl = arr.shift();
        arr.push(firstEl);
    }

    console.log(arr.join(' '))
}


rotateArray([51, 47, 32, 61, 21], 2 )