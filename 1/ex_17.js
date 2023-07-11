function reveal(words, sentence){
    let wordsArr = words.split(", ")
    let sentenceArr = sentence.split(" ")
    for (let i = 0; i < wordsArr.length; i++) {
        let revealedWord = wordsArr[i];
        for (let k = 0; k < sentenceArr.length; k++) {
            let hiddenWord = sentenceArr[k];
            if(hiddenWord.includes('*')){
                if(hiddenWord.length === revealedWord.length){
                    sentence = sentence.replace(hiddenWord, revealedWord);
                }
            }
            
        }
    }

    console.log(sentence)
}


reveal('great, learning','softuni is ***** place for ******** new programming languages')