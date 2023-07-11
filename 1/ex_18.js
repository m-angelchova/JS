function hashtag(sentence){
    const sentenceArr = sentence.split(" ");
    for (let index = 0; index < sentenceArr.length; index++) {
        const word = sentenceArr[index]

        if(word.match('^#[a-zA-z]+')){
            console.log(word.substring(1))
        }
     
    }
}

hashtag('Nowadays everyone uses # to tag a #special word in #socialMedia')