import './css/main.css';
import Header from './components/header';
import Product from './components/product';
import Card from './components/card';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

function App() {
  const [totalPrice, setTotalPrice] = useState(5000);
  const production = [
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000),
      img: faker.image.animals(480, 640, true) 
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000),
      img: faker.image.animals(480, 640, true) 
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000),
      img: faker.image.animals(480, 640, true) 
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000),
      img: faker.image.animals(480, 640, true) 
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000),
      img: faker.image.animals(480, 640, true) 
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000),
      img: faker.image.animals(480, 640, true) 
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000),
      img: faker.image.animals(480, 640, true) 
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000),
      img: faker.image.animals(480, 640, true) 
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000),
      img: faker.image.animals(480, 640, true) 
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000),
      img: faker.image.animals(480, 640, true) 
    }
  ]

  return (
    <div className="App">
      <Header totalPrice={totalPrice}/>
      <div className='hizala'>
        <div className='production'>
          {
            production.map((data, index) => (
              <div key={index}>
                <Product name={data.name} price={data.price} img={data.img} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
              </div>)
            )}

        </div>
        <div>
          <Card />
        </div>
      </div>

    </div>
  );
}

export default App;
