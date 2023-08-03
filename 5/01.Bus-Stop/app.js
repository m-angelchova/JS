function getInfo() {
    const busStopId = document.querySelector('#stopId').value;
    const busList = document.querySelector('#buses')
    const busStopName = document.querySelector('#stopName')

    busList.innerHTML = ""
    
    fetch(`http://localhost:3030/jsonstore/bus/businfo/${busStopId}`)
        .then(res => res.json())
        .then(busStop =>{
            busStopName.textContent = busStop.name
            Object.entries(busStop.buses).map(([busNum, timeInMin]) => {
                const item = document.createElement('li')
                item.textContent = `Bus ${busNum} arrives in ${timeInMin} minutes`
                busList.appendChild(item)
            })
        })
        .catch(() =>{
            busStopName.textContent = 'Error'
        })
}


async function secondSolution(){ //just another way to write the same solution - using async function
    const busStopId = document.querySelector('#stopId').value;
    const busList = document.querySelector('#buses')
    const busStopName = document.querySelector('#stopName')

    busList.innerHTML = ""

    const service = {
        busInfoURL: (ID) => `http://localhost:3030/jsonstore/bus/businfo/${ID}`,
    }

    let busStopInfo;
    
    try{
        const response = await fetch(service.busInfoURL(busStopId))
        busStopInfo = await response.json();
    }catch(_){
        busStopName.textContent = 'Error'
        return;
    }

    busStopName.textContent = busStopInfo.name

    Object.entries(busStopInfo.buses).map(([busNum, timeInMin]) => {
        const item = document.createElement('li')
        item.textContent = `Bus ${busNum} arrives in ${timeInMin} minutes`
        busList.appendChild(item)
    })
}