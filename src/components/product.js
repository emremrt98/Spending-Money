import { useState } from "react";

export default function Product({ data: { name, price, img, amount, id }, totalPrice, setTotalPrice, myProduct, setMyProduct, total, setTotal }) {
    const [count, setCount] = useState(0);
    const selling = price => {
        setTotalPrice(totalPrice += price);
        setCount(count - 1)
    }
    const spellMoney = (price) => {
        if ((totalPrice - (Number(price)) <= 0)) {
            alert("Your money is not enough")
        }
        else {
            const control = myProduct.find(data => data.id === id);
            if (control) {
                control.amount += 1;
                setMyProduct([...myProduct.filter(data => data.id !== id), control]);
            } else {
                setMyProduct(prevList => ([...prevList, { ...prevList, name, price, amount, id }]));
            }

            setTotalPrice(totalPrice - (Number(price)));
            setCount(count + 1);
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
                    <p className="counter">{count}</p>
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


