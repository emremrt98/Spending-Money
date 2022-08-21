
export default function Card({ myProduct, setMyProduct, total, setTotal, setTotalPrice }) {

    const reset = () => {
        setMyProduct([]);
        setTotal(0);
        setTotalPrice(10000000)
    }

    return (
        <div className="card">
            <div className="card-header">
                <h2>Alışveriş Detayları</h2>
                <ul>
                    {
                        myProduct.map((product, index) => (
                            <li style={{ listStyle: "none", margin: 10 }} key={index}>{product.name} x{product.amount}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="card-btn">
                <button onClick={() => reset()}>Sepeti Sıfırla</button>
                <h2>Toplam ${total}</h2>
            </div>
        </div>
    )
}