import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
      <div className="text-center items-center">
        <h2>OOPs</h2>
       <Link to="/">Go back to home</Link>
      </div>
    );
};

export default ErrorElement;