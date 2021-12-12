import {useState, useEffect} from 'react'

function Listcity() {
    const key = 'bbb193cc97321c3578f9ec7c06d68131'
    const [data1, setData1] = useState({
        name:'',
        main: {
            temp: '',
            temp_min: '',
            temp_max: '',
        },
        weather:[{
            description: '',
        }],
        sys: {
            country: '',
        }
    })
    const [data2, setData2] = useState({
        name:'',
        main: {
            temp: '',
            temp_min: '',
            temp_max: '',
        },
        weather:[{
            description: '',
        }],
        sys: {
            country: '',
        }
    })
    const [data3, setData3] = useState({
        name:'',
        main: {
            temp: '',
            temp_min: '',
            temp_max: '',
        },
        weather:[{
            description: '',
        }],
        sys: {
            country: '',
        }
    })
    const [data4, setData4] = useState({
        name:'',
        main: {
            temp: '',
            temp_min: '',
            temp_max: '',
        },
        weather:[{
            description: '',
        }],
        sys: {
            country: '',
        }
    })
    const [data5, setData5] = useState({
        name:'',
        main: {
            temp: '',
            temp_min: '',
            temp_max: '',
        },
        weather:[{
            description: '',
        }],
        sys: {
            country: '',
        }
    })
    
    
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=hai duong&appid=${key}`)
            .then(response => response.json())
            .then(data => setData1(data))
    }, [])

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=${key}`)
            .then(response => response.json())
            .then(data => setData2(data))
    }, [])

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=thai binh&appid=${key}`)
            .then(response => response.json())
            .then(data => setData3(data))
    }, [])

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=ho chi minh&appid=${key}`)
            .then(response => response.json())
            .then(data => setData4(data))
    }, [])

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=ninh binh&appid=${key}`)
            .then(response => response.json())
            .then(data => setData5(data))
    }, [])

    

    return (
        <div className="othercity">
           <div className="myLocation">
                <div className="myLocation-content">
                    <p className="myLocation-name">{data1.name}</p>
                    <p className="myLocation-country">{data1.sys.country}</p>
                    <p className="myLocation-weather">{data1.weather[0].description}</p>
                </div>
                <div className="myLocation-temp">
                    <p className="myLocation-tempmain">{data1.main.temp}K</p>
                    <p className="myLocation-tempextra">H:{data1.main.temp_max}K  L:{data1.main.temp_min}K</p>
                </div>
            </div>
            <div className="myLocation">
                <div className="myLocation-content">
                    <p className="myLocation-name">{data2.name}</p>
                    <p className="myLocation-country">{data2.sys.country}</p>
                    <p className="myLocation-weather">{data2.weather[0].description}</p>
                </div>
                <div className="myLocation-temp">
                    <p className="myLocation-tempmain">{data2.main.temp}K</p>
                    <p className="myLocation-tempextra">H:{data2.main.temp_max}K  L:{data2.main.temp_min}K</p>
                </div>
            </div>
            <div className="myLocation">
                <div className="myLocation-content">
                    <p className="myLocation-name">{data3.name}</p>
                    <p className="myLocation-country">{data3.sys.country}</p>
                    <p className="myLocation-weather">{data3.weather[0].description}</p>
                </div>
                <div className="myLocation-temp">
                    <p className="myLocation-tempmain">{data3.main.temp}K</p>
                    <p className="myLocation-tempextra">H:{data3.main.temp_max}K  L:{data3.main.temp_min}K</p>
                </div>
            </div>
            <div className="myLocation">
                <div className="myLocation-content">
                    <p className="myLocation-name">{data4.name}</p>
                    <p className="myLocation-country">{data4.sys.country}</p>
                    <p className="myLocation-weather">{data4.weather[0].description}</p>
                </div>
                <div className="myLocation-temp">
                    <p className="myLocation-tempmain">{data4.main.temp}K</p>
                    <p className="myLocation-tempextra">H:{data4.main.temp_max}K  L:{data4.main.temp_min}K</p>
                </div>
            </div>
            <div className="myLocation">
                <div className="myLocation-content">
                    <p className="myLocation-name">{data5.name}</p>
                    <p className="myLocation-country">{data5.sys.country}</p>
                    <p className="myLocation-weather">{data5.weather[0].description}</p>
                </div>
                <div className="myLocation-temp">
                    <p className="myLocation-tempmain">{data5.main.temp}K</p>
                    <p className="myLocation-tempextra">H:{data5.main.temp_max}K  L:{data5.main.temp_min}K</p>
                </div>
            </div>
        </div>
    );
}

export default Listcity
