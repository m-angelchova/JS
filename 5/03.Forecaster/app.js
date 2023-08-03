function attachEvents() {
    document.querySelector("#submit").addEventListener('click', getWeatherData)

    const WEATHER_SYMBOLS = {
        "Sunny": "☀",
        "Partly sunny": "⛅",
        "Overcast" : "☁",
        "Rain" : "☂",
        "Degrees" : "°"
    }

    const API_URL = 'http://localhost:3030/jsonstore/forecaster/'

    const service = {
        async getLocation() {
            return (await fetch(`${API_URL}locations`)).json();
        },

        async getCurrentConditios(code){
           return (await fetch(`${API_URL}today/${code}`)).json();
        },
    
        async getUpcomingForecast(code){
            return (await fetch(`${API_URL}upcoming/${code}`)).json();
        }

    }


    async function getWeatherData(){
        try{
        const locationName = document.querySelector("#location").value
        const locationResponse = await service.getLocation();

        const location = locationResponse.find((l) => l.name.toLowerCase() === locationName.toLowerCase())

        const [currentConditions, threeDayForecast] = await Promise.all([service.getCurrentConditios(location.code), service.getUpcomingForecast(location.code)])

        document.querySelector("#forecast").style.display = 'block'
        document.querySelector("#current").appendChild(createCurrentWeatherContainer(currentConditions))
        document.querySelector("#upcoming").appendChild(createUpcomingWeatherContainer(threeDayForecast))
        } catch(_){
            const forecast = document.querySelector("#forecast")
            forecast.style.display = 'block'
            forecast.textContent = "Error"
            return;
        }
    }

    
    function createForecastElement(txtCtnt, ...classes){
        const element = document.createElement('span')
        element.textContent = txtCtnt
        element.classList.add(...classes)
        return element;
    }

    function createForecastDataHolder(forecast){
        const dataHolder = document.createElement('span')
        dataHolder.classList.add('condition')

        
        dataHolder.appendChild(createForecastElement(forecast.name, 'forecast-data'))
        dataHolder.appendChild(createForecastElement(`${forecast.forecast.low}°/${forecast.forecast.high}°`, 'forecast-data'))
        dataHolder.appendChild(createForecastElement(forecast.forecast.condition, 'forecast-data'))

        return dataHolder;
    }

    
    function createCurrentWeatherContainer(forecast){
        const currentWeatherContainer = document.createElement('div')
        currentWeatherContainer.classList.add('forecasts')
        currentWeatherContainer.appendChild(createForecastElement(WEATHER_SYMBOLS[forecast.forecast.condition], 'condition', 'symbol'))
        currentWeatherContainer.appendChild(createForecastDataHolder(forecast))
        return currentWeatherContainer;
    }

    function createUpcomingWeatherContainer(forecast){
        const upcomingForecastContainer = document.createElement('div')
        upcomingForecastContainer.classList.add('forecast-info')
        forecast.forecast.map(data => {
            const element = document.createElement('span')
            element.classList.add('upcoming')
            element.appendChild(createForecastElement(WEATHER_SYMBOLS[data.condition]), 'symbol')
            element.appendChild(createForecastElement(`${data.low}°/${data.high}°`, 'forecast-data'))
            element.appendChild(createForecastElement(data.condition, 'forecast-data'))

            upcomingForecastContainer.appendChild(element)
        })

        return upcomingForecastContainer;
    }

}

attachEvents();