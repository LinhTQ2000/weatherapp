import { useState, useEffect } from "react"
const Locations = ["hai duong", "ninh binh", "ho chi minh", "hung yen", "thanh hoa"]
const APIKEY = "8d2de98e089f1c28e1a22fc19a24ef04"
function Listcity() {
    const [data, setData] = useState([])
    const [city, setCity] = useState('')
    useEffect(() => {
        return async () =>{
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
            );
            const { main } = await res.json();
            setData(main);

        }
    }, [city])
    
    return (
        <div className="othercity">
           {Locations.map((location) => (
                <button
                key={location}
                style={city === location ? { color: "#fff", backgroundColor: "#000" } : {}}
                onClick={() => setCity(location)}
                >
                {location}
                </button>
            ))}
            {data && (
                <div>
                    <p>Nhiệt độ (K): {data.temp}</p>
                    <p>Độ ẩm(%): {data.humidity}</p>
                    <p>Áp suất(P): {data.pressure}</p>
                </div>

            )}
        </div>
    );
}

export default Listcity
