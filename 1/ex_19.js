function stringSubstring(word, text){
    const textArr = text.split(" ");
    const wordToSearch = word.toLowerCase();
    let isFound = false;

    for (let index = 0; index < textArr.length; index++) {
        const wordToCheck = textArr[index].toLowerCase();
        
        if(wordToCheck === wordToSearch){
            isFound = true;
            break;
        }
    }

    if(isFound){
        console.log(word)
    }else{
        console.log(`${word} not found!`)
    }
}

stringSubstring('javascript', 'JavaScript is the best programming language')
stringSubstring('python', 'JavaScript is the best programming language')