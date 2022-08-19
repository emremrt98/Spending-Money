
export default function Card({ myProduct, total }) {

    console.log(myProduct);

    return (
        <div className="card">
            <div className="card-header">
                <h2>Alışveriş Detayları</h2>
                <ul>
                    {
                        myProduct.map((product, index) => (
                            <li style={{ listStyle: "none", margin: 10 }} key={index}>{product.name} x1</li>
                        ))
                    }
                </ul>
            </div>
            <div className="card-btn">
                <button>Sepeti Sıfırla</button>
                <h2>Toplam ${total}</h2>
            </div>
        </div>
    )
}