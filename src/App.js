import './css/main.css';
import Header from './components/header';
import Product from './components/product';
import Card from './components/card';
import { useState } from 'react';

function App() {
  const [totalPrice, setTotalPrice] = useState(10000000);
  const [myProduct, setMyProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const production = [
    {
      id: 1,
      amount: 1,
      name: "Hp Omen 15 Series",
      price: 24650,
      img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06999623.png"
    },
    {
      id: 2,
      amount: 1,
      name: "Hp Pavillion 15",
      price: 14540,
      img: "https://in-media.apjonlinecdn.com/catalog/product/c/0/c06451238_2.png"
    },
    {
      id: 3,
      amount: 1,
      name: "Iphone X",
      price: 34890,
      img: "https://www.banco.com.tr/ProductImages/506323/big/194252098578.png"
    },
    {
      id: 4,
      amount: 1,
      name: "Samsung Galaxy S10",
      price: 16500,
      img: "https://e-cdn.s3.eu-central-1.amazonaws.com/assets/_web/img/product/2022/04/m_samsung-galaxy-s10-plus-2237-1-1650289844.webp"
    },
    {
      id: 5,
      amount: 1,
      name: "Lüks Tekne",
      price: 4000000,
      img: "https://tertemizaraba.com/wp-content/uploads/2018/07/yat-tekne-paketi-1.png"
    },
    {
      id: 6,
      amount: 1,
      name: "Tekne",
      price: 489000,
      img: "https://st1.myideasoft.com/idea/dk/71/myassets/products/866/safter-marin-850-fiber-tekne-1.png?revision=1645116656"
    },
    {
      id: 7,
      amount: 1,
      name: "Volkswagen",
      price: 366000,
      img: "https://www.dogusoto.com.tr/Dosyalar/Vehicle%20Color/VW%20Binek/Tiguan/Life/gu%CC%88nbatimi-mavisi-v2v2.png?w=470&h=320"
    },
    {
      id: 8,
      amount: 1,
      name: "Jeep",
      price: 680000,
      img: "https://61saatcom.teimg.com/61saat-com/images/haberler/2019/08/internet_uzerinden_sahibinden_araba_ilani_nasil_verilir_h666524_78224.png"
    },
    {
      id: 9,
      amount: 1,
      name: "Porche",
      price: 2800000,
      img: "https://uzlaristanbul.com.tr/img/section_title/1.png"
    },
    {
      id: 10,
      amount: 1,
      name: "Monitör",
      price: 4800,
      img: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06611674.png"
    }
  ];

  return (
    <div className="App">
      <Header totalPrice={totalPrice} />

      <div className='hizala'>
        <div className='production'>
          {
            production.map((data, index) => (
              <div key={index}>
                <Product
                  data={data}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                  myProduct={myProduct}
                  setMyProduct={setMyProduct}
                  total={total}
                  setTotal={setTotal}
                />
              </div>)
            )}

        </div>
        <div>
          <Card myProduct={myProduct} total={total} />
        </div>
      </div>

    </div>
  );
}

export default App;
