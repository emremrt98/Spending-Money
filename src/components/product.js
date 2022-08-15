
export default function Product() {
    return (
        <div className="product">
            <div>
                <div className="img">
                    <img src="https://img-bizimtoptan.mncdn.com/Content/Images/Thumbs/1545393.png"></img>
                </div>
                <div className="info">
                    <h3>Sakız</h3>
                    <p>$ 0.5</p>
                </div>
                <div className="btn">
                    <button className="sell" disabled>Sat</button>
                    <p>0</p>
                    <button className="buy">Satın Al</button>
                </div>
            </div>
        </div>
    );
}


