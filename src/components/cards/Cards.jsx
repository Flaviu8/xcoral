import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Slider from '../slider/Slider';
import './Cards.css'
import data from "../../assets/cars/Cars.json"

function Cards() {
  return (
    <div className='cards-container'>
        <div className='title-cards'>
            <h1> 🚀 Alege masina visurilor tale</h1>
        </div>

        <div className='flex-container'>
        {
    data.cars.map((datas, index) => {
        return (
            <>
            <Card key={index} style={{ width: '18rem' }}>
            <Slider />
            <Card.Body>
                <Card.Title>{datas.title}</Card.Title>
                <Card.Text>
              {datas.description}
                </Card.Text>
                <Button variant="primary">Mai multe detalii</Button>
            </Card.Body>
            </Card>
        </>
        )
    })
}
        </div>

    </div>
  );
}

export default Cards;

