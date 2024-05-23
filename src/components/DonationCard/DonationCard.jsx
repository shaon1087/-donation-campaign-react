import PropTypes from "prop-types";

const DonationCard = ({ data }) => {
 const {amount, image, title, category, categoryColor, categoryBackgroundColor } =
   data;
  return (
    <div>
      <div
        style={{ backgroundColor: categoryBackgroundColor }}
        className="card lg:card-side bg-base-100 shadow-xl"
      >
        <figure>
          <img className="h-full" src={image} alt="Album" />
        </figure>

        <div className="card-body">
          <h4
            style={{
              color: categoryColor,
              backgroundColor: categoryBackgroundColor,
            }}
            className="block font-sans text-base font-medium text-center w-24 rounded-md shadow"
          >
            {category}
          </h4>
          <p className="mt-3 block font-sans text-xl font-semibold leading-relaxed text-black">
            {title}
          </p>

          <h3
            style={{ color: categoryBackgroundColor }}
            className="text-lg font-semibold"
          >
            ${amount}
          </h3>

          <div className="card-actions">
            <button
              style={{ backgroundColor: categoryBackgroundColor }}
              className="py-2 px-3 rounded-md border-none text-lg font-medium text-white"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  data: PropTypes.object,
};

export default DonationCard;
