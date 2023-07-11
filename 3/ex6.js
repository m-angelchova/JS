function wordsTracker(input){

    const [wordsToSearch, ...words] = input;

    const wordsTracked = wordsToSearch.split(" ").reduce((acc, curr) =>{
        acc[curr] = 0
        return acc;
    }, {});

    words.forEach((word) =>{
        if(wordsTracked.hasOwnProperty(word)){
            wordsTracked[word] += 1;
        }
    })

    
    wordsTracked.filter

    Object.keys(wordsTracked).sort(function(a,b){return wordsTracked[b]-wordsTracked[a]}).forEach((word) => {console.log(`${word} - ${wordsTracked[word]}`)})
   
}

wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]);


