import React from "react"
import {useState,useEffect} from "react"
import axios from "axios"
import Weatherbody from "./WeatherBody"

function WeatherSetting(){
    const [lats,setlat] = useState('')
    const [longs,setlong] = useState('')
    const [data,setdata] = useState([])

    useEffect(()=>{
            navigator.geolocation.getCurrentPosition(function(position){
                setlat(position.coords.latitude)
                setlong(position.coords.longitude)

            })
            
            axios.post(`https://api.openweathermap.org/data/2.5/weather?lat=${lats}&lon=${longs}&appid=10f001cd96ccde66b7b60b6353432eb0`).then(result=>{
                setdata(result.data)
                console.log(result.data)
              
            });

            
    },[lats,longs])
   
    
    return (
        
        <div>{
            (typeof data.main !='undefined') ?(
               <Weatherbody data = {data}/>
            ):(<div><h2>Loading</h2></div>)
        }</div>
    )
}

export default WeatherSetting;