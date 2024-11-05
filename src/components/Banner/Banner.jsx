import Mainbanner from '../../assets/banner.jpg';

const Banner = () => {
  return (
    <div>
      {/* Banner Background */}
      <div className="w-full bg-purple-600 text-white p-10 rounded-b-lg pb-24">
        <div className="w-4/5 mx-auto text-center">
          <div className="">
            <h2 className="text-3xl md:text-5xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h2>
            <p className="w-5/6 mx-auto mt-4 text-gray-200">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-9/12 mx-auto relative -mt-20 border-2 border-gray-200 p-2 rounded-3xl shadow-lg">
        <img
          src={Mainbanner}
          alt="Featured gadget"
          className="w-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default Banner;
