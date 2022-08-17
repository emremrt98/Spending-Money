export default function Header({ totalPrice }) {

    return (
        <div className="header">
            <h1>Harcamak için $ {totalPrice} paranız var!</h1>
        </div>
    )
}