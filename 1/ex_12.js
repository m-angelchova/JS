function cooking(num, ...commands){
    let sum = Number(num);
    for (let index = 0; index < commands.length; index++) {
        const command = commands[index];

        switch(command){
            case "chop":
                sum = sum / 2;
                break;
            case "dice":
                sum = Math.sqrt(num);
                 break; 
             case "spice":
                sum += 1;
                break;
            case "bake":
                sum = sum * 3;
                break; 
            case "fillet":
                sum -= sum * 0.2;
                break;  
        }

        console.log(sum);
    }
}

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');