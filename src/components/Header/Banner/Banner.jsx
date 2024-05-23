
const Banner = () => {
    return (
      <div className="h-[70vh] bg-[url('https://i.ibb.co/MRTTznc/fc1f79e18cdc1a12320b9b10ec3e253d.jpg')] bg-cover bg-center">
        <div
          className="w-full h-full flex  justify-center items-center 
             bg-gray-50/70 backdrop-brightness-75"
        >
          <div className="text-center">
            <h1 className="text-[#0B0B0B] text-5xl font-bold py-8">
              I Grow By Helping People In Need
            </h1>
            <div>
              <input
                type="text"
                placeholder="Search here..."
                className="py-3 px-4 rounded-l-lg w-full max-w-sm"
              />

              <button className="btn btn-secondary rounded-l-none">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;