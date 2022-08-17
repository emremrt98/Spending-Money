import './css/main.css';
import Header from './components/header';
import Product from './components/product';
import Card from './components/card';
import { faker } from '@faker-js/faker';

function App() {

  const production = [
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000, 0, '$'),
      img: faker.image.fashion()
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000, 0, '$'),
      img: faker.image.fashion()
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000, 0, '$'),
      img: faker.image.fashion()
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000, 0, '$'),
      img: faker.image.fashion()
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000, 0, '$'),
      img: faker.image.fashion()
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000, 0, '$'),
      img: faker.image.fashion()
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000, 0, '$'),
      img: faker.image.fashion()
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000, 0, '$'),
      img: faker.image.fashion()
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000, 0, '$'),
      img: faker.image.fashion()
    },
    {
      name: faker.commerce.product(),
      price: faker.commerce.price(100, 2000, 0, '$'),
      img: faker.image.fashion()
    }
  ]


  console.log(production);
  return (
    <div className="App">
      <Header />
      <div className='hizala'>
        <div className='production'>
          {
            production.map((data, index) => (
              <div key={index}>
                <Product name={data.name} price={data.price} img={data.img} />
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
