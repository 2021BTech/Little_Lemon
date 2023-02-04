import star from "../assets/img/star.png"

const TestimonialCard = ({stars, imgSrc, name, review_text}) => {
    const Rating = (stars) => {
        const rating = []
        for(let i=1; i<=stars;i++){
            rating.push(<img className="star" src={star} alt='' />)
        }
        return (
            <div className="rating">{rating}</div>
        )
    }
    return (
        <div className="testimonial">
            {Rating(stars)}
            <div className="testimonial-person">
                <img className="testimonial-img" alt="Person" src={imgSrc}/>
                <h3 className="testimonial-name">{name}</h3>
            </div>
            <p className="review-text">{review_text}</p>
        </div>
    )
}

export default TestimonialCard