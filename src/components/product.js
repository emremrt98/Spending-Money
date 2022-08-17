import { useState } from "react";

export default function Product({ name, price, img }) {
    const [count, setCount] = useState(0);
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
                    <button className="sell" disabled>Sat</button>
                    <p>{count}</p>
                    <button onClick={()=> setCount(count+1)} className="buy">Satın Al</button>
                </div>
            </div>
        </div>
    );
}


