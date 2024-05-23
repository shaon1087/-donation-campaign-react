import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import CardDetails from "../../components/CardDetails/CardDetails";




const Home = () => {
    const allData = useLoaderData();
    console.log(allData);
    return (
      <div>
        <Banner></Banner>
        <div className="py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {allData.map((data) => (
            <CardDetails key={data.id} data={data}></CardDetails>
          ))}
        </div>
      </div>
    );
};

export default Home;