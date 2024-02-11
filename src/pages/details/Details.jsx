import './Details.css'
import Carousel from 'react-bootstrap/Carousel';
import data from "../../assets/cars/Cars.json"




export default function Details() {
  return (
    <div>
        <div className='details-title'>
           <h1>Vizualizare anunt</h1>
        </div>
        <div className='hline'></div>
        <div className="details-container">
        <div className='container-b'>
        <div>
            <h2>Audi a6</h2>
            <p>Satu Mare</p>
        </div>
        <div className='container-price'>
            <p>23000 RON</p>
        </div>
        </div>
        </div>
     
            <Carousel  data-bs-theme="dark">
            {data.cars.map((datas, index)=>{
            return (
            <Carousel.Item  key={index}>
           
                <img
                    src={datas.photo}
                    alt="First slide"
                    />
                </Carousel.Item>
                   )
                })}
            </Carousel>
    </div>
  )
}
