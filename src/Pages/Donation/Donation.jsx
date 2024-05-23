import { useEffect } from "react";
import { useState } from "react";
import DonationCard from "../../components/DonationCard/DonationCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [noFound, setNoFound] = useState(false);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (donationItems) {
      setDonations(donationItems);
    } else {
      setNoFound("No donation added!!");
    }
  }, []);

  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center text-2xl font-semibold">
          {noFound}
        </p>
      ) : (
        <div>
          <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {isShow
              ? donations.map((data) => (
                  <DonationCard key={data.id} data={data}></DonationCard>
                ))
              : donations
                  .slice(0, 4)
                  .map((data) => (
                    <DonationCard key={data.id} data={data}></DonationCard>
                  ))}
          </div>
          <div className="flex justify-center items-center py-3">
            {donations.length > 4 && (
              <button
                onClick={() => setIsShow(!isShow)}
                className="btn btn-secondary px-5"
              >
                {isShow ? "See Less" : "See More"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
