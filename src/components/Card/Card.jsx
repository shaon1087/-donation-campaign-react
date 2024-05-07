import PropTypes from "prop-types";
const Card = ({card}) => {
    const { title, category, categoryBackgroundColor, categoryColor, image } =
      card;



    
    return (
      <div>
        <div className="card w-96 glass">
          <figure>
            <img
              src={image}
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{category}</h2>
            <p>{title}</p>
          </div>
        </div>
      </div>
    );
};

Card.propTypes= {
    card: PropTypes.object.isRequired
}

export default Card;