import './Cards.css'
import data from '../../assets/cars/Cars.json'
import tick from '../../assets/tick.png'


export default function Cards() {
    console.log(data.cars)
  return (
    <div className='cards-container'>
        <div className="title">
            <h1>Alege mașina visurilor tale</h1>
        </div>
        <div className='main'>
        {
            data.cars.map( (datas, index) => { 
                return (

                <div key={index} className='cards'>
                <img src={datas.photo} />
                <div className='text'>
                    <div className='model-title'>
                        <h3>{datas.title}</h3>
                        {datas.accidents === "yes" ? <img src={tick} alt='tick'/> : ""}
                    </div>
                    <div className='about-container'>
                        <h3>Preț: {datas.price} RON</h3>
                    <h4>Descriere</h4>
                      <p>{datas.description}</p>
                    </div>
                </div>
            </div>
        
            )
           
            })
        }
        </div>
        
       
    </div>
  )
}
