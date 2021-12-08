import {useState} from 'react'


const APIKEY = "8d2de98e089f1c28e1a22fc19a24ef04"
function Mycity() {
    const [city, setCity] = useState("");
    const [result, setResult] = useState({});
    const getWeather = async (e) => {
        e.preventDefault();
        if (!city) {
            return;
        }
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
        );
        const { main } = await res.json();
        setResult(main);
    };
    return (
        <div className="mycity">
            <form onSubmit={getWeather}>
                <div>
                <label>Nhập thành phố của bạn</label>
                <br/>
                <input value={city} onChange={(e) => setCity(e.target.value)} />
                </div>
                <button type="submit">Lấy dữ liệu thời tiết</button>
            </form>
            {result && (
                <div>
                    <p>Nhiệt độ (K): {result.temp}</p>
                    <p>Cảm giác như(K): {result.feels_like}</p>
                    <p>Độ ẩm(%): {result.humidity}</p>
                    <p>Áp suất(P): {result.pressure}</p> 
                    <p>Cao nhất: {result.temp_max}</p>
                    <p>Thấp nhất: {result.temp_min}</p>
                </div>
            )}
        </div>
    );
}

export default Mycity
