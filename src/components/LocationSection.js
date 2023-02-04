import chicago from "../assets/img/chicago.jpg"
import restaurant from "../assets/img/restaurant.jpg"
const location = "Chicago"
const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae, deserunt architecto explicabo, accusantium blanditiis voluptatem recusandae magnam repellendus odit ducimus reprehenderit ipsum ratione unde atque ipsa delectus quod rem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae, deserunt architecto explicabo, accusantium blanditiis voluptatem recusandae magnam repellendus odit ducimus reprehenderit ipsum ratione unde atque ipsa delectus quod rem."

const LocationSection = () => {
    return (
        <section className="location-section">
            <div className="container location-container">
                <div className="location-details">
                    <div>
                        <h2 className="location-heading">Little Lemon</h2>
                        <h3 className="location-subheading">{location}</h3>
                    </div>
                    <p className="location-description">{description}</p>
                </div>
                <div className="location-imgs">
                    <img className="location-img loc1" src={chicago} />
                    <img className="location-img loc2" src={restaurant}/>
                </div>
            </div>
        </section>
    )
}

export default LocationSection