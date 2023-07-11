function charInRange(char1, char2){
    let begin = Number(char1.charCodeAt(0));
    let end = Number(char2.charCodeAt(0));
    let charsInRangeArr = []

    if (begin > end){
        let temp = begin;
        begin = end;
        end = temp;
    }

    for (let index = begin + 1; index < end; index++) {
        charsInRangeArr.push(String.fromCharCode(index))
    }

    console.log(charsInRangeArr.join(" "))
}
charInRange('a','d');
charInRange('#',':');
charInRange('C','#');
