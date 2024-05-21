import PropTypes from "prop-types";
const Card = ({card}) => {
    const { title, category, categoryBackgroundColor, categoryColor, image } =
      card;



    
    return (
      <div className="grid col-span-3">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{category}</h2>
            <p>{title}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

Card.propTypes= {
    card: PropTypes.object.isRequired
}

export default Card;