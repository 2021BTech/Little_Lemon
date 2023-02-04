import food from "../assets/img/restauranfood.jpg"

const main_header = "Little Lemon"
const location = "Chicago"
const description = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
const cta_text = "Reserve a Table"
const LandingSection = () => {
    return (
        <section className="landing-section">
            <div className="container container-landing">
                <div className="landing-info">
                    <div>
                        <h1 className="main-header">{main_header}</h1>
                        <h3 className="location">{location}</h3>
                    </div>
                    <p className="description">{description}</p>
                    <button className="btn-cta">{cta_text}</button>
                </div>
                <img className="landing-img" src={food} alt="A photo of a chef"/>
            </div>
        </section>
    )
}

export default LandingSection