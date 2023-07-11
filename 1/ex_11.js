function speedLimit(speed, area){
    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    const currentLimit = speedLimits[area];
    const speedDifference = speed - currentLimit;
    let speedingStatus = '';

    if(speedDifference <= 0){
        console.log(`Driving ${speed} km/h in a ${currentLimit} zone`);
        return;
    }

    if (speedDifference <= 20){
        speedingStatus = 'speeding'
    }else if (speedDifference <= 40){
        speedingStatus = 'excessive speeding'
    }else{
        speedingStatus = 'reckless driving'
    }

    console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${currentLimit} - ${speedingStatus}`)
}

speedLimit(40, 'city')


const speedingMsg = speedDifference <= 20
    ? 'speeding'
    : speedDifference <= 40
    ? 'excessive speeding'
    : 'reckless driving';