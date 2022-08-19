import { useState } from "react";

export default function Product({ name, price, img, totalPrice, setTotalPrice, setMyProduct, total, setTotal }) {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    const selling = price => {
        setTotalPrice(totalPrice += price);
        setCount(count - 1)
    }
    const spellMoney = (price) => {
        if ((totalPrice - (Number(price)) <= 0)) {
            alert("Your money is not enough")
        }
        else {
            setTotalPrice(totalPrice - (Number(price)));
            setCount(count + 1);
            setCount2(count2 + 1);
            setMyProduct(prevList => ([...prevList, { ...prevList, name, price, count2 }]));
            setTotal(total + price);
        }
    }

    return (
        <div className="product">
            <div>
                <div className="img">
                    <img src={img} />
                </div>
                <div className="info">
                    <h3>{name}</h3>
                    <p>{price}</p>
                </div>
                <div className="btn">

                    {count ? <button onClick={() => selling(price)} className="sell">Sat</button> : <button className="sell" disabled>Sat</button>}
                    <p>{count}</p>
                    <button onClick={(e) => {
                        e.preventDefault();
                        spellMoney(price)
                    }}
                        className="buy">Satın Al</button>
                </div>
            </div>
        </div>
    );
}


