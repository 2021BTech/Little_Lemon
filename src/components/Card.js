
import delivery_icon from "../assets/icons/delivery.svg"

const Card = ({title, price, description, imageSrc}) => {
    return (
        <div className="card">
            <img className="card-img" src={imageSrc} alt={"A photo of " + title} />
            <div className="card-details">
                <div className="card-title-price-container">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-price">{'$' + price}</p>
                </div>
                <p className="card-description">{description}</p>
                <div>
                    <a className="delivery-link" href="#">Order a delivery</a>
                    <img className="delivery-icon" src={delivery_icon} alt="delivery icon"/>
                </div>        
            </div>
        </div>
    )
}

export default Card