import TestimonialCard from "./TestimonialCard"

const testimonials = [
    {
        stars: 4,
        getImgSrc: () => require("../assets/img/yi.jpg"),
        name: "Luka Hang",
        review_text: "Yummy, yummy!",
    },
    {
        stars: 5,
        getImgSrc: () => require("../assets/img/yi.jpg"),
        name: "Thu Vuti",
        review_text: "The best food is here.",
    },
    {
        stars: 3,
        getImgSrc: () => require("../assets/img/yi.jpg"),
        name: "Juanito Gonzalez",
        review_text: "Only 3 stars because no taquitos",
    },
    {
        stars: 5,
        getImgSrc: () => require("../assets/img/yi.jpg"),
        name: "Clara Kira",
        review_text: "I love Little Lemon",
    },
]

const section_title = "Testimonials"
const TestimonialsSection = () => {
    
    return (
        <section className="testimonial-section">
            <div className="container container-testimonial">
                <h2 className="testimonial-heading">{section_title}</h2>
                <div className="testimonials-container">
                    {testimonials.map((testimonial)=>(
                        <TestimonialCard
                            stars={testimonial.stars}
                            imgSrc={testimonial.getImgSrc()}
                            name={testimonial.name}
                            review_text={'"' + testimonial.review_text + '"'}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection