import Card from "./Card"

const title = "This weeks specials!"
const cta_txt = "Online Menu"

const specials = [
    {
        title: "Greek Salad",
        price: 12.99,
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
        getImageSrc: () => require("../assets/img/greek-salad.jpg"), 
    },
    {
        title: "Bruchetta",
        price: 5.99,
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        getImageSrc: () => require("../assets/img/bruchetta.jpg"), 
    },
    {
        title: "Lemon Dessert",
        price: 5.00,
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        getImageSrc: () => require("../assets/img/lemon-dessert.jpg"), 
    },
]
const SpecialsSection = () => {
    return (
        <section className="specials-section">
            <div className="container container-specials">
                <div className="specials-title-container">
                    <h2 className="specials-title">{title}</h2>
                    <button className="btn-cta specials-btn">{cta_txt}</button>
                </div>
                <div className="cards-container">
                    {specials.map(
                        (special) => (
                            <Card 
                                imageSrc={special.getImageSrc()}
                                title={special.title}
                                price={special.price}
                                description={special.description}
                    />))}
                </div>
            </div>       
        </section> 
    )
}
export default SpecialsSection