import { useState } from "react";

export default function Product({ name, price, img, totalPrice, setTotalPrice }) {
    const [count, setCount] = useState(0);
    const spellMoney = (price) => {
        setTotalPrice(totalPrice - (Number(price)));
        setCount(count + 1)
    }
    return (
        <div className="product">
            <div>
                <div className="img">
                    <img src={img} ></img>
                </div>
                <div className="info">
                    <h3>{name}</h3>
                    <p>{price}</p>
                </div>
                <div className="btn">
                    {count ? <button onClick={() => setCount(count - 1)} className="sell">Sat</button> : <button className="sell" disabled>Sat</button>}
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


