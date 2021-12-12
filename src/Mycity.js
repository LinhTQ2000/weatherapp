import {useEffect, useState} from 'react'


function Mycity() {
    const key = 'bbb193cc97321c3578f9ec7c06d68131'
    const [data, setData] = useState({
        name:'',
        main: {
            temp: '',
            temp_min: '',
            temp_max: '',
        },
        weather:{
            description: '',
        }
    })
    useEffect(() =>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=${key}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    },[])
    return (
        <div className="mycity">
            <p><h3>{data.name}</h3></p>
            <p><h1>{data.main.temp}K</h1></p>
            <p><h3>{data.weather.description}</h3></p>
            <p>H:{data.main.temp_max}K L:{data.main.temp_min}K</p>
        </div>
    );
}

export default Mycity
