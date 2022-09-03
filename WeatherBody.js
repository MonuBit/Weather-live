import './weather.css'
import {Button} from 'semantic-ui-react'
import moment from 'moment'




function Weatherbody({data}){
    console.log(data.name)
    console.log(data.weather[0].description)


    var kelvin = data.main.temp;
    var celsius = kelvin - 273.15;
    var temp = celsius.toFixed(2)

    const refresh = () => {
        window.location.reload();
      }

    return (
     <div>
        <div className="main">

            <div className="top">
            <p className="header">{data.name}</p>
            
            </div>
            <div className="flex">
            <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
            <p className="description">{data.weather[0].main}</p>
            </div>

            <div className="flex">
            <p className="temp">Temprature: {temp} &deg;C</p>
            <p className="temp">Humidity: {data.main.humidity} %</p>
            </div>

            <div className="flex">
            <p className="sunrise-sunset">Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            <p className="sunrise-sunset">Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            </div>

            </div>
    
  </div>
      

                
   
    )
}

export default Weatherbody;