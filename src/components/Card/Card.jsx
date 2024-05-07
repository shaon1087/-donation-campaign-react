import PropTypes from "prop-types";
const Card = ({card}) => {
    const { title, category, categoryBackgroundColor, categoryColor, image } =
      card;



    
    return (
      <h1></h1>
    );
};

Card.propTypes= {
    card: PropTypes.object.isRequired
}

export default Card;