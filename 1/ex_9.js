function priceCalc(fruit, weight, price){
    let totalCost = 0;

    weight = (weight / 1000).toFixed(2);
    totalCost = (weight * price).toFixed(2);


    console.log(`I need $${totalCost} to buy ${weight} kilograms ${fruit}.`);
}

priceCalc('banana', 2500, 1.80);