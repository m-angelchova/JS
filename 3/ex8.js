function piccolo(input){
    const parking = [];
    input.forEach(entry =>{
        const [command, licensePlate] = entry.split(', ');
        if (command === "IN"){
            parking.push(licensePlate)
        }else{
            const index = parking.indexOf(licensePlate);
            parking.splice(index, 1);
        }
    })

    if(parking.length === 0){
        console.log("Parking Lot is Empty")
    }else{
        parking.sort().forEach(el => console.log(el));
    }
}



function piccoloWithSet(input){
    const parking = new Set();
    input.forEach(entry =>{
        const [command, licensePlate] = entry.split(', ');
        if (command === "IN"){
            parking.add(licensePlate)
        }else{
            parking.delete(licensePlate)
        }
    })

    const parkingArr = Array.from(parking).sort();

    if(parkingArr.length === 0){
        console.log("Parking Lot is Empty")
    }else{
        parkingArr.forEach(el => console.log(el));
    }
}



piccoloWithSet(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)
