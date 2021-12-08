
import './App.css';
import Mycity from './Mycity'
import Listcity from './Listcity'



function App() {
  return (
    <div className="App">
      <div className="Content">
        <h1>Ứng dụng thời tiết</h1>
        <Mycity />
        <h2>Thời tiết của một số thành phố lân cận</h2>
        <Listcity />
      </div>
    </div>
  )
  
}

export default App;
