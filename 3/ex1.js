function nameAndNumber(arr){
   const employees = arr.reduce((acc, curr) =>{
    acc[curr] = curr.length;
    return acc;
   }, {})

   Object.entries(employees).forEach(([name, number]) => {console.log(`Name: ${name} -- Personal Number: ${number}`)})
}


nameAndNumber(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])
