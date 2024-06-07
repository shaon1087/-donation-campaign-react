
import PropTypes from "prop-types";

const Cards = ({ detail }) => {
  const {  image, title, amount, categoryBackgroundColor, description } =
    detail;

  return (
    <div>
      <div className="h-[65vh] relative">
        <img className="w-full h-full" src={image} alt={title} />
        <div className="absolute bg-[#0000004D] w-full bottom-0 py-8 px-6">
          <button
           
            style={{ backgroundColor: categoryBackgroundColor }}
            className="py-4 px-3 rounded-lg border-none text-xl font-semibold text-white"
          >
            Donate ${amount}
          </button>
        </div>
        <div className="py-8">
          <h1 className="text-4xl font-bold py-8">{title}</h1>
          <p className="text-base font-normal">{description}</p>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  detail: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    categoryBackgroundColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cards;
