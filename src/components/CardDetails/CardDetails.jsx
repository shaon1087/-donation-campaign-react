import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const CardDetails = ({ data }) => {
  const {
    id,
    image,
    title,
    category,
    categoryColor,
    categoryBackgroundColor,
  } = data;

  return (
    <Link to={`/details/${id}`}>
      <div
        style={{ backgroundColor: categoryBackgroundColor }}
        className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img src={image} />
        </div>
        <div className="p-6">
          <h4
            style={{
              color: categoryColor,
              backgroundColor: categoryBackgroundColor,
            }}
            className="block font-sans text-base font-medium text-center w-24 py-2 rounded-md shadow"
          >
            {category}
          </h4>
          <p
            style={{ color: categoryColor }}
            className="mt-3 block font-sans text-xl font-semibold leading-relaxed"
          >
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};
CardDetails.propTypes = {
  data: PropTypes.object,
};

export default CardDetails;
