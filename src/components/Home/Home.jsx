import Banner from "../Banner/Banner";
import CardDetails from "../CardDetails/CardDetails";



const Home = () => {
    return (
        <div className="sm:pt-16">
            <h1>this is home</h1>
            <Banner></Banner>
            <CardDetails></CardDetails>
        </div>
    );
};

export default Home;