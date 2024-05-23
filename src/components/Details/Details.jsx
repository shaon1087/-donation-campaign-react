import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Cards from "./Cards/Cards";

const Details = () => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const allData = useLoaderData();

  useEffect(() => {
    // console.log("allData:", allData);

    if (Array.isArray(allData)) {
      const findDetail = allData.find((item) => item.id === id);
      if (findDetail) {
        setDetail(findDetail);
      } else {
        setDetail(null); // Handle case where detail is not found
      }
    } else {
      console.error("Expected an array, but got:", typeof allData);
      setDetail(null);
    }
    setLoading(false);
  }, [id, allData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!detail) {
    return <div>Detail not found</div>;
  }

  return (
    <div>
      <Cards detail={detail} />
    </div>
  );
};

export default Details;
