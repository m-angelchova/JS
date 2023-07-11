function oddOccurances(input){
    const words = input.split(' ').reduce((acc,curr) => {
        const currLow = curr.toLowerCase()
        if(acc.hasOwnProperty(currLow)){
            acc[currLow] += 1;
        }else{
            acc[currLow] = 1
        }
        return acc;
    }, {})

    let output = ""

    Object.keys(words).forEach(key =>{
        if(words[key] % 2 === 1)
        output += `${key} `;
    })

    console.log(output.trim())
}

oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')