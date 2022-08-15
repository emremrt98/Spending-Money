import './css/main.css';
import Header from './components/header';
import Product from './components/product';
import Card from './components/card';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='hizala'>
        <div className='production'>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div>
          <Card />
        </div>
      </div>

    </div>
  );
}

export default App;
