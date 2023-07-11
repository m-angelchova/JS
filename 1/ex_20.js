function pascalCaseSplitter(sentence){
    const result = [];
    const sentenceArr = sentence.split("");
    let currentWord = `${sentenceArr[0]}`;

    for (let index = 1; index < sentenceArr.length; index++) {
        const letter = sentenceArr[index];

        if(letter.match("[A-Z]")){
            result.push(currentWord);
            currentWord = letter;
        }else{
            currentWord+= letter
        }
        
    }
    result.push(currentWord);
    console.log(result.join(', '))
}


pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')